import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Ofertas } from "@/components/home/Ofertas";
import { ToursMasSolicitados } from "@/components/home/ToursMasSolicitados";
import { ToursMachuPicchu } from "@/components/home/ToursMachuPicchu";
import { ProgramasVivenciales } from "@/components/home/ProgramasVivenciales";
import { WhereToGo } from "@/components/home/WhereToGo";
import { DestinosGrid } from "@/components/home/DestinosGrid";
import { Categorias } from "@/components/home/Categorias";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Certificaciones } from "@/components/home/Certificaciones";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollRevealSection } from "@/components/ui/scroll-reveal-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Value Proposition Strip */}
        <ScrollRevealSection className="py-0 px-0 overflow-hidden">
          <div className="bg-primary py-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl" />
            </div>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <p className="text-sm md:text-base font-medium">Especialistas en viajes a medida en todo el Perú</p>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/30" />
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇵🇪</span>
                <p className="text-sm md:text-base font-medium">Operador Local Autorizado por MINCETUR</p>
              </div>
              <div className="hidden md:block h-8 w-px bg-white/30" />
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-sm md:text-base font-medium">+5000 viajeros felices</p>
              </div>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Ofertas del Mes */}
        <ScrollRevealSection>
          <Ofertas />
        </ScrollRevealSection>

        {/* Tours Más Solicitados */}
        <ScrollRevealSection className="bg-gray-50/50">
          <ToursMasSolicitados />
        </ScrollRevealSection>

        {/* Tours Machu Picchu */}
        <ScrollRevealSection>
          <ToursMachuPicchu />
        </ScrollRevealSection>

        {/* Programas Vivenciales */}
        <ScrollRevealSection className="bg-white">
          <ProgramasVivenciales />
        </ScrollRevealSection>

        {/* Where to Go */}
        <ScrollRevealSection>
          <WhereToGo />
        </ScrollRevealSection>

        {/* Destinos Grid */}
        <ScrollRevealSection className="bg-gray-50/30">
          <DestinosGrid />
        </ScrollRevealSection>

        {/* Categorías de Tours */}
        <ScrollRevealSection>
          <Categorias />
        </ScrollRevealSection>

        {/* Why Choose Us */}
        <ScrollRevealSection className="bg-primary/5">
          <WhyChooseUs />
        </ScrollRevealSection>

        {/* Testimonials */}
        <ScrollRevealSection>
          <Testimonials />
        </ScrollRevealSection>

        {/* FAQ */}
        <ScrollRevealSection className="bg-white">
          <FAQ />
        </ScrollRevealSection>

        {/* Certificaciones */}
        <ScrollRevealSection>
          <Certificaciones />
        </ScrollRevealSection>

        {/* Final CTA Section */}
        <ScrollRevealSection className="bg-primary px-0 py-0!">
          <section className="py-24 bg-linear-to-br from-primary via-primary/80 to-accent/90 relative overflow-hidden">
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
                <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tighter">
                  ¿Listo para tu próxima aventura?
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                  Déjanos crear una experiencia inolvidable para ti. 
                  Nuestros expertos están listos para planificar tu viaje soñado.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://wa.me/51930476116?text=Hola,%20me%20gustaría%20planificar%20un%20viaje%20a%20Perú"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-16 inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-12 uppercase tracking-widest text-sm overflow-hidden transition-all shadow-2xl"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors">Hablar con un Asesor</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </a>
                  <a 
                    href="tel:+51960470892"
                    className="h-16 inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-12 uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
                  >
                    📞 +51 960 470 892
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollRevealSection>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
