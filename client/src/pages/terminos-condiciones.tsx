import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, FileText, Shield, Clock, AlertCircle, CheckCircle, Scale, CreditCard, XCircle, RefreshCw } from "lucide-react";
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
    id: "general",
    icon: FileText,
    title: "Condiciones Generales",
    content: [
      "Los presentes términos y condiciones regulan el uso de los servicios turísticos ofrecidos por Mukis Travel.",
      "Al contratar nuestros servicios, el cliente acepta íntegramente estas condiciones.",
      "Nos reservamos el derecho de modificar estos términos, siendo efectivos desde su publicación en nuestra web.",
      "Los servicios están sujetos a disponibilidad y confirmación por parte de nuestros proveedores."
    ]
  },
  {
    id: "reservas",
    icon: CheckCircle,
    title: "Reservas y Pagos",
    content: [
      "Las reservas requieren un depósito mínimo del 50% del valor total del servicio.",
      "El saldo restante debe ser cancelado 7 días antes del inicio del tour.",
      "Los precios están expresados en dólares americanos (USD) o soles peruanos (PEN).",
      "Aceptamos pagos mediante transferencia bancaria, tarjetas de crédito/débito y PayPal."
    ]
  },
  {
    id: "cancelaciones",
    icon: XCircle,
    title: "Política de Cancelaciones",
    content: [
      "Cancelaciones con más de 15 días de anticipación: reembolso del 100% menos gastos administrativos.",
      "Cancelaciones entre 8 y 14 días: reembolso del 50% del monto total.",
      "Cancelaciones con menos de 7 días: no aplica reembolso.",
      "Las cancelaciones por fuerza mayor serán evaluadas caso por caso."
    ]
  },
  {
    id: "modificaciones",
    icon: RefreshCw,
    title: "Modificaciones",
    content: [
      "Las solicitudes de modificación están sujetas a disponibilidad.",
      "Cambios de fecha dentro de los 7 días previos pueden generar cargos adicionales.",
      "Mukis Travel se reserva el derecho de modificar itinerarios por razones de seguridad.",
      "En caso de modificaciones por nuestra parte, ofreceremos alternativas equivalentes o reembolso."
    ]
  },
  {
    id: "responsabilidades",
    icon: Shield,
    title: "Responsabilidades",
    content: [
      "Mukis Travel actúa como intermediario entre el cliente y los proveedores de servicios.",
      "No somos responsables por pérdidas, daños o accidentes causados por terceros.",
      "El cliente es responsable de contar con documentos de viaje válidos y seguros de viaje.",
      "Recomendamos encarecidamente contratar un seguro de viaje integral."
    ]
  },
  {
    id: "jurisdiccion",
    icon: Scale,
    title: "Jurisdicción y Ley Aplicable",
    content: [
      "Estos términos se rigen por las leyes de la República del Perú.",
      "Cualquier disputa será resuelta en los tribunales de Lima, Perú.",
      "Las partes se someten expresamente a dicha jurisdicción.",
      "La invalidez de alguna cláusula no afectará la validez de las restantes."
    ]
  }
];

export default function TerminosCondiciones() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
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
              <span className="text-white font-medium">{t.legalPage.termsTitle}</span>
            </nav>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <FileText size={40} className="text-white" />
            </motion.div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              {t.legalPage.termsTitle}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conoce las condiciones que rigen nuestros servicios turísticos
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

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {sections.map((section, idx) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm font-medium transition-all duration-300"
              >
                <section.icon size={14} />
                {section.title}
              </motion.a>
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
            className="max-w-4xl mx-auto space-y-12"
          >
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="scroll-mt-32"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="bg-linear-to-r from-primary to-primary/80 p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <section.icon size={24} />
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Sección {idx + 1}</span>
                        <h2 className="font-heading font-bold text-2xl">{section.title}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIdx) => (
                        <motion.li
                          key={itemIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIdx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle size={14} className="text-primary" />
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <AlertCircle size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                    Nota Importante
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Al realizar una reserva con Mukis Travel, confirmas que has leído, entendido y aceptado 
                    estos términos y condiciones en su totalidad. Te recomendamos guardar una copia de este 
                    documento para tu referencia. Si tienes alguna pregunta, no dudes en contactarnos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">¿Tienes alguna pregunta sobre nuestros términos?</p>
            <Link href="/contacto">
              <span className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 cursor-pointer">
                Contáctanos
                <ChevronRight size={20} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
