import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  CreditCard,
  CalendarCheck,
  RefreshCw,
  ShieldAlert,
  UserCheck,
  FileCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  Mail,
  CheckCircle2,
  ScrollText,
  AlertOctagon,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Data — colores brand: primary (esmeralda) + accent (dorado)        */
/* ------------------------------------------------------------------ */

interface TSection {
  id: string;
  number: string;
  icon: typeof CreditCard;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: { label: string; value: string }[];
  alert?: string;
}

const sections: TSection[] = [
  {
    id: "pagos",
    number: "01",
    icon: CreditCard,
    title: "Pago Inicial y Métodos de Pago",
    paragraphs: [
      "Para confirmar la reserva de nuestros servicios, deberá efectuar un pago inicial del 50% del precio total del servicio solicitado.",
    ],
    highlight: [{ label: "Depósito requerido", value: "50%" }],
    bullets: [
      "Tarjetas de crédito o débito (Visa, MasterCard, American Express, Diners Club) — sin comisión adicional",
      "Transferencia bancaria — el cliente asume los gastos bancarios de su entidad financiera",
      "Depósitos en efectivo a través de Western Union, MoneyGram o ArgemPer",
    ],
  },
  {
    id: "confirmacion",
    number: "02",
    icon: CalendarCheck,
    title: "Confirmación de Reserva",
    paragraphs: [
      "Una vez que recibamos su información personal completa y el pago del 50% por los servicios solicitados, su reserva quedará confirmada. Recibirá un correo de confirmación con los detalles de su itinerario.",
    ],
  },
  {
    id: "modificaciones",
    number: "03",
    icon: RefreshCw,
    title: "Modificaciones de Itinerarios",
    paragraphs: [
      "Cualquier tipo de modificación por parte del cliente debe ser solicitada antes de que se realice el tour, con un plazo mínimo de 24 horas de anticipación.",
    ],
    highlight: [{ label: "Plazo mínimo", value: "24 h" }],
  },
  {
    id: "anulacion",
    number: "04",
    icon: ShieldAlert,
    title: "Política de Anulación de Servicio",
    bullets: [
      "Si anulas con al menos 48 horas de anticipación al inicio del tour, te devolveremos el 100% de lo que pagaste para reservar (aplica a tours Full Day, excepto Machu Picchu)",
    ],
    highlight: [{ label: "Reembolso con +48 h", value: "100%" }],
    alert:
      "NO procede devolución ni reembolso en los siguientes casos: boletos de tren, boletos de ingreso a sitios arqueológicos y servicios que se encuentren en pleno desarrollo.",
  },
  {
    id: "responsabilidades",
    number: "05",
    icon: UserCheck,
    title: "Responsabilidades del Pasajero",
    bullets: [
      "Es responsabilidad del pasajero proporcionar información verídica para proceder con las reservas",
      "Es obligatorio traer consigo el pasaporte o documento de viaje con el que realizó la reserva",
      "Es importante informar si tiene algún mal, enfermedad o dificultad de salud",
      "Si el pasajero presenta signos de embriaguez, uso de sustancias tóxicas o desórdenes mentales, nos reservamos el derecho de suspender el servicio contratado",
      "Si el cliente incumple el itinerario establecido y ocasiona retrasos, pérdidas u otros inconvenientes, será el único responsable",
      "Si el pasajero viaja con menores de edad, deberá presentar los documentos de identidad correspondientes (DNI o pasaporte)",
    ],
  },
  {
    id: "informacion",
    number: "06",
    icon: FileCheck,
    title: "Información del Cliente",
    paragraphs: [
      "Para garantizar los servicios contratados, deberá enviar todos sus datos personales completos junto con el pago inicial. Si no se recibe esta información, la reserva puede considerarse cancelada con pérdida total.",
    ],
    bullets: [
      "Nombre completo (como aparece en el pasaporte)",
      "Número y fecha de vencimiento del pasaporte",
      "Nacionalidad",
      "Fecha y lugar de nacimiento",
      "Detalles de llegada al destino",
    ],
  },
  {
    id: "suspension",
    number: "07",
    icon: AlertOctagon,
    title: "Criterios de Suspensión del Servicio",
    paragraphs: [
      "Mukis Travel podrá suspender la actividad en los servicios contratados bajo las siguientes circunstancias:",
    ],
    bullets: [
      "Problemas sociales (paros, huelgas)",
      "Condiciones de salud no aptas por parte del pasajero",
      "Condiciones por ingesta de alcohol y/o sustancias tóxicas",
      "Zona de emergencia decretada por el Estado u órgano competente",
      "Acuerdo mutuo con el cliente",
      "Abandono del grupo por parte del cliente",
      "Desastres naturales",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Background Animation Component                                      */
/* ------------------------------------------------------------------ */
function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-linear-to-b from-primary/22 via-background to-background backdrop-blur-[3px]" />

      {/* Soft cloud-like blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-16 w-125 h-125 bg-white/25 rounded-full blur-[110px]"
      />

      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 50, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-4 left-10 w-150 h-150 bg-primary/10 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, 18, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-accent/14 rounded-full blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-24 left-1/3 w-96 h-24 bg-white/30 rounded-full blur-3xl"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section component                                                  */
/* ------------------------------------------------------------------ */
function SectionBlock({ data, index }: { data: TSection; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = data.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      id={data.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-32 relative mb-8 last:mb-0"
    >
      <div className="group relative rounded-2xl md:rounded-3xl bg-linear-to-br from-white/90 via-white to-primary/5 border border-primary/10 shadow-[0_15px_40px_-22px_rgba(16,98,74,0.35)] hover:shadow-[0_18px_50px_-20px_rgba(16,98,74,0.45)] transition-all duration-500 overflow-hidden backdrop-blur-sm">
        {/* Left accent strip */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-primary/60 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Top subtle gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
            <motion.span
              className="shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-400 shadow-inner group-hover:shadow-lg group-hover:shadow-primary/30"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Icon size={26} strokeWidth={1.5} />
            </motion.span>
            
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-semibold tracking-widest text-accent bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">
                  SECCIÓN {data.number}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                {data.title}
              </h2>
            </div>
          </div>

          {/* Highlight chips */}
          {data.highlight && (
            <div className="flex flex-wrap gap-3 mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-100 dashed">
              {data.highlight.map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
                >
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {h.label}:
                  </span>
                  <span className="font-heading font-bold text-lg text-primary">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-4 mb-6">
            {data.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {p}
              </p>
            ))}
          </div>

          {/* Bullets */}
          {data.bullets && (
            <ul className="grid grid-cols-1 gap-3">
              {data.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-accent" />
                  <span className="text-gray-600 leading-relaxed text-sm sm:text-base">{b}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Alert box */}
          {data.alert && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex gap-4 p-5 rounded-xl bg-orange-50/50 border border-orange-100"
            >
              <AlertTriangle size={20} className="shrink-0 mt-0.5 text-orange-500" />
              <div className="space-y-1">
                <span className="block text-xs font-bold text-orange-700 uppercase tracking-wider">Importante</span>
                <p className="text-sm text-orange-800/80 leading-relaxed">{data.alert}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Table of Contents (Sidebar)                                        */
/* ------------------------------------------------------------------ */
function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-32 space-y-1 pr-6">
      <div className="mb-6 px-4">
        <h3 className="font-heading font-bold text-gray-900 text-lg">Contenido</h3>
        <p className="text-sm text-gray-400">Navegación rápida</p>
      </div>
      
      <div className="relative">
        {/* Track line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-100" />
        
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={cn(
                "group relative flex items-center w-full text-left py-3 px-4 text-sm transition-all duration-300",
                isActive 
                  ? "text-primary font-medium" 
                  : "text-gray-500 hover:text-gray-800"
              )}
            >
              <div 
                className={cn(
                  "absolute left-3.25 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 z-10",
                  isActive
                    ? "bg-primary border-primary scale-110"
                    : "bg-white border-gray-200 group-hover:border-primary/50"
                )}
              />
              <span className="ml-6 block truncate">{s.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
        <p className="text-xs text-primary/80 mb-3">¿Tienes alguna duda adicional?</p>
        <a 
          href="https://wa.me/51987654321" // Reemplazar con número real si se tiene
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
        >
          Contactar Soporte <ArrowRight size={12} />
        </a>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function TerminosCondiciones() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20">
      <Navbar />
      <BackgroundAnimation />

      {/* ==================== HERO ==================== */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
      >
        {/* Hero Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/18 via-white to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center items-center gap-2 text-sm mb-8 text-gray-500"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                {t.nav.home}
              </Link>
              <ChevronRight size={14} className="text-gray-300" />
              <span className="text-primary font-medium">{t.legalPage.termsTitle}</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight mb-6"
            >
              <span className="block text-primary text-xl sm:text-2xl uppercase tracking-widest font-sans font-bold mb-2 opacity-80">
                Políticas Corporativas
              </span>
              Términos y <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">Condiciones</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Para garantizar una experiencia transparente y segura, a continuación detallamos los lineamientos que rigen nuestros servicios turísticos.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-gray-200/50 border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Última actualización: Febrero 2026</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTENT LAYOUT ==================== */}
      <section className="relative pb-24 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Sidebar (Desktop only) */}
            <div className="hidden lg:block lg:col-span-3">
              <TableOfContents />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-3">
              <div className="max-w-5xl">
                {sections.map((s, i) => (
                  <SectionBlock key={s.id} data={s} index={i} />
                ))}
              </div>

              {/* Acceptance Notice */}
              <div className="pt-12 sm:pt-16 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-primary p-8 sm:p-12 text-center shadow-2xl shadow-primary/20">
                    <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10 text-white">
                      <FileCheck size={48} className="mx-auto mb-6 text-accent opacity-90" />
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                        ¿Listo para confirmar tu viaje?
                      </h3>
                      <p className="text-white/80 max-w-xl mx-auto text-lg mb-8">
                        Al realizar tu reserva confirmas que has leído y aceptas nuestros términos y condiciones.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto">
                          <span className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl cursor-pointer">
                            Contactar Asesor
                            <ArrowRight size={18} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
