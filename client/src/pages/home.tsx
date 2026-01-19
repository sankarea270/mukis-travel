import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TourCard } from "@/components/home/TourCard";
import { Features } from "@/components/home/Features";
import { Destinations } from "@/components/home/Destinations";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours } from "@/data/tours";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Value Proposition Strip */}
        <div className="bg-primary py-8 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
            <p className="text-lg font-medium">✨ Especialistas en viajes a medida en todo el Perú</p>
            <div className="h-0 md:h-8 w-16 md:w-[1px] bg-white/30" />
            <p className="text-lg font-medium">🇵🇪 Operador Local Autorizado</p>
          </div>
        </div>

        <Features />

        {/* Featured Tours */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Nuestras Recomendaciones</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">Paquetes Turísticos Destacados</h2>
            <p className="mt-4 text-gray-600">Explora nuestras opciones más populares diseñadas para brindarte la mejor experiencia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <TourCard key={tour.id} tour={tour} index={idx} />
            ))}
          </div>
        </section>

        <Destinations />

        <Testimonials />

        {/* About Short */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1000" alt="About Mukis" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <p className="font-heading font-bold text-2xl mb-2">10+ Años</p>
                <p className="text-sm opacity-90">De experiencia creando viajes inolvidables en los Andes.</p>
              </div>
            </div>
            
            <div className="pl-0 md:pl-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Sobre Nosotros</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-6 text-gray-900">Somos Mukis Travel Agency</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nacimos con la pasión de mostrar la magia de nuestra tierra al mundo. "Mukis" evoca a los guardianes de los tesoros de los Andes, y nosotros somos los guardianes de tu experiencia en Perú.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nos especializamos en turismo cultural, de aventura y naturaleza, siempre respetando las comunidades locales y el medio ambiente.
              </p>
              <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-colors uppercase tracking-wide">
                Conoce más de nosotros
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
