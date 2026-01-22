import { motion } from "framer-motion";
import { Compass, MapPin, Calendar, HelpCircle } from "lucide-react";

const suggestions = [
  {
    icon: Compass,
    title: "¿Primera vez en Perú?",
    description: "Te recomendamos empezar por Cusco y Machu Picchu, la experiencia más icónica del país.",
    link: "/paquetes/machu-picchu-full-day",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: MapPin,
    title: "¿Buscas aventura?",
    description: "La Montaña de Colores y la Laguna Humantay son perfectas para los amantes del trekking.",
    link: "/paquetes/montana-de-colores",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Calendar,
    title: "¿Poco tiempo?",
    description: "Tenemos tours de medio día y full day para que aproveches al máximo tu visita.",
    link: "/paquetes",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: HelpCircle,
    title: "¿No sabes por dónde empezar?",
    description: "Nuestros asesores pueden ayudarte a armar el itinerario perfecto según tus gustos.",
    link: "https://wa.me/51917608749",
    color: "from-purple-500 to-pink-600"
  }
];

export function WhereToGo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Te ayudamos a decidir
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">
            ¿No sabes a dónde viajar?
          </h2>
          <p className="mt-4 text-gray-600">
            Perú tiene infinitas experiencias para ofrecer. Aquí te damos algunas ideas según tu perfil de viajero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestions.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`block group relative bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id={`grid-${idx}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#grid-${idx})`} />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-3">
                  {item.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 right-6"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
