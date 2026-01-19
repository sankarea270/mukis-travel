import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    name: "Machu Picchu",
    location: "Cusco"
  },
  {
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1600",
    name: "Montaña de Colores",
    location: "Cusco"
  },
  {
    image: "https://images.unsplash.com/photo-1588612502843-03b1456209c2?auto=format&fit=crop&q=80&w=1600",
    name: "Huacachina",
    location: "Ica"
  },
  {
    image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?auto=format&fit=crop&q=80&w=1600",
    name: "Lago Titicaca",
    location: "Puno"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.span 
            key={`location-${current}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/90 text-xs font-bold uppercase tracking-widest mb-4"
          >
            {slides[current].location}
          </motion.span>
          
          <motion.h1 
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-2xl"
          >
            {slides[current].name}
          </motion.h1>
          
          <p className="font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-100 drop-shadow-lg font-medium">
            Descubre la magia de Perú con experiencias diseñadas a tu medida.
          </p>

          <button className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:scale-105 uppercase tracking-wider shadow-xl">
            Explorar Tours
          </button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 transition-all rounded-full ${
                current === idx ? "w-10 bg-primary" : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
