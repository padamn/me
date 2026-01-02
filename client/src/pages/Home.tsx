import { useEntries } from "@/hooks/use-entries";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StickFigure } from "@/components/StickFigure";
import { HandDrawnBox } from "@/components/HandDrawnBox";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { data: entries, isLoading, error } = useEntries();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-notebook flex items-center justify-center">
        <div className="animate-bounce font-hand text-2xl">Searching for my diary...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-notebook flex items-center justify-center p-4">
        <HandDrawnBox className="max-w-md text-center">
          <h2 className="text-3xl text-[hsl(var(--pen-red))] mb-4">MOM HID IT!</h2>
          <p className="text-lg">Can't find the diary entries right now. Try again later.</p>
        </HandDrawnBox>
      </div>
    );
  }

  // Split content for desktop layout
  const sortedEntries = entries?.sort((a, b) => b.id - a.id) || [];

  return (
    <div className="min-h-screen bg-notebook pb-20 relative overflow-hidden">
      {/* Decorative scribbles */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" stroke="currentColor" fill="none" strokeWidth="2">
          <path d="M10,50 Q30,10 50,50 T90,50" />
          <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Index Section */}
          <div className="md:col-span-8 space-y-8">
            <header className="mb-12 relative">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center md:text-left transform -rotate-2">
                JOURNAL INDEX
              </h1>
              <div className="absolute -bottom-4 left-20 w-48 h-2 bg-[hsl(var(--pen-blue))] opacity-50 -rotate-1 rounded-full" />
              <p className="text-xl md:text-2xl mt-6 text-gray-600 font-bold ml-4">
                (Do NOT read if you are my brother!!)
              </p>
            </header>

            <div className="space-y-6 pl-4 md:pl-8 border-l-4 border-[hsl(var(--pen-red))] border-dashed ml-4 md:ml-0">
              {sortedEntries.length === 0 ? (
                <div className="text-2xl text-gray-400 font-bold rotate-1">
                  Nothing written yet... BORING!
                </div>
              ) : (
                sortedEntries.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/entry/${entry.slug}`} className="block group">
                      <div className={cn(
                        "flex items-baseline gap-4 hover:pl-2 transition-all duration-300",
                        entry.isCrossedOut && "opacity-60"
                      )}>
                        <span className="text-xl font-bold text-[hsl(var(--pen-red))] w-8">
                          {index + 1}.
                        </span>
                        
                        <div className="relative">
                          <h2 className={cn(
                            "text-2xl md:text-3xl font-bold group-hover:text-[hsl(var(--pen-blue))]",
                            entry.isCrossedOut && "line-through decoration-4 decoration-black"
                          )}>
                            {entry.title}
                          </h2>
                          
                          {/* Hover scribble underline */}
                          <div className="h-1 w-0 group-hover:w-full bg-[hsl(var(--pen-blue))] transition-all duration-300 mt-1 rounded-full" />
                          
                          {/* "New" sticker for latest entry */}
                          {index === 0 && !entry.isCrossedOut && (
                            <motion.div 
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="absolute -right-16 -top-4 bg-yellow-300 px-2 py-1 text-xs font-bold border border-black shadow-sm transform rotate-12"
                            >
                              NEW!
                            </motion.div>
                          )}
                        </div>

                        <span className="text-lg text-gray-500 hidden sm:inline-block ml-auto">
                          {entry.date}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* "ME" Sidebar */}
          <aside className="md:col-span-4 relative mt-12 md:mt-0">
            <HandDrawnBox className="sticky top-12" rotate={3}>
              <div className="absolute -left-8 top-10 transform -rotate-12 hidden md:block">
                <ArrowRight className="w-12 h-12 text-[hsl(var(--pen-blue))]" strokeWidth={3} />
                <span className="font-bold text-[hsl(var(--pen-blue))] text-lg block -mt-2">THIS IS</span>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <StickFigure className="w-48 h-64 text-black" />
                
                <div className="mt-6 w-full space-y-3">
                  <div className="flex items-center gap-2 text-lg">
                    <Star className="w-5 h-5 fill-yellow-300 text-black" />
                    <span>Lvl 12 Student</span>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div className="w-5 h-5 border-2 border-black rounded-full bg-red-500" />
                    <span>Hates Homework</span>
                  </div>
                </div>
              </div>
            </HandDrawnBox>
            
            {/* Random doodle below sidebar */}
            <div className="mt-12 text-center opacity-60">
              <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto transform rotate-12">
                <path d="M10,50 C30,90 70,10 90,50" stroke="black" strokeWidth="2" fill="none" />
                <path d="M10,60 C30,100 70,20 90,60" stroke="black" strokeWidth="2" fill="none" />
              </svg>
              <p className="text-sm">Boredom Doodle #42</p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
