import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown, Play, MapPin, Sparkles, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n";

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    name: "MACHU PICCHU",
    subtitleKey: "machuPicchu" as const,
    location: "CUSCO",
    link: "/paquetes/machu-picchu-full-day"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/montañafondo.jpeg`,
    name: "MONTAÑA ARCOIRIS",
    subtitleKey: "rainbow" as const,
    location: "CUSCO",
    link: "/paquetes/montana-de-colores",
    backgroundPosition: "center 35%"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/laguna-humantay.jpeg`,
    name: "LAGUNA HUMANTAY",
    subtitleKey: "humantay" as const,
    location: "CUSCO",
    link: "/paquetes/laguna-humantay"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/lago-titicaca.jpg`,
    name: "LAGO TITICACA",
    subtitleKey: "titicaca" as const,
    location: "PUNO",
    link: "/paquetes"
  },
  {
    image: `${import.meta.env.BASE_URL}images/categories/huacachina.jpg`,
    name: "HUACACHINA",
    subtitleKey: "huacachina" as const,
    location: "ICA",
    link: "/paquetes/ica-paracas-full-day"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const slides = slidesData.map(s => ({
    ...s,
    subtitle: (t.hero.slides as any)[s.subtitleKey]?.subtitle || s.name,
  }));

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]); // No desaparece del todo, solo se desvanece
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 0.25;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [current]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
    setProgress(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
      filter: "brightness(0.5) blur(20px)"
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: "brightness(0.7) blur(10px)",
      transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] as const }
    },
    exit: {
      opacity: 0,
      filter: "brightness(0) blur(40px)",
      transition: { duration: 1 }
    }
  };

  const imageFrameVariants = {
    enter: (direction: number) => ({
      clipPath: direction > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
      scale: 1.2,
    }),
    center: {
      clipPath: "inset(0 0% 0 0)",
      scale: 1,
      transition: { 
        clipPath: { duration: 1.4, ease: [0.77, 0, 0.175, 1] as const, delay: 0.2 },
        scale: { duration: 2, ease: [0.16, 1, 0.3, 1] as const }
      }
    },
    exit: (direction: number) => ({
      clipPath: direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] as const }
    })
  };

  const textVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.6 }
    },
    exit: { 
      x: 50, 
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div ref={heroRef} className="relative h-svh min-h-dvh w-full overflow-hidden bg-[#050505]">
      {/* Background Layers (The Blurred Atmosphere) */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full container-fluid px-4 sm:px-6 md:px-10 lg:px-12 pt-22 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12">
        <div className="flex-1 lg:flex-[0.95] text-center md:text-left z-30 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-2xl mx-auto md:mx-0"
            >
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-6">
                <span className="w-8 md:w-12 h-px bg-primary" />
                <span className="text-primary font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase">
                  {slides[current].location} • PERÚ
                </span>
              </div>
              
              <h1 className="text-[clamp(2.2rem,10vw,3.6rem)] md:text-[clamp(3.2rem,6.2vw,7rem)] font-heading font-black text-white leading-[0.9] md:leading-[0.85] mb-4 md:mb-6 drop-shadow-2xl uppercase tracking-tighter">
                {slides[current].name.split(' ').map((word, i) => (
                  <span key={i} className="block last:text-primary transition-colors duration-500">
                    {word}
                  </span>
                ))}
              </h1>
              
              <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-widest sm:tracking-[0.15em] md:tracking-[0.2em] max-w-lg border-l-2 md:border-l-4 border-primary pl-3 sm:pl-4 md:pl-8 mb-8 md:mb-10 uppercase mx-auto md:mx-0">
                {slides[current].subtitle}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-6 md:gap-10 pointer-events-auto">
                <Link href={slides[current].link}>
                  <button className="group relative px-5 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-5 bg-white text-black font-black rounded-none overflow-hidden transition-all hover:bg-primary hover:text-white">
                    <span className="relative z-10 uppercase tracking-tighter text-xs md:text-sm">{t.hero.bookExperience}</span>
                  </button>
                </Link>
                
                <motion.div 
                  className="hidden lg:flex flex-col items-center justify-center p-4 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 group/stars"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex gap-1.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          delay: 1 + (i * 0.1),
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        whileHover={{ 
                          y: -5,
                          scale: 1.2,
                          color: "#FFFFFF",
                        }}
                      >
                        <Star 
                          size={16} 
                          className="text-[#FFD700] fill-[#FFD700] drop-shadow-[0_0_12px_rgba(255,215,0,0.8)] transition-colors"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="relative overflow-hidden">
                    <span className="text-[10px] text-white/60 tracking-[0.25em] uppercase font-bold group-hover/stars:text-white transition-colors duration-300 block">
                      {t.hero.premiumExperience}
                    </span>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        delay: 2,
                        ease: "linear",
                        repeatDelay: 1
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: The Floating Cinematic Frame */}
        {/* Mobile: absolute full-screen background | Desktop: flex panel with 3D effects */}
        <div className="absolute inset-0 md:relative md:flex-[1.55] lg:flex-[1.85] md:aspect-video w-full md:max-w-4xl xl:max-w-5xl perspective-2000">
          {/* Mobile dark overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/60 md:hidden z-1" />
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`frame-${current}`}
              custom={direction}
              variants={imageFrameVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                x: mousePos.x * 2.5,
                y: mousePos.y * 2.5,
                rotateY: mousePos.x * 0.08,
                rotateX: -mousePos.y * 0.08,
              }}
              className="w-full h-full relative z-0 md:z-20 shadow-[0_80px_120px_-30px_rgba(0,0,0,0.9)] md:border md:border-white/10 group overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${slides[current].image})`,
                  backgroundPosition: (slides[current] as any).backgroundPosition || "center"
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Corner Accents - More prominent */}
              <div className="absolute top-6 lg:top-10 left-6 lg:left-10 w-12 h-12 lg:w-16 lg:h-16 border-t-4 border-l-4 border-primary" />
              <div className="absolute bottom-6 lg:bottom-10 right-6 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 border-b-4 border-r-4 border-primary" />
            </motion.div>
          </AnimatePresence>

          {/* Abstract Geometry Decor */}
          <div className="absolute -top-20 -right-20 w-80 h-80 border-2 border-primary/20 rounded-full z-10 animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 blur-[120px] rounded-full z-10" />
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 left-4 md:left-10 right-4 md:right-10 z-50 hidden sm:flex flex-row justify-center items-end">
        <div className="flex gap-4">
          <button 
            onClick={() => paginate(-1)}
            className="w-12 h-12 md:w-16 md:h-16 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full group"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" size={20} />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center text-white hover:bg-white hover:text-black transition-all rounded-full group shadow-2xl"
          >
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
        </div>
      </div>

      {/* Grid Decor */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>
    </div>
  );
}
