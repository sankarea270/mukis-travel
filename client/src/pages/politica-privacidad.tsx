import { Link } from "wouter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  Lock,
  Eye,
  Database,
  Cookie,
  Mail,
  Shield,
  UserCheck,
  Clock,
  Server,
  Fingerprint,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { useLanguage } from "@/i18n";

/* ------------------------------------------------------------------ */
/*  Secciones de la política (sin sección 6 "terceros")               */
/* ------------------------------------------------------------------ */

interface PolicySectionData {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  cards?: { icon: typeof Lock; title: string; text: string }[];
}

const sections: PolicySectionData[] = [
  {
    id: "introduccion",
    number: "01",
    title: "Introducción",
    paragraphs: [
      "La presente Política de Privacidad establece los términos en que Mukis Travel usa y protege la información proporcionada por sus usuarios al utilizar este sitio web. Estamos comprometidos con la seguridad de tus datos personales.",
      "Cuando te solicitamos información personal con la cual puedas ser identificado, lo hacemos asegurando que solo se empleará de acuerdo con los términos de este documento. Esta política puede ser actualizada periódicamente, por lo que te recomendamos revisarla con frecuencia.",
    ],
  },
  {
    id: "recopilacion",
    number: "02",
    title: "Información que Recopilamos",
    bullets: [
      "Nombre completo, cargo y documento de identidad",
      "Información de contacto: correo electrónico, teléfono y dirección postal",
      "Fecha de nacimiento y nacionalidad",
      "Preferencias de viaje, intereses y restricciones alimentarias",
      "Información demográfica como código postal",
      "Datos de uso del sitio web y navegación",
      "Información de pago procesada de forma segura a través de pasarelas certificadas",
      "Otra información relevante para consultas, encuestas o procesamiento de pedidos",
    ],
  },
  {
    id: "uso",
    number: "03",
    title: "Uso de la Información",
    paragraphs: [
      "Empleamos la información recopilada con el fin de proporcionarte el mejor servicio posible. Esto incluye mantener un registro de usuarios, procesar reservas, confirmar itinerarios y mejorar continuamente nuestros productos y servicios.",
    ],
    bullets: [
      "Registros internos y gestión de servicios de viaje",
      "Personalización de tu experiencia en nuestro sitio web",
      "Responder consultas específicas y brindar asistencia durante el viaje",
      "Enviar información promocional sobre productos, servicios, ofertas especiales y novedades relevantes (con tu consentimiento)",
      "Investigación de mercado para mejorar nuestros servicios",
      "Cumplimiento de requerimientos legales cuando sea exigible",
    ],
    note: "Los correos electrónicos promocionales serán enviados a la dirección que proporciones y podrán ser cancelados en cualquier momento.",
  },
  {
    id: "seguridad",
    number: "04",
    title: "Seguridad",
    paragraphs: [
      "Mukis Travel está altamente comprometido con mantener tu información segura. Utilizamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos de que no exista ningún acceso no autorizado.",
    ],
    cards: [
      { icon: Lock, title: "Cifrado SSL", text: "Información protegida con cifrado de 256 bits." },
      { icon: Server, title: "Servidores Seguros", text: "Certificaciones de seguridad internacional." },
      { icon: Fingerprint, title: "Acceso Restringido", text: "Solo personal autorizado accede a tus datos." },
      { icon: Shield, title: "Conformidad Legal", text: "Datos procesados según leyes de protección vigentes." },
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies",
    paragraphs: [
      "Una cookie es un fichero que se almacena en tu ordenador al visitar un sitio web. Sirve para recopilar información sobre el tráfico web, facilitar visitas recurrentes y reconocerte individualmente para brindarte un servicio personalizado.",
      "Nuestro sitio web emplea cookies para identificar las páginas visitadas y su frecuencia. Esta información es utilizada únicamente para análisis estadístico y luego se elimina permanentemente.",
    ],
    bullets: [
      "Cookies esenciales — funcionamiento básico del sitio",
      "Cookies analíticas — entender cómo interactúas con nuestro sitio",
      "Cookies de personalización — almacenar tus preferencias",
    ],
    note: "Puedes aceptar o rechazar cookies configurando tu navegador. Si las rechazas, algunos servicios podrían no estar disponibles.",
  },
  {
    id: "derechos",
    number: "06",
    title: "Tus Derechos",
    paragraphs: [
      "En cualquier momento puedes restringir la recopilación o el uso de tu información personal. Mukis Travel no venderá, cederá ni distribuirá tus datos sin tu consentimiento, salvo requerimiento judicial.",
    ],
    bullets: [
      "Acceso — solicitar una copia de tus datos personales",
      "Rectificación — corregir datos incorrectos o desactualizados",
      "Eliminación — solicitar la eliminación permanente de tus datos",
      "Oposición — rechazar el procesamiento para fines de marketing",
      "Cancelación — dejar de recibir boletines o publicidad en cualquier momento",
    ],
    note: "Para ejercer cualquiera de estos derechos, escríbenos a reservasmukistravel@gmail.com.",
  },
];

/* ------------------------------------------------------------------ */
/*  Componente de sección — diseño minimalista                         */
/* ------------------------------------------------------------------ */
function Section({ data, isLast }: { data: PolicySectionData; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      id={data.id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="scroll-mt-28"
    >
      <div className="flex gap-6 md:gap-10">
        {/* Número + línea vertical */}
        <div className="hidden md:flex flex-col items-center pt-1">
          <span className="font-heading font-black text-3xl text-primary/20 select-none leading-none">
            {data.number}
          </span>
          {!isLast && <div className="flex-1 w-px bg-gray-200 mt-4" />}
        </div>

        {/* Contenido */}
        <div className="flex-1 pb-14 md:pb-16">
          <span className="md:hidden text-xs font-bold text-primary/40 tracking-widest">{data.number}</span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-5 tracking-tight">
            {data.title}
          </h2>

          {/* Párrafos */}
          {data.paragraphs?.map((p, i) => (
            <p key={i} className="text-gray-500 leading-relaxed mb-4 max-w-2xl">
              {p}
            </p>
          ))}

          {/* Bullets */}
          {data.bullets && (
            <ul className="space-y-3 mt-4">
              {data.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Cards (seguridad) */}
          {data.cards && (
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {data.cards.map((card, i) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                  >
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <CardIcon size={18} />
                    </span>
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900 text-sm">{card.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mt-1">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Nota */}
          {data.note && (
            <p className="mt-5 text-sm text-gray-400 italic border-l-2 border-primary/20 pl-4">
              {data.note}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Sidebar nav                                                        */
/* ------------------------------------------------------------------ */
function SideNav() {
  return (
    <nav className="hidden lg:block sticky top-32 self-start">
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-300 mb-4">Contenido</p>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <span className="font-mono text-xs text-gray-300">{s.number}</span>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Página principal                                                   */
/* ------------------------------------------------------------------ */
export default function PoliticaPrivacidad() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-36 pb-28 md:pb-36 bg-gray-950 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-2 text-sm mb-10 text-gray-500">
              <Link href="/" className="hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <ChevronRight size={14} />
              <span className="text-gray-300">{t.legalPage.privacyTitle}</span>
            </nav>

            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-6">
              {t.legalPage.privacyTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
              Cómo recopilamos, usamos y protegemos tu información personal en Mukis Travel.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gray-600" />
                Febrero 2026
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-primary" />
                Datos protegidos
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="flex items-center gap-2">
                <Lock size={14} className="text-primary" />
                Conexión segura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTENIDO ==================== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex gap-16">
            {/* Sidebar */}
            <SideNav />

            {/* Secciones */}
            <div className="flex-1 min-w-0">
              {sections.map((s, i) => (
                <Section key={s.id} data={s} isLast={i === sections.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="p-10 md:p-14 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3">
                ¿Tienes preguntas?
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
                Nuestro equipo de protección de datos está disponible para resolver tus dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:reservasmukistravel@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Mail size={18} />
                  reservasmukistravel@gmail.com
                </a>
                <Link href="/contacto">
                  <span className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold px-7 py-3.5 rounded-full hover:border-primary/30 hover:text-primary transition-all cursor-pointer">
                    Contacto
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
