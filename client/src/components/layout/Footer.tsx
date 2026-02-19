import { Link } from "wouter";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, CreditCard, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

export function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { name: t.footer.aboutUs, href: "/sobre-nosotros" },
    { name: t.footer.workWithUs, href: "/trabaja-con-nosotros" },
    { name: t.footer.paymentMethods, href: "/contacto" },
    { name: t.footer.knowPeru, href: "/guia-peru" },
  ];

  const categoryLinks = [
    { name: t.categorias.names.cultural, href: "/categorias/cultural" },
    { name: t.categorias.names.aventura, href: "/categorias/aventura" },
    { name: t.categorias.names.mistico, href: "/categorias/mistico" },
    { name: t.categorias.names.vivencial, href: "/categorias/vivencial" },
    { name: t.categorias.names.naturaleza, href: "/categorias/naturaleza" },
    { name: t.categorias.names.trekking, href: "/categorias/trekking" },
  ];

  const regionLinks = [
    { name: t.regions.costa.name, href: "/tours/costa" },
    { name: t.regions.sierra.name, href: "/tours/sierra" },
    { name: t.regions.selva.name, href: "/tours/selva" },
  ];

  const supportLinks = [
    // { name: t.footer.faq, href: "/contacto" }, // Eliminado Preguntas Frecuentes
    { name: t.footer.contact, href: "/contacto" },
    { name: t.footer.claimsBook, href: "/contacto" },
    { name: t.footer.privacy, href: "/politica-privacidad" },
    { name: t.footer.terms, href: "/terminos-condiciones" },
  ];
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Franja con diseño incaico Dinámica */}
      <div className="h-12 sm:h-14 w-full bg-[#064e3b] relative flex items-center overflow-hidden border-y-2 border-[#D4AF37]/60 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
        {/* Patrón Animado Infinito */}
        <motion.div 
          className="absolute inset-0 opacity-50"
          animate={{ 
            backgroundPositionX: ["0px", "80px"],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='48' viewBox='0 0 80 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24 L20 4 L60 4 L80 24 L60 44 L20 44 Z' fill='none' stroke='%23D4AF37' stroke-width='2'/%3E%3Cpath d='M30 24 L50 24 M40 14 L40 34' stroke='%23D4AF37' stroke-width='1'/%3E%3Ccircle cx='40' cy='24' r='3' fill='%23D4AF37'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "80px 48px"
          }}
        />
        
        {/* Efecto de Brillo (Shine) Dinámico */}
        <motion.div 
          className="absolute inset-0 w-1/4 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ 
            left: ["-100%", "200%"],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />

        <div className="container mx-auto px-3 sm:px-4 relative flex justify-center items-center">
          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent grow mx-4 hidden md:block opacity-30" />
          <div className="bg-[#064e3b]/90 backdrop-blur-md px-4 sm:px-6 md:px-10 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.1)] flex items-center gap-3 sm:gap-5 max-w-full">
            <motion.span 
              className="text-[#D4AF37] font-heading font-black text-xs uppercase tracking-[0.3em] hidden md:inline"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Mukis Travel Agency
            </motion.span>
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37] animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping opacity-40" />
            </div>
            <span className="text-[#D4AF37] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-center">{t.footer.authenticExperiences}</span>
          </div>
          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent grow mx-4 hidden md:block opacity-30" />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3Cpath d='M30 30 L70 30 L70 70 L30 70 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/categories/logom-removebg-preview.png`}
                alt="Mukis Travel Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <span className="font-heading font-bold text-2xl text-white uppercase block leading-none">
                  Mukis Travel
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Agency</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href="https://facebook.com/mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:-rotate-6 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white hover:scale-110 hover:rotate-6 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@mukistravelagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-[#FF0000] hover:text-white hover:scale-110 hover:-rotate-6 transition-all"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://tiktok.com/@mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 rounded-full hover:bg-black hover:text-white hover:scale-110 hover:rotate-6 transition-all"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nuestra Empresa */}
          <div className="group">
            <h3 className="text-[#D4AF37] font-heading font-bold text-lg mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t.footer.company}
            </h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías de Tour */}
          <div className="group">
            <h3 className="text-[#D4AF37] font-heading font-bold text-lg mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t.footer.tourCategories}
            </h3>
            <ul className="space-y-3 text-sm">
              {categoryLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours por Región (mejorado) */}
          <div className="group">
            <h3 className="text-[#D4AF37] font-heading font-bold text-lg mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t.nav.toursByRegion}
            </h3>
            <ul className="space-y-3 text-sm">
              {regionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div className="group">
            <h3 className="text-[#D4AF37] font-heading font-bold text-lg mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t.footer.support}
            </h3>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary hover:translate-x-1 inline-block transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Enhanced Contact Info: two phones, email, address */}
            <div className="mt-6 pt-4 border-t border-gray-800 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="pt-1">
                  <Phone className="text-primary" size={16} />
                </div>
                <div>
                  <a href="tel:+51960470892" className="block hover:text-primary transition-colors">+51 960 470 892</a>
                  <a href="tel:+51930476116" className="block hover:text-primary transition-colors">+51 930 476 116</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="pt-1">
                  <Mail className="text-primary" size={16} />
                </div>
                <div>
                  <a href="mailto:reservasmukistravel@gmail.com" className="hover:text-primary transition-colors break-all">reservasmukistravel@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="pt-1">
                  <MapPin className="text-primary" size={16} />
                </div>
                <div>
                  <div className="text-sm">Centro Comercial San Andres n° 318</div>
                  <div className="text-xs text-gray-400">Cusco, Perú</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-y border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">{t.footer.whatsappTitle}</p>
              <p className="text-gray-400 text-xs">{t.footer.whatsappSub}</p>
            </div>
          </div>
          <a 
            href="https://wa.me/51960470892?text=Hola,%20me%20gustaría%20información%20sobre%20tours"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm w-full md:w-auto"
          >
            {t.footer.whatsappBtn}
          </a>
        </div>

        {/* Trust & Payment Row */}
        <div className="py-6 border-b border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-xs font-medium">MINCETUR</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-xs font-medium">DIRCETUR</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard size={16} className="text-primary" />
              <span className="text-xs font-medium">{t.footer.securePayments}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>Visa</span>
              <span className="text-gray-600 mx-1">•</span>
              <span>Mastercard</span>
              <span className="text-gray-600 mx-1">•</span>
              <span>PayPal</span>
              <span className="text-gray-600 mx-1">•</span>
              <span>AMEX</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} Mukis Travel Agency. {t.footer.allRights}</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/terminos-condiciones" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
            <Link href="/politica-privacidad" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
            <Link href="/contacto" className="hover:text-primary transition-colors">{t.footer.claimsBook}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
