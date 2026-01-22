import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Ofertas } from "@/components/home/Ofertas";
import { WhereToGo } from "@/components/home/WhereToGo";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Destinations } from "@/components/home/Destinations";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Noticias } from "@/components/home/Noticias";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Value Proposition Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary py-6 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl" />
          </div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <p className="text-sm md:text-base font-medium">Especialistas en viajes a medida en todo el Perú</p>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-white/30" />
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇵🇪</span>
              <p className="text-sm md:text-base font-medium">Operador Local Autorizado por MINCETUR</p>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-white/30" />
            <div className="flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <p className="text-sm md:text-base font-medium">+5000 viajeros felices</p>
            </div>
          </div>
        </motion.div>

        {/* Ofertas Section */}
        <Ofertas />

        {/* Where to Go - Para quienes no saben a dónde viajar */}
        <WhereToGo />

        {/* Destinations */}
        <Destinations />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Noticias / Blog */}
        <Noticias />

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-emerald-600 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-6xl mb-6">🍀</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
                ¿Listo para tu próxima aventura?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Déjanos crear una experiencia inolvidable para ti. 
                Nuestros expertos están listos para planificar tu viaje soñado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/51917608749?text=Hola,%20me%20gustaría%20planificar%20un%20viaje%20a%20Perú"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hablar con un Asesor
                </a>
                <a 
                  href="tel:+51917608749"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all"
                >
                  📞 +51 917 608 749
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
