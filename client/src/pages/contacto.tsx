import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n";
import {
  ChevronRight, Phone, Mail, MapPin, Clock, Send,
  MessageCircle, Globe, CheckCircle, Facebook, Instagram,
  Youtube, Headphones, Building2, Users, HelpCircle,
  Shield, FileText, ChevronDown, Sparkles, ArrowRight,
  Plane, Star, Zap
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["INFO: +51 960 470 892", "RESERVAS: +51 930 476 116"],
    action: "tel:+51960470892",
    actionText: "Llamar ahora",
    color: "from-blue-500 to-blue-600",
    bgGlow: "bg-blue-500/20"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["ESCRÍBENOS: +51 930 476 116", "EMERGENCIAS: +51 998 009 093"],
    action: "https://wa.me/51930476116",
    actionText: "Iniciar chat",
    color: "from-green-500 to-green-600",
    bgGlow: "bg-green-500/20"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["reservasmukistravel@gmail.com", "Soporte 24/7"],
    action: "mailto:reservasmukistravel@gmail.com",
    actionText: "Enviar email",
    color: "from-purple-500 to-purple-600",
    bgGlow: "bg-purple-500/20"
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    details: ["centro comercial San Andres n° 318", "Cusco, Perú"],
    action: "https://maps.google.com/?q=centro+comercial+San+Andres+318,Cusco,Peru",
    actionText: "Ver en mapa",
    color: "from-red-500 to-red-600",
    bgGlow: "bg-red-500/20"
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

const allFaqs = [
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
  },
  {
    question: "¿Cuál es el tiempo de respuesta?",
    answer: "Respondemos consultas en menos de 2 horas durante horario laboral, y en máximo 24 horas fuera de horario."
  },
  {
    question: "¿Tienen atención los fines de semana?",
    answer: "Sí, nuestra oficina de Cusco atiende los sábados. WhatsApp disponible 24/7 para emergencias."
  }
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/mukistravel", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "https://instagram.com/mukistravel", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "https://www.youtube.com/@mukistravelagency", label: "YouTube", color: "hover:bg-red-600" }
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Contacto() {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendVia, setSendVia] = useState<"email" | "whatsapp">("email");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    tourInterest: "",
    category: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (sendVia === "whatsapp") {
      const parts = [`Hola, soy ${formData.name}.`];
      if (formData.tourInterest) parts.push(`Tour de interés: ${formData.tourInterest}`);
      if (formData.category) parts.push(`Categoría: ${formData.category}`);
      if (formData.subject) parts.push(`Asunto: ${formData.subject}`);
      parts.push(`\n${formData.message}`);
      parts.push(`\nEmail: ${formData.email}`);
      if (formData.phone) parts.push(`Tel: ${formData.phone}`);
      const whatsappMessage = encodeURIComponent(parts.join("\n"));
      window.open(`https://wa.me/51930476116?text=${whatsappMessage}`, '_blank');
      setIsSubmitting(false);
    } else {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", tourInterest: "", category: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative pt-32 pb-28 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #059669 0%, #047857 30%, #0d9488 60%, #065f46 100%)",
              "linear-gradient(135deg, #047857 0%, #0d9488 30%, #059669 60%, #047857 100%)",
              "linear-gradient(135deg, #059669 0%, #047857 30%, #0d9488 60%, #065f46 100%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <FloatingParticles />

        {/* Decorative circles */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Dot pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center text-white"
          >
            <nav className="flex justify-center items-center gap-2 text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{t.contactPage.title}</span>
            </nav>

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
            >
              <Headphones size={40} className="text-white" />
            </motion.div>

            <motion.h1
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t.contactPage.title}
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {t.contactPage.subtitle}
            </motion.p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-6"
            >
              {[
                { icon: Clock, text: t.contactPage.responseTime },
                { icon: Globe, text: t.contactPage.bilingualSupport },
                { icon: Users, text: t.contactPage.happyClients }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <item.icon size={16} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.action}
                target={info.action.startsWith("http") ? "_blank" : undefined}
                rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`absolute inset-0 ${info.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <div className={`relative bg-gradient-to-r ${info.color} p-4 text-white`}>
                  <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                    <info.icon size={28} />
                  </motion.div>
                </div>
                <div className="relative p-5">
                  <h3 className="font-heading font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                  <div className="mt-4 flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    {info.actionText}
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight size={16} />
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="pt-16 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-5 py-2 rounded-full text-sm mb-4"
            >
              <Zap size={16} />
              Respuesta rápida garantizada
              <Zap size={16} />
            </motion.div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              {t.contactPage.form.send}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Completa el formulario y elige cómo prefieres que te contactemos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Unified Form + Info */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Form Side - 3 columns */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
                <motion.div
                  className="absolute top-4 right-4 w-24 h-24 bg-primary/[0.03] rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Form Header */}
                <div className="relative bg-gradient-to-r from-primary via-emerald-600 to-teal-600 p-6 md:p-8">
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "24px 24px"
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <div className="relative flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Send className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="text-white">
                      <h3 className="font-heading font-bold text-2xl">Escríbenos tu consulta</h3>
                      <p className="text-white/80 text-sm mt-1">Todos los campos con * son obligatorios</p>
                    </div>
                  </div>

                  {/* Mini stats in header */}
                  <div className="relative flex flex-wrap gap-4 mt-5">
                    {[
                      { icon: Clock, text: "< 2h respuesta" },
                      { icon: Shield, text: "100% seguro" },
                      { icon: Star, text: "4.9/5 satisfacción" }
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/90 border border-white/10"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <stat.icon size={12} />
                        {stat.text}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Form Body */}
                <div className="relative p-6 md:p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-10 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-5"
                      >
                        <CheckCircle size={40} className="text-white" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-gray-600">Gracias por contactarnos. Te responderemos en menos de 2 horas.</p>
                      <motion.div
                        className="mt-4 flex justify-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                          >
                            <Star size={20} className="text-amber-400 fill-amber-400" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1: Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            {t.contactPage.form.name} *
                          </label>
                          <div className="relative">
                            <input
                              type="text" name="name" value={formData.name} onChange={handleChange} required
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                              placeholder="Tu nombre completo"
                            />
                            <Users size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            {t.contactPage.form.email} *
                          </label>
                          <div className="relative">
                            <input
                              type="email" name="email" value={formData.email} onChange={handleChange} required
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                              placeholder="tu@email.com"
                            />
                            <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Row 2: Phone + Tour Interest */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            {t.contactPage.form.phone} / WhatsApp
                          </label>
                          <div className="relative">
                            <input
                              type="tel" name="phone" value={formData.phone} onChange={handleChange}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                              placeholder="+51 999 999 999"
                            />
                            <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            {t.contactPage.form.subjectOptions.tourInfo}
                          </label>
                          <div className="relative">
                            <select
                              name="tourInterest" value={formData.tourInterest} onChange={handleChange}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white hover:border-gray-300 appearance-none"
                            >
                              <option value="">Seleccionar tour...</option>
                              <option value="machu-picchu">Tours Machu Picchu</option>
                              <option value="cusco">Tours Cusco</option>
                              <option value="selva">Tours Selva Amazónica</option>
                              <option value="puno">Tours Lago Titicaca</option>
                              <option value="arequipa">Tours Arequipa</option>
                              <option value="otro">Otro / Personalizado</option>
                            </select>
                            <Plane size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Row 3: Category + Subject */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            Tipo de consulta
                          </label>
                          <div className="relative">
                            <select
                              name="category" value={formData.category} onChange={handleChange}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white hover:border-gray-300 appearance-none"
                            >
                              <option value="">Seleccionar tipo...</option>
                              <option value="Consulta de tour">{t.supportPage.form.options.tourQuery}</option>
                              <option value="Reserva existente">{t.supportPage.form.options.existingBooking}</option>
                              <option value="Modificar reserva">{t.supportPage.form.options.modifyBooking}</option>
                              <option value="Cancelación">{t.supportPage.form.options.cancellation}</option>
                              <option value="Queja o reclamo">{t.supportPage.form.options.complaint}</option>
                              <option value="Otro">{t.contactPage.form.subjectOptions.other}</option>
                            </select>
                            <HelpCircle size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.35 }}
                          className="group"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                            {t.contactPage.form.subject} *
                          </label>
                          <div className="relative">
                            <input
                              type="text" name="subject" value={formData.subject} onChange={handleChange} required
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                              placeholder="¿En qué podemos ayudarte?"
                            />
                            <FileText size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group"
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                          {t.contactPage.form.message} *
                        </label>
                        <textarea
                          name="message" value={formData.message} onChange={handleChange} required rows={5}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                          placeholder="Cuéntanos sobre tu viaje ideal, fechas, número de personas, preferencias..."
                        />
                      </motion.div>

                      {/* Submit Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 }}
                        className="flex flex-col sm:flex-row gap-3 pt-2"
                      >
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => setSendVia("email")}
                          whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(5, 150, 105, 0.3)" }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-4 bg-gradient-to-r from-primary to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting && sendVia === "email" ? (
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
                              {t.contactPage.form.send}
                              <Sparkles size={16} className="opacity-70" />
                            </>
                          )}
                        </motion.button>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => setSendVia("whatsapp")}
                          whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(34, 197, 94, 0.3)" }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-green-400/30"
                        >
                          {isSubmitting && sendVia === "whatsapp" ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Abriendo WhatsApp...
                            </>
                          ) : (
                            <>
                              <MessageCircle size={20} />
                              Enviar por WhatsApp
                            </>
                          )}
                        </motion.button>
                      </motion.div>

                      {/* Trust note below buttons */}
                      <motion.p
                        className="text-center text-xs text-gray-400 pt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <Shield size={12} className="inline mr-1 -mt-0.5" />
                        Tu información está protegida y nunca será compartida con terceros
                      </motion.p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info Side - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
                  {/* FAQ */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md"
                        whileHover={{ rotate: -10, scale: 1.1 }}
                      >
                        <HelpCircle className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h2 className="font-heading font-bold text-2xl text-gray-900">{t.contactPage.faq}</h2>
                        <p className="text-gray-500 text-sm">Resolvemos tus dudas al instante</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {allFaqs.map((faq, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.question}</span>
                            <motion.div
                              animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                              transition={{ duration: 0.3, type: "spring" }}
                              className="shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                            >
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {expandedFaq === idx && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-3">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Offices */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
                      <Building2 className="text-primary" />
                      {t.contactPage.offices}
                    </h2>
                    <div className="space-y-4">
                      {offices.map((office, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className={`p-5 rounded-2xl border-2 transition-all ${
                            office.isMain
                              ? "bg-primary/5 border-primary shadow-md"
                              : "bg-gray-50 border-transparent hover:border-gray-200 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <motion.div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                                office.isMain ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                              }`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <MapPin size={24} />
                            </motion.div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-heading font-bold text-lg text-gray-900">{office.city}</h3>
                                {office.isMain && (
                                  <motion.span
                                    className="text-xs bg-primary text-white px-2 py-0.5 rounded-full"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    Principal
                                  </motion.span>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><Phone size={12} />{office.phone}</span>
                                <span className="flex items-center gap-1"><Clock size={12} />{office.hours}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Social Media */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden"
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                    <h3 className="font-heading font-bold text-xl mb-2 relative">{t.contactPage.followUs}</h3>
                    <p className="text-white/70 text-sm mb-6 relative">
                      Mantente al día con nuestras ofertas y descubre Perú
                    </p>
                    <div className="flex gap-3 relative">
                      {socialLinks.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all border border-white/10 ${social.color}`}
                          aria-label={social.label}
                        >
                          <social.icon size={22} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">{t.contactPage.findUs}</h2>
            <p className="text-gray-600">Visítanos en nuestra oficina principal en el corazón de Cusco</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2584754371!2d-71.97877!3d-13.51875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5f0a8c0e7b5%3A0x51b0c3c09a3b2f0!2sPlaza%20de%20Armas%2C%20Cusco!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Ubicación Mukis Travel"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { icon: Shield, title: t.supportPage.securePay, desc: "Transacciones protegidas" },
              { icon: FileText, title: t.supportPage.authorized, desc: "Operador turístico oficial" },
              { icon: Headphones, title: t.supportPage.support247, desc: "Siempre disponibles" },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <badge.icon className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-gray-900">{badge.title}</p>
                  <p className="text-xs">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <MessageCircle size={48} className="mx-auto mb-4" />
            </motion.div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              ¿Prefieres chatear por WhatsApp?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Respuesta inmediata, asesoría personalizada y cotizaciones al instante
            </p>
            <motion.a
              href="https://wa.me/51930476116?text=Hola,%20me%20interesa%20información%20sobre%20sus%20tours"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg"
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
