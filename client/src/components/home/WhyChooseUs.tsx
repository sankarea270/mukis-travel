import { motion } from "framer-motion";
import { ShieldCheck, Heart, Clock, Users, Award, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    description: "Operamos con los más altos estándares de seguridad. Vehículos modernos y seguros de viaje incluidos."
  },
  {
    icon: Heart,
    title: "Pasión por el Servicio",
    description: "Cada viaje es una obra de arte que diseñamos con amor y atención a cada detalle."
  },
 
  {
    icon: Users,
    title: "Guías Expertos",
    description: "Profesionales locales certificados, bilingües y apasionados por compartir nuestra cultura."
  },
  {
    icon: Award,
    title: "Agencia Autorizada",
    description: "Registrados en MINCETUR con todos los permisos legales para operar tours en Perú."
  },
  {
    icon: Leaf,
    title: "Turismo Responsable",
    description: "Comprometidos con las comunidades locales y la preservación del medio ambiente."
  }
];

export function WhyChooseUs() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section ref={elementRef} className="py-20 bg-linear-to-br from-primary/5 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-bold tracking-wider uppercase text-sm"
            >
              ¿Por qué elegirnos?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading font-bold text-3xl md:text-4xl mt-2 mb-6 text-gray-900"
            >
              La Experiencia <span className="text-primary">Mukis Travel</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Somos más que una agencia de viajes. Somos guardianes de los tesoros del Perú, 
              comprometidos en crear experiencias auténticas e inolvidables para cada viajero 
              que confía en nosotros.
            </motion.p>

            <motion.div 
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {reasons.slice(0, 4).map((reason, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900 mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=1000"
                alt="Experiencia Mukis Travel"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <span className="font-heading font-bold text-4xl text-primary">10+</span>
                <p className="text-gray-600 text-sm mt-1">Años de experiencia</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-8 -right-8 bg-primary text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <span className="font-heading font-bold text-4xl">5000+</span>
                <p className="text-white/90 text-sm mt-1">Viajeros felices</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <motion.span
                    key={`star-${idx}`}
                    animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.6, repeat: Infinity, delay: idx * 0.15, ease: "easeInOut" }}
                    className="text-yellow-400 text-lg drop-shadow-[0_0_6px_rgba(234,179,8,0.7)]"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <div>
                <span className="font-bold text-gray-900">4.9/5</span>
                <p className="text-xs text-gray-500">en TripAdvisor</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Row: Additional Reasons */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.slice(4).map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 text-primary">
                <reason.icon size={32} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-2">
                  {reason.title}
                </h4>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
