import { Link } from "wouter";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
                🍀
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-white uppercase block leading-none">
                  Mukis Travel
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Agency</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Guardianes de los tesoros del Perú. Creamos experiencias de viaje auténticas e inolvidables, 
              respetando las comunidades locales y el medio ambiente.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com/@mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://tiktok.com/@mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/paquetes" className="hover:text-primary transition-colors">Paquetes Turísticos</Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-primary transition-colors">Categorías de Tours</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog de Viajes</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contáctanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={16} />
                <span>Cusco, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <a href="tel:+51917608749" className="hover:text-primary transition-colors">
                  +51 917 608 749
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <a href="mailto:contacto@mukistravel.com" className="hover:text-primary transition-colors">
                  contacto@mukistravel.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary shrink-0" size={16} />
                <span>Lun - Sáb: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
            
            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/51917608749?text=Hola,%20me%20gustaría%20información%20sobre%20tours"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#25D366] text-white font-medium px-5 py-2.5 rounded-full hover:shadow-lg transition-all text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Boletín</h3>
            <p className="text-sm text-gray-400 mb-4">
              Suscríbete para recibir ofertas exclusivas y tips de viaje.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors uppercase text-sm"
              >
                Suscribirse
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-3">Agencia Autorizada</p>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-medium">MINCETUR</div>
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-medium">DIRCETUR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Mukis Travel Agency. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Libro de Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
