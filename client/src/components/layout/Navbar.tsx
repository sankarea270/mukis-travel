import { Link } from "wouter";
import { Phone, Mail, Menu, X, Globe, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoUrl from "@assets/generated_images/mukis_travel_agency_logo_concept.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      {/* Top Bar */}
      <div className="hidden md:block container mx-auto px-4 mb-2">
        <div className={cn(
          "flex justify-end items-center text-xs gap-6 transition-colors",
          scrolled ? "text-gray-600" : "text-white/90"
        )}>
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3" />
            <span>contacto@mukistravel.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>+51 984 000 000</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
            <Globe className="w-3 h-3" />
            <span>EN / ES</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="Mukis Travel" className="h-10 w-auto object-contain" />
            <span className={cn(
              "font-heading font-bold text-xl uppercase tracking-wider",
              scrolled ? "text-primary" : "text-white"
            )}>
              Mukis Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Inicio", "Paquetes", "Destinos", "Nosotros", "Contacto"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={cn(
                  "font-medium text-sm hover:text-primary transition-colors uppercase tracking-wide",
                  scrolled ? "text-gray-800" : "text-white"
                )}
              >
                {item}
              </a>
            ))}
            <button className={cn(
              "p-2 rounded-full transition-colors",
              scrolled ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-white/10 hover:bg-white/20 text-white"
            )}>
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-md",
              scrolled ? "text-gray-800" : "text-white"
            )}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
             {["Inicio", "Paquetes", "Destinos", "Nosotros", "Contacto"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="font-medium text-gray-800 hover:text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
