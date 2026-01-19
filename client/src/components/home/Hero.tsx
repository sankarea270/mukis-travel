import heroImage from "@assets/generated_images/travel_agency_hero_with_lush_green_landscape.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/90 text-xs font-bold uppercase tracking-widest mb-4">
            Descubre Perú
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-lg">
            Viaja, Explora y <br/>
            <span className="text-primary-foreground italic">Vive la Aventura</span>
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100 drop-shadow-md">
            Creamos experiencias únicas a tu medida. Tours personalizados en Cusco, Machu Picchu y todo el Perú.
          </p>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2 w-full">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="¿A dónde quieres ir?" 
                className="w-full h-12 px-4 rounded bg-gray-50 border-none focus:ring-1 focus:ring-primary text-gray-800"
              />
            </div>
            <div className="flex-1">
              <input 
                type="date" 
                className="w-full h-12 px-4 rounded bg-gray-50 border-none focus:ring-1 focus:ring-primary text-gray-800"
              />
            </div>
            <button className="h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded transition-colors uppercase tracking-wide">
              Buscar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
