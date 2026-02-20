import { Link } from "wouter";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Heart, Award, Shield, Target, Eye, Users, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animación avanzada para los cuadros de valores (cumple con la firma de framer-motion)
const valueBoxVariants = {
  hidden: { opacity: 0, y: 60, rotate: -8, scale: 0.85, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    boxShadow: "0px 8px 32px 0px rgba(16, 185, 129, 0.10)",
    transition: {
      duration: 0.8,
      delay: 0.2 + (custom || 0) * 0.15,
      type: "spring" as const,
      bounce: 0.35
    }
  }),
  whileHover: {
    scale: 1.06,
    rotate: 2,
    boxShadow: "0px 16px 48px 0px rgba(16, 185, 129, 0.18)",
    transition: { duration: 0.3, type: "spring" as const }
  }
};

// Restaurar itemVariants para Misión/Visión
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SobreNosotros() {
  const { t } = useLanguage();

  const valuesData = [
    {
      icon: Heart,
      title: t.aboutPage.values.trust.title,
      description: t.aboutPage.values.trust.desc
    },
    {
      icon: Award,
      title: t.aboutPage.values.quality.title,
      description: t.aboutPage.values.quality.desc
    },
    {
      icon: Shield,
      title: t.aboutPage.values.security.title,
      description: t.aboutPage.values.security.desc
    },
    {
      icon: Target,
      title: t.aboutPage.values.commitment.title,
      description: t.aboutPage.values.commitment.desc
    }
  ];
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
              <span className="text-white font-medium">{t.nav.aboutUs}</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.nav.aboutUs}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t.aboutPage.p1}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos - NUEVO */}
      <section className="py-20 bg-linear-to-br from-white via-gray-50 to-primary/10 relative overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ scale: 0.96, opacity: 0.25, x: -28, y: -8 }}
          animate={{ scale: [0.96, 1.05, 0.98], opacity: [0.25, 0.45, 0.25], x: [-28, -12, -28] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />

        <motion.div
          aria-hidden
          initial={{ scale: 1.02, opacity: 0.18, x: 24, y: 8 }}
          animate={{ scale: [1.02, 0.95, 1.03], opacity: [0.18, 0.38, 0.18], x: [24, 8, 24] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
              {/* Texto */}
              <div className="flex-1 min-w-75">
                <motion.h2
                  initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 12 }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="font-heading font-extrabold text-4xl md:text-5xl text-primary mb-6 tracking-tight"
                >
                  QUIÉNES SOMOS
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }} className="text-gray-700 text-lg leading-relaxed mb-4">
                  Mukis Travel es una agencia de viajes y operador turístico especializado en la creación de experiencias inolvidables en Perú. Con sede en la histórica Ciudad del Cusco, nos dedicamos al diseño y operación de paquetes turísticos personalizados que destacan por su excelencia y atención al detalle.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="text-gray-700 text-lg leading-relaxed mb-4">
                  Contamos con un equipo de profesionales altamente capacitados y apasionados por el turismo, comprometidos en ofrecer servicios de calidad superior que superen las expectativas de nuestros clientes. Nuestra filosofía se fundamenta en la combinación perfecta entre confort, confiabilidad y precios competitivos, garantizando experiencias auténticas en los principales destinos turísticos del país.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }} className="text-gray-700 text-lg leading-relaxed mb-4">
                  Nos distinguimos por mantener una comunicación fluida y transparente con nuestros clientes, brindando <strong>atención personalizada disponible las 24 horas del día, los 7 días de la semana</strong>. Cada itinerario es cuidadosamente elaborado para reflejar la riqueza cultural y natural del Perú, siempre con un profundo respeto por nuestro patrimonio y el medio ambiente.
                </motion.p>
              </div>
              {/* Imágenes */}
              <div className="flex flex-col gap-8 flex-1 min-w-70 items-center">
                <motion.div
                  initial={{ scale: 0.86, opacity: 0, y: 18 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04, rotateY: 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 220 }}
                  style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
                  className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 w-72 h-56 bg-gray-100 flex items-center justify-center cursor-pointer relative"
                >
                  {/* Imagen del equipo (parallax + overlay) */}
                  <img src="/images/equipo.jpg" alt="Equipo Mukis Travel" className="object-cover w-full h-full" />
                  <motion.div
                    aria-hidden
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.28 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent pointer-events-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-400/30 w-72 h-56 bg-gray-100 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                >
                  {/* Imagen de la dueña */}
                  <img src="/images/duena.jpg" alt="foto diana" className="object-cover w-full h-full" />
                </motion.div>
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
              <div className="bg-linear-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-10 h-full text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl">
                    {t.aboutPage.mission}
                  </h3>
                </div>
                
                <p className="text-white/95 text-lg leading-relaxed">
                  {t.aboutPage.missionText}
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div variants={itemVariants}>
              <div className="bg-linear-to-br from-emerald-600 to-emerald-500 rounded-3xl p-8 lg:p-10 h-full text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl">
                    {t.aboutPage.vision}
                  </h3>
                </div>
                
                <p className="text-white/95 text-lg leading-relaxed">
                  {t.aboutPage.visionText}
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
              <motion.div
                key={index}
                custom={index}
                variants={valueBoxVariants}
                whileHover="whileHover"
                className="group bg-white rounded-2xl p-8 text-center h-full flex flex-col cursor-pointer transition-all duration-500 relative overflow-hidden"
                style={{ willChange: 'transform, box-shadow' }}
              >
                {/* Animación de fondo decorativo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileHover={{ opacity: 0.18, scale: 1.2 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`absolute inset-0 rounded-2xl z-0 ${index % 2 === 0 ? 'bg-primary' : 'bg-emerald-400'}`}
                  style={{ filter: 'blur(32px)' }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed grow">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Objetivo General */}
      <section className="py-20 bg-linear-to-r from-primary to-emerald-600">
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
              {t.aboutPage.generalObjective}
            </h2>
            
            <p className="text-white/95 text-lg leading-relaxed">
              {t.aboutPage.generalObjectiveText}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
