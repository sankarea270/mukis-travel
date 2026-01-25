import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles } from "lucide-react";

export function AnimatedFeatures() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: "🏔️",
      title: "Tours Auténticos",
      description: "Experiencias locales genuinas con guías apasionados",
      delay: 0,
    },
    {
      icon: "🌿",
      title: "Sostenible",
      description: "Comprometidos con el medio ambiente y comunidades",
      delay: 0.1,
    },
    {
      icon: "⭐",
      title: "Premium",
      description: "Servicios de alta calidad con detalles personalizados",
      delay: 0.2,
    },
    {
      icon: "💬",
      title: "Soporte 24/7",
      description: "Asistencia disponible en español e inglés",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={elementRef} className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="text-primary animate-glow-pulse" size={24} />
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Lo que nos hace especial
            </span>
            <Sparkles className="text-primary animate-glow-pulse" size={24} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Tu Viaje, Nuestro Pasión
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ofrecemos mucho más que tours. Brindamos experiencias transformadoras
            que te conectan profundamente con la belleza del Perú.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
                {/* Background animation */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl transition-all duration-500"
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                    className="mt-4 h-1 bg-linear-to-r from-primary to-accent origin-left"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Descubre por qué miles de viajeros eligen Mukis Travel
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Ver Nuestros Tours
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
