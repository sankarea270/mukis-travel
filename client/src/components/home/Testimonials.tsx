import { testimonials } from "@/data/tours";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on("select", onSelect);
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 6000);
      return () => {
        clearInterval(interval);
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-emerald-600 to-teal-700 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
          <Quote size={400} />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            ⭐ +5000 Viajeros Satisfechos
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Lo que dicen nuestros viajeros</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Historias reales de aventuras inolvidables en el corazón del Perú</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl h-full flex flex-col relative group hover:shadow-3xl transition-shadow duration-300">
                    {/* Quote mark */}
                    <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote size={18} className="text-white" />
                    </div>
                    
                    <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 mb-6 grow leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center font-bold text-white text-lg shadow-md">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          📍 {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <motion.button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
