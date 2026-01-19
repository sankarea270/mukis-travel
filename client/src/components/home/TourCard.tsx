import { Tour } from "@/data/tours";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface TourCardProps {
  tour: Tour;
  index: number;
}

export function TourCard({ tour, index }: TourCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary font-bold px-3 py-1 rounded-full text-sm shadow-sm">
          {tour.duration}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">
          <MapPin size={14} className="text-primary" />
          {tour.location}
        </div>
        
        <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors text-gray-900">
          {tour.title}
        </h3>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-500 block">Desde</span>
            <span className="text-2xl font-bold text-primary">S/ {tour.price}</span>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-primary transition-colors">
            Ver detalles <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
