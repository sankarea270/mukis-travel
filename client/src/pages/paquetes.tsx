import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, MapPin, Users, ChevronRight, Star, Percent } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours, categories } from "@/data/tours";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Paquetes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
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
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">Paquetes Turísticos</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Paquetes Turísticos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre nuestras experiencias diseñadas para mostrarte lo mejor del Perú
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium whitespace-nowrap transition-all hover:shadow-lg">
              Todos
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.slug}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium whitespace-nowrap hover:bg-primary hover:text-white transition-all"
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {tours.map((tour) => (
              <motion.div key={tour.id} variants={itemVariants}>
                <Link href={`/paquetes/${tour.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {tour.isOffer && (
                          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Percent size={12} /> OFERTA
                          </span>
                        )}
                        {tour.featured && !tour.isOffer && (
                          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star size={12} /> DESTACADO
                          </span>
                        )}
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary" />
                          {tour.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {tour.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {tour.shortDescription}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Clock size={16} className="text-primary" />
                          {tour.duration}
                        </span>
                        {tour.maxGroup && (
                          <span className="flex items-center gap-1.5">
                            <Users size={16} className="text-primary" />
                            Máx. {tour.maxGroup}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-gray-500">Desde</span>
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
                        <span className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                          Ver Más
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-emerald-600 relative overflow-hidden">
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
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Diseñamos paquetes personalizados según tus intereses, tiempo y presupuesto. 
              ¡Cuéntanos tu viaje soñado!
            </p>
            <a 
              href="https://wa.me/51917608749?text=Hola,%20me%20gustaría%20un%20paquete%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Paquete Personalizado
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
