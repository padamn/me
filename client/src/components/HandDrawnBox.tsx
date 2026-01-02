import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HandDrawnBoxProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  rotate?: number;
}

export function HandDrawnBox({ 
  children, 
  className, 
  variant = "primary",
  rotate = 0 
}: HandDrawnBoxProps) {
  return (
    <motion.div
      initial={{ rotate: rotate }}
      whileHover={{ scale: 1.01, rotate: rotate + (Math.random() * 1 - 0.5) }}
      className={cn(
        "relative p-6 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]",
        "border-wobbly transition-shadow duration-300",
        variant === "secondary" && "border-wobbly-2",
        className
      )}
    >
      {/* Tape effect on corners randomly */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-100/80 rotate-2 shadow-sm border border-white/50 backdrop-blur-[1px]" />
      
      {children}
    </motion.div>
  );
}
