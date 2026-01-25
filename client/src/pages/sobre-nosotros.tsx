import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Award, Shield, Target, Eye, Users, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const valuesData = [
  {
    icon: Heart,
    title: "Confianza",
    description: "Valoramos la confianza depositada en nuestro equipo profesional y nos comprometemos a honrarla en cada servicio."
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Trabajamos con los más altos estándares de calidad, garantizando excelencia en cada detalle de su experiencia."
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Implementamos rigurosas medidas de protección y seguridad en todos nuestros servicios turísticos para su tranquilidad."
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Nuestro compromiso es superar sus expectativas, brindando un servicio excepcional de principio a fin."
  }
];

export default function SobreNosotros() {
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
              <span className="text-white font-medium">Sobre Nosotros</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conoce nuestra historia, misión y el equipo detrás de experiencias inolvidables en Perú
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900">
                      ¿Quiénes Somos?
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    <strong className="text-primary">Mukis Travel</strong> es una agencia de viajes y operador turístico especializado en la creación de experiencias inolvidables en Perú. Con sede en la histórica <strong>Ciudad del Cusco</strong>, nos dedicamos al diseño y operación de paquetes turísticos personalizados que destacan por su excelencia y atención al detalle.
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Contamos con un equipo de profesionales altamente capacitados y apasionados por el turismo, comprometidos en ofrecer servicios de calidad superior que superen las expectativas de nuestros clientes.
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Nuestra filosofía se fundamenta en la combinación perfecta entre <strong>confort, confiabilidad y precios competitivos</strong>, garantizando experiencias auténticas en los principales destinos turísticos del país.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span className="font-bold text-gray-900">Cusco, Perú</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Nos distinguimos por mantener una comunicación fluida y transparente con nuestros clientes, brindando <strong>atención personalizada disponible las 24 horas del día, los 7 días de la semana</strong>. Cada itinerario es cuidadosamente elaborado para reflejar la riqueza cultural y natural del Perú, siempre con un profundo respeto por nuestro patrimonio y el medio ambiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Misión */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-10 h-full text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl">
                    Nuestra Misión
                  </h3>
                </div>
                
                <p className="text-white/95 text-lg leading-relaxed">
                  Satisfacer y superar las expectativas de nuestros clientes mediante la creación de experiencias turísticas únicas y memorables. Nos comprometemos a ofrecer un servicio personalizado de excelencia, diseñando paquetes turísticos innovadores a precios accesibles, respaldados por un equipo profesional debidamente capacitado que garantiza atención de primer nivel en cada etapa del viaje.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-3xl p-8 lg:p-10 h-full text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl">
                    Nuestra Visión
                  </h3>
                </div>
                
                <p className="text-white/95 text-lg leading-relaxed">
                  Consolidarnos como la agencia de viajes y operador turístico líder en la región de Cusco, reconocidos por nuestra excelencia operativa y compromiso con la satisfacción del cliente. Aspiramos a crecer continuamente como empresa turística referente, ofreciendo servicios y productos de los más altos estándares de calidad, manteniendo siempre la confiabilidad, profesionalismo y calidez humana que nos caracteriza, contribuyendo así al desarrollo sostenible del turismo en nuestra región.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué confiar en nosotros? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                ¿Por Qué Confiar en Nosotros?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Valores que nos definen y nos comprometen con tu satisfacción
              </p>
            </motion.div>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valuesData.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Objetivo General */}
      <section className="py-20 bg-gradient-to-r from-primary to-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">
              Objetivo General
            </h2>
            
            <p className="text-white/95 text-lg leading-relaxed">
              Posicionar a Mukis Travel como una agencia de viajes líder a nivel nacional e internacional, reconocida por ofrecer las mejores alternativas turísticas con excelentes estándares de calidad y servicio. Nos proponemos consolidar nuestra identidad como la opción preferida para viajeros que buscan experiencias auténticas y personalizadas, perfeccionando continuamente cada uno de nuestros servicios sin comprometer la esencia y los valores que nos distinguen en el mercado, contribuyendo así al desarrollo y promoción del turismo sostenible en el Perú.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
