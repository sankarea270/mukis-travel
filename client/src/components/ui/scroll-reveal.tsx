import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "slideUp" | "slideLeft" | "slideRight" | "fadeIn" | "scaleIn";
}

const variants: Record<string, Variants> = {
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  variant = "slideUp",
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        ...variants[variant],
        visible: {
          ...variants[variant].visible,
          transition: {
            ...(variants[variant].visible as any).transition,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
