import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface DoodleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const DoodleButton = forwardRef<HTMLButtonElement, DoodleButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-6 py-2 font-hand text-lg font-bold transition-all",
          "border-2 border-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
          variant === "primary" ? "bg-black text-white" : "bg-white text-black",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
DoodleButton.displayName = "DoodleButton";
