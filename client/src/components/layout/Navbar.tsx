import { Link, useLocation } from "wouter";
import { Phone, Mail, Menu, X, Globe, ChevronDown, Mountain, Sun, TreePine, Compass, Heart, Sparkles, Headphones, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Submenú de Tours por Región
const regionSubmenu = [
  {
    id: "costa",
    name: "Costa",
    icon: Sun,
    description: "Playas, desiertos y oasis",
    color: "from-amber-400 to-orange-500",
    href: "/tours/costa",
    tours: ["Paracas & Islas Ballestas", "Huacachina", "Líneas de Nazca", "Playas del Norte"]
  },
  {
    id: "sierra",
    name: "Sierra",
    icon: Mountain,
    description: "Andes, montañas y culturas milenarias",
    color: "from-emerald-400 to-teal-600",
    href: "/tours/sierra",
    tours: ["Machu Picchu", "Montaña de Colores", "Cusco", "Valle Sagrado"]
  },
  {
    id: "selva",
    name: "Selva",
    icon: TreePine,
    description: "Amazonía y biodiversidad única",
    color: "from-green-500 to-emerald-700",
    href: "/tours/selva",
    tours: ["Iquitos", "Puerto Maldonado", "Manu", "Tambopata"]
  }
];

// Submenú de Categorías Temáticas
const categorySubmenu = [
  {
    id: "cultural",
    name: "Tours Culturales",
    icon: Sparkles,
    description: "Historia y tradiciones ancestrales",
    color: "from-purple-400 to-indigo-600",
    href: "/categorias/cultural",
    examples: ["Machu Picchu", "City Tour Cusco", "Valle Sagrado"]
  },
  {
    id: "aventura",
    name: "Tours de Aventura",
    icon: Compass,
    description: "Adrenalina y deportes extremos",
    color: "from-red-400 to-rose-600",
    href: "/categorias/aventura",
    examples: ["Montaña de Colores", "Trekking", "Rafting"]
  },
  {
    id: "naturaleza",
    name: "Tours de Naturaleza",
    icon: Heart,
    description: "Paisajes y vida silvestre",
    color: "from-teal-400 to-cyan-600",
    href: "/categorias/naturaleza",
    examples: ["Laguna Humantay", "Tambopata", "Paracas"]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl py-2" : "bg-transparent py-4"
    )}>
      {/* Top Bar */}
      <div className="hidden lg:block container mx-auto px-4 mb-2">
        <div className={cn(
          "flex justify-end items-center text-xs gap-6 transition-colors",
          scrolled ? "text-gray-600" : "text-white/90"
        )}>
          <a href="mailto:contacto@mukistravel.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-3 h-3" />
            <span>contacto@mukistravel.com</span>
          </a>
          <a href="tel:+51917608749" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            <span>+51 917 608 749</span>
          </a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <Globe className="w-3 h-3" />
            <span>ES</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/images/categories/logom-removebg-preview.png"
                alt="Mukis Travel Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className={cn(
                  "font-heading font-bold text-xl uppercase tracking-wider leading-none transition-colors",
                  scrolled ? "text-primary" : "text-white"
                )}>
                  Mukis Travel
                </span>
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.2em] transition-colors",
                  scrolled ? "text-gray-500" : "text-white/70"
                )}>
                  Agencia de Viajes
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Inicio */}
            <Link href="/">
              <span className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                location === "/" && (scrolled ? "bg-primary/10 text-primary" : "bg-white/20")
              )}>
                Inicio
              </span>
            </Link>

            {/* Paquetes */}
            <Link href="/paquetes">
              <span className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                location === "/paquetes" && (scrolled ? "bg-primary/10 text-primary" : "bg-white/20")
              )}>
                Paquetes
              </span>
            </Link>

            {/* Tours Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('tours')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer flex items-center gap-1",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                activeDropdown === 'tours' && (scrolled ? "bg-gray-100" : "bg-white/10")
              )}>
                Tours
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  activeDropdown === 'tours' && "rotate-180"
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'tours' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-150 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-bold text-gray-900">Tours por Región</h3>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {regionSubmenu.map((region) => (
                          <Link key={region.id} href={region.href}>
                            <motion.div 
                              className="group cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className={cn(
                                "relative rounded-xl p-4 bg-linear-to-br transition-all duration-300 overflow-hidden",
                                region.color
                              )}>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                <region.icon className="w-8 h-8 text-white mb-2 relative z-10" />
                                <h4 className="font-bold text-white text-lg relative z-10">{region.name}</h4>
                                <p className="text-white/80 text-xs mt-1 relative z-10">{region.description}</p>
                              </div>
                              <div className="mt-2 space-y-1">
                                {region.tours.slice(0, 3).map((tour, idx) => (
                                  <p key={idx} className="text-xs text-gray-500 truncate">• {tour}</p>
                                ))}
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                      </div>

                      <Link href="/tours">
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-primary font-medium hover:underline cursor-pointer">
                          Ver todos los tours
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Categorías Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('categorias')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer flex items-center gap-1",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                activeDropdown === 'categorias' && (scrolled ? "bg-gray-100" : "bg-white/10")
              )}>
                Categorías
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  activeDropdown === 'categorias' && "rotate-180"
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'categorias' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-125 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                        <Compass className="w-5 h-5 text-primary" />
                        <h3 className="font-heading font-bold text-gray-900">Tipos de Tours</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {categorySubmenu.map((category) => (
                          <Link key={category.id} href={category.href}>
                            <motion.div 
                              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              <div className={cn(
                                "w-12 h-12 rounded-xl bg-linear-to-br flex items-center justify-center",
                                category.color
                              )}>
                                <category.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="grow">
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                  {category.name}
                                </h4>
                                <p className="text-xs text-gray-500">{category.description}</p>
                              </div>
                              <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sobre Nosotros */}
            <Link href="/sobre-nosotros">
              <span className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                location === "/sobre-nosotros" && (scrolled ? "bg-primary/10 text-primary" : "bg-white/20")
              )}>
                Nosotros
              </span>
            </Link>

            {/* Soporte */}
            <Link href="/soporte">
              <span className={cn(
                "font-medium text-sm transition-all px-4 py-2 rounded-full cursor-pointer flex items-center gap-1",
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
                location === "/soporte" && (scrolled ? "bg-primary/10 text-primary" : "bg-white/20")
              )}>
                <Headphones className="w-4 h-4" />
                Soporte
              </span>
            </Link>
            
            {/* CTA Button */}
            <motion.a 
              href="https://wa.me/51917608749?text=Hola,%20me%20gustaría%20información%20sobre%20tours"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-linear-to-r from-primary to-accent text-white font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              Cotizar
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-colors",
              scrolled ? "text-gray-800 bg-gray-100" : "text-white bg-white/10"
            )}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-17 bg-white shadow-2xl border-t overflow-hidden"
          >
            <div className="max-h-[calc(100vh-68px)] overflow-y-auto">
              <div className="flex flex-col p-4 gap-1">
                {/* Inicio */}
                <Link href="/">
                  <motion.span 
                    className={cn(
                      "block font-medium text-gray-800 py-3 px-4 rounded-xl transition-colors cursor-pointer",
                      location === "/" ? "bg-primary/10 text-primary" : "hover:bg-gray-50"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    Inicio
                  </motion.span>
                </Link>

                {/* Paquetes */}
                <Link href="/paquetes">
                  <motion.span 
                    className={cn(
                      "block font-medium text-gray-800 py-3 px-4 rounded-xl transition-colors cursor-pointer",
                      location === "/paquetes" ? "bg-primary/10 text-primary" : "hover:bg-gray-50"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    Paquetes
                  </motion.span>
                </Link>

                {/* Tours con submenu */}
                <div>
                  <motion.button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'tours' ? null : 'tours')}
                    className="w-full flex items-center justify-between font-medium text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-50"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Tours por Región
                    </span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      mobileSubmenu === 'tours' && "rotate-180"
                    )} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {mobileSubmenu === 'tours' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {regionSubmenu.map((region) => (
                            <Link key={region.id} href={region.href}>
                              <motion.div 
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-xl bg-linear-to-r",
                                  region.color
                                )}
                                whileTap={{ scale: 0.98 }}
                              >
                                <region.icon className="w-5 h-5 text-white" />
                                <div>
                                  <span className="font-semibold text-white block">{region.name}</span>
                                  <span className="text-white/80 text-xs">{region.description}</span>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Categorías con submenu */}
                <div>
                  <motion.button
                    onClick={() => setMobileSubmenu(mobileSubmenu === 'categorias' ? null : 'categorias')}
                    className="w-full flex items-center justify-between font-medium text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-50"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      Categorías
                    </span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      mobileSubmenu === 'categorias' && "rotate-180"
                    )} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {mobileSubmenu === 'categorias' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {categorySubmenu.map((category) => (
                            <Link key={category.id} href={category.href}>
                              <motion.div 
                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100"
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className={cn(
                                  "w-10 h-10 rounded-lg bg-linear-to-br flex items-center justify-center",
                                  category.color
                                )}>
                                  <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <span className="font-semibold text-gray-900 block">{category.name}</span>
                                  <span className="text-gray-500 text-xs">{category.description}</span>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Sobre Nosotros */}
                <Link href="/sobre-nosotros">
                  <motion.span 
                    className={cn(
                      "block font-medium text-gray-800 py-3 px-4 rounded-xl transition-colors cursor-pointer",
                      location === "/sobre-nosotros" ? "bg-primary/10 text-primary" : "hover:bg-gray-50"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    Nosotros
                  </motion.span>
                </Link>

                {/* Soporte */}
                <Link href="/soporte">
                  <motion.span 
                    className={cn(
                      "flex items-center gap-2 font-medium text-gray-800 py-3 px-4 rounded-xl transition-colors cursor-pointer",
                      location === "/soporte" ? "bg-primary/10 text-primary" : "hover:bg-gray-50"
                    )}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Headphones className="w-4 h-4" />
                    Soporte
                  </motion.span>
                </Link>
                
                <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                  <motion.a 
                    href="https://wa.me/51917608749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-white font-bold py-3.5 rounded-full shadow-lg"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} />
                    Cotizar Tour
                  </motion.a>

                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <a href="tel:+51917608749" className="flex items-center gap-1">
                      <Phone size={14} />
                      +51 917 608 749
                    </a>
                    <a href="mailto:contacto@mukistravel.com" className="flex items-center gap-1">
                      <Mail size={14} />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
