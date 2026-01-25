import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown, Play, MapPin, Sparkles } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    name: "Machu Picchu",
    subtitle: "La Maravilla del Mundo",
    location: "Cusco",
    link: "/paquetes/machu-picchu-full-day"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/montana-de-colores.jpg`,
    name: "Montaña de Colores",
    subtitle: "Vinicunca, la Montaña Arcoíris",
    location: "Cusco",
    link: "/paquetes/montana-de-colores"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/laguna-humantay.jpeg`,
    name: "Laguna Humantay",
    subtitle: "Aguas Turquesas en los Andes",
    location: "Cusco",
    link: "/paquetes/laguna-humantay"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/lago-titicaca.jpg`,
    name: "Lago Titicaca",
    subtitle: "El Lago Navegable más Alto del Mundo",
    location: "Puno",
    link: "/paquetes"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/huacachina.jpg`,
    name: "Huacachina",
    subtitle: "El Oasis del Desierto",
    location: "Ica",
    link: "/paquetes/ica-paracas-full-day"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 700], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div ref={heroRef} className="relative h-screen min-h-200 w-full overflow-hidden bg-black">
      {/* Background with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, scale }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
              style={{ 
                backgroundImage: `url(${slides[current].image})`
              }}
            />
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/80" />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating orbs with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-4 h-4 bg-primary/60 rounded-full shadow-[0_0_40px_10px_hsl(var(--primary)/0.3)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, 25, 0],
            x: [0, -15, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[20%] w-6 h-6 bg-white/30 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.2)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-[25%] w-3 h-3 bg-primary/40 rounded-full shadow-[0_0_25px_5px_hsl(var(--primary)/0.2)]"
        />
        
        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[30%] left-0 w-1/4 h-px bg-linear-to-r from-transparent via-white to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-[70%] right-0 w-1/3 h-px bg-linear-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Main Content with Scroll Animation */}
      <motion.div 
        className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-16"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10 max-w-5xl"
        >
          {/* Animated Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              <Sparkles size={20} />
            </motion.div>
            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-light">
              Descubre el Perú Auténtico
            </span>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>

          {/* Location Badge with Animation */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`location-${current}`}
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-2.5 px-7 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-medium tracking-wider mb-8 shadow-2xl"
            >
              <MapPin size={16} className="text-primary" />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              {slides[current].location}, Perú
            </motion.div>
          </AnimatePresence>
          
          {/* Main Title with Split Animation */}
          <div className="overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={`title-${current}`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                className="font-heading font-black text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tight"
                style={{ 
                  textShadow: "0 4px 60px rgba(0,0,0,0.5), 0 0 120px hsl(var(--primary) / 0.2)"
                }}
              >
                <span className="block">{slides[current].name}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          
          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-6"
          />
          
          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={`subtitle-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-12 text-gray-200/90 font-light leading-relaxed"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons with Enhanced Styling */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href={slides[current].link}>
              <motion.span
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px hsl(var(--primary) / 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 h-16 px-12 bg-linear-to-r from-primary to-accent text-white font-bold rounded-full transition-all uppercase tracking-wider shadow-xl cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 bg-linear-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Play size={22} fill="currentColor" className="relative z-10" />
                <span className="relative z-10">Explorar Tour</span>
              </motion.span>
            </Link>
            <Link href="/paquetes">
              <motion.span
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 h-16 px-12 bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 text-white font-bold rounded-full transition-all uppercase tracking-wider cursor-pointer"
              >
                Ver Todos los Paquetes
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide Navigation - Side (Desktop) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-20">
          {slides.map((slide, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              whileHover={{ x: -5 }}
              className={`group flex items-center gap-4 transition-all duration-500 ${
                current === idx ? "opacity-100" : "opacity-40 hover:opacity-80"
              }`}
            >
              <span className={`text-xs font-semibold text-white text-right transition-all duration-300 ${
                current === idx 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              }`}>
                {slide.name}
              </span>
              <span className={`relative w-14 h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                current === idx ? "bg-primary" : "bg-white/30"
              }`}>
                {current === idx && (
                  <motion.span
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-linear-to-r from-primary to-accent"
                  />
                )}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Slide Indicators - Bottom (Mobile) */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-3 lg:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 transition-all duration-500 rounded-full ${
                current === idx 
                  ? "w-12 bg-linear-to-r from-primary to-accent" 
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ opacity }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">
            Desliza para explorar
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
