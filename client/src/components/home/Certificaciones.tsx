import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

// Certificaciones y logos oficiales
const certifications = [
  {
    name: "MINCETUR",
    description: "Ministerio de Comercio Exterior y Turismo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logotipo_del_MINCETUR.svg/200px-Logotipo_del_MINCETUR.svg.png",
    row: 1
  },
  {
    name: "PromPerú",
    description: "Comisión de Promoción del Perú",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_PROMPER%C3%9A.svg/200px-Logo_PROMPER%C3%9A.svg.png",
    row: 1
  },
  {
    name: "Y tú qué planes",
    description: "Campaña Nacional de Turismo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Y_t%C3%BA_qu%C3%A9_planes.png/220px-Y_t%C3%BA_qu%C3%A9_planes.png",
    row: 1
  },
  {
    name: "DIRCETUR",
    description: "Dirección Regional de Comercio Exterior y Turismo",
    logo: "/images/categories/logom-removebg-preview.png",
    fallback: "DIRCETUR",
    row: 1
  },
  {
    name: "CALTUR",
    description: "Plan Nacional de Calidad Turística",
    logo: "https://www.mincetur.gob.pe/wp-content/uploads/documentos/turismo/CALTUR/Logo-CALTUR.png",
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

const isoLogos = [
  { name: "ISO 9001", description: "Sistema de Gestión de Calidad" },
  { name: "ISO 14001", description: "Gestión Ambiental" },
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
                <div className="h-16 flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {cert.fallback ? (
                    <span className="font-heading font-bold text-gray-400 group-hover:text-primary text-lg transition-colors">
                      {cert.fallback}
                    </span>
                  ) : (
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
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
          className="bg-white rounded-3xl p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* TripAdvisor Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#00AA6C] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-gray-900">TripAdvisor</h3>
                <p className="text-gray-600 text-sm">Travelers' Choice Awards</p>
              </div>
            </div>

            {/* Awards Grid */}
            <div className="flex flex-wrap items-center justify-center gap-4">
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

            {/* ISO Badges */}
            <div className="flex gap-4">
              {isoLogos.map((iso, idx) => (
                <div
                  key={iso.name}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-heading font-bold text-xs text-gray-600">{iso.name}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{iso.description}</p>
                </div>
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
