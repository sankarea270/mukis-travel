import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Lock, Eye, Database, Share2, Cookie, Mail, Shield, UserCheck, Clock } from "lucide-react";
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

const sections = [
  {
    id: "recopilacion",
    icon: Database,
    title: "Información que Recopilamos",
    color: "from-blue-500 to-blue-600",
    content: [
      {
        subtitle: "Datos personales",
        text: "Nombre completo, documento de identidad, fecha de nacimiento, nacionalidad."
      },
      {
        subtitle: "Datos de contacto",
        text: "Correo electrónico, número de teléfono, dirección postal."
      },
      {
        subtitle: "Datos de viaje",
        text: "Preferencias de viaje, restricciones alimentarias, necesidades especiales."
      },
      {
        subtitle: "Datos de pago",
        text: "Información de tarjetas procesada de forma segura a través de pasarelas certificadas."
      }
    ]
  },
  {
    id: "uso",
    icon: Eye,
    title: "Uso de la Información",
    color: "from-emerald-500 to-emerald-600",
    content: [
      {
        subtitle: "Gestión de servicios",
        text: "Procesar reservas, confirmar itinerarios y brindar asistencia durante el viaje."
      },
      {
        subtitle: "Comunicación",
        text: "Enviar confirmaciones, actualizaciones y ofertas personalizadas (con tu consentimiento)."
      },
      {
        subtitle: "Mejora continua",
        text: "Analizar tendencias para mejorar nuestros servicios y experiencia del usuario."
      },
      {
        subtitle: "Cumplimiento legal",
        text: "Atender requerimientos de autoridades cuando sea legalmente exigible."
      }
    ]
  },
  {
    id: "proteccion",
    icon: Shield,
    title: "Protección de Datos",
    color: "from-purple-500 to-purple-600",
    content: [
      {
        subtitle: "Encriptación SSL",
        text: "Toda la información transmitida está protegida con cifrado de 256 bits."
      },
      {
        subtitle: "Acceso restringido",
        text: "Solo personal autorizado puede acceder a datos personales."
      },
      {
        subtitle: "Servidores seguros",
        text: "Almacenamos datos en servidores con certificaciones de seguridad internacional."
      },
      {
        subtitle: "Auditorías periódicas",
        text: "Realizamos revisiones regulares de nuestros sistemas de seguridad."
      }
    ]
  },
  {
    id: "compartir",
    icon: Share2,
    title: "Compartir Información",
    color: "from-orange-500 to-orange-600",
    content: [
      {
        subtitle: "Proveedores de servicios",
        text: "Hoteles, aerolíneas y operadores locales necesarios para tu viaje."
      },
      {
        subtitle: "Procesadores de pago",
        text: "Entidades financieras para procesar transacciones de forma segura."
      },
      {
        subtitle: "Autoridades",
        text: "Cuando sea requerido por ley o para proteger derechos legales."
      },
      {
        subtitle: "Con tu consentimiento",
        text: "En cualquier otro caso, solo compartiremos datos con tu autorización expresa."
      }
    ]
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies y Tecnologías",
    color: "from-pink-500 to-pink-600",
    content: [
      {
        subtitle: "Cookies esenciales",
        text: "Necesarias para el funcionamiento básico del sitio web."
      },
      {
        subtitle: "Cookies analíticas",
        text: "Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio."
      },
      {
        subtitle: "Cookies de marketing",
        text: "Utilizadas para mostrar anuncios relevantes (puedes desactivarlas)."
      },
      {
        subtitle: "Gestión de preferencias",
        text: "Puedes configurar tu navegador para rechazar o eliminar cookies."
      }
    ]
  },
  {
    id: "derechos",
    icon: UserCheck,
    title: "Tus Derechos",
    color: "from-cyan-500 to-cyan-600",
    content: [
      {
        subtitle: "Acceso",
        text: "Puedes solicitar una copia de todos los datos personales que tenemos sobre ti."
      },
      {
        subtitle: "Rectificación",
        text: "Puedes corregir cualquier dato personal incorrecto o desactualizado."
      },
      {
        subtitle: "Eliminación",
        text: "Puedes solicitar la eliminación de tus datos personales."
      },
      {
        subtitle: "Oposición",
        text: "Puedes oponerte al procesamiento de tus datos para fines de marketing."
      }
    ]
  }
];

export default function PoliticaPrivacidad() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-primary to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Animated Shield Icon */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Lock size={400} />
        </motion.div>
        
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
              <span className="text-white font-medium">{t.legalPage.privacyTitle}</span>
            </nav>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Lock size={40} className="text-white" />
            </motion.div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.legalPage.privacyTitle}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tu privacidad es importante para nosotros. Conoce cómo protegemos tu información personal.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm"
            >
              <Clock size={16} />
              <span>Última actualización: Enero 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { icon: Shield, text: "Datos Protegidos" },
              { icon: Lock, text: "Conexión Segura" },
              { icon: UserCheck, text: "GDPR Compliant" }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-gray-600"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <badge.icon size={20} className="text-primary" />
                </div>
                <span className="font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid gap-8">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  variants={itemVariants}
                  className="scroll-mt-24"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <div className={`bg-linear-to-r ${section.color} p-6 text-white relative overflow-hidden`}>
                      <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <section.icon size={100} />
                      </motion.div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <motion.div 
                          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <section.icon size={28} />
                        </motion.div>
                        <div>
                          <span className="text-white/70 text-sm font-medium">Sección {idx + 1}</span>
                          <h2 className="font-heading font-bold text-2xl">{section.title}</h2>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.content.map((item, itemIdx) => (
                          <motion.div
                            key={itemIdx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIdx * 0.1 }}
                            className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group/item"
                          >
                            <h4 className="font-heading font-bold text-gray-900 mb-2 group-hover/item:text-primary transition-colors">
                              {item.subtitle}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-linear-to-br from-primary to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full" />
              </motion.div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                  ¿Tienes preguntas sobre tu privacidad?
                </h3>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Nuestro equipo de protección de datos está disponible para resolver todas tus dudas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:reservasmukistravel@gmail.com" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    <Mail size={20} />
                    reservasmukistravel@gmail.com
                  </a>
                  <Link href="/contacto">
                    <span className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all cursor-pointer">
                      Formulario de Contacto
                      <ChevronRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
