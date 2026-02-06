import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollRevealSection({ children, className = "" }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.8 }
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
