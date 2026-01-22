import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, Play } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    name: "Machu Picchu",
    subtitle: "La Maravilla del Mundo",
    location: "Cusco",
    link: "/paquetes/machu-picchu-full-day"
  },
  {
    image: "/images/categories/montaña-de-colores-1.jpeg",
    name: "Montaña de Colores",
    subtitle: "Vinicunca, la Montaña Arcoíris",
    location: "Cusco",
    link: "/paquetes/montana-de-colores"
  },
  {
    image: "/images/categories/laguna-humantay.jpeg",
    name: "Laguna Humantay",
    subtitle: "Aguas Turquesas en los Andes",
    location: "Cusco",
    link: "/paquetes/laguna-humantay"
  },
  {
    image: "/images/categories/lago-titicaca.jpg",
    name: "Lago Titicaca",
    subtitle: "El Lago Navegable más Alto del Mundo",
    location: "Puno",
    link: "/paquetes"
  },
  {
    image: "/images/categories/huacachina.jpg",
    name: "Huacachina",
    subtitle: "El Oasis del Desierto",
    location: "Ica",
    link: "/paquetes/ica-paracas-full-day"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Slides (allow enter+exit to overlap for smooth crossfade) */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animated Particles/Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="z-10 max-w-5xl"
        >
          {/* Location Badge */}
          <AnimatePresence mode="wait">
            <motion.span 
              key={`location-${current}`}
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {slides[current].location}, Perú
            </motion.span>
          </AnimatePresence>
          
          {/* Main Title */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={`title-${current}`}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
            >
              {slides[current].name}
            </motion.h1>
          </AnimatePresence>
          
          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 font-light"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={slides[current].link}>
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all uppercase tracking-wider shadow-xl cursor-pointer"
              >
                <Play size={20} fill="currentColor" />
                Explorar Tour
              </motion.span>
            </Link>
            <Link href="/paquetes">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 h-14 px-10 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold rounded-full transition-all uppercase tracking-wider cursor-pointer"
              >
                Ver Todos los Paquetes
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide Navigation - Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`group flex items-center gap-3 transition-all duration-300 ${
                current === idx ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <span className={`text-xs font-medium text-white text-right transition-all ${
                current === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}>
                {slide.name}
              </span>
              <span className={`w-12 h-1 rounded-full transition-all ${
                current === idx ? "bg-primary" : "bg-white/40"
              }`} />
            </button>
          ))}
        </div>

        {/* Slide Indicators - Bottom (Mobile) */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 lg:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
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
