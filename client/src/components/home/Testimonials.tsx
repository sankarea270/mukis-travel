import { testimonials } from "@/data/tours";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (emblaApi) {
      // Auto play simple implementation
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Lo que dicen nuestros viajeros</h2>
          <p className="mt-4 text-primary-100 text-lg">Historias reales de aventuras inolvidables</p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl h-full flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <span className="text-xs text-gray-400">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
