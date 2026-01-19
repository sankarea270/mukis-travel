import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logoUrl from "@assets/generated_images/mukis_travel_agency_logo_concept.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="Mukis Travel" className="h-12 w-auto brightness-0 invert" />
              <span className="font-heading font-bold text-2xl text-white uppercase">Mukis Travel</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Expertos en crear experiencias inolvidables en Perú. Tu aventura comienza aquí con seguridad, confianza y pasión por nuestra cultura.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paquetes Turísticos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog de Viajes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contáctanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={16} />
                <span>Av. El Sol 123, Cusco, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <span>+51 984 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span>ventas@mukistravel.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Boletín</h3>
            <p className="text-sm text-gray-400 mb-4">Suscríbete para recibir ofertas exclusivas.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-gray-800 border-none rounded-md px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
              />
              <button className="w-full bg-primary text-white font-bold py-2 rounded-md hover:bg-primary/90 transition-colors uppercase text-sm">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mukis Travel Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
