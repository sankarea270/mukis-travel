import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Percent, ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import { useLanguage } from "@/i18n";

export function Ofertas() {
  const { t } = useLanguage();
  const offerTours = tours.filter((tour) => tour.isOffer && !tour.isPaquete);

  // Ajustar la lógica para eliminar completamente el texto "desde $0" sin afectar otras secciones
  const filteredOffers = offerTours.map((offer) => {
    if (offer.slug === "machu-picchu-full-day" && offer.price === 0) {
      return {
        ...offer,
        price: null, // Eliminar el precio para este tour
      };
    }
    return offer;
  });

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
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">
            {t.offers.title}
          </h2>
          <p className="mt-4 text-gray-600">
            {t.offers.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-red-500"
            >
              <Link href={`/tours/${tour.slug}`} className="block">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    {tour.price !== null && tour.price > 0 && (
                      <span className="bg-white text-gray-800 font-bold px-3 py-1 rounded-full shadow">
                        {`${t.topTours.from} $${tour.price}`}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900">
                    {tour.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {tour.shortDescription}
                  </p>
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
              {t.offers.viewAll} <ArrowRight size={20} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
