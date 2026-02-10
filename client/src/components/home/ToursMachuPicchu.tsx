import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Star, ArrowRight, Mountain, Sparkles } from "lucide-react";
import { tours } from "@/data/tours";
import { useLanguage } from "@/i18n";

export function ToursMachuPicchu() {
  const { t } = useLanguage();

  // Filtrar tours relacionados con Machu Picchu o Cusco
  const machuPicchuTours = tours
    .filter((tour) => 
      !tour.isPaquete && (
        tour.title.toLowerCase().includes("machu picchu") || 
        tour.title.toLowerCase().includes("cusco") ||
        tour.slug.includes("machu-picchu") ||
        (tour.location === "Cusco" && tour.category === "cultural")
      )
    )
    .slice(0, 4);

  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary font-bold tracking-wider uppercase text-sm px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Mountain size={16} />
            {t.machuPicchu.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
            {t.machuPicchu.title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.machuPicchu.subtitle}
          </p>
        </motion.div>

        {/* Featured Large Card + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Tour - Large */}
          {machuPicchuTours[0] && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:row-span-2"
            >
              <Link href={`/paquetes/${machuPicchuTours[0].slug}`}>
                <div className="group relative h-full min-h-125 rounded-3xl overflow-hidden cursor-pointer">
                  <img
                    src={machuPicchuTours[0].image}
                    alt={machuPicchuTours[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* VIP Badge */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="bg-linear-to-r from-amber-400 to-amber-600 text-gray-900 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                    >
                      <Sparkles size={14} />
                      {t.machuPicchu.vipBadge}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-flex items-center gap-2 text-white/80 text-sm mb-3">
                      <MapPin size={14} />
                      {machuPicchuTours[0].location}
                    </span>
                    
                    <h3 className="font-heading font-bold text-3xl text-white mb-3 group-hover:text-primary transition-colors">
                      {machuPicchuTours[0].title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {machuPicchuTours[0].shortDescription}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-white/80 text-sm flex items-center gap-2">
                          <Clock size={14} />
                          {machuPicchuTours[0].duration}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 text-sm">{t.common.from}</span>
                        <p className="font-heading font-bold text-3xl text-white">
                          ${machuPicchuTours[0].price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Smaller Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {machuPicchuTours.slice(1, 5).map((tour, idx) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/paquetes/${tour.slug}`}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary/90 text-white text-xs font-bold px-2.5 py-1 rounded-full capitalize">
                          {tour.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {tour.title}
                      </h4>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400 flex items-center gap-1">
                          <Clock size={12} />
                          {tour.duration}
                        </span>
                        <span className="font-bold text-primary">
                          ${tour.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/tours/sierra">
            <motion.span 
              className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.machuPicchu.exploreAll}
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
