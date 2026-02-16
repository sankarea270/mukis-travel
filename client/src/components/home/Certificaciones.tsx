import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

// Certificaciones y logos oficiales
const certifications = [
  {
    name: "MINCETUR",
    description: "Ministerio de Comercio Exterior y Turismo",
    logo: `${import.meta.env.BASE_URL}images/categories/ministerio.jpg`,
    zoom: "scale-150", 
    row: 1
  },
  {
    name: "PromPerú",
    description: "Comisión de Promoción del Perú",
    logo: `${import.meta.env.BASE_URL}images/categories/logodecomision.jpg`,
    zoom: "scale-140",
    row: 1
  },
  {
    name: "Marca Perú",
    description: "Marca País",
    logo: `${import.meta.env.BASE_URL}images/categories/logoperu.png`,
    zoom: "scale-125",
    row: 1
  },
  {
    name: "GERCETUR",
    description: "Gerencia Regional de Comercio Exterior, Turismo y Artesanía",
    logo: `${import.meta.env.BASE_URL}images/categories/logoger.png`,
    zoom: "scale-90",
    row: 1
  },
  {
    name: "Registro",
    description: "Agencia de Viajes y Turismo Registrada",
    logo: `${import.meta.env.BASE_URL}images/categories/viajes.jpg`,
    zoom: "scale-110",
    row: 2
  }
];

const awards = [
  { year: "2024", name: "TripAdvisor", badge: "Travelers' Choice" },
  { year: "2023", name: "TripAdvisor", badge: "Travelers' Choice" },
  { year: "2022", name: "TripAdvisor", badge: "Travelers' Choice" },
  { year: "2021", name: "TripAdvisor", badge: "Travelers' Choice" },
  { year: "2020", name: "TripAdvisor", badge: "Travelers' Choice" },
];

export function Certificaciones() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            {t.certifications.label}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl mt-2 text-gray-900">
            {t.certifications.title}
          </h2>
        </motion.div>

        {/* Main Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          {certifications.slice(0, 5).map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300">
                <div className="h-24 w-full flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 overflow-hidden">
                  {(cert as any).fallback ? (
                    <span className="font-heading font-bold text-gray-400 group-hover:text-primary text-lg transition-colors">
                      {(cert as any).fallback}
                    </span>
                  ) : (
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className={`max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity ${(cert as any).zoom || ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.nextElementSibling) {
                          (target.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                  )}
                </div>
                <p className="text-gray-600 text-xs text-center font-medium">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-sm max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* TripAdvisor Logo */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-16 h-16 bg-[#00AA6C] rounded-full flex items-center justify-center shadow-md">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-heading font-bold text-2xl text-gray-900 leading-tight">TripAdvisor</h3>
                <p className="text-[#00AA6C] font-medium text-sm">Travelers' Choice Awards</p>
              </div>
            </div>

            {/* Separator for desktop */}
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>

            {/* Awards Grid */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {awards.map((award, idx) => (
                <motion.div
                  key={award.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-[#00AA6C]/10 hover:bg-[#00AA6C] text-[#00AA6C] hover:text-white rounded-xl px-4 py-3 text-center transition-all duration-300 cursor-default">
                    <span className="font-heading font-bold text-xl block">{award.year}</span>
                    <span className="text-xs opacity-80">{award.badge}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          {t.certifications.footer}
        </motion.p>
      </div>
    </section>
  );
}
