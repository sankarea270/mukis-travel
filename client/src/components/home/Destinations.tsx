import { destinations } from "@/data/tours";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Destinations() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalizeImage = (src: string) => {
    if (src.startsWith("http")) return src;
    const clean = src.replace(baseUrl, "").replace(/^\//, "");
    return `${baseUrl}${clean}`;
  };
  
  return (
    <section ref={elementRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full mb-4"
            >
              <MapPin size={14} />
              Descubre el Perú
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading font-bold text-3xl md:text-5xl text-gray-900"
            >Destinos Populares</motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 mt-3 max-w-lg"
            >Los lugares más increíbles te esperan. Elige tu próxima aventura.</motion.p>
          </div>
          <Link href="/tours">
            <motion.span 
              className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer bg-primary/10 px-6 py-3 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos los destinos <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((dest, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
              }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -8 }}
            >
              <img 
                src={normalizeImage(dest.image)} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3">
                    📍 Perú
                  </span>
                  <h3 className="text-white font-heading font-bold text-2xl mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Descubre este increíble destino →
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-linear-to-r from-gray-50 to-gray-100 rounded-3xl"
        >
          {[
            { value: "50+", label: "Destinos" },
            { value: "200+", label: "Tours" },
            { value: "5000+", label: "Viajeros" },
            { value: "4.9", label: "Rating" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
