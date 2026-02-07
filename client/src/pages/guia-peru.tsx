import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sun, CloudRain, Mountain, Wind, Thermometer, ShieldCheck, Map, Users, Info, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n";

const regions = [
  {
    id: "costa",
    name: "Costa",
    title: "Clima en la Costa del Perú",
    image: "/images/categories/huacachina.jpg",
    description: "La costa peruana presenta la forma de un extenso desierto recostado en las montañas. Es precisamente la presencia de los Andes al este, junto con la corriente fría de Humboldt que llega hasta sus playas, lo que le da a la zona ese clima árido y subtropical.",
    details: {
      clima: "Casi nunca llueve. Se caracteriza por densas neblinas y ligeras lloviznas entre mayo y noviembre que producen sensación de frío, aunque la temperatura promedio anual fluctúa entre 14 °C y 18 °C. En verano (diciembre a abril), la humedad disminuye y el sol brilla con intensidad.",
      consejos: [
        "Usa bloqueador solar incluso si está nublado.",
        "Lleva ropa ligera para el día y una chaqueta cortavientos para la noche.",
        "Visita Paracas e Ica entre diciembre y marzo para el mejor sol.",
        "Prueba el marisco fresco, es la especialidad de la región."
      ],
      info: "Extensión de playas desérticas, oasis como la Huacachina y ciudades modernas como Lima. Ideal para actividades de arena, surf y gastronomía marina."
    },
    color: "from-amber-400 to-orange-500",
    icon: Sun
  },
  {
    id: "sierra",
    name: "Sierra",
    title: "Clima en la Sierra del Perú",
    image: "/images/categories/montana-de-colores.jpg",
    description: "Zona montañosa dominada por la Cordillera de los Andes. Alcanza los 6,768 m.s.n.m. en la cumbre del Huascarán. El clima es seco y fresco casi todo el año, con variaciones marcadas entre el día y la noche.",
    details: {
      clima: "Tiene un clima seco y fresco casi todo el año, con una temperatura promedio anual entre 9 °C y 18 °C. Los días suelen ser soleados con cielo azul despejado, mientras que las noches pueden ser muy frías, especialmente en invierno.",
      consejos: [
        "Aclimátate el primer día para evitar el mal de altura (soroche).",
        "Bebe mate de coca.",
        "Viste en 'capas' (cebolla) ya que el clima cambia rápido.",
        "La mejor época es de mayo a octubre (estación seca)."
      ],
      info: "Hogar de Machu Picchu, Cusco y el Lago Titicaca. Paisajes de montañas majestuosas, valles profundos y cultura viva ancestral."
    },
    color: "from-emerald-500 to-teal-600",
    icon: Mountain
  },
  {
    id: "selva",
    name: "Selva",
    title: "Clima en la Selva del Perú",
    image: "/images/categories/laguna-humantay.jpeg", // Replacing placeholder with something lush if available, but I'll use what's in assets
    description: "Zona de vegetación tropical de la cuenca del río Amazonas, donde se ubican las más grandes reservas de naturaleza. El clima es tropical, caluroso y con lluvias frecuentes.",
    details: {
      clima: "Tiene un clima tropical con temperaturas entre 26 °C y 40 °C. Es caluroso y húmedo todo el año. Las lluvias son frecuentes, siendo más intensas entre los meses de diciembre y marzo, pero suelen ser ráfagas rápidas seguidas de sol.",
      consejos: [
        "Usa repelente para mosquitos en todo momento.",
        "Lleva ropa de manga larga transpirable.",
        "Mantente hidratado constantemente.",
        "Carga siempre un poncho de lluvia ligero."
      ],
      info: "La biodiversidad más rica del planeta. Ríos caudalosos, bosques impenetrables y comunidades nativas. Ideal para ecoturismo y aventura extrema."
    },
    color: "from-green-500 to-emerald-700",
    icon: CloudRain
  }
];

export default function GuiaPeru() {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="bg-white py-16 border-b">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.guidePage.title}
              </span>
              <h1 className="font-heading font-black text-4xl md:text-6xl text-gray-900 mb-6 uppercase tracking-tighter">
                {t.guidePage.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.guidePage.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 -mt-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Map, title: t.guidePage.extension, value: "1,285,215 km²", detail: "3er país más grande de Sudamérica" },
                { icon: Users, title: t.guidePage.population, value: "33+ Millones", detail: "País de todas las sangres y culturas" },
                { icon: Thermometer, title: t.guidePage.variety, value: "84 de 117", detail: "Microclimas existentes en el mundo" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-xs uppercase tracking-wider font-bold">{stat.title}</h3>
                    <p className="text-xl font-black text-gray-900">{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Region Selector */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Region Navigation */}
              <div className="lg:w-1/3 space-y-4">
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-8 flex items-center gap-3">
                  <Wind className="text-primary" />
                  Elige una Región
                </h2>
                <div className="space-y-4">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region)}
                      className={`w-full group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 overflow-hidden ${
                        selectedRegion.id === region.id 
                          ? "bg-white shadow-2xl ring-2 ring-primary scale-105" 
                          : "bg-gray-100 hover:bg-white hover:shadow-xl opacity-70 hover:opacity-100"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12 ${region.color}`}>
                        <region.icon size={24} />
                      </div>
                      <div className="text-left">
                        <span className="block font-black text-lg text-gray-900 uppercase tracking-tighter">{region.name}</span>
                        <span className="block text-xs text-gray-500 font-medium">Información y clima</span>
                      </div>
                      {selectedRegion.id === region.id && (
                        <motion.div 
                          layoutId="active-arrow"
                          className="absolute right-4 text-primary"
                        >
                          <ChevronRight />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Content Display */}
              <div className="lg:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRegion.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full"
                  >
                    <div className="relative h-64 md:h-80">
                      <img 
                        src={selectedRegion.image} 
                        alt={selectedRegion.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent`} />
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                          {selectedRegion.title}
                        </h3>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <span className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-primary" />
                            {t.guidePage.officialGuide}
                          </span>
                          <span className="flex items-center gap-2">
                            <Info size={16} className="text-primary" />
                            {t.guidePage.updatedInfo}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-xl">
                        {selectedRegion.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <h4 className="font-heading font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                            <Thermometer className="text-primary" />
                            El Clima
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedRegion.details.clima}
                          </p>
                          
                          <h4 className="font-heading font-bold text-xl text-gray-900 mt-8 mb-4 flex items-center gap-2">
                            <Map className="text-primary" />
                            ¿Qué esperar?
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedRegion.details.info}
                          </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                          <h4 className="font-heading font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-primary" />
                            Consejos Mukis
                          </h4>
                          <ul className="space-y-4">
                            {selectedRegion.details.consejos.map((consejo, i) => (
                              <li key={i} className="flex items-start gap-3 group">
                                <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white transition-transform group-hover:scale-110 ${selectedRegion.color}`}>
                                  {i + 1}
                                </span>
                                <span className="text-gray-650 text-sm leading-tight">{consejo}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-10">
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                              Ver tours en esta región
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
