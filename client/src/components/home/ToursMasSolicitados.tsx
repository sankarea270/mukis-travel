import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Star, ArrowRight, Award, Users } from "lucide-react";
import { tours } from "@/data/tours";
import { useLanguage } from "@/i18n";

export function ToursMasSolicitados() {
  const { t } = useLanguage();
  // Obtener tours más populares (featured o con reviews)
  const popularTours = tours
    .filter((tour) => !tour.isPaquete && (tour.featured || (tour.reviews && tour.reviews.length > 0)))
    .slice(0, 6);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award size={16} />
            {t.topTours.badge}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900">
            {t.topTours.title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.topTours.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/paquetes/${tour.slug}`}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-primary/20 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      {tour.featured && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-linear-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
                        >
                          <Award size={12} />
                          {t.topTours.bestChoice}
                        </motion.div>
                      )}
                      {tour.category && (
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full capitalize">
                          {tour.category}
                        </span>
                      )}
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {tour.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 grow flex flex-col">
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {tour.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        5.0 ({tour.reviews?.length || 8} {t.topTours.reviews})
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 grow">
                      {tour.shortDescription}
                    </p>

                    {/* Details Row */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" />
                        {tour.duration}
                      </span>
                      {tour.maxGroup && (
                        <span className="flex items-center gap-1.5">
                          <Users size={14} className="text-primary" />
                          {t.topTours.maxGroup.replace('{n}', String(tour.maxGroup))}
                        </span>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-xs text-gray-500">{t.common.from}</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading font-bold text-2xl text-primary">
                            ${tour.price}
                          </span>
                          <span className="text-sm text-gray-500">USD</span>
                        </div>
                      </div>
                      <span className="bg-primary text-white font-bold px-5 py-2.5 rounded-xl group-hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm">
                        {t.topTours.viewDetails}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Ver más */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/tours">
            <motion.span 
              className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold text-lg px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.topTours.viewAll}
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
