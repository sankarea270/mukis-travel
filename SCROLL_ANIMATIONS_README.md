# 🎨 Mejoras de Animaciones de Scroll - Mukis Travel

## 📋 Resumen de Cambios

Se han implementado **animaciones avanzadas de scroll** similares a la página de referencia (andeanrepublic.com), donde los elementos aparecen gradualmente con efectos atractivos conforme el usuario baja por la página.

---

## 🆕 Nuevos Archivos Creados

### 1. **Hook: `use-scroll-animation.tsx`**
- Detecta automáticamente cuando elementos entran en el viewport
- Basado en Intersection Observer API
- Reutilizable en cualquier componente
- Opciones de configuración:
  - `threshold`: cuándo activar (0-1)
  - `rootMargin`: ajustar área de detección
  - `triggerOnce`: animar solo una vez o repetir

### 2. **Componente: `scroll-reveal.tsx`**
- Wrapper simplificado para animaciones predefinidas
- 5 variantes de animación:
  - `slideUp`: sube desde abajo
  - `slideLeft`: viene de la izquierda
  - `slideRight`: viene de la derecha
  - `fadeIn`: fade simple
  - `scaleIn`: aparece desde pequeño

### 3. **Componente: `AnimatedFeatures.tsx`**
- Sección visual con características de la agencia
- Animaciones en cascada
- Efectos de hover personalizados
- Iconos emojis animados

### 4. **Guía de Animaciones: `ANIMATIONS_GUIDE.md`**
- Documentación completa de uso
- Ejemplos de código
- Mejores prácticas
- Tips de performance

---

## 🎯 Componentes Mejorados

### **Hero.tsx**
✅ Animaciones de parallax en scroll
✅ Fade out automático al bajar
✅ Orbes flotantes con glow
✅ Indicador de scroll animado
✅ Transiciones mejoradas de slides

### **Destinations.tsx**
✅ Encabezado con múltiples animaciones en cascada
✅ Galería de destinos con stagger effect
✅ Estadísticas con animaciones
✅ Transiciones suaves al aparecer

### **WhyChooseUs.tsx**
✅ Contenido con slide left/right
✅ Tarjetas de razones con stagger
✅ Imagen con parallax sutil
✅ Números con animación de scale

### **Testimonials.tsx**
✅ Fondo decorativo con animaciones
✅ Efectos de aparición en elementos
✅ Transiciones suaves del carrusel

---

## 🎨 Nuevas Animaciones CSS

### Animaciones Principales
- `slide-in-left` - Desliza desde izquierda con sesgo
- `slide-in-right` - Desliza desde derecha con sesgo
- `slide-in-up` - Desliza hacia arriba con perspectiva
- `bounce-in` - Rebota al aparecer
- `flip-in-y` - Gira en eje Y
- `zoom-in-rotate` - Zoom + rotación simultánea
- `text-blur-in` - Texto desborroneado
- `card-lift` - Levanta tarjeta con perspectiva 3D
- `gradient-animation` - Gradiente animado
- `shine` - Efecto brillo deslizante
- `pulse-scale` - Pulsa con cambio de escala

### Utilidades de Stagger
```css
.stagger-animation-0 a .stagger-animation-6  /* Delays 0-0.6s */
.reveal-on-scroll                             /* Reveal base class */
.reveal-on-scroll.is-revealed                 /* Clase activa */
```

---

## 💡 Cómo Usar en Nuevos Componentes

### Opción 1: Hook + Framer Motion (Recomendado)
```tsx
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

export function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <motion.section
      ref={elementRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      Contenido
    </motion.section>
  );
}
```

### Opción 2: ScrollReveal Component
```tsx
import { ScrollReveal } from "@/components/ui/scroll-reveal";

<ScrollReveal variant="slideUp" delay={0.2}>
  <h2>Mi Título</h2>
</ScrollReveal>
```

### Opción 3: CSS Classes
```html
<div class="reveal-on-scroll stagger-animation-1">
  Elemento 1
</div>
<div class="reveal-on-scroll stagger-animation-2">
  Elemento 2
</div>
```

Con JavaScript:
```javascript
const reveals = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(reveal => observer.observe(reveal));
```

---

## 🎬 Efectos de Scroll Implementados

### En Hero
1. **Parallax de fondo** - Imagen se mueve más lentamente
2. **Fade out** - Contenido desaparece al bajar
3. **Scale effect** - Imagen se escala al bajar
4. **Orbes flotantes** - Elementos decorativos animados
5. **Scroll indicator** - Indicador visual animado

### En Secciones Principales
1. **Stagger cascada** - Elementos aparecen en secuencia
2. **Slide animations** - Deslizamiento desde bordes
3. **Glow effects** - Efectos de brillo al hover
4. **Scale transitions** - Cambios de escala suave

---

## ⚡ Performance

### Optimizaciones Aplicadas
- ✅ Uso de `will-change` para animaciones frecuentes
- ✅ Transform y opacity (más eficientes que width/height)
- ✅ Intersection Observer (eficiente que scroll listeners)
- ✅ Transiciones limitadas a 0.6-1.0s (no más)
- ✅ Stagger para evitar animaciones simultáneas

### Recomendaciones
- Limita elementos animados simultáneamente
- Usa easing `[0.6, 0.01, 0.05, 0.95]` para suavidad
- Testea en dispositivos móviles
- Usa `triggerOnce: true` para mejor rendimiento

---

## 🎯 Mejoras Visuales Realizadas

### Tipografía y Espaciado
- ✅ Títulos más grandes e impactantes
- ✅ Better hierarchy con multiple tamaños
- ✅ Mejor contraste y legibilidad

### Colores y Gradientes
- ✅ Degradados más suaves
- ✅ Efectos glow con primary color
- ✅ Mejor uso de transparencias

### Interactividad
- ✅ Hover effects mejorados
- ✅ Botones con gradient overlay
- ✅ Transiciones más fluidas

### Decorativos
- ✅ Orbes y formas flotantes
- ✅ Líneas decorativas animadas
- ✅ Fondos con blur effects

---

## 🚀 Próximas Mejoras Sugeridas

1. **Scroll Snapping** - Secciones que se alinean al scroll
2. **Lazy Loading** - Cargar imágenes al aparecer en viewport
3. **Text Animation** - Animar texto letra por letra
4. **Counter Animation** - Animar números para estadísticas
5. **SVG Animations** - Animar SVGs al scroll
6. **Mouse Tracking** - Seguimiento del cursor en elementos
7. **Page Transitions** - Animaciones entre páginas

---

## 📚 Recursos Útiles

- **Framer Motion Docs**: https://www.framer.com/motion/
- **Intersection Observer API**: https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API
- **CSS Animations**: https://developer.mozilla.org/es/docs/Web/CSS/animation

---

## ✅ Checklist para Nuevas Secciones

- [ ] Importar `useScrollAnimation`
- [ ] Agregar `ref={elementRef}` a la sección
- [ ] Envolver contenido con `motion.div`
- [ ] Usar `isVisible` para controlar animaciones
- [ ] Agregar delays progresivos (0.1s, 0.2s, etc)
- [ ] Testear en desktop y mobile
- [ ] Asegurar no más de 1 animación por segundo por dispositivo

---

**Creado**: 24 de enero de 2026
**Versión**: 1.0
