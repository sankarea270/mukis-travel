/*
 * GUÍA DE ANIMACIONES DE SCROLL
 * ================================
 * 
 * Este archivo documenta cómo usar las nuevas animaciones de scroll
 * implementadas en el proyecto Mukis Travel.
 */

// 1. HOOK useScrollAnimation
// ===========================
// Detecta cuando un elemento entra en el viewport y aplica animaciones
//
// Uso básico:
// ```tsx
// import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//
// export function MyComponent() {
//   const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
//   
//   return (
//     <motion.div
//       ref={elementRef}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.8 }}
//     >
//       Contenido que se anima al entrar en vista
//     </motion.div>
//   );
// }
// ```
//
// Opciones:
// - threshold: 0 a 1 (cuánto del elemento debe ser visible antes de animar)
// - rootMargin: ajusta el área de detección (ej: "0px 0px -100px 0px")
// - triggerOnce: true = anima solo una vez (default), false = anima cada vez

// 2. COMPONENTE ScrollReveal
// ===========================
// Wrapper para aplicar animaciones predefinidas fácilmente
//
// Uso:
// ```tsx
// import { ScrollReveal } from "@/components/ui/scroll-reveal";
//
// <ScrollReveal variant="slideUp" delay={0.2}>
//   <h2>Mi Título</h2>
// </ScrollReveal>
// ```
//
// Variantes disponibles:
// - "slideUp": Sube desde abajo con fade in
// - "slideLeft": Viene desde la izquierda
// - "slideRight": Viene desde la derecha
// - "fadeIn": Solo aparece sin movimiento
// - "scaleIn": Aparece desde pequeño a grande

// 3. CLASES CSS DE ANIMACIÓN
// ===========================

// Animaciones básicas con delay automático:
// .animate-slide-in-left      - Desliza desde la izquierda
// .animate-slide-in-right     - Desliza desde la derecha
// .animate-slide-in-up        - Desliza desde abajo
// .animate-bounce-in          - Rebota al aparecer
// .animate-flip-in-y          - Gira en Y al aparecer
// .animate-zoom-in-rotate     - Zoom + rotación
// .animate-text-blur-in       - Texto desborroneado
// .animate-card-lift          - Levanta tarjeta con perspectiva
// .animate-gradient-animation - Gradiente animado
// .animate-shine              - Efecto shine/brillo
// .animate-pulse-scale        - Pulsa con escala

// Stagger delays (para elementos en serie):
// .stagger-animation-0 a .stagger-animation-6
// .stagger-1 a .stagger-5 (para reveal-on-scroll)

// 4. PATRÓN RECOMENDADO PARA SECCIONES
// ======================================
/*
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function MySection() {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Título principal - Slide up */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Mi Sección
        </motion.h2>

        {/* Items con stagger */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              className="card"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
*/

// 5. TÉCNICAS AVANZADAS
// =====================

// 5a. Animaciones en cascada con delays progresivos:
// .stagger-animation-0 { animation-delay: 0s; }
// .stagger-animation-1 { animation-delay: 0.1s; }
// .stagger-animation-2 { animation-delay: 0.2s; }
// etc...

// 5b. Usar variants de Framer Motion para control total:
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// 5c. Parallax simple con useTransform:
// import { useScroll, useTransform } from "framer-motion";
// const { scrollY } = useScroll();
// const y = useTransform(scrollY, [0, 500], [0, 150]);

// 6. ANIMACIONES CON TAILWIND CSS
// ================================
/*
<!-- Elemento que se anima al scrollear (JavaScript/Intersection Observer) -->
<div class="reveal-on-scroll">
  Contenido
</div>

<!-- Con stagger -->
<div class="reveal-on-scroll stagger-1">
  Item 1
</div>
<div class="reveal-on-scroll stagger-2">
  Item 2
</div>

<!-- JavaScript para activar la clase -->
<script>
const reveals = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(reveal => observer.observe(reveal));
</script>
*/

// 7. MEJORES PRÁCTICAS
// ====================

// ✓ DO:
// - Usa threshold: 0.1-0.3 para elementos que deben verse completamente
// - Agrupa animaciones con stagger para efecto cascada natural
// - Usa delays progresivos (0.1s, 0.2s, etc) para mejor UX
// - Limita a 0.6-1.0s para transiciones (más rápido es mejor en web)
// - Usa ease [0.6, 0.01, 0.05, 0.95] para animaciones suaves

// ✗ DON'T:
// - No animes opacity y transform simultáneamente sin cuidado
// - No hagas animaciones más largas de 1.5 segundos
// - No animes muchos elementos pesados al mismo tiempo
// - No uses whileInView + hook de scroll a la vez (causa conflictos)
// - No olvides will-change para animaciones frecuentes

// 8. PERFORMANCE
// ==============
// - Las transiciones de transform y opacity son más eficientes
// - Evita animar height, width (usa scaleY/scaleX)
// - Usa will-change: transform, opacity en CSS para elementos animados
// - Limita el número de elementos animando simultáneamente
// - Test en dispositivos móviles (pueden ser más lentos)

export {};
