import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n";
import { Language, languageNames, languageFlags } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const languages: { code: Language; name: string; flagUrl: string; native: string }[] = [
  { code: "es", name: "Español", flagUrl: "https://flagcdn.com/w80/es.png", native: "Español" },
  { code: "en", name: "English", flagUrl: "https://flagcdn.com/w80/us.png", native: "English" },
  { code: "pt", name: "Português", flagUrl: "https://flagcdn.com/w80/br.png", native: "Português" },
];

function FlagImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("rounded-sm object-cover shadow-sm", className)}
      loading="eager"
    />
  );
}

interface LanguageSelectorProps {
  scrolled?: boolean;
  variant?: "topbar" | "mobile";
}

export function LanguageSelector({ scrolled = false, variant = "topbar" }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language)!;

  if (variant === "mobile") {
    return (
      <div className="px-4 py-3">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-3 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          {t.language.title}
        </p>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all",
                language === lang.code
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <FlagImg src={lang.flagUrl} alt={lang.native} className="w-6 h-4" />
              <span className="text-xs">{lang.code.toUpperCase()}</span>
              {language === lang.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Check className="w-3.5 h-3.5" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 cursor-pointer transition-all rounded-full px-3.5 py-2 border",
          scrolled
            ? "text-gray-700 hover:text-primary bg-gray-50 hover:bg-primary/5 border-gray-200 hover:border-primary/30 shadow-sm"
            : "text-white hover:text-white bg-white/15 hover:bg-white/25 border-white/20 hover:border-white/40 backdrop-blur-sm"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FlagImg src={currentLang.flagUrl} alt={currentLang.native} className="w-6 h-4.5" />
        <span className="text-sm font-bold tracking-wide">{language.toUpperCase()}</span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-100"
          >
            {/* Header */}
            <div className="px-4 pt-4 pb-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Globe className="w-3 h-3" />
                {t.language.select}
              </p>
            </div>

            {/* Language Options */}
            <div className="px-2 pb-2 space-y-0.5">
              {languages.map((lang, idx) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                    language === lang.code
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-50 text-gray-700"
                  )}
                >
                  <motion.div
                    className="shrink-0"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <FlagImg src={lang.flagUrl} alt={lang.native} className="w-8 h-5.5" />
                  </motion.div>
                  <div className="flex flex-col items-start flex-1">
                    <span className="text-sm font-semibold">{lang.native}</span>
                    <span className="text-[10px] text-gray-400">{lang.code.toUpperCase()}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Decorative Bottom */}
            <div className="h-1 bg-linear-to-r from-primary via-amber-400 to-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
