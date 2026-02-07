import { useState, useMemo, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { useLanguage } from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Users, ChevronRight, Star, Percent, Filter, ArrowUpDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours, categories } from "@/data/tours";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function Paquetes() {
  const { t } = useLanguage();
  const search = useSearch();
  const [activeCategory, setActiveCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("recommended");

  // Efecto para sincronizar con URL params al cargar
  useEffect(() => {
    const params = new URLSearchParams(search);
    const categoryParam = params.get("categoria");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [search]);

  const filteredAndSortedTours = useMemo(() => {
    let result = [...tours];

    // Filtrar por categoría
    if (activeCategory !== "todos") {
      result = result.filter(tour => tour.category === activeCategory);
    }

    // Ordenar
    switch (sortBy) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "duration":
        result.sort((a, b) => {
          const getDurationValue = (d: string) => {
            const lower = d.toLowerCase();
            if (lower.includes("hora")) return 0.5;
            if (lower.includes("día") || lower.includes("dia")) {
              const match = lower.match(/(\d+)/);
              return match ? parseInt(match[0]) : 1;
            }
            return 999;
          };
          return getDurationValue(a.duration) - getDurationValue(b.duration);
        });
        break;
      case "recommended":
      default:
        // Priorizar ofertas y destacados
        result.sort((a, b) => {
          if (a.isOffer && !b.isOffer) return -1;
          if (!a.isOffer && b.isOffer) return 1;
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

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

      {/* Filter & Sort Bar */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b shadow-sm transition-all">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Categories Buttons */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide mask-linear-fade">
              <button 
                onClick={() => setActiveCategory("todos")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === "todos" 
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t.packagesPage.filterAll}
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto min-w-50">
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <ArrowUpDown size={16} />
                <span className="hidden sm:inline">{t.packagesPage.sortBy}</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-45 bg-white border-gray-200 rounded-xl focus:ring-primary/20">
                  <SelectValue placeholder={t.packagesPage.sortBy} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">{t.packagesPage.sortRecommended}</SelectItem>
                  <SelectItem value="price_asc">{t.packagesPage.sortPriceLow}</SelectItem>
                  <SelectItem value="price_desc">{t.packagesPage.sortPriceHigh}</SelectItem>
                  <SelectItem value="duration">{t.packagesPage.sortDuration}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 min-h-150">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-gray-500 text-sm">
            {t.packagesPage.showing} {filteredAndSortedTours.length} {t.packagesPage.toursLabel}
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredAndSortedTours.map((tour) => (
                <motion.div 
                  key={tour.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/paquetes/${tour.slug}`}>
                    <div className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={tour.image} 
                          alt={tour.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                          {tour.isOffer && (
                            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                              <Percent size={12} /> {t.packagesPage.offer}
                            </span>
                          )}
                          {tour.featured && !tour.isOffer && (
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                              <Star size={12} /> {t.packagesPage.featured}
                            </span>
                          )}
                        </div>

                        {/* Location Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                            <MapPin size={12} className="text-primary" />
                            {tour.location}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col grow">
                        <div className="mb-auto">
                          <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {tour.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {tour.shortDescription}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                            <span className="flex items-center gap-1.5 font-medium">
                              <Clock size={16} className="text-primary" />
                              {tour.duration}
                            </span>
                            {tour.maxGroup && (
                              <span className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
                                <Users size={16} className="text-primary" />
                                Max. {tour.maxGroup}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                          <div>
                            <span className="text-xs text-gray-500 block">{t.packagesPage.from}</span>
                            <div className="flex items-baseline gap-2">
                              <span className="font-heading font-bold text-2xl text-primary">
                                ${tour.price}
                              </span>
                              {tour.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                  ${tour.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-xl text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {t.packagesPage.viewDetails}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredAndSortedTours.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.packagesPage.noTours}</h3>
              <p className="text-gray-500">{t.packagesPage.noToursDesc}</p>
              <button 
                onClick={() => { setActiveCategory("todos"); setSortBy("recommended"); }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                {t.packagesPage.clearFilters}
              </button>
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
