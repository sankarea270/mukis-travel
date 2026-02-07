import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";

const destinosBase = [
  {
    key: "cusco" as const,
    name: "Cusco",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    tours: 25,
    href: "/tours/sierra"
  },
  {
    key: "lima" as const,
    name: "Lima",
    image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&q=80&w=800",
    tours: 12,
    href: "/tours/costa"
  },
  {
    key: "arequipa" as const,
    name: "Arequipa",
    image: "/images/categories/arequipa.jpg",
    tours: 10,
    href: "/tours/sierra"
  },
  {
    key: "ica" as const,
    name: "Ica",
    image: "/images/categories/ica.jpg",
    tours: 8,
    href: "/tours/costa"
  },
  {
    key: "puno" as const,
    name: "Puno",
    image: "/images/categories/lago-titicaca.jpg",
    tours: 10,
    href: "/tours/sierra"
  },
  {
    key: "puertoMaldonado" as const,
    name: "Puerto Maldonado",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800",
    tours: 6,
    href: "/tours/selva"
  }
];

export function DestinosGrid() {
  const { t } = useLanguage();

  const destinosPopulares = destinosBase.map((d) => ({
    ...d,
    description: (t.destinations.descriptions as Record<string, string>)[d.key] || d.name,
  }));

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 right-0 w-96 h-96 text-primary" viewBox="0 0 200 200">
          <defs>
            <pattern id="inca-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#inca-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin size={14} />
            {t.destinations.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900">
            {t.destinations.title}
          </h2>
          <p className="mt-4 text-gray-600">
            {t.destinations.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinosPopulares.map((destino, idx) => (
            <motion.div
              key={destino.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={destino.href}>
                <div className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                  {/* Image */}
                  <img
                    src={destino.image}
                    alt={destino.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Decorative SVG Corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
                  <div className="absolute bottom-20 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
                  <div className="absolute bottom-20 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
                  
                  {/* Tours Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {destino.tours}+ {t.destinations.tours}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-bold text-2xl text-white mb-1 group-hover:text-primary transition-colors">
                      {destino.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">{destino.description}</p>
                    
                    <span className="inline-flex items-center gap-2 text-white/80 text-sm group-hover:text-primary transition-colors">
                      {t.destinations.explore}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/tours">
            <motion.span 
              className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.destinations.viewAll}
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
