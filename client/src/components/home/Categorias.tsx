import { motion } from "framer-motion";
import { Link } from "wouter";
import { categories } from "@/data/tours";
import { Landmark, Compass, TreePine, Sparkles, Users, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

// Iconos más visuales para cada categoría
const categoryIcons: Record<string, any> = {
  cultural: Landmark,
  aventura: Compass,
  naturaleza: TreePine,
  mistico: Sparkles,
  vivencial: Users,
  trekking: Mountain
};

const categoryColors: Record<string, string> = {
  cultural: "from-amber-700 to-amber-900 border-amber-500/30",
  aventura: "from-orange-800 to-orange-950 border-orange-500/30",
  naturaleza: "from-emerald-800 to-emerald-950 border-emerald-500/30",
  mistico: "from-indigo-800 to-indigo-950 border-indigo-500/30",
  vivencial: "from-rose-800 to-rose-950 border-rose-500/30",
  trekking: "from-teal-800 to-teal-950 border-teal-500/30"
};

const categoryDescriptions: Record<string, string> = {
  cultural: "Historia y tradiciones ancestrales",
  aventura: "Adrenalina y deportes extremos",
  naturaleza: "Paisajes y vida silvestre",
  mistico: "Espiritualidad y ceremonias",
  vivencial: "Convivencia con comunidades",
  trekking: "Caminatas y expediciones"
};

export function Categorias() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='black' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 rounded-full mb-4">
            Categorías de Viaje
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 uppercase tracking-tight">
            Explora Tu Propia <span className="text-primary font-accent lowercase">Aventura</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category, idx) => {
            const Icon = categoryIcons[category.slug] || categoryIcons.cultural;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/categorias/${category.slug}`}>
                  <motion.div
                    className="group relative cursor-pointer h-full"
                    whileHover={{ y: -10 }}
                  >
                    {/* Borde Animado (SVGs) */}
                    <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none z-20 overflow-visible">
                      <motion.rect
                        x="0" y="0" width="100%" height="100%"
                        rx="28"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="3"
                        strokeDasharray="100 300"
                        animate={{ 
                          strokeDashoffset: [0, -400],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="opacity-0 group-hover:opacity-100"
                      />
                    </svg>

                    {/* Glow Effect */}
                    <div className="absolute inset-x-0 -bottom-2 h-1/2 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    {/* Card Content */}
                    <div className={cn(
                      "relative h-full aspect-square md:aspect-auto md:h-72 bg-linear-to-br rounded-3xl p-8 text-center overflow-hidden border transition-all duration-500 z-10",
                      categoryColors[category.slug],
                      "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] shadow-xl"
                    )}>
                      {/* Inca Pattern Overlay */}
                      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                            backgroundSize: "40px 40px"
                          }}
                        />
                      </div>

                      {/* Icon Container */}
                      <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                        <Icon className="text-white w-8 h-8 group-hover:rotate-12 transition-transform duration-500" />
                      </div>

                      {/* Name */}
                      <h3 className="relative z-10 font-heading font-black text-white text-xl uppercase tracking-wider mb-2">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="relative z-10 text-white/70 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {categoryDescriptions[category.slug]}
                      </p>

                      {/* Count Badge */}
                      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md border border-white/10 text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider group-hover:bg-primary transition-colors">
                        {category.count} Destinos
                      </div>

                      {/* Glass Shine Effect */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full bg-linear-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

