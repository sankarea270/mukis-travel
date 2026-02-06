import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from "framer-motion";
import { Plane } from "lucide-react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Obtener la velocidad del movimiento para la rotación dinámica
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);

  // Transformar la velocidad en rotación (eje contrario para mayor dinamismo)
  const rotateX = useTransform(velocityY, [-1000, 1000], [20, -20]);
  const rotateY = useTransform(velocityX, [-1000, 1000], [20, -20]); // Invertido: izquierda inclina el eje hacia el otro lado
  const dynamicRotate = useTransform(velocityX, [-1000, 1000], [30, -30]); // Invertido: rotación contraria al movimiento horizontal

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest("a") || 
        !!target.closest("button") || 
        window.getComputedStyle(target).cursor === "pointer"
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        style={{
          rotateZ: dynamicRotate,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.4 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <Plane 
          size={32} 
          fill="#10b981" 
          stroke="white"
          strokeWidth={1.5}
          className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          style={{ transform: "rotate(45deg)" }} // Rotación base para que el avión mire hacia adelante
        />
        
        {/* Estela de movimiento animada */}
        <div className="absolute top-1/2 right-full h-px w-8 bg-linear-to-r from-transparent to-[#10b981] -translate-y-1/2 opacity-40 blur-xs" />
        
        {/* Pulso de color verde */}
        <motion.div
          animate={{
            scale: [1, 1.5],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-[#10b981] rounded-full blur-md -z-10"
        />
      </motion.div>
    </motion.div>
  );
}
