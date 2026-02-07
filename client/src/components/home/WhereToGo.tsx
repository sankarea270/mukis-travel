import { motion } from "framer-motion";
import { Compass, MapPin, Calendar, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";



export function WhereToGo() {
  const { t } = useLanguage();

  const suggestions = [
    {
      icon: Compass,
      title: t.whereToGo.cards.firstTime.title,
      description: t.whereToGo.cards.firstTime.desc,
      link: "/paquetes/machu-picchu-full-day",
      color: "from-teal-800 to-teal-950 border-teal-500/20",
      accent: "text-teal-400"
    },
    {
      icon: MapPin,
      title: t.whereToGo.cards.adventure.title,
      description: t.whereToGo.cards.adventure.desc,
      link: "/paquetes/montana-de-colores",
      color: "from-orange-800 to-orange-950 border-orange-500/20",
      accent: "text-orange-400"
    },
    {
      icon: Calendar,
      title: t.whereToGo.cards.shortTime.title,
      description: t.whereToGo.cards.shortTime.desc,
      link: "/paquetes",
      color: "from-indigo-800 to-indigo-950 border-indigo-500/20",
      accent: "text-indigo-400"
    },
    {
      icon: HelpCircle,
      title: t.whereToGo.cards.dontKnow.title,
      description: t.whereToGo.cards.dontKnow.desc,
      link: "https://wa.me/51930476116",
      color: "from-amber-800 to-amber-950 border-amber-500/20",
      accent: "text-amber-400"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 0 L100 50 L50 100 Z' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/10 text-primary font-bold tracking-[0.3em] uppercase text-xs px-6 py-2 rounded-full mb-6 border border-primary/20"
          >
            {t.whereToGo.badge}
          </motion.span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 uppercase tracking-tight mb-6">
            {t.whereToGo.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.whereToGo.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <motion.a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -15 }}
                className="group relative block h-full"
              >
                {/* Borde Animado Dorado */}
                <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none z-20 overflow-visible">
                  <motion.rect
                    x="0" y="0" width="100%" height="100%"
                    rx="32"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeDasharray="80 300"
                    animate={{ 
                      strokeDashoffset: [0, -380],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="opacity-0 group-hover:opacity-100"
                  />
                </svg>

                {/* Card Container */}
                <div className={cn(
                  "relative h-full bg-linear-to-br rounded-4xl p-10 text-white overflow-hidden border-2 transition-all duration-700 z-10",
                  item.color,
                  "group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] shadow-2xl"
                )}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L20 0 M20 40 L40 20' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "30px 30px"
                      }}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with Glowing Backdrop */}
                    <div className="mb-8 relative shrink-0">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                        <item.icon size={32} className="group-hover:text-white transition-colors" />
                      </div>
                      <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="font-heading font-black text-2xl mb-4 leading-tight uppercase tracking-wide group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-8 grow group-hover:text-white/90 transition-colors">
                      {item.description}
                    </p>

                    {/* Action Link */}
                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-500">
                      {t.whereToGo.viewProposal}
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  {/* Glass Shine effect */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

