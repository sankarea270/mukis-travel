import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Percent, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import { useLanguage } from "@/i18n";
import { DynamicTitle } from "@/components/ui/DynamicTitle";

export function Ofertas() {
  const { t } = useLanguage();
  const offerTours = tours.filter((tour) => tour.isOffer && !tour.isPaquete);

  return (
    <section className="py-20 bg-linear-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-red-200/30 to-orange-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-red-200/30 to-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            {t.offers.badge}
          </motion.div>
          
          <DynamicTitle
            text={t.offers.title}
            highlight="ofertas!"
            className="text-3xl md:text-5xl text-gray-900"
          />
          <p className="mt-3 text-gray-600 text-lg">
            {t.offers.subtitle}
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
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-red-500"
            >
              <Link href={`/paquetes/${tour.slug}`} className="block">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {t.tourDetail.offer}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900">
                    {tour.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {tour.shortDescription}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    <span>Más detalles</span>
                    <ArrowRight size={16} />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>{tour.location}, Perú</span>
                    </div>
                    {tour.tourType && (
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {tour.tourType}
                        </span>
                      </div>
                    )}
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
          {/* Enlace "Ver todos los paquetes" eliminado por solicitud */}
        </motion.div>
      </div>
    </section>
  );
}
