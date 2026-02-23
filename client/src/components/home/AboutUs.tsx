import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Award, Eye, Heart, Shield, Target, UserCheck, Users, MapPin, FileCheck, BadgeCheck } from "lucide-react";

export function AboutUs() {
  const { t } = useLanguage();

  const team = [
    {
      name: "Gerente General",
      role: "Liderazgo y Estrategia",
      image: "/images/categories/jefa.jpeg",
      description: "Nuestra gerente general cuenta con más de 15 años de experiencia en el sector turístico, liderando con pasión y compromiso para ofrecer experiencias inolvidables a nuestros clientes.",
    },
    {
      name: "Equipo de Marketing",
      role: "Estrategias de Publicidad",
      image: "/images/categories/marketing.jpeg",
      size: "h-96",
    },
    {
      name: "Equipo de Reservas",
      role: "Gestión de Reservas",
      image: "/images/categories/reservas.jpeg",
      size: "h-20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const bgAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <section className="relative font-sans">
      {/* Hero Section con Imagen de Fondo */}
      <div className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{ backgroundImage: "url('/images/categories/fondo11.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay oscuro */}
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4 relative z-20 text-center text-white"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-100 font-medium px-6 py-2 rounded-full text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <MapPin className="w-4 h-4" /> Desde Cusco para el mundo
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-5xl md:text-7xl mb-8 tracking-tight text-shadow-lg">
            Quiénes <span className="text-emerald-400">Somos</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-100 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-shadow-sm">
            Mukis Travel es una agencia de viajes y operador turístico especializado en la creación de experiencias inolvidables en Perú. Con sede en la histórica Ciudad del Cusco.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-12">
            <div className="w-1 h-24 bg-linear-to-b from-emerald-400 to-transparent mx-auto rounded-full opacity-70" />
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Elementos decorativos de fondo animados */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            variants={bgAnimation}
            animate="animate"
            className="absolute top-40 -left-40 w-150 h-150 bg-emerald-100/40 rounded-full blur-[100px]" 
          />
          <motion.div 
            variants={bgAnimation}
            animate="animate"
            transition={{ delay: 5, duration: 25 }}
            className="absolute top-1/2 -right-40 w-125 h-125 bg-teal-100/40 rounded-full blur-[100px]" 
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Misión y Visión */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto"
        >
          {/* Misión */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-green-500 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Satisfacer y superar las expectativas de nuestros clientes mediante la creación de experiencias turísticas únicas y memorables. Nos comprometemos a ofrecer un servicio personalizado de excelencia, diseñando paquetes turísticos innovadores a precios accesibles.
              </p>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-teal-500 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Consolidarnos como la agencia de viajes y operador turístico líder en la región de Cusco, reconocidos por nuestra excelencia operativa y compromiso con la satisfacción del cliente, contribuyendo así al desarrollo sostenible del turismo en nuestra región.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Gerente General - Featured Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-24 max-w-6xl mx-auto border border-gray-100"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative min-h-125">
              <div className="absolute inset-0 bg-gray-900/10 z-10" />
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-full h-full object-cover absolute inset-0 transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-500 to-transparent md:hidden" />
              <div className="absolute left-0 top-10 bottom-10 w-1 bg-linear-to-b from-transparent via-emerald-500 to-transparent hidden md:block" />
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3 text-emerald-600 font-semibold uppercase tracking-widest text-sm">
                  <UserCheck className="w-5 h-5" />
                  <span>Nuestro Liderazgo</span>
                </div>
                <h4 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-2">
                  {team[0].name}
                </h4>
                <p className="text-teal-600 font-semibold text-xl mb-6 font-heading border-b border-gray-100 pb-4 inline-block">
                  {team[0].role}
                </p>
                <p className="text-gray-600 leading-loose text-lg italic font-light">
                  "{team[0].description}"
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Nuestro Equipo (Marketing y Reservas) */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 inline-block relative"
          >
            <h3 className="font-heading font-bold text-4xl text-gray-900 relative z-10">
              Nuestro Equipo Profesional
            </h3>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-200/50 z-0 rotate-1 rounded-full" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
            {team.slice(1).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-4 pb-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md h-96"> {/* Altura fija para contenedor */}
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                    <span className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                      Experiencia Garantizada
                    </span>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <h4 className="font-heading font-bold text-2xl text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {member.name}
                </h4>
                <p className="text-gray-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nuestros Valores */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-emerald-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl max-w-7xl mx-auto mb-24"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              Nuestros Valores
            </h3>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full" />
            <p className="mt-6 text-emerald-100 max-w-2xl mx-auto text-lg font-light">
              Los pilares que fundamentan cada una de nuestras acciones y servicios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { title: "Excelencia", description: "Buscamos la perfección en cada detalle para superar expectativas.", icon: <Award className="w-8 h-8" /> }, // Confianza -> Excelencia (más acorde a valores)
              { title: "Integridad", description: "Actuamos con honestidad y transparencia en todas nuestras relaciones.", icon: <Shield className="w-8 h-8" /> }, // Seguridad -> Integridad
              { title: "Pasión", description: "Amamos lo que hacemos y transmitimos esa energía en cada viaje.", icon: <Heart className="w-8 h-8" /> }, // Calidad -> Pasión
              { title: "Sostenibilidad", description: "Comprometidos con el respeto y preservación de nuestro patrimonio.", icon: <Users className="w-8 h-8" /> }, // Compromiso -> Sostenibilidad
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg mx-auto">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-xl mb-3 text-center">
                  {item.title}
                </h4>
                <p className="text-emerald-100 text-sm text-center font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Licencias y Autorizaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-emerald-600 font-semibold uppercase tracking-widest text-sm">
            <BadgeCheck className="w-5 h-5" />
            <span>Garantía y Legalidad</span>
          </div>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Licencias y Autorizaciones
          </h3>
          <p className="text-gray-600 mb-10 text-lg">
            Operamos bajo el cumplimiento estricto de todas las normativas legales del turismo en Perú, garantizando seguridad y formalidad en cada uno de nuestros servicios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Espacio para imágenes de licencias */}
            <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-100 h-64 flex items-center justify-center">
               <div className="text-center text-gray-400">
                  <FileCheck className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <span className="text-sm">Licencia Municipal / DIRCETUR</span>
               </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-md border border-gray-100 h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                   <FileCheck className="w-12 h-12 mx-auto mb-2 opacity-50" />
                   <span className="text-sm">Certificación Tour Operador</span>
                </div>
            </div>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}