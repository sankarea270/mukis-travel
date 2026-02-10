import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours, categories } from "@/data/tours";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Users, Star, ChevronRight, TreePine, Bird, Droplets, Filter, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/i18n";

const selvaHighlights = [
  { icon: TreePine },
  { icon: Bird },
  { icon: Droplets },
];

const selvaDestinations = [
  { name: "Iquitos", image: "https://images.unsplash.com/photo-1601922046210-af8f14f35c8b?auto=format&fit=crop&q=80&w=600" },
  { name: "Puerto Maldonado", image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&q=80&w=600" },
  { name: "Manu", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=600" },
  { name: "Tambopata", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600" },
];

export default function ToursSelva() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredAndSortedTours = useMemo(() => {
    let result = tours.filter((tour) => tour.region === "selva" && !tour.isPaquete);

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
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-125 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1920"
            alt="Selva Peruana"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-green-900/60 via-emerald-900/40 to-black/70" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow-xl">
                <TreePine className="w-7 h-7 text-white" />
              </div>
              <span className="text-green-300 font-bold text-lg tracking-wide uppercase">Región Selva</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              {t.regionPage.selva.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-green-300">{t.regionPage.selva.title.split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              {t.regionPage.selva.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              {selvaHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20"
                >
                  <item.icon className="w-5 h-5 text-green-300" />
                  <span className="text-white font-medium">{(t.regionPage.selva.highlights as unknown as string[])[idx]}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Destinos Destacados */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">{t.regionPage.selva.destinations}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Los santuarios naturales más impresionantes del Amazonas</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {selvaDestinations.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-4/5 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading font-bold text-white text-xl">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b shadow-sm transition-all mb-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Categories Buttons */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide mask-linear-fade">
              <button 
                onClick={() => setActiveCategory("todos")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === "todos" 
                    ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/30 scale-105"
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
                <span className="hidden sm:inline">Ordenar por:</span>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-45 bg-white border-gray-200 rounded-xl focus:ring-green-600/20">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recomendados</SelectItem>
                  <SelectItem value="price_asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price_desc">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="duration">Duración</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-8 min-h-150 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">{t.regionPage.selva.tours}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Expediciones inolvidables en la Amazonía. Mostrando {filteredAndSortedTours.length} tour{filteredAndSortedTours.length !== 1 && 's'}</p>
          </motion.div>

          {filteredAndSortedTours.length > 0 ? (
            <motion.div
              layout
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
                      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={tour.image} 
                            alt={tour.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <MapPin size={14} />
                            <span>{tour.location}</span>
                            <span className="mx-1">•</span>
                            <Clock size={14} />
                            <span>{tour.duration}</span>
                          </div>
                          
                          <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {tour.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.shortDescription}</p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-primary">USD ${tour.price}</span>
                            <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              {t.common.viewDetails} <ChevronRight size={16} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-green-50 rounded-3xl">
              <TreePine className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">{t.regionPage.noTours}</h3>
              <p className="text-gray-600 mb-6">Prueba con otros filtros o categorías</p>
              <button 
                onClick={() => setActiveCategory("todos")}
                className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer"
              >
                {t.regionPage.viewTours}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-green-600 to-emerald-700 relative overflow-hidden">
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
              {t.regionPage.selva.cta}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Vive una experiencia única en el pulmón del mundo
            </p>
            <a 
              href="https://wa.me/51930476116?text=Hola,%20me%20interesan%20los%20tours%20de%20la%20Selva%20peruana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              Consultar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
