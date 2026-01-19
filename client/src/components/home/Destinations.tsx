import { destinations } from "@/data/tours";
import { ArrowRight } from "lucide-react";

export function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Descubre el Perú</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">Destinos Populares</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-bold hover:underline">
            Ver todos los destinos <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white font-heading font-bold text-2xl mb-1">{dest.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Descubre más &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
