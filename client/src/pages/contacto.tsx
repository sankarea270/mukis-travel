import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ChevronRight, Phone, Mail, MapPin, Clock, Send, 
  MessageCircle, Globe, CheckCircle, Facebook, Instagram, 
  Youtube, Headphones, Building2, Users
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

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

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["INFO: +51 960 470 892", "RESERVAS: +51 930 476 116"],
    action: "tel:+51960470892",
    actionText: "Llamar ahora",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["ESCRÍBENOS: +51 930 476 116", "EMERGENCIAS: +51 998 009 093"],
    action: "https://wa.me/51930476116",
    actionText: "Iniciar chat",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservasmukistravel@gmail.com", "Soporte 24/7"],
    action: "mailto:reservasmukistravel@gmail.com",
    actionText: "Enviar email",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    details: ["centro comercial San Andres n° 318", "Cusco, Perú"],
    action: "https://maps.google.com/?q=centro+comercial+San+Andres+318,Cusco,Peru",
    actionText: "Ver en mapa",
    color: "from-red-500 to-red-600"
  }
];

const offices = [
  {
    city: "Cusco",
    address: "centro comercial San Andres n° 318",
    phone: "+51 960 470 892",
    hours: "Lun - Sáb: 8:00 AM - 7:00 PM",
    isMain: true
  },
  {
    city: "Reservas",
    address: "Atención Digital 24/7",
    phone: "+51 930 476 116",
    hours: "Todos los días",
    isMain: false
  },
  {
    city: "Emergencias",
    address: "Atención Prioritaria",
    phone: "+51 998 009 093",
    hours: "Atención 24 Horas",
    isMain: false
  }
];

const faqs = [
  {
    question: "¿Cuál es el tiempo de respuesta?",
    answer: "Respondemos consultas en menos de 2 horas durante horario laboral, y en máximo 24 horas fuera de horario."
  },
  {
    question: "¿Puedo modificar mi reserva?",
    answer: "Sí, las modificaciones están sujetas a disponibilidad. Contáctanos con al menos 48 horas de anticipación."
  },
  {
    question: "¿Tienen atención los fines de semana?",
    answer: "Sí, nuestra oficina de Cusco atiende los sábados. WhatsApp disponible 24/7 para emergencias."
  }
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    tourInterest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        tourInterest: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-linear-to-br from-primary to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Animated Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
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
              <span className="text-white font-medium">Contacto</span>
            </nav>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Headphones size={40} className="text-white" />
            </motion.div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a planificar tu aventura perfecta en Perú. ¡Escríbenos!
            </p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mt-10"
            >
              {[
                { icon: Clock, text: "Respuesta < 2h" },
                { icon: Globe, text: "Atención en Español e Inglés" },
                { icon: Users, text: "+10,000 Clientes Satisfechos" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <item.icon size={16} />
                  <span>{item.text}</span>
                </div>
              ))}
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

      {/* Contact Cards */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.action}
                target={info.action.startsWith("http") ? "_blank" : undefined}
                rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-linear-to-r ${info.color} p-4 text-white`}>
                  <info.icon size={28} />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                  <div className="mt-4 flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    {info.actionText}
                    <ChevronRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y te responderemos lo antes posible
              </p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="juan@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+51 999 999 999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ¿Te interesa algún tour?
                      </label>
                      <select
                        name="tourInterest"
                        value={formData.tourInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="machu-picchu">Tours Machu Picchu</option>
                        <option value="cusco">Tours Cusco</option>
                        <option value="selva">Tours Selva Amazónica</option>
                        <option value="puno">Tours Lago Titicaca</option>
                        <option value="arequipa">Tours Arequipa</option>
                        <option value="otro">Otro / Personalizado</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tu viaje ideal, fechas, número de personas, preferencias..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
            
            {/* Info Side */}
            <div className="space-y-8">
              {/* Offices */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                  <Building2 className="text-primary" />
                  Nuestras Oficinas
                </h2>
                
                <div className="space-y-4">
                  {offices.map((office, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-5 rounded-2xl border-2 transition-all ${
                        office.isMain
                          ? "bg-primary/5 border-primary"
                          : "bg-gray-50 border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          office.isMain ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                        }`}>
                          <MapPin size={24} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-heading font-bold text-lg text-gray-900">
                              {office.city}
                            </h3>
                            {office.isMain && (
                              <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                                Principal
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Phone size={12} />
                              {office.phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {office.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white"
              >
                <h3 className="font-heading font-bold text-xl mb-4">Síguenos en Redes</h3>
                <p className="text-white/70 text-sm mb-6">
                  Mantente al día con nuestras ofertas y descubre Perú a través de nuestras redes sociales
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
                    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
                    { icon: Youtube, href: "https://www.youtube.com/@mukistravelagency", label: "YouTube", color: "hover:bg-red-600" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              {/* Quick FAQs */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  Preguntas Frecuentes
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-1">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link href="/soporte">
                  <span className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all cursor-pointer">
                    Ver más preguntas frecuentes
                    <ChevronRight size={18} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">
              Encuéntranos
            </h2>
            <p className="text-gray-600">
              Visítanos en nuestra oficina principal en el corazón de Cusco
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2584754371!2d-71.97877!3d-13.51875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5f0a8c0e7b5%3A0x51b0c3c09a3b2f0!2sPlaza%20de%20Armas%2C%20Cusco!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mukis Travel"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-linear-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿Prefieres chatear por WhatsApp?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Respuesta inmediata, asesoría personalizada y cotizaciones al instante
            </p>
            <motion.a
              href="https://wa.me/51930476116?text=Hola,%20me%20interesa%20información%20sobre%20sus%20tours"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all"
            >
              <MessageCircle size={24} />
              Iniciar Chat en WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
