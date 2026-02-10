import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";
import { tours } from "@/data/tours";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, ChevronRight, Compass, Mountain, Zap } from "lucide-react";

export default function CategoriaAventura() {
  const { t } = useLanguage();
  const aventuraTours = tours.filter((tour) => (tour.category === "aventura" || tour.category === "trekking") && !tour.isPaquete);

  const categoryInfo = {
    title: t.categoryPage.aventura.title,
    subtitle: t.categoryPage.aventura.heroSubtitle,
    description: t.categoryPage.aventura.subtitle,
    icon: Compass,
    color: "from-red-500 to-rose-600",
    bgImage: "https://images.unsplash.com/photo-1580968014526-b1f0e8a49bae?auto=format&fit=crop&q=80&w=1920",
    highlights: [
      { icon: Mountain, title: t.categoryPage.aventura.highlight1Title, description: t.categoryPage.aventura.highlight1Desc },
      { icon: Zap, title: t.categoryPage.aventura.highlight2Title, description: t.categoryPage.aventura.highlight2Desc },
      { icon: Compass, title: t.categoryPage.aventura.highlight3Title, description: t.categoryPage.aventura.highlight3Desc },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={categoryInfo.bgImage}
            alt={categoryInfo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-rose-900/40 to-black/70" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryInfo.color} flex items-center justify-center shadow-xl`}>
                <categoryInfo.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-red-300 font-bold text-lg tracking-wide uppercase">{t.categoryPage.categoryLabel}</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
              {categoryInfo.title}
            </h1>
            <p className="text-red-200 text-xl mb-6">{categoryInfo.subtitle}</p>
            
            <p className="text-white/90 text-lg max-w-2xl mb-8 leading-relaxed">
              {categoryInfo.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {categoryInfo.highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20"
                >
                  <item.icon className="w-5 h-5 text-red-300" />
                  <span className="text-white font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
              {aventuraTours.length} {t.categoryPage.aventura.title} {t.categoryPage.available}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.categoryPage.aventura.gridSubtitle}
            </p>
          </motion.div>

          {aventuraTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aventuraTours.map((tour, idx) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link href={`/paquetes/${tour.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={tour.image} 
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {t.categoryPage.aventura.badge}
                        </div>
                        {tour.difficulty && (
                          <div className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full ${
                            tour.difficulty === 'difícil' ? 'bg-orange-500' : 
                            tour.difficulty === 'moderado' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}>
                            {(tour.difficulty === 'difícil' ? t.common.hard : 
                              tour.difficulty === 'moderado' ? t.common.moderate : t.common.easy).toUpperCase()}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <MapPin size={14} />
                          <span>{tour.location}</span>
                          <span className="mx-1">•</span>
                          <Clock size={14} />
                          <span>{tour.duration}</span>
                        </div>
                        
                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-red-500 transition-colors">
                          {tour.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.shortDescription}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            {tour.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">USD ${tour.originalPrice}</span>
                            )}
                            <span className="text-2xl font-bold text-primary ml-2">USD ${tour.price}</span>
                          </div>
                          <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            {t.common.viewMore} <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-red-50 rounded-3xl">
              <Compass className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{t.categoryPage.aventura.emptyTitle}</h3>
              <p className="text-gray-600 mb-6">{t.categoryPage.aventura.emptySubtitle}</p>
              <Link href="/paquetes">
                <span className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer">
                  {t.categoryPage.viewAllPackages}
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-r ${categoryInfo.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              {t.categoryPage.aventura.ctaTitle}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t.categoryPage.aventura.ctaSubtitle}
            </p>
            <a 
              href="https://wa.me/51930476116?text=Hola,%20me%20interesan%20los%20tours%20de%20aventura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              {t.categoryPage.consultNow}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
