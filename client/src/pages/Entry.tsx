import { useEntry } from "@/hooks/use-entries";
import { useRoute, Link } from "wouter";
import { HandDrawnBox } from "@/components/HandDrawnBox";
import { DoodleButton } from "@/components/DoodleButton";
import { ArrowLeft, Ban } from "lucide-react";
import { motion } from "framer-motion";

export default function Entry() {
  const [match, params] = useRoute("/entry/:slug");
  const slug = params?.slug || "";
  const { data: entry, isLoading } = useEntry(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-notebook flex items-center justify-center">
        <div className="text-2xl animate-pulse font-hand">Unfolding the paper...</div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="min-h-screen bg-notebook flex flex-col items-center justify-center p-4 gap-6">
        <Ban className="w-24 h-24 text-[hsl(var(--pen-red))]" />
        <h1 className="text-4xl font-bold">Page Torn Out!</h1>
        <p className="text-xl">This entry doesn't exist.</p>
        <Link href="/">
          <DoodleButton>Go Back</DoodleButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-notebook pb-20">
      {/* Top Navigation */}
      <div className="sticky top-0 z-10 bg-[hsl(var(--paper))]/90 backdrop-blur-sm border-b-2 border-dashed border-gray-300 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/">
            <button className="flex items-center gap-2 text-xl font-bold hover:text-[hsl(var(--pen-blue))] transition-colors group">
              <motion.div 
                whileHover={{ x: -5 }}
                className="bg-black text-white rounded-full p-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </motion.div>
              <span className="decoration-wavy group-hover:underline">Back to Index</span>
            </button>
          </Link>
          <div className="text-lg font-bold text-gray-500">{entry.date}</div>
        </div>
      </div>

      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-8 mt-12"
      >
        <HandDrawnBox className="min-h-[600px] bg-white relative overflow-visible" rotate={-1}>
          
          {/* Header */}
          <div className="border-b-4 border-black pb-6 mb-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {entry.title}
            </h1>
            
            {/* Doodle decoration near title */}
            <div className="absolute -right-4 top-0 opacity-20 transform rotate-12">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="50" cy="50" r="40" />
                <path d="M30 40 L40 50 L30 60" />
                <path d="M70 40 L60 50 L70 60" />
              </svg>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-xl max-w-none font-hand leading-loose text-gray-900">
            {/* 
              This split simulates writing on lines. 
              Ideally we'd use a CSS grid background on the text container, 
              but for variable length text, standard line-height matching 
              background-size is the trick.
            */}
            <div 
              className="space-y-8"
              style={{ 
                backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, #a1c6e7 40px)",
                backgroundAttachment: "local",
                lineHeight: "40px",
                paddingTop: "6px" // Adjust alignment to sit on lines
              }}
            >
              {entry.content.split('\n').map((paragraph, i) => (
                <p key={i} className="m-0 min-h-[40px]">
                  {paragraph || <br/>}
                </p>
              ))}
            </div>
          </div>

          {/* Doodle URL if present */}
          {entry.doodleUrl && (
            <div className="mt-12 flex justify-center">
              <div className="relative inline-block transform rotate-2">
                <img 
                  src={entry.doodleUrl} 
                  alt="A messy doodle" 
                  className="max-w-full md:max-w-md border-2 border-black p-2 bg-white shadow-lg"
                  style={{ borderRadius: "2px" }}
                />
                <div className="absolute -bottom-6 right-0 font-bold text-gray-500 text-sm">
                  Fig. A (My masterpiece)
                </div>
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-1 shadow-sm border border-white/50" />
              </div>
            </div>
          )}

          {/* Footer Scribble */}
          <div className="mt-16 flex justify-center opacity-30">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none" stroke="black" strokeWidth="2">
              <path d="M0,10 Q20,0 40,10 T80,10 T120,10 T160,10 T200,10" />
            </svg>
          </div>

        </HandDrawnBox>
      </motion.article>
      
      {/* Navigation Buttons for Next/Prev (mocked visually) */}
      <div className="max-w-4xl mx-auto px-8 mt-12 flex justify-between">
        <Link href="/">
           <span className="text-gray-400 cursor-pointer hover:text-black font-bold text-xl transition-colors">
             &larr; Previous Page
           </span>
        </Link>
        <Link href="/">
           <span className="text-gray-400 cursor-pointer hover:text-black font-bold text-xl transition-colors">
             Next Page &rarr;
           </span>
        </Link>
      </div>
    </div>
  );
}
