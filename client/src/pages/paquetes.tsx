import { useMemo } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours } from "@/data/tours";

export default function Paquetes() {
  const { t } = useLanguage();

  // Solo mostrar paquetes (tours con isPaquete: true)
  const paquetes = useMemo(() => {
    return tours.filter(tour => tour.isPaquete === true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1920" 
            alt="Paquetes Exclusivos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <nav className="flex justify-center items-center gap-2 text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{t.packagesPage.title}</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.packagesPage.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.packagesPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Paquetes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="popLayout">
            {paquetes.map((paquete, index) => (
              <motion.div 
                key={paquete.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                      <img 
                        src={paquete.image} 
                        alt={paquete.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                          Más Vendido
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-blue-600 mb-4">
                        <Calendar size={20} />
                        <span className="font-semibold">{paquete.duration}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
                        {paquete.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {paquete.shortDescription}
                      </p>

                      {/* Included Items */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {paquete.included.slice(0, 4).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                        <div>
                          <span className="text-sm text-gray-500 block">Desde</span>
                          <div className="flex items-baseline gap-2">
                            <span className="font-heading font-bold text-3xl md:text-4xl text-primary">
                              ${paquete.price}
                            </span>
                            {paquete.originalPrice && (
                              <span className="text-lg text-gray-400 line-through">
                                ${paquete.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <Link href={`/paquetes/${paquete.slug}`}>
                          <span className="group inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all cursor-pointer">
                            Ver Detalles
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {paquetes.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No hay paquetes disponibles</h3>
              <p className="text-gray-500">Pronto agregaremos nuevos paquetes exclusivos.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              {t.packagesPage.customTitle}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t.packagesPage.customDesc}
            </p>
            <a 
              href="https://wa.me/51930476116?text=Hola,%20me%20gustaría%20un%20paquete%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.packagesPage.customBtn}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
