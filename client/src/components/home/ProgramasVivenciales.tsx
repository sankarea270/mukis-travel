import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Users, Leaf, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";

export function ProgramasVivenciales() {
  const { t } = useLanguage();

  const programas = [
    {
      id: 1,
      title: t.vivencial.program1Title,
      description: t.vivencial.program1Desc,
      image: "https://images.unsplash.com/photo-1591878506615-16b46d1d00b1?auto=format&fit=crop&q=80&w=800",
      duration: t.vivencial.program1Duration,
      location: t.vivencial.program1Location,
      highlights: [t.vivencial.program1H1, t.vivencial.program1H2, t.vivencial.program1H3]
    },
    {
      id: 2,
      title: t.vivencial.program2Title,
      description: t.vivencial.program2Desc,
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=800",
      duration: t.vivencial.program2Duration,
      location: t.vivencial.program2Location,
      highlights: [t.vivencial.program2H1, t.vivencial.program2H2, t.vivencial.program2H3]
    },
    {
      id: 3,
      title: t.vivencial.program3Title,
      description: t.vivencial.program3Desc,
      image: "https://images.unsplash.com/photo-1548820579-0fad72e0e7fc?auto=format&fit=crop&q=80&w=800",
      duration: t.vivencial.program3Duration,
      location: t.vivencial.program3Location,
      highlights: [t.vivencial.program3H1, t.vivencial.program3H2, t.vivencial.program3H3]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1920"
          alt="Andes Peruanos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-2xl mb-8 border border-white/20"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <span className="text-primary font-bold text-lg">PACHA</span>
                <p className="text-white/70 text-xs">{t.vivencial.badge}</p>
              </div>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
              {t.vivencial.title} <span className="text-primary">{t.vivencial.titleHighlight}</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t.vivencial.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold">{t.vivencial.communities}</p>
                  <p className="text-gray-400 text-sm">{t.vivencial.communitiesSub}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Heart size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold">{t.vivencial.experiences}</p>
                  <p className="text-gray-400 text-sm">{t.vivencial.experiencesSub}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Leaf size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-white font-bold">{t.vivencial.tourism}</p>
                  <p className="text-gray-400 text-sm">{t.vivencial.tourismSub}</p>
                </div>
              </div>
            </div>

            <Link href="/paquetes?category=vivencial">
              <motion.span
                className="inline-flex items-center gap-3 bg-primary text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.vivencial.explore}
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>

          {/* Right - Program Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {programas.map((programa, idx) => (
              <motion.div
                key={programa.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={programa.image}
                      alt={programa.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary text-sm font-medium">{programa.location}</span>
                      <span className="text-white/50">•</span>
                      <span className="text-gray-400 text-sm">{programa.duration}</span>
                    </div>
                    
                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors mb-2">
                      {programa.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {programa.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {programa.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-white/5 text-white/70 text-xs px-2.5 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
