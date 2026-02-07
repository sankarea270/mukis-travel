import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { categories, tours } from "@/data/tours";
import { useLanguage } from "@/i18n";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Tours() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
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
              <span className="text-white font-medium">{t.toursPage.title}</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.toursPage.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.toursPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category, idx) => {
              const categoryTours = tours.filter(tour => tour.category === category.slug);
              const bgColors = [
                "from-emerald-500 to-teal-600",
                "from-orange-500 to-red-600",
                "from-green-500 to-emerald-600",
                "from-purple-500 to-indigo-600",
                "from-pink-500 to-rose-600",
                "from-amber-500 to-orange-600"
              ];
              
              return (
                <motion.div key={category.slug} variants={itemVariants}>
                  <Link href={`/paquetes?categoria=${category.slug}`}>
                    <div className={`group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-linear-to-br ${bgColors[idx % bgColors.length]} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern id={`pattern-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <circle cx="10" cy="10" r="2" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#pattern-${idx})`} />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-between p-8 text-white">
                        <div>
                          <span className="text-6xl mb-4 block">{category.icon}</span>
                          <h3 className="font-heading font-bold text-3xl mb-2">
                            {category.name}
                          </h3>
                          <p className="text-white/80">
                            {category.count} {t.toursPage.available}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/70">
                            {t.packagesPage.from} ${categoryTours.length > 0 ? Math.min(...categoryTours.map(tour => tour.price)) : 0}
                          </span>
                          <span className="bg-white/20 p-3 rounded-full group-hover:bg-white group-hover:text-primary transition-all">
                            <ArrowRight size={20} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Popular Tours by Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">{t.toursPage.popular}</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">
              {t.toursPage.featuredByCategory}
            </h2>
          </div>

          {categories.slice(0, 3).map((category) => {
            const categoryTours = tours.filter(tour => tour.category === category.slug).slice(0, 3);
            if (categoryTours.length === 0) return null;

            return (
              <div key={category.slug} className="mb-16 last:mb-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-heading font-bold text-2xl text-gray-900 flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    Tours de {category.name}
                  </h3>
                  <Link href={`/paquetes?categoria=${category.slug}`} className="text-primary font-medium hover:underline flex items-center gap-1">
                    {t.toursPage.viewAll} <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categoryTours.map((tour) => (
                    <Link key={tour.id} href={`/paquetes/${tour.slug}`}>
                      <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={tour.image} 
                            alt={tour.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                              <MapPin size={12} className="text-primary" />
                              {tour.location}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                            {tour.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                              <Clock size={14} /> {tour.duration}
                            </span>
                            <span className="font-bold text-primary text-lg">${tour.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              {t.toursPage.needHelp}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t.toursPage.needHelpDesc}
            </p>
            <a 
              href="https://wa.me/51930476116?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.toursPage.talkToAdvisor}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

