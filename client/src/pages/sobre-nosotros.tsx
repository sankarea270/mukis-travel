import { Link } from "wouter";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Heart, Award, Shield, Target, Eye, Users, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";
import { AboutUs } from "@/components/home/AboutUs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animación avanzada para los cuadros de valores (cumple con la firma de framer-motion)
const valueBoxVariants = {
  hidden: { opacity: 0, y: 60, rotate: -8, scale: 0.85, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    boxShadow: "0px 8px 32px 0px rgba(16, 185, 129, 0.10)",
    transition: {
      duration: 0.8,
      delay: 0.2 + (custom || 0) * 0.15,
      type: "spring" as const,
      bounce: 0.35
    }
  }),
  whileHover: {
    scale: 1.06,
    rotate: 2,
    boxShadow: "0px 16px 48px 0px rgba(16, 185, 129, 0.18)",
    transition: { duration: 0.3, type: "spring" as const }
  }
};

// Restaurar itemVariants para Misión/Visión
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SobreNosotros() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* Sección Quiénes Somos */}
        <AboutUs />

        {/* Otras secciones existentes */}
        {/* ...existing code... */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
