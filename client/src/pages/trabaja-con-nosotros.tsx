import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Briefcase, Users, Heart, Globe, Star, 
  MapPin, Clock, Send, CheckCircle, Award,
  Plane, Camera, Headphones, PenTool, BarChart3, UserPlus
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";

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

const benefits = [
  {
    icon: Plane,
    title: "Viajes con Descuento",
    description: "Disfruta de tarifas especiales en todos nuestros tours y paquetes turísticos."
  },
  {
    icon: Users,
    title: "Equipo Increíble",
    description: "Trabaja con profesionales apasionados por el turismo y la cultura peruana."
  },
  {
    icon: Award,
    title: "Desarrollo Profesional",
    description: "Capacitaciones constantes y oportunidades de crecimiento dentro de la empresa."
  },
  {
    icon: Heart,
    title: "Balance Vida-Trabajo",
    description: "Horarios flexibles y un ambiente laboral que valora tu bienestar."
  },
  {
    icon: Globe,
    title: "Experiencia Internacional",
    description: "Interactúa con viajeros de todo el mundo y expande tu perspectiva cultural."
  },
  {
    icon: Star,
    title: "Reconocimientos",
    description: "Programa de incentivos y bonos por desempeño excepcional."
  }
];

const positions = [
  {
    id: 1,
    title: "Guía Turístico Bilingüe",
    department: "Operaciones",
    location: "Cusco",
    type: "Tiempo Completo",
    icon: MapPin,
    requirements: [
      "Dominio de inglés (B2 o superior)",
      "Licencia de guía oficial DIRCETUR",
      "Mínimo 2 años de experiencia",
      "Conocimiento de historia y cultura peruana"
    ],
    isUrgent: true
  },
  {
    id: 2,
    title: "Community Manager",
    department: "Marketing",
    location: "Lima (Híbrido)",
    type: "Tiempo Completo",
    icon: Camera,
    requirements: [
      "Experiencia en gestión de redes sociales",
      "Conocimiento de herramientas de diseño",
      "Creatividad y habilidades de copywriting",
      "Inglés intermedio deseable"
    ],
    isUrgent: false
  },
  {
    id: 3,
    title: "Ejecutivo de Ventas",
    department: "Comercial",
    location: "Lima",
    type: "Tiempo Completo",
    icon: BarChart3,
    requirements: [
      "Experiencia en ventas de servicios",
      "Excelentes habilidades de comunicación",
      "Orientación a resultados",
      "Conocimiento del sector turístico (plus)"
    ],
    isUrgent: true
  },
  {
    id: 4,
    title: "Diseñador Gráfico",
    department: "Marketing",
    location: "Remoto",
    type: "Freelance",
    icon: PenTool,
    requirements: [
      "Portafolio de trabajos previos",
      "Dominio de Adobe Creative Suite",
      "Creatividad y atención al detalle",
      "Disponibilidad para proyectos puntuales"
    ],
    isUrgent: false
  },
  {
    id: 5,
    title: "Agente de Atención al Cliente",
    department: "Servicio al Cliente",
    location: "Lima / Remoto",
    type: "Tiempo Completo",
    icon: Headphones,
    requirements: [
      "Excelente comunicación oral y escrita",
      "Paciencia y empatía",
      "Manejo de herramientas CRM",
      "Inglés básico-intermedio"
    ],
    isUrgent: false
  },
  {
    id: 6,
    title: "Coordinador de Grupos",
    department: "Operaciones",
    location: "Cusco / Puno",
    type: "Tiempo Completo",
    icon: UserPlus,
    requirements: [
      "Experiencia coordinando grupos turísticos",
      "Disponibilidad para viajar",
      "Habilidades de liderazgo",
      "Inglés avanzado obligatorio"
    ],
    isUrgent: true
  }
];

const values = [
  { 
    title: "Pasión por Perú", 
    description: "Amamos nuestra tierra y queremos compartirla con el mundo",
    emoji: "🇵🇪"
  },
  { 
    title: "Excelencia", 
    description: "Nos esforzamos por superar expectativas en cada servicio",
    emoji: "⭐"
  },
  { 
    title: "Innovación", 
    description: "Buscamos constantemente nuevas formas de sorprender",
    emoji: "💡"
  },
  { 
    title: "Sostenibilidad", 
    description: "Comprometidos con el turismo responsable y la comunidad",
    emoji: "🌱"
  }
];

export default function TrabajaConNosotros() {
  const { t } = useLanguage();
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const departments = ["Todos", ...Array.from(new Set(positions.map(p => p.department)))];
  const filteredPositions = filter === "Todos" 
    ? positions 
    : positions.filter(p => p.department === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-linear-to-br from-primary via-emerald-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Background Elements */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-white/5 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
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
              <span className="text-white font-medium">{t.workPage.title}</span>
            </nav>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Briefcase size={40} className="text-white" />
            </motion.div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.workPage.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {t.workPage.subtitle}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Users size={20} />
                <span>+50 Colaboradores</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin size={20} />
                <span>5 Ciudades</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 border border-accent px-6 py-3 rounded-full">
                <Briefcase size={20} />
                <span className="font-bold">{positions.length} Vacantes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
              {t.workPage.values}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Los principios que nos guían cada día en nuestra misión de mostrar lo mejor del Perú
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <span className="text-4xl mb-4 block">{value.emoji}</span>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
              {t.workPage.benefits}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {t.workPage.benefits}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Ofrecemos un ambiente de trabajo único donde podrás crecer profesional y personalmente
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group bg-gray-50 hover:bg-primary rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                  <benefit.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-accent/20 text-accent font-bold px-4 py-2 rounded-full text-sm mb-4">
              {t.workPage.openPositions}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Posiciones Abiertas
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Encuentra la oportunidad perfecta para ti y comienza tu aventura con Mukis Travel
            </p>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === dept
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredPositions.map((position) => (
                <motion.div
                  key={position.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <position.icon size={24} className="text-primary" />
                      </div>
                      {position.isUrgent && (
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                          {t.workPage.urgent}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Briefcase size={14} />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin size={14} />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock size={14} />
                        {position.type}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                      className="w-full py-3 bg-gray-100 hover:bg-primary hover:text-white rounded-xl font-medium transition-all"
                    >
                      {selectedPosition === position.id ? "Ocultar Requisitos" : "Ver Requisitos"}
                    </button>
                    
                    <AnimatePresence>
                      {selectedPosition === position.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t">
                            <h4 className="font-bold text-sm text-gray-900 mb-2">Requisitos:</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <a
                    href={`mailto:reservasmukistravel@gmail.com?subject=Postulación: ${position.title}`}
                    className="block w-full py-4 bg-primary text-white text-center font-bold hover:bg-primary/90 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      Postular Ahora
                    </span>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">
              {t.workPage.selectionProcess}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Nuestro proceso es transparente y diseñado para encontrar el mejor talento
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
              
              {[
                { step: 1, title: "Envía tu CV", description: "Postula a través del botón de cada vacante o envía tu CV a reservasmukistravel@gmail.com" },
                { step: 2, title: "Revisión", description: "Nuestro equipo evaluará tu perfil y experiencia" },
                { step: 3, title: "Entrevista", description: "Si tu perfil coincide, te contactaremos para una entrevista virtual o presencial" },
                { step: 4, title: "¡Bienvenido!", description: "Si todo va bien, te daremos la bienvenida a la familia Mukis Travel" }
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-center mb-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">
                    {item.step}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-br from-accent to-orange-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿No encuentras tu posición ideal?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Envíanos tu CV y lo tendremos en cuenta para futuras oportunidades. Siempre estamos buscando talento excepcional.
            </p>
            <a
              href="mailto:reservasmukistravel@gmail.com?subject=CV Espontáneo - Mukis Travel"
              className="inline-flex items-center gap-2 bg-white text-accent font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
            >
              <Send size={20} />
              {t.workPage.sendCV}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
