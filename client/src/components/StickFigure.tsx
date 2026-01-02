import { motion } from "framer-motion";

export function StickFigure({ className }: { className?: string }) {
  return (
    <motion.div 
      className={className}
      initial="idle"
      whileHover="hover"
    >
      <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <motion.circle 
          cx="100" cy="50" r="30" 
          variants={{
            idle: { pathLength: 1, rotate: 0 },
            hover: { rotate: [0, -5, 5, 0], transition: { repeat: Infinity, duration: 1 } }
          }}
        />
        {/* Smile */}
        <motion.path 
          d="M90 55 Q100 65 110 55" 
          variants={{
            idle: { d: "M90 55 Q100 65 110 55" },
            hover: { d: "M90 55 Q100 35 110 55" } /* Smile flips on hover */
          }}
        />
        {/* Eyes */}
        <circle cx="90" cy="45" r="2" fill="currentColor" />
        <circle cx="110" cy="45" r="2" fill="currentColor" />
        
        {/* Body */}
        <path d="M100 80 L100 180" />
        
        {/* Arms */}
        <motion.path 
          d="M100 100 L60 140" 
          variants={{
            idle: { d: "M100 100 L60 140" },
            hover: { d: "M100 100 L50 90", transition: { yoyo: Infinity } } /* Waving */
          }}
        />
        <path d="M100 100 L140 140" />
        
        {/* Legs */}
        <path d="M100 180 L70 250" />
        <path d="M100 180 L130 250" />
      </svg>
      
      <motion.div 
        className="text-center font-hand text-xl mt-2 font-bold text-blue-800"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ME
      </motion.div>
    </motion.div>
  );
}
