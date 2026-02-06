import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle, 
  FileText, Shield, Headphones, Send, ChevronRight,
  Facebook, Instagram, Youtube
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Phone,
    title: "Llámanos",
    description: "Atención telefónica inmediata",
    value: "+51 960 470 892",
    action: "tel:+51960470892",
    color: "from-green-400 to-emerald-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta en minutos",
    value: "Chatea ahora",
    action: "https://wa.me/51930476116?text=Hola,%20necesito%20ayuda",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Respuesta en 24 horas",
    value: "reservasmukistravel@gmail.com",
    action: "mailto:reservasmukistravel@gmail.com",
    color: "from-blue-400 to-indigo-600"
  }
];

const faqSupport = [
  {
    question: "¿Cómo puedo reservar un tour?",
    answer: "Puedes reservar directamente a través de WhatsApp, llamarnos al +51 930 476 116, o enviarnos un email. También puedes llenar el formulario de contacto en esta página."
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito (Visa, Mastercard), PayPal y pagos en efectivo en nuestra oficina. Para reservas internacionales recomendamos PayPal o transferencia."
  },
  {
    question: "¿Puedo cancelar o modificar mi reserva?",
    answer: "Sí, las cancelaciones con más de 7 días de anticipación tienen reembolso completo. Para modificaciones, contáctanos lo antes posible y haremos lo posible por acomodar tus cambios."
  },
  {
    question: "¿Los tours incluyen seguro de viaje?",
    answer: "Todos nuestros tours incluyen seguro básico de accidentes. Para coberturas más amplias, podemos ayudarte a contratar un seguro de viaje completo."
  },
  {
    question: "¿Qué debo llevar a los tours?",
    answer: "Depende del tour, pero generalmente recomendamos: ropa cómoda, protector solar, agua, documentos de identidad y cámara. Antes de cada tour te enviamos una lista detallada."
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/mukistravel", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/mukistravel", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@mukistravelagency", label: "YouTube" }
];

export default function Soporte() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, soy ${formData.name}.%0A%0AAsunto: ${formData.subject}%0A%0A${formData.message}%0A%0AEmail: ${formData.email}%0ATel: ${formData.phone}`;
    window.open(`https://wa.me/51930476116?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-emerald-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Centro de Soporte
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos por el canal que prefieras 
              y te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={method.title}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : undefined}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">{method.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{method.description}</p>
              <p className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                {method.value}
                <ChevronRight size={16} />
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-gray-900">Envíanos un mensaje</h2>
                  <p className="text-gray-500 text-sm">Te responderemos en menos de 24 horas</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Selecciona...</option>
                      <option value="Consulta de tour">Consulta de tour</option>
                      <option value="Reserva existente">Reserva existente</option>
                      <option value="Modificar reserva">Modificar reserva</option>
                      <option value="Cancelación">Cancelación</option>
                      <option value="Queja o reclamo">Queja o reclamo</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-2xl text-gray-900">Preguntas Frecuentes</h2>
                <p className="text-gray-500 text-sm">Respuestas rápidas a dudas comunes</p>
              </div>
            </div>

            <div className="space-y-3">
              {faqSupport.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={false}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedFaq === idx ? "auto" : 0,
                      opacity: expandedFaq === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Office Info */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nuestra Oficina
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                  <span>centro comercial San Andres n° 318, Cusco, Perú</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Lun - Sáb: 8:00 AM - 7:00 PM</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>+51 960 470 892</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-3">Síguenos en redes sociales</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-md transition-all"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-600">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Pago Seguro</p>
                <p className="text-xs">Transacciones protegidas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Autorizado MINCETUR</p>
                <p className="text-xs">Operador turístico oficial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Headphones className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-gray-900">Soporte 24/7</p>
                <p className="text-xs">Siempre disponibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
