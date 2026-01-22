import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Percent, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";

export function Ofertas() {
  const offerTours = tours.filter((t) => t.isOffer);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-200/30 to-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-2 bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-6"
          >
            <Percent size={20} />
            OFERTAS ESPECIALES
          </motion.div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">
            ¡No te pierdas estas ofertas!
          </h2>
          <p className="mt-4 text-gray-600">
            Aprovecha nuestros descuentos exclusivos en los tours más populares. Ofertas por tiempo limitado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/paquetes/${tour.slug}`}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-red-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Discount Badge */}
                    {tour.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <motion.div
                          animate={{ rotate: [-5, 5, -5] }}
                          transition={{ repeat: Infinity, duration: 0.5 }}
                          className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg"
                        >
                          -{Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}%
                        </motion.div>
                      </div>
                    )}

                    {/* Location */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {tour.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tour.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock size={16} className="text-primary" />
                      {tour.duration}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading font-bold text-2xl text-red-500">
                            ${tour.price}
                          </span>
                          {tour.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                              ${tour.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">por persona</span>
                      </div>
                      <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl group-hover:bg-red-600 transition-colors flex items-center gap-2">
                        Reservar <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/paquetes">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all cursor-pointer">
              Ver todos los paquetes <ArrowRight size={20} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
