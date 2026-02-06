export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  aboutTour?: string; // Descripción extendida "Acerca de este recorrido"
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  gallery?: string[];
  mapImage?: string; // Imagen del mapa del recorrido
  location: string;
  locationCoords?: { lat: number; lng: number }; // Coordenadas para el mapa
  region: "costa" | "sierra" | "selva";
  category: "cultural" | "aventura" | "naturaleza" | "mistico" | "vivencial" | "trekking";
  tourType?: string; // Tipo de tour: "Tour diario", "Full Day", etc.
  languages?: string[]; // Idiomas disponibles
  featured?: boolean;
  isOffer?: boolean;
  included: string[];
  notIncluded: string[];
  itinerary: { time: string; activity: string; description?: string }[];
  highlights?: string[]; // Resumen/puntos destacados del tour
  difficulty?: "fácil" | "moderado" | "difícil";
  maxGroup?: number;
  startTime?: string;
  faqs?: { question: string; answer: string }[]; // Preguntas frecuentes específicas del tour
  reviews?: { 
    id: string;
    name: string; 
    avatar?: string;
    rating: number; 
    comment: string; 
    date: string;
    country?: string;
  }[];
  videoTestimonials?: { // Videos de testimonios (Instagram/TikTok)
    platform: "instagram" | "tiktok" | "youtube";
    embedUrl: string;
    thumbnail?: string;
  }[];
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "machu-picchu-full-day",
    title: "Tour Machu Picchu Full Day",
    shortDescription: "Vive la experiencia de estar en Machu Picchu con guías especializados.",
    description: "Descubre la maravilla del mundo Machu Picchu en un tour completo de un día. Saldremos desde Cusco muy temprano para tomar el tren hacia Aguas Calientes, y luego el bus hasta la ciudadela. Recorrerás cada rincón de este santuario histórico con nuestros guías expertos.",
    aboutTour: "Prepárate para vivir una experiencia única e inolvidable en una de las 7 Maravillas del Mundo Moderno. Nuestro Tour Machu Picchu Full Day te llevará a descubrir los secretos de la ciudadela inca más famosa del planeta. Comenzamos muy temprano con el recojo desde tu hotel en Cusco, para trasladarnos hasta la estación de tren en Ollantaytambo. El viaje en tren es una experiencia en sí misma, atravesando el Valle Sagrado y siguiendo el curso del río Urubamba hasta llegar a Aguas Calientes. Desde allí, un bus te llevará por una carretera serpenteante hasta la entrada de Machu Picchu, donde nuestro guía experto te revelará los misterios de este santuario histórico durante un recorrido de aproximadamente 2.5 horas. Tendrás tiempo libre para explorar por tu cuenta y capturar las mejores fotografías antes de descender para almorzar en el pueblo de Aguas Calientes.",
    price: 350,
    originalPrice: 420,
    duration: "1 Día",
    tourType: "Tour diario",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.1631, lng: -72.5450 },
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1548820579-0fad72e0e7fc?auto=format&fit=crop&q=80&w=1600"
    ],
    featured: true,
    isOffer: true,
    difficulty: "moderado",
    maxGroup: 16,
    startTime: "4:00 AM",
    highlights: [
      "Visita guiada a Machu Picchu por 2.5 horas",
      "Viaje panorámico en tren por el Valle Sagrado",
      "Tiempo libre para explorar la ciudadela",
      "Guía profesional bilingüe certificado",
      "Transporte completo ida y vuelta"
    ],
    included: [
      "Transporte Cusco - Ollantaytambo - Cusco",
      "Tren turístico ida y vuelta",
      "Bus de subida y bajada a Machu Picchu",
      "Entrada a Machu Picchu",
      "Guía profesional bilingüe",
      "Asistencia permanente"
    ],
    notIncluded: [
      "Alimentación",
      "Gastos personales"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Recojo del hotel en Cusco", description: "Nuestro personal te recogerá de tu hotel ubicado en el centro histórico de Cusco." },
      { time: "6:00 AM", activity: "Llegada a Ollantaytambo y abordaje del tren", description: "Abordarás el tren turístico con ventanas panorámicas para disfrutar del paisaje." },
      { time: "8:00 AM", activity: "Llegada a Aguas Calientes", description: "Arribo al pueblo de Machu Picchu Pueblo (Aguas Calientes)." },
      { time: "8:30 AM", activity: "Bus hacia Machu Picchu", description: "Viaje de 25 minutos en bus por la carretera Hiram Bingham." },
      { time: "9:00 AM", activity: "Tour guiado por la ciudadela (2.5 horas)", description: "Recorrido completo por los principales sectores de Machu Picchu con guía experto." },
      { time: "12:00 PM", activity: "Tiempo libre para explorar", description: "Explora por tu cuenta y toma las mejores fotografías." },
      { time: "2:00 PM", activity: "Descenso y almuerzo en Aguas Calientes", description: "Tiempo para almorzar en uno de los restaurantes del pueblo (no incluido)." },
      { time: "4:30 PM", activity: "Retorno en tren a Ollantaytambo", description: "Viaje de regreso disfrutando del atardecer en el valle." },
      { time: "8:00 PM", activity: "Llegada a Cusco", description: "Traslado a tu hotel, finalizando una jornada inolvidable." }
    ],
    faqs: [
      { question: "¿Cuáles son los horarios disponibles para el tour?", answer: "El tour inicia a las 4:00 AM con recojo desde tu hotel. También tenemos opción de salida a las 5:00 AM según disponibilidad." },
      { question: "¿Puedo subir Huayna Picchu o Montaña Machu Picchu?", answer: "Sí, pero requiere entrada adicional que debe reservarse con anticipación (mínimo 2-3 meses antes). Consulta disponibilidad." },
      { question: "¿Es necesario llevar pasaporte?", answer: "Sí, es obligatorio presentar pasaporte o documento de identidad original para ingresar a Machu Picchu." },
      { question: "¿Qué tipo de tren se utiliza?", answer: "Utilizamos el tren Expedition de Peru Rail o similar, con ventanas panorámicas y servicio a bordo." },
      { question: "¿El tour se realiza con lluvia?", answer: "Sí, el tour se realiza en cualquier condición climática. Machu Picchu es hermoso incluso con neblina o lluvia ligera." }
    ],
    reviews: [
      { id: "r1", name: "Carlos Mendez", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, comment: "Increíble experiencia. El guía Raúl conocía cada rincón de la ciudadela. ¡100% recomendado!", date: "2025-12-15", country: "España" },
      { id: "r2", name: "Sarah Johnson", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, comment: "Best experience ever! The organization was perfect and our guide was amazing.", date: "2025-11-20", country: "USA" },
      { id: "r3", name: "María García", avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, comment: "Todo perfecto, desde el recojo hasta el regreso. El tren es una experiencia en sí misma.", date: "2025-10-08", country: "Chile" }
    ],
    videoTestimonials: [
      { platform: "instagram", embedUrl: "", thumbnail: "" },
      { platform: "tiktok", embedUrl: "", thumbnail: "" }
    ]
  },
  {
    id: "2",
    slug: "montana-de-colores",
    title: "Montaña de Colores (Vinicunca)",
    shortDescription: "Descubre la magia de la montaña más colorida del Perú a más de 5,000 m.s.n.m.",
    description: "Vinicunca, conocida como la Montaña de los 7 Colores, es una formación natural única que parece pintada por los Andes. Sus franjas de colores se deben a la composición mineral del suelo. Una experiencia que te dejará sin aliento.",
    aboutTour: "Embárcate en una aventura épica hacia uno de los destinos más impresionantes de los Andes peruanos: la famosa Montaña de 7 Colores o Vinicunca. Este fenómeno geológico único en el mundo debe sus vibrantes colores a la composición mineralógica del suelo, creando un espectáculo visual que parece sacado de otro planeta. La caminata de aproximadamente 5 kilómetros te llevará a través de paisajes andinos espectaculares, con vistas de nevados imponentes y encuentros con alpacas y llamas en su hábitat natural. Al llegar a la cima a más de 5,000 metros sobre el nivel del mar, serás recompensado con una de las vistas más impresionantes que puedas imaginar. No olvides tu cámara, ¡este es un lugar que merece ser capturado!",
    price: 80,
    originalPrice: 100,
    duration: "1 Día",
    tourType: "Tour de aventura",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.8700, lng: -71.3033 },
    region: "sierra",
    category: "aventura",
    image: `${import.meta.env.BASE_URL}images/categories/montana-de-colores.jpg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapamontañacolores.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/montana-de-colores.jpg`,
      `${import.meta.env.BASE_URL}images/categories/montañacolores2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/montañacolores3.jpeg`
    ],
    featured: true,
    isOffer: true,
    difficulty: "difícil",
    maxGroup: 20,
    startTime: "4:30 AM",
    highlights: [
      "Caminata a la famosa Montaña de 7 Colores",
      "Vistas espectaculares de los Andes",
      "Desayuno y almuerzo buffet incluidos",
      "Encuentro con alpacas y llamas",
      "Oxígeno de emergencia y botiquín disponible"
    ],
    included: [
      "Transporte turístico completo",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Guía profesional",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 15.00, Extranjeros: S/ 25.00)",
      "Caballo (opcional)"
    ],
    itinerary: [
      { time: "4:30 AM", activity: "Recojo del hotel", description: "Recojo de los pasajeros en sus respectivos hoteles entre las 04:30 y 05:00 a.m." },
      { time: "7:00 AM", activity: "Desayuno en Cusipata", description: "Viaje hacia el sur (100 km) hasta llegar al restaurante en Cusipata para el desayuno." },
      { time: "8:30 AM", activity: "Transporte a Qomer Cocha", description: "Recorrido de 1 hora y 30 minutos hasta el punto de inicio de la caminata." },
      { time: "10:00 AM", activity: "Caminata y Visita", description: "Caminata de 45 min de ascenso y 40 min de descenso. Tiempo para disfrutar del paisaje y fotos." },
      { time: "12:00 PM", activity: "Retorno al Restaurante", description: "Trayecto de 1 hora y 20 minutos de regreso para el almuerzo buffet." },
      { time: "2:00 PM", activity: "Almuerzo Buffet", description: "Disfrute de un variado almuerzo buffet en el restaurante local." },
      { time: "3:30 PM", activity: "Regreso a Cusco", description: "Viaje de retorno de aproximadamente 1 hora y 30 minutos." },
      { time: "4:00 PM", activity: "Llegada a Cusco", description: "Llegada y desembarque a una cuadra de la Plaza de Armas." }
    ],
    faqs: [
      { question: "¿Qué tan difícil es la caminata?", answer: "Es una caminata de dificultad alta debido a la altitud (5,000+ m.s.n.m.). Recomendamos estar aclimatado al menos 2 días en Cusco antes del tour." },
      { question: "¿Puedo alquilar caballo?", answer: "Sí, hay caballos disponibles por S/. 80 que te llevan hasta cerca de la cima. El último tramo siempre es a pie." },
      { question: "¿Qué ropa debo llevar?", answer: "Ropa en capas, impermeable, gorro, guantes, protector solar y lentes de sol. El clima puede cambiar rápidamente." },
      { question: "¿Hay baños en el camino?", answer: "Hay baños básicos al inicio del trekking y en algunos puntos del recorrido." }
    ],
    reviews: [
      { id: "r4", name: "Pedro Sánchez", avatar: "https://randomuser.me/api/portraits/men/45.jpg", rating: 5, comment: "Una experiencia que te cambia la vida. Los colores son increíbles en persona.", date: "2025-12-01", country: "México" },
      { id: "r5", name: "Emma Wilson", avatar: "https://randomuser.me/api/portraits/women/33.jpg", rating: 5, comment: "Challenging but absolutely worth it! The views are unreal.", date: "2025-11-15", country: "UK" }
    ]
  },
  {
    id: "3",
    slug: "laguna-humantay",
    title: "Tour Laguna Humantay",
    shortDescription: "Una laguna de aguas turquesas rodeada de imponentes nevados.",
    description: "Descubre una laguna de aguas turquesas alimentada por el glaciar del nevado Humantay, rodeada de imponentes montañas. Un escenario mágico que te conectará con la naturaleza.",
    aboutTour: "La Laguna Humantay es uno de los destinos naturales más impresionantes de los Andes peruanos. Ubicada a 4,200 metros sobre el nivel del mar, al pie del majestuoso nevado Humantay, esta laguna de origen glaciar te cautivará con sus increíbles aguas de color turquesa. El trek de aproximadamente 3 kilómetros te llevará a través de paisajes andinos espectaculares, donde podrás apreciar la flora y fauna típica de la zona. Al llegar a la laguna, tendrás tiempo para contemplar su belleza, tomar fotografías y realizar una pequeña ofrenda a la Pachamama como lo hacían nuestros ancestros. Una experiencia que conecta cuerpo, mente y espíritu con la naturaleza.",
    price: 70,
    duration: "1 Día",
    tourType: "Tour de naturaleza",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.4747, lng: -72.5753 },
    region: "sierra",
    category: "naturaleza",
    image: `${import.meta.env.BASE_URL}images/categories/laguna1.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/laguna1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/laguna2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/laguna3.jpeg`
    ],
    featured: true,
    difficulty: "moderado",
    maxGroup: 19,
    startTime: "4:00 AM",
    highlights: [
      "Laguna de aguas turquesas glaciares",
      "Vistas del nevado Humantay",
      "Grupo reducido (máximo 19 pasajeros)",
      "Desayuno y almuerzo buffet incluidos",
      "Oxígeno y botiquín de primeros auxilios"
    ],
    included: [
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Guía profesional bilingüe (español/inglés)",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 10.00, Extranjeros: S/ 20.00)",
      "Caballo (opcional)"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Recojo del hotel en Cusco", description: "Inicio del recojo de pasajeros desde sus hoteles en el centro de Cusco." },
      { time: "5:00 AM", activity: "Salida de Cusco", description: "Viaje en transporte turístico de alrededor de 3 horas hacia Mollepata." },
      { time: "8:00 AM", activity: "Desayuno en Mollepata", description: "Disfrutaremos de un desayuno buffet en un restaurante local." },
      { time: "9:30 AM", activity: "Llegada a Soraypampa", description: "Recorrido de 1 hora y 30 minutos hasta el punto de inicio de la caminata." },
      { time: "11:00 AM", activity: "Caminata a la Laguna", description: "Caminata de 1 hora y 30 min hasta la laguna. Tiempo para fotos y disfrutar del paisaje." },
      { time: "12:30 PM", activity: "Retorno a Soraypampa", description: "Descenso por el mismo sendero con una duración aproximada de 1 hora." },
      { time: "1:30 PM", activity: "Almuerzo Buffet", description: "Retorno en transporte al restaurante para disfrutar del almuerzo buffet." },
      { time: "5:30 PM", activity: "Llegada a Cusco", description: "Retorno a la ciudad y desembarque en la Plaza San Francisco (a 2 cuadras de la Plaza de Armas)." }
    ],
    faqs: [
      { question: "¿Qué tan difícil es el trekking?", answer: "Es de dificultad moderada. Son aproximadamente 3 km de caminata con pendientes. Recomendamos estar aclimatado." },
      { question: "¿Puedo alquilar caballo?", answer: "Sí, hay caballos disponibles por S/. 100 que te llevan hasta muy cerca de la laguna." },
      { question: "¿Es necesario estar aclimatado?", answer: "Sí, recomendamos estar al menos 2 días en Cusco antes de realizar este tour." }
    ],
    reviews: [
      { id: "r6", name: "María García", avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, comment: "La laguna es más hermosa de lo que muestran las fotos. ¡Increíble experiencia!", date: "2025-11-10", country: "Chile" }
    ]
  },
  {
    id: "4",
    slug: "puente-qeswachaka",
    title: "Puente Inca Q'eswachaka",
    shortDescription: "El último puente inca de fibra vegetal que se renueva cada año.",
    description: "Visita el último puente inca de cuerda que aún se mantiene vivo gracias a la tradición de las comunidades locales. Este puente colgante de fibra vegetal es reconstruido anualmente en junio, preservando una tradición ancestral milenaria.",
    aboutTour: "El Puente Inca de Q’eswachaka es una maravilla de ingeniería y tradición que ha sobrevivido desde la época del Tahuantinsuyo. Construido íntegramente a base de fibra vegetal (ichu), este puente colgante es reconstruido cada año en el mes de junio por los pobladores de cuatro comunidades locales (Huinchiri, Chaupibanda, Ccollana Quehue y Choccayhua), quienes se reúnen para renovarlo siguiendo técnicas ancestrales heredadas de sus antepasados. Durante esta excursión, cruzarás este impresionante monumento, visitarás el volcán de Pabellones en Yanaoca y disfrutarás de la belleza escénica de las lagunas de la zona como Pomacanchi. Una inmersión cultural profunda en el corazón de los Andes.",
    price: 90,
    duration: "1 Día",
    tourType: "Tour cultural",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -14.3819, lng: -71.4906 },
    region: "sierra",
    category: "cultural",
    image: `${import.meta.env.BASE_URL}images/categories/puente1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapapuente.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/puente1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/puente2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/puente3.jpeg`
    ],
    featured: true,
    difficulty: "fácil",
    maxGroup: 19,
    startTime: "4:30 AM",
    highlights: [
      "Cruzar el último puente inca de fibra vegetal del mundo",
      "Visita al volcán de Pabellones en Yanaoca",
      "Espectacular vista de las 4 lagunas (Pomacanchi y más)",
      "Tradición ancestral Patrimonio de la Humanidad",
      "Almuerzo buffet y desayuno buffet incluidos"
    ],
    included: [
      "Transporte turístico completo",
      "Desayuno buffet en Combapata",
      "Almuerzo buffet en Combapata",
      "Guía profesional especializado",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios",
      "Bastones de trekking"
    ],
    notIncluded: [
      "Ticket de ingreso al puente (Nacionales: S/ 10.00, Extranjeros: S/ 20.00)",
      "Ingreso a los botes del río Apurímac (S/ 5.00)"
    ],
    itinerary: [
      { time: "4:30 AM", activity: "Recojo del hotel", description: "Iniciamos el recojo de pasajeros desde sus hoteles en Cusco." },
      { time: "5:00 AM", activity: "Salida hacia el sur", description: "Viaje de 3 horas hacia la comunidad de Combapata." },
      { time: "8:00 AM", activity: "Desayuno en Combapata", description: "Parada para uso de servicios y disfrute de un desayuno buffet." },
      { time: "9:30 AM", activity: "Mirador de Combapata", description: "Vista de la confluencia de los ríos Vilcanota y Salcca, y visita al volcán de Pabellones." },
      { time: "11:00 AM", activity: "Llegada al Puente Q’eswachaka", description: "Exploración del puente, explicaciones históricas y tiempo para fotografías." },
      { time: "1:30 PM", activity: "Almuerzo en Combapata", description: "Retorno al pueblo para disfrutar del almuerzo buffet." },
      { time: "3:00 PM", activity: "Visita a las 4 Lagunas", description: "Caminata ligera para apreciar las lagunas de Pampamarca, Asnacqocha, Acopia y Pomacanchi." },
      { time: "5:00 PM", activity: "Llegada a Cusco", description: "Fin del servicio y desembarque en la ciudad de Cusco." }
    ],
    faqs: [
      { question: "¿Es seguro cruzar el puente?", answer: "Sí, el puente es renovado anualmente y puede soportar hasta 3 toneladas. Es completamente seguro para cruzar." },
      { question: "¿Cuándo se realiza la renovación del puente?", answer: "La ceremonia de renovación se realiza cada año en junio, durante 3 días. Es un evento muy especial." },
      { question: "¿Hay baños en el lugar?", answer: "Sí, hay servicios básicos disponibles en la zona." }
    ],
    reviews: [
      { id: "r7", name: "Jean Pierre Dubois", avatar: "https://randomuser.me/api/portraits/men/52.jpg", rating: 5, comment: "Une expérience culturelle unique! Le pont est incroyable.", date: "2025-10-25", country: "Francia" }
    ]
  },
  {
    id: "5",
    slug: "maras-moray-salineras",
    title: "Tour Maras, Moray y Salineras",
    shortDescription: "Laboratorios agrícolas incas y las famosas Salineras de Maras.",
    description: "Descubre el ingenio inca en los andenes circulares de Moray, usados como laboratorio agrícola, y maravíllate con las más de 3,000 pozas de sal en las Salineras de Maras, explotadas desde tiempos preincaicos.",
    aboutTour: "Este tour te llevará a conocer dos de los sitios más impresionantes del Valle Sagrado de los Incas. En Moray, descubrirás los misteriosos andenes circulares que los incas utilizaron como un sofisticado laboratorio agrícola para experimentar con diferentes cultivos a distintas temperaturas. Luego, visitarás las espectaculares Salineras de Maras, un complejo de más de 3,000 pozas de sal que han sido explotadas desde tiempos preincaicos. El paisaje blanco de las salineras contrastando con el verde del valle es simplemente mágico. Tendrás oportunidad de comprar sal artesanal y productos derivados directamente de los productores locales.",
    price: 60,
    duration: "Medio Día",
    tourType: "Tour cultural",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.3295, lng: -72.1990 },
    region: "sierra",
    category: "cultural",
    image: `${import.meta.env.BASE_URL}images/categories/maras.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/maras.jpg`,
      `${import.meta.env.BASE_URL}images/categories/moray1.jpg`
    ],
    difficulty: "fácil",
    maxGroup: 20,
    startTime: "8:00 AM",
    highlights: [
      "Andenes circulares de Moray",
      "Más de 3,000 pozas de sal en las Salineras",
      "Compra de sal artesanal",
      "Paisajes espectaculares del Valle Sagrado",
      "Guía experto en cultura inca"
    ],
    included: [
      "Transporte turístico",
      "Guía profesional",
      "Entradas a Moray y Salineras"
    ],
    notIncluded: [
      "Alimentación"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Recojo del hotel en Cusco", description: "Salida hacia el Valle Sagrado." },
      { time: "9:30 AM", activity: "Llegada y recorrido en Moray", description: "Exploración de los andenes circulares con explicación histórica." },
      { time: "11:00 AM", activity: "Visita a las Salineras de Maras", description: "Recorrido por las más de 3,000 pozas de sal." },
      { time: "12:30 PM", activity: "Tiempo para fotos y compra de souvenirs", description: "Adquiere sal artesanal y productos locales." },
      { time: "1:30 PM", activity: "Retorno a Cusco", description: "Llegada aproximada a tu hotel." }
    ],
    faqs: [
      { question: "¿Puedo comprar sal en las Salineras?", answer: "¡Sí! Hay tiendas locales donde puedes comprar sal artesanal, sal de baño, chocolates con sal y otros productos." },
      { question: "¿Es necesario caminar mucho?", answer: "El recorrido implica caminatas cortas. Es apto para todas las edades." },
      { question: "¿Hay opción de tour en la tarde?", answer: "Sí, también tenemos salidas a las 2:00 PM." }
    ],
    reviews: [
      { id: "r8", name: "Ana Torres", avatar: "https://randomuser.me/api/portraits/women/26.jpg", rating: 5, comment: "Las salineras son impresionantes. Las fotos no les hacen justicia.", date: "2025-12-05", country: "Colombia" }
    ]
  },
  {
    id: "6",
    slug: "city-tour-cusco",
    title: "City Tour Cusco",
    shortDescription: "Explora la capital del Imperio Inca y sus alrededores arqueológicos.",
    description: "Recorre la Plaza de Armas, la Catedral, Qorikancha (Templo del Sol), y los sitios arqueológicos de Sacsayhuamán, Q'enqo, Puca Pucara y Tambomachay. Una inmersión completa en la historia inca y colonial.",
    aboutTour: "El City Tour Cusco es la mejor introducción a la ciudad imperial. Comenzamos en el corazón de la ciudad, la Plaza de Armas, rodeada de impresionantes edificios coloniales construidos sobre cimientos incas. Visitarás el Qorikancha, el templo más importante del Imperio Inca dedicado al Sol, sobre el cual los españoles construyeron el Convento de Santo Domingo. Luego, nos dirigimos a los sitios arqueológicos que rodean la ciudad: Sacsayhuamán con sus impresionantes muros megalíticos, Q'enqo con su altar de sacrificios, Puca Pucara (la fortaleza roja) y Tambomachay, conocido como los Baños del Inca. Este tour te dará una comprensión completa de la grandeza del Imperio Inca y su legado.",
    price: 45,
    duration: "Medio Día",
    tourType: "Tour cultural",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.5160, lng: -71.9785 },
    region: "sierra",
    category: "cultural",
    image: `${import.meta.env.BASE_URL}images/categories/citytour1.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/citytour1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/citytour2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/citytour3.jpg`
    ],
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapacity.png`,
    difficulty: "fácil",
    maxGroup: 25,
    startTime: "1:00 PM",
    highlights: [
      "Plaza de Armas y Catedral de Cusco",
      "Qorikancha - Templo del Sol",
      "Fortaleza de Sacsayhuamán",
      "Sitios arqueológicos: Q'enqo, Puca Pucara, Tambomachay",
      "Ideal para el primer día en Cusco"
    ],
    included: [
      "Transporte turístico",
      "Guía profesional bilingüe",
      "Boleto turístico (entradas)"
    ],
    notIncluded: [
      "Entrada a la Catedral y Qorikancha",
      "Alimentación"
    ],
    itinerary: [
      { time: "1:00 PM", activity: "Recojo del hotel", description: "Iniciamos el recorrido desde tu hotel." },
      { time: "1:30 PM", activity: "Visita a Qorikancha", description: "El templo más importante del Imperio Inca." },
      { time: "2:30 PM", activity: "Plaza de Armas y Catedral", description: "Corazón de la ciudad colonial." },
      { time: "3:30 PM", activity: "Sacsayhuamán", description: "Impresionante fortaleza con muros megalíticos." },
      { time: "4:30 PM", activity: "Q'enqo, Puca Pucara y Tambomachay", description: "Sitios arqueológicos ceremoniales." },
      { time: "6:00 PM", activity: "Retorno al hotel", description: "Fin del tour." }
    ],
    faqs: [
      { question: "¿Es recomendable para el primer día en Cusco?", answer: "¡Sí! Es ideal porque es de poca exigencia física y te ayuda a conocer la ciudad mientras te aclimatas." },
      { question: "¿Qué incluye el boleto turístico?", answer: "Incluye acceso a Sacsayhuamán, Q'enqo, Puca Pucara y Tambomachay, más otros sitios del circuito." },
      { question: "¿Puedo tomar el tour en la mañana?", answer: "Sí, también tenemos salidas a las 8:00 AM." }
    ],
    reviews: [
      { id: "r9", name: "Luis Herrera", avatar: "https://randomuser.me/api/portraits/men/22.jpg", rating: 5, comment: "Excelente tour para conocer la historia de Cusco. Muy recomendado.", date: "2025-11-28", country: "Perú" }
    ]
  },
  {
    id: "7",
    slug: "valle-sagrado-full-day",
    title: "Valle Sagrado Full Day",
    shortDescription: "Pisaq, Ollantaytambo y el corazón del Imperio Inca.",
    description: "Explora el Valle Sagrado de los Incas visitando el mercado y sitio arqueológico de Pisaq, el pueblo de Urubamba y la imponente fortaleza de Ollantaytambo. Un viaje a través de la historia viva del Perú.",
    aboutTour: "El Valle Sagrado de los Incas fue el centro agrícola más importante del Imperio. Este tour te llevará a conocer los lugares más emblemáticos de esta región privilegiada. Comenzamos en Pisaq, donde visitarás su colorido mercado artesanal y el impresionante sitio arqueológico con sus terrazas agrícolas y cementerio inca. Continuamos hacia Urubamba para disfrutar de un delicioso almuerzo buffet. Finalmente, llegamos a Ollantaytambo, una de las pocas ciudades incas que aún conserva su trazado original y su imponente fortaleza con el famoso Templo del Sol. Este es también el punto de partida del tren hacia Machu Picchu.",
    price: 85,
    duration: "1 Día",
    tourType: "Tour cultural",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.2631, lng: -72.2644 },
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600"
    ],
    difficulty: "fácil",
    maxGroup: 20,
    startTime: "8:00 AM",
    highlights: [
      "Mercado artesanal de Pisaq",
      "Sitio arqueológico de Pisaq",
      "Almuerzo buffet en Urubamba",
      "Fortaleza de Ollantaytambo",
      "Ciudad inca viviente"
    ],
    included: [
      "Transporte turístico",
      "Almuerzo buffet en Urubamba",
      "Guía profesional",
      "Entradas a sitios arqueológicos"
    ],
    notIncluded: [
      "Desayuno",
      "Gastos personales"
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Recojo del hotel", description: "Salida desde tu hotel en Cusco." },
      { time: "9:30 AM", activity: "Mercado artesanal de Pisaq", description: "Explora el colorido mercado y compra artesanías." },
      { time: "10:30 AM", activity: "Sitio arqueológico de Pisaq", description: "Impresionantes terrazas y arquitectura inca." },
      { time: "12:30 PM", activity: "Almuerzo buffet en Urubamba", description: "Delicioso almuerzo con variedad de platos." },
      { time: "2:30 PM", activity: "Fortaleza de Ollantaytambo", description: "Una de las fortalezas incas mejor conservadas." },
      { time: "5:00 PM", activity: "Retorno a Cusco", description: "Llegada aproximada a las 6:30 PM." }
    ],
    faqs: [
      { question: "¿Es este tour apto para niños?", answer: "¡Sí! Es un tour familiar con caminatas moderadas y muchas paradas interesantes." },
      { question: "¿Puedo quedarme en Ollantaytambo para ir a Machu Picchu?", answer: "Sí, coordinamos para que puedas quedarte y tomar el tren al día siguiente." },
      { question: "¿El almuerzo tiene opciones vegetarianas?", answer: "Sí, el buffet incluye opciones vegetarianas y veganas." }
    ],
    reviews: [
      { id: "r10", name: "Ana Lucía Torres", avatar: "https://randomuser.me/api/portraits/women/26.jpg", rating: 5, comment: "Desde el primer contacto fueron muy profesionales. El tour fue mágico, los paisajes impresionantes.", date: "2025-10-15", country: "Colombia" }
    ]
  },
  {
    id: "8",
    slug: "ica-paracas-full-day",
    title: "Ica y Paracas Full Day",
    shortDescription: "Oasis de Huacachina, Islas Ballestas y la Reserva de Paracas.",
    description: "Disfruta del desierto costero peruano visitando el oasis de Huacachina, las misteriosas Islas Ballestas y la impresionante Reserva Nacional de Paracas. Arena, mar y naturaleza en un solo día.",
    aboutTour: "Este tour te llevará a descubrir la costa sur del Perú en una experiencia llena de aventura y naturaleza. Comenzamos muy temprano desde Lima hacia Paracas, donde abordarás una lancha para visitar las Islas Ballestas, conocidas como las 'Galápagos peruanas' por su increíble biodiversidad: lobos marinos, pingüinos de Humboldt, aves guaneras y más. Luego explorarás la Reserva Nacional de Paracas con sus formaciones rocosas y playas vírgenes. Por la tarde, nos dirigimos al oasis de Huacachina, un paraíso en medio del desierto donde disfrutarás de un emocionante paseo en tubulares (buggies) por las dunas más altas de Sudamérica.",
    price: 120,
    duration: "1 Día",
    tourType: "Tour de aventura",
    languages: ["Español", "Inglés"],
    location: "Ica",
    locationCoords: { lat: -14.0875, lng: -75.7747 },
    region: "costa",
    category: "naturaleza",
    image: `${import.meta.env.BASE_URL}images/categories/ica-paracas.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/ica-paracas.jpg`
    ],
    isOffer: true,
    originalPrice: 150,
    difficulty: "fácil",
    maxGroup: 20,
    startTime: "4:00 AM",
    highlights: [
      "Tour en lancha a Islas Ballestas",
      "Fauna marina: lobos marinos, pingüinos, aves",
      "Reserva Nacional de Paracas",
      "Oasis de Huacachina",
      "Paseo en tubulares por las dunas"
    ],
    included: [
      "Transporte Lima - Ica - Lima",
      "Tour en lancha a Islas Ballestas",
      "Visita a Reserva de Paracas",
      "Paseo en tubulares en Huacachina",
      "Guía profesional"
    ],
    notIncluded: [
      "Alimentación",
      "Sandboarding"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Salida de Lima", description: "Viaje en bus turístico hacia la costa sur." },
      { time: "7:30 AM", activity: "Llegada a Paracas", description: "Arribo al muelle de Paracas." },
      { time: "8:00 AM", activity: "Tour Islas Ballestas (2 horas)", description: "Observación de fauna marina en lancha." },
      { time: "10:30 AM", activity: "Reserva Nacional de Paracas", description: "Recorrido por las playas y formaciones rocosas." },
      { time: "1:00 PM", activity: "Almuerzo (no incluido)", description: "Tiempo libre para almorzar en Paracas." },
      { time: "2:30 PM", activity: "Huacachina - Paseo en tubulares", description: "Emocionante aventura en las dunas del desierto." },
      { time: "5:00 PM", activity: "Retorno a Lima", description: "Viaje de regreso." },
      { time: "9:00 PM", activity: "Llegada a Lima", description: "Drop-off en punto acordado." }
    ],
    faqs: [
      { question: "¿Es seguro el paseo en tubulares?", answer: "Sí, los tubulares son conducidos por pilotos experimentados y cuentan con todas las medidas de seguridad." },
      { question: "¿Puedo hacer sandboarding?", answer: "Sí, está disponible por un costo adicional y está incluido en algunos paseos en tubulares." },
      { question: "¿Qué debo llevar?", answer: "Protector solar, gorra, lentes de sol, ropa cómoda y una chaqueta ligera para la lancha." }
    ],
    reviews: [
      { id: "r11", name: "Roberto Silva", avatar: "https://randomuser.me/api/portraits/men/36.jpg", rating: 5, comment: "Un día increíble. Las Islas Ballestas son espectaculares y los tubulares en Huacachina son súper emocionantes.", date: "2025-12-18", country: "Brasil" }
    ]
  },
  {
    id: "9",
    slug: "fortaleza-waqrapukara",
    title: "Fortaleza Waqrapukara",
    shortDescription: "Vive la experiencia de la impresionante fortaleza de WaqraPukara y sus paisajes espectaculares.",
    description: "Vive una aventura inolvidable con el tour a Waqrapukara. La impresionante fortaleza de WaqraPukara te sorprenderá con su paisaje, ofreciéndole vistas espectaculares de los Andes, cañones profundos y ríos serpenteantes.",
    aboutTour: "La Fortaleza de Waqrapukara es uno de los tesoros mejor guardados de los Andes. Ubicada en la cima de un cañón sobre el río Apurímac, este santuario de piedra en forma de cuernos (Waqra significa cuerno en quechua) combina arquitectura inca y paisajes naturales de vértigo. Nuestra expedición te llevará a través de pintorescos pueblos andinos como Pomacanchi y Santa Lucía, culminando en una caminata moderada que te premiará con vistas incomparables. Es el destino perfecto para quienes buscan misticismo e historia lejos de las rutas turísticas convencionales.",
    price: 150,
    duration: "1 Día",
    tourType: "Tour de aventura",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.987, lng: -71.696 },
    region: "sierra",
    category: "aventura",
    image: `${import.meta.env.BASE_URL}images/categories/waqrapukara1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapafortaleza.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/waqrapukara1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/waqrapukara2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/waqrapukara3.jpeg`
    ],
    featured: true,
    difficulty: "moderado",
    maxGroup: 18,
    startTime: "4:00 AM",
    highlights: [
      "Vistas espectaculares del cañón del río Apurímac",
      "Exploración de la fortaleza inca en forma de cuernos",
      "Experiencia fuera de las rutas convencionales",
      "Paisajes de lagunas altoandinas",
      "Almuerzo al aire libre con vista panorámica"
    ],
    included: [
      "Transporte turístico completo",
      "Desayuno buffet",
      "Almuerzo (Box lunch al aire libre)",
      "Guía profesional",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios",
      "Bastones de trekking"
    ],
    notIncluded: [
      "Ticket de ingreso",
      "Gastos personales"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Salida de Cusco", description: "Recojo de pasajeros y salida entre las 04:00 y 04:30 a.m." },
      { time: "6:30 AM", activity: "Desayuno en Cusipata", description: "Viaje de 2 horas hasta Cusipata para disfrutar de un desayuno buffet." },
      { time: "8:00 AM", activity: "Rumbo a Santa Lucía", description: "Recorrido de 2.5 horas pasando por Pomacanchi hasta el punto de inicio." },
      { time: "10:30 AM", activity: "Caminata a la Fortaleza", description: "Caminata de dificultad moderada (45 min a 1 hora) hacia Waqrapukara." },
      { time: "11:30 AM", activity: "Exploración de Waqrapukara", description: "Tiempo libre para explorar el complejo y tomar fotografías en el cañón." },
      { time: "1:30 PM", activity: "Retorno a Santa Lucía", description: "Caminata de regreso hacia el transporte turístico." },
      { time: "2:30 PM", activity: "Almuerzo Box Lunch", description: "Almuerzo al aire libre con vista panorámica del entorno natural." },
      { time: "6:30 PM", activity: "Llegada a Cusco", description: "Retorno a la ciudad con llegada aproximada entre las 18:00 y 19:00 horas." }
    ],
    faqs: [
      {
        question: "¿Qué época del año es mejor para visitar Waqrapukara?",
        answer: "La mejor época para visitar es durante la estación seca, entre mayo y septiembre, cuando hay menos probabilidades de lluvia y los caminos están en mejores condiciones. Durante la temporada de lluvias (de noviembre a marzo), los senderos pueden volverse resbaladizos y difíciles de transitar."
      }
    ]
  },
  {
    id: "10",
    slug: "valle-sagrado-machu-picchu-2d1n",
    title: "Tour Valle Sagrado con Conexión a Machu Picchu 2 Dias 1 Noche",
    shortDescription: "Valle Sagrado, Machu Picchu, Cusco, Perú",
    description: "Un recorrido completo visitando el Valle Sagrado y conectando con la maravilla de Machu Picchu en 2 días inolvidables.",
    aboutTour: "Este programa de 2 días y 1 noche te permite explorar lo mejor del Valle Sagrado de los Incas, visitando sitios arqueológicos y mercados tradicionales, para luego conectar en tren hacia Aguas Calientes. Al día siguiente, disfrutarás de la majestuosidad de Machu Picchu con una visita guiada. Es la combinación perfecta de cultura, historia y paisajes impresionantes.",
    price: 385.00,
    duration: "2 Días 1 Noche",
    tourType: "Paquete Turístico",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1600"
    ],
    included: ["Transporte", "Hotel", "Tren", "Ingresos", "Guía"],
    notIncluded: ["Alimentación no mencionada"],
    itinerary: [
      { time: "Day 1", activity: "Valle Sagrado", description: "Visita a Pisaq y Ollantaytambo. Viaje en tren a Aguas Calientes." },
      { time: "Day 2", activity: "Machu Picchu", description: "Tour guiado en Machu Picchu y retorno a Cusco." }
    ]
  },
  {
    id: "12",
    slug: "maras-moray-tradicional-full-day",
    title: "Tour Maras Moray Tradicional Full Day",
    shortDescription: "Moray, Maras, Perú",
    description: "Visita los andenes de Moray y las salineras de Maras en un recorrido tradicional.",
    price: 20.00,
    duration: "5- 6 Horas",
    tourType: "Tour Cultural",
    languages: ["Español"],
    location: "Maras",
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1629947935402-27354b732554?auto=format&fit=crop&q=80&w=1600",
    included: ["Transporte", "Guía"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "AM", activity: "Maras y Moray", description: "Recorrido por los centros arqueológicos y salineras." }
    ]
  },
  {
    id: "14",
    slug: "walking-tour-cusco",
    title: "Walking Tour Cusco",
    shortDescription: "Descubre Cusco en cada paso",
    description: "Explora las calles de piedra, plazas y rincones históricos de Cusco a pie con un guía local.",
    price: 12.00,
    duration: "3 horas",
    tourType: "Caminata",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1521245780562-b1e7c53828c2?auto=format&fit=crop&q=80&w=1600",
    included: ["Guía"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "AM/PM", activity: "Caminata", description: "Recorrido por San Blas, Plaza de Armas y calles históricas." }
    ]
  },
  {
    id: "15",
    slug: "waqrapukara-tour-economico",
    title: "Waqrapukara Tour",
    shortDescription: "Complejo Arqueológico Waqrapukara",
    description: "Una aventura económica hacia la impresionante fortaleza de Waqrapukara.",
    price: 39.00,
    duration: "1 Día",
    tourType: "Aventura",
    languages: ["Español"],
    location: "Cusco",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1627057088190-67258a506828?auto=format&fit=crop&q=80&w=1600",
    included: ["Transporte", "Guía", "Alimentación"],
    notIncluded: ["Ingresos", "Caballos"],
    itinerary: [
      { time: "Full Day", activity: "Waqrapukara", description: "Caminata y visita a la fortaleza." }
    ]
  },
  {
    id: "17",
    slug: "montana-7-colores-cuatrimotos",
    title: "Montaña de Colores con Cuatrimotos",
    shortDescription: "Siente la adrenalina de conducir cuatrimotos hacia la famosa Montaña de 7 Colores.",
    description: "Siente la adrenalina de conducir cuatrimotos a través de rutas escénicas andinas hacia la famosa Montaña de 7 Colores. Una forma emocionante y accesible de disfrutar de uno de los paisajes más impresionantes de los Andes.",
    aboutTour: "Nuestra aventura comienza con el recojo de pasajeros a las 4:00 AM para dirigirnos hacia nuestra base de operaciones. Tras un nutritivo desayuno buffet, recibirás una inducción completa sobre seguridad y manejo de las cuatrimotos. Iniciaremos el recorrido por rutas escénicas atravesando valles y caminos rurales con vistas constantes a las montañas. El trayecto en cuatrimoto (aprox. 30 min) te permitirá disfrutar del entorno de forma única. Al llegar al estacionamiento, realizaremos una caminata corta y accesible hacia el mirador principal de la Montaña de Colores, donde dispondrás de tiempo para fotos y explicación guiada. Finalmente retornaremos en las cuatrimotos para disfrutar de un almuerzo buffet antes de regresar a Cusco.",
    price: 103.00,
    duration: "1 Día",
    tourType: "Aventura ATV",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1549557404-0c2d3080e227?auto=format&fit=crop&q=80&w=1600",
    startTime: "4:00 AM",
    included: [
      "Recojo del hotel",
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Cuatrimotos (simple o doble según reserva)",
      "Guía profesional",
      "Oxígeno",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 15.00, Extranjeros: S/ 25.00)"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Recojo del hotel", description: "Recojo de pasajeros desde hoteles o puntos previamente coordinados." },
      { time: "6:30 AM", activity: "Desayuno Buffet", description: "Llegada al punto de desayuno para cargar energías." },
      { time: "8:00 AM", activity: "Base de Operaciones e Inducción", description: "Inducción completa sobre seguridad y manejo de los vehículos." },
      { time: "8:30 AM", activity: "Recorrido en Cuatrimoto", description: "Trayecto de 30 minutos por rutas escénicas, valles abiertos y caminos rurales." },
      { time: "9:30 AM", activity: "Caminata y Mirador", description: "Caminata corta y accesible hacia el mirador principal con tiempo para fotos." },
      { time: "11:30 AM", activity: "Retorno a la Base", description: "Regreso por la misma ruta en cuatrimotos hacia el punto central." },
      { time: "1:00 PM", activity: "Almuerzo Buffet", description: "Degustación de nuestro almuerzo buffet reconfortante." },
      { time: "5:00 PM", activity: "Llegada a Cusco", description: "Traslado final hacia la ciudad de Cusco (arribo entre las 5:00 y 5:30 PM)." }
    ]
  },
  {
    id: "18",
    slug: "montana-7-colores-economico",
    title: "Tour a la Montaña de 7 Colores en 1 Día",
    shortDescription: "Cusco, Perú, Montaña de Colores",
    description: "La opción clásica y económica para visitar la Montaña Vinicunca.",
    price: 33.00,
    duration: "1 Día",
    tourType: "Aventura",
    languages: ["Español"],
    location: "Cusco",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1534234509748-18e4c76a9116?auto=format&fit=crop&q=80&w=1600",
    reviews: [
      { id: "r_mc1", name: "Viajero", rating: 5, comment: "Excelente relación precio-calidad.", date: "2025-01-10", country: "Perú" }
    ],
    included: ["Transporte", "Guía", "Desayuno", "Almuerzo"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "Full Day", activity: "Caminata", description: "Ascenso a la montaña y retorno." }
    ]
  },
  {
    id: "19",
    slug: "laguna-humantay-economico",
    title: "Tour Laguna Humantay en 1 Dia",
    shortDescription: "Laguna Humantay, Mollepata, Cusco, Peru",
    description: "Visita la Laguna Humantay con un servicio estándar y económico.",
    price: 30.00,
    duration: "1 Día",
    tourType: "Aventura",
    languages: ["Español"],
    location: "Cusco",
    region: "sierra",
    category: "naturaleza",
    image: "https://images.unsplash.com/photo-1629819128038-f86a987fc5c3?auto=format&fit=crop&q=80&w=1600",
    reviews: [
      { id: "r_lh1", name: "Turista", rating: 5, comment: "Lugar mágico.", date: "2025-02-01", country: "Argentina" }
    ],
    included: ["Transporte", "Guía", "Alimentación"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "Full Day", activity: "Trek", description: "Caminata a la laguna." }
    ]
  },
  {
    id: "20",
    slug: "machu-picchu-vip-2d1n",
    title: "Tour Machu Picchu vip en 2 Días 1 Noche",
    shortDescription: "Servicio VIP a Machu Picchu",
    description: "Experiencia exclusiva en Machu Picchu con mejores hoteles y servicios.",
    price: 395.00,
    duration: "2 Días 1 Noche",
    tourType: "VIP",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1506450682236-fa1ec963d339?auto=format&fit=crop&q=80&w=1600",
    included: ["Transporte VIP", "Hotel Superior", "Tren Vistadome", "Guía Privado"],
    notIncluded: ["Cena"],
    itinerary: [
      { time: "Day 1", activity: "Viaje VIP", description: "Traslado confortable a Aguas Calientes." },
      { time: "Day 2", activity: "Machu Picchu", description: "Visita privada a la ciudadela." }
    ]
  },
  {
    id: "23",
    slug: "machu-picchu-valle-vivencial",
    title: "Tour Machu Picchu con Valle Vivencial en 2 Días 1 Noche",
    shortDescription: "Comunidad de Ccaccacollo , Valle Sagrado , Machu Picchu",
    description: "Combina el turismo vivencial en Ccaccaccollo, el Valle Sagrado y Machu Picchu.",
    price: 500.00,
    duration: "2 DÍas 1 Noche",
    tourType: "Paquete Completo",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "vivencial",
    image: "https://images.unsplash.com/photo-1548820579-0fad72e0e7fc?auto=format&fit=crop&q=80&w=1600",
    included: ["Todo incluido", "Hotel", "Tren", "Ingresos"],
    notIncluded: ["Gastos personales"],
    itinerary: [
      { time: "Day 1", activity: "Vivencial", description: "Comunidad y Valle Sagrado." },
      { time: "Day 2", activity: "Machu Picchu", description: "Tour en la ciudadela." }
    ]
  },
  {
    id: "25",
    slug: "maras-moray-cuatrimoto",
    title: "Tour Maras Moray en Cuatrimoto",
    shortDescription: "Maras Moray, Cusco, Perú",
    description: "Aventura sobre ruedas visitando Maras y Moray.",
    price: 28.00,
    duration: "5 a 6 horas",
    tourType: "Aventura ATV",
    languages: ["Español"],
    location: "Maras",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1596706037004-97217596043d?auto=format&fit=crop&q=80&w=1600",
    included: ["Cuatrimoto", "Guía", "Equipo"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "Medio Día", activity: "ATV", description: "Ruta de cuatrimotos por paisajes andinos." }
    ]
  },
  {
    id: "26",
    slug: "cuatrimotos-doble-maras-moray",
    title: "Tour en Cuatrimotos Doble Maras y Moray",
    shortDescription: "Maras Moray, Cusco, Perú",
    description: "Comparte la aventura en una cuatrimoto doble por Maras y Moray.",
    price: 40.00,
    duration: "5 a 6 horas",
    tourType: "Aventura ATV",
    languages: ["Español"],
    location: "Maras",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1596706037004-97217596043d?auto=format&fit=crop&q=80&w=1600",
    included: ["Cuatrimoto Doble", "Guía", "Equipo"],
    notIncluded: ["Ingresos"],
    itinerary: [
      { time: "Medio Día", activity: "ATV Doble", description: "Paseo compartido en cuatrimoto." }
    ]
  },
  {
    id: "27",
    slug: "tour-valle-sur-cusco",
    title: "Tour al Valle Sur de Cusco",
    shortDescription: "Valle Sur, Cusco, Perú",
    description: "Explora la ruta del barroco andino, Tipón y Pikillacta.",
    price: 20.00,
    duration: "5-6 Horas",
    tourType: "Cultural",
    languages: ["Español"],
    location: "Cusco",
    region: "sierra",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1600",
    included: ["Transporte", "Guía"],
    notIncluded: ["Ingresos", "Alimentación"],
    itinerary: [
      { time: "Medio Día", activity: "Valle Sur", description: "Visita a Tipón, Pikillacta y Andahuaylillas." }
    ]
  },
  {
    id: "28",
    slug: "morada-dioses-cuatrimoto-doble",
    title: "Tour Morada de Los Dioses en Cuatrimotos Doble",
    shortDescription: "Morada De Los Dioses, Cusco, Perú",
    description: "Disfruta en pareja o amigos del tour a la Morada de los Dioses en cuatrimoto doble.",
    price: 31.00,
    duration: "2 - 3 Horas",
    tourType: "Aventura ATV",
    languages: ["Español"],
    location: "Cusco",
    region: "sierra",
    category: "aventura",
    image: "https://images.unsplash.com/photo-1627582234551-34446c592965?auto=format&fit=crop&q=80&w=1600",
    included: ["Cuatrimoto Doble", "Guía", "Casco"],
    notIncluded: ["Ingreso"],
    itinerary: [
      { time: "2-3 Horas", activity: "ATV Doble", description: "Aventura compartida hacia el Apukunaq Tianan." }
    ]
  },
  {
    id: "29",
    slug: "valle-sagrado-vip",
    title: "Valle Sagrado VIP",
    shortDescription: "Chinchero, Moray, Salineras, Ollantaytambo y Pisac en un solo día.",
    description: "El tour más completo por el Valle Sagrado de los Incas. Visita los sitios arqueológicos más importantes, experimenta la cultura local en Chinchero y maravíllate con la ingeniería inca en Moray y las Salineras de Maras.",
    aboutTour: "Vive una experiencia cultural completa por el Valle Sagrado de los Incas con nuestro servicio VIP. Este recorrido está diseñado para aquellos que desean aprovechar al máximo su tiempo en Cusco, visitando en un solo día los destinos más emblemáticos del valle. Comenzaremos explorando la herencia textil y arqueológica de Chinchero, para luego asombrarnos con los andenes circulares de Moray y las milenarias Salineras de Maras. Tras un reconfortante almuerzo buffet en Urubamba, continuaremos hacia la imponente fortaleza de Ollantaytambo y finalizaremos en el impresionante Parque arqueológico de Pisac. Un viaje inolvidable lleno de historia, paisajes y mística andina.",
    price: 95,
    duration: "1 Día",
    tourType: "Tour Cultural VIP",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.3295, lng: -72.1990 },
    region: "sierra",
    category: "cultural",
    image: `${import.meta.env.BASE_URL}images/categories/valle1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapavallesagrado.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/valle1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/valle2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/valle3.jpeg`
    ],
    featured: true,
    difficulty: "fácil",
    maxGroup: 15,
    startTime: "6:30 AM",
    highlights: [
      "Visita completa a Chinchero y sus textiles",
      "Laboratorios agrícolas de Moray",
      "Salineras de Maras",
      "Fortaleza de Ollantaytambo",
      "Parque arqueológico de Pisac"
    ],
    included: [
      "Recojo del hotel",
      "Transporte turístico",
      "Almuerzo buffet",
      "Guía profesional de turismo",
      "Asistencia permanente"
    ],
    notIncluded: [
      "Ticket de ingreso (Boleto Turístico)",
      "Gastos personales"
    ],
    itinerary: [
      { time: "6:30 AM", activity: "Recojo del hotel", description: "El tour inicia con el recojo de los pasajeros desde sus hoteles aproximadamente a las 06:30 a 07:00 a.m." },
      { time: "8:00 AM", activity: "Chinchero", description: "Recorrido por el complejo arqueológico de Chinchero, su iglesia colonial y demostración de textiles asombrosos." },
      { time: "9:30 AM", activity: "Sitiio arqueológico de Moray", description: "Contemplaremos los increíbles andenes circulares, laboratorios de experimentación agrícola inca." },
      { time: "11:00 AM", activity: "Salineras de Maras", description: "Visita a las minas de sal natural usadas desde tiempos antiguos y variedad de productos de sal." },
      { time: "12:30 PM", activity: "Almuerzo Buffet en Urubamba", description: "Disfrutaremos de un variado almuerzo buffet con platos locales." },
      { time: "2:00 PM", activity: "Ollantaytambo", description: "Visita a la fortaleza y centro ceremonial, destacando sus construcciones de piedra finamente tallada." },
      { time: "4:00 PM", activity: "Parque Arqueológico de Pisac", description: "Exploración del centro agrícola y administrativo inca de gran importancia." },
      { time: "6:30 PM", activity: "Retorno a Cusco", description: "El servicio concluye aproximadamente a las 18:30 – 19:00 horas en la ciudad de Cusco." }
    ]
  },
  {
    id: "30",
    slug: "cordillera-colores-palccoyo",
    title: "Cordillera de Colores Palccoyo",
    shortDescription: "La alternativa perfecta de caminata corta para ver montañas de colores.",
    description: "Descubre la Cordillera Colorida de Palccoyo, una opción increíble para quienes buscan disfrutar de paisajes altoandinos y montañas de colores con una caminata de baja dificultad. Visita tres montañas coloridas, el Bosque de Piedras y el puente colonial de Checacupe.",
    aboutTour: "La Cordillera de Colores Palccoyo es la alternativa ideal a Vinicunca para aquellos que prefieren un recorrido más tranquilo y accesible. Ubicada a 4,100 m s. n. m., esta zona ofrece no solo una, sino tres montañas de colores en un entorno natural impresionante. El tour incluye una visita al histórico puente colonial de Checacupe y un recorrido por el margen del río Salcca, donde se pueden avistar alpacas y el famoso Puka Mayu o Río Rojo. Con una caminata corta y de baja dificultad que llega hasta el Bosque de Piedras a 4,500 m s. n. m., Palccoyo garantiza vistas privilegiadas y una experiencia inolvidable en los Andes.",
    price: 90,
    duration: "1 Día",
    tourType: "Tour de Naturaleza / Aventura",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "naturaleza",
    image: `${import.meta.env.BASE_URL}images/categories/palccoyo1.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/palccoyo1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/palccoyo2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/palccoyo3.jpeg`
    ],
    featured: true,
    difficulty: "fácil",
    maxGroup: 18,
    startTime: "4:30 AM",
    highlights: [
      "Vistas de tres montañas de colores",
      "Visita al impresionante Bosque de Piedras",
      "Caminata corta y de baja dificultad",
      "Puente Colonial de Checacupe",
      "Avistamiento de Alpacas y el Río Rojo (Puka Mayu)"
    ],
    included: [
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Guía profesional (español / inglés)",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 10.00, Internacionales: S/ 15.00)",
      "Gastos personales"
    ],
    itinerary: [
      { time: "4:30 AM", activity: "Recojo del hotel", description: "Recojo de pasajeros desde sus hoteles entre las 04:30 y 05:00 a.m." },
      { time: "6:30 AM", activity: "Desayuno en Cusipata", description: "Llegada al distrito de Cusipata para disfrutar de un desayuno buffet." },
      { time: "8:00 AM", activity: "Puente Colonial de Checacupe", description: "Breve parada para apreciar el histórico puente colonial." },
      { time: "9:00 AM", activity: "Viaje por el Río Salcca", description: "Trayecto de 1.5 horas observando paisajes, alpacas y el Río Rojo (Puka Mayu)." },
      { time: "10:30 AM", activity: "Llegada a Palccoyo", description: "Inicio de la exploración de las tres montañas y el bosque de piedras (4,500 msnm)." },
      { time: "12:30 PM", activity: "Tiempo de Exploración", description: "Dispondrá de 1.5 a 2 horas para visita y toma de fotografías." },
      { time: "2:30 PM", activity: "Almuerzo Buffet", description: "Retorno al restaurante para disfrutar del almuerzo incluido." },
      { time: "5:30 PM", activity: "Retorno a Cusco", description: "Llegada aproximada a la ciudad de Cusco." }
    ]
  },
  {
    id: "31",
    slug: "7-lagunas-ausangate-pacchanta",
    title: "7 Lagunas Ausangate + Baños Termales en Pacchanta",
    shortDescription: "Explora siete espejos de agua turquesa al pie del nevado Ausangate y relájate en aguas termales.",
    description: "Una experiencia inolvidable recorriendo siete lagunas de aguas cristalinas alimentadas por el glaciar Ausangate. Disfruta de la fauna andina, paisajes de alta montaña y termina el día relajándote en los baños termales de Pacchanta.",
    aboutTour: "Ubicado a las faldas del majestuoso nevado Ausangate, el circuito de las 7 Lagunas ofrece uno de los paisajes más espectaculares de Cusco. Este recorrido de alta montaña nos lleva a descubrir lagunas de diversos colores como el turquesa, azul y verde, rodeadas de imponentes glaciares. La experiencia comienza temprano en Cusco y nos lleva hasta el poblado de Pacchanta (4,200 m s. n. m.), donde iniciaremos una caminata de dificultad moderada. Al finalizar el circuito, tendrás la recompensa perfecta: sumergirte en los famosos baños termales de aguas medicinales de Pacchanta, con una vista inigualable del nevado más alto de la región.",
    price: 95,
    duration: "1 Día",
    tourType: "Tour de Naturaleza / Trekking",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    region: "sierra",
    category: "naturaleza",
    image: `${import.meta.env.BASE_URL}images/categories/7lagunas1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapa7lagunas.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/7lagunas1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/7lagunas2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/7lagunas3.jpeg`
    ],
    featured: true,
    difficulty: "moderado",
    maxGroup: 19,
    startTime: "4:00 AM",
    highlights: [
      "Circuito completo de las 7 Lagunas de Ausangate",
      "Vistas espectaculares del Nevado Ausangate",
      "Relajación en los Baños Termales de Pacchanta",
      "Avistamiento de alpacas, llamas y fauna local",
      "Desayuno y Almuerzo Buffet incluidos"
    ],
    included: [
      "Recojo del hotel",
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Guía profesional",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios",
      "Bastones de trekking"
    ],
    notIncluded: [
      "Ticket de ingreso a la Laguna (S/ 20.00 General)",
      "Entrada a los Baños Termales (S/ 5.00)",
      "Gastos personales"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Salida de Cusco", description: "Recojo de pasajeros y salida entre las 04:00 y 04:30 a.m." },
      { time: "6:30 AM", activity: "Desayuno en Cusipata", description: "Parada para disfrutar de un nutritivo desayuno buffet." },
      { time: "8:00 AM", activity: "Llegada a Pacchanta", description: "Trayecto final hacia el poblado de Pacchanta, punto de inicio de la caminata." },
      { time: "8:30 AM", activity: "Caminata de las 7 Lagunas", description: "Inicio del trekking (3 a 3.5 horas) visitando los siete espejos de agua." },
      { time: "12:00 PM", activity: "Baños Termales", description: "Retorno a Pacchanta para disfrutar de 30-40 minutos de relajación en las aguas termales." },
      { time: "1:00 PM", activity: "Almuerzo Buffet", description: "Almuerzo en el poblado de Pacchanta antes del retorno." },
      { time: "2:30 PM", activity: "Regreso a Cusco", description: "Abordaje del transporte para iniciar el viaje de vuelta." },
      { time: "5:00 PM", activity: "Llegada a Cusco", description: "Fin del servicio en la ciudad de Cusco." }
    ]
  },
  {
    id: "32",
    slug: "montana-pallay-punchu",
    title: "La Montaña Pallay Punchu",
    shortDescription: "Descubre la montaña con forma de poncho andino y visita el Templo de Raqchi.",
    description: "Una de las nuevas joyas geológicas de Cusco. Pallay Punchu te sorprenderá con sus formaciones rocosas que asemejan el tejido de un poncho andino, sumado a una visita cultural al impresionante Templo de Wiracocha en Raqchi.",
    aboutTour: "Pallay Punchu de Apu Ccunurana es un destino emergente que destaca por sus impresionantes pigmentaciones y formas geográficas que recuerdan a los tejidos tradicionales o 'Pallay' de los ponchos andinos. Ubicada cerca del pueblo de Layo, esta montaña ofrece una vista espectacular de la laguna de Langui-Layo. El programa combina esta maravilla natural con una visita al Complejo Arqueológico de Raqchi, uno de los templos más grandes del Imperio Inca dedicado al dios Wiracocha, y una parada en los puentes históricos de Checacupe.",
    price: 95,
    duration: "1 Día",
    tourType: "Tour de Naturaleza / Aventura",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -14.4167, lng: -71.1833 },
    region: "sierra",
    category: "aventura",
    image: `${import.meta.env.BASE_URL}images/categories/pallay1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapapallay.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/pallay1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/pallay2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/pallay3.jpeg`
    ],
    featured: true,
    difficulty: "moderado",
    maxGroup: 19,
    startTime: "4:30 AM",
    highlights: [
      "Vistas únicas de la Montaña Pallay Punchu (4,770 msnm)",
      "Visita al Complejo Arqueológico de Raqchi (Templo de Wiracocha)",
      "Vistas panorámicas de la laguna Langui-Layo",
      "Parada fotográfica en los Tres Puentes de Checacupe",
      "Desayuno y Almuerzo Buffet incluidos"
    ],
    included: [
      "Recojo del hotel (zona céntrica)",
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet",
      "Guía profesional",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 15.00, Extranjeros: S/ 25.00)",
      "Gastos personales"
    ],
    itinerary: [
      { time: "4:30 AM", activity: "Recojo del hotel", description: "Inicio del viaje hacia el sur de Cusco." },
      { time: "6:30 AM", activity: "Desayuno en Cusipata", description: "Parada de 2 horas desde Cusco para disfrutar del desayuno." },
      { time: "8:00 AM", activity: "Pueblo de Layo", description: "Llegada a Layo (3,978 msnm) para breve explicación y fotografías." },
      { time: "9:30 AM", activity: "Caminata a Pallay Punchu", description: "Caminata de 45 min hacia el punto más alto (4,770 msnm). Tiempo libre para fotos." },
      { time: "11:30 AM", activity: "Regreso al Transporte", description: "Descenso y viaje hacia el complejo arqueológico." },
      { time: "1:30 PM", activity: "Visita a Raqchi", description: "Exploración del Templo de Wiracocha, colcas y edificaciones de piedra y adobe." },
      { time: "3:30 PM", activity: "Puentes de Checacupe", description: "Parada panorámica en los tres puentes históricos de Checacupe." },
      { time: "6:00 PM", activity: "Llegada a Cusco", description: "Finalización del servicio cerca de la Plaza de Armas." }
    ]
  },
  {
    id: "33",
    slug: "glaciar-quelccaya",
    title: "Glaciar Quelccaya",
    shortDescription: "Visita el glaciar tropical más grande del mundo y la laguna Sibinacocha.",
    description: "Una expedición única hacia el Glaciar Quelccaya, el glaciar tropical más extenso del planeta. Disfruta de paisajes de alta montaña, vicuñas en su hábitat natural y la impresionante Laguna Sibinacocha.",
    aboutTour: "El Glaciar Quelccaya es una de las maravillas naturales más impresionantes de la Cordillera Vilcanota. Considerado el glaciar tropical más grande del mundo, ofrece un espectáculo visual de hielos milenarios, lagunas cristalinas y riachuelos. Esta expedición es ideal para los amantes de la naturaleza salvaje y la fotografía, ya que atraviesa valles remotos donde es común ver vicuñas y fauna altoandina compartiendo el paisaje con los imponentes picos nevados. El tour incluye una visita especial a la Laguna Sibinacocha, una de las más grandes y bellas del altiplano peruano.",
    price: 150,
    duration: "1 Día (Largo)",
    tourType: "Expedición de Naturaleza",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.9333, lng: -70.8167 },
    region: "sierra",
    category: "naturaleza",
    image: `${import.meta.env.BASE_URL}images/categories/hielo1.jpeg`,
    mapImage: `${import.meta.env.BASE_URL}images/categories/mapaglaciar.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/hielo1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/hielo2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/hielo3.jpeg`
    ],
    featured: true,
    difficulty: "fácil",
    maxGroup: 15,
    startTime: "3:00 AM",
    highlights: [
      "Visita al glaciar tropical más grande del mundo",
      "Espectacular Laguna Sibinacocha",
      "Avistamiento de vicuñas y fauna altoandina",
      "Paisajes de la Cordillera Vilcanota",
      "Caminata corta de mínima exigencia física"
    ],
    included: [
      "Recojo desde el hotel",
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo buffet (típico de la región)",
      "Guía profesional (español/inglés)",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Ticket de ingreso (Nacionales: S/ 10.00, Extranjeros: S/ 15.00)",
      "Gastos personales"
    ],
    itinerary: [
      { time: "3:00 AM", activity: "Recojo del hotel", description: "Inicio del servicio y salida rumbo al sur de Cusco." },
      { time: "4:30 AM", activity: "Desayuno en Cusipata", description: "Parada para disfrutar de un desayuno andino reparador." },
      { time: "5:00 AM", activity: "Viaje al Glaciar", description: "Trayecto de 4.5 horas atravesando valles y la Cordillera Vilcanota." },
      { time: "9:30 AM", activity: "Llegada y Caminata Corta", description: "Caminata de 15 minutos desde el punto final de la ruta vehicular hasta el glaciar." },
      { time: "10:30 AM", activity: "Exploración del Glaciar", description: "Tiempo para apreciar hielos milenarios, lagunas y fauna local." },
      { time: "1:00 PM", activity: "Almuerzo en Phinaya", description: "Almuerzo típico de la región preparado con ingredientes locales." },
      { time: "3:00 PM", activity: "Laguna Sibinacocha", description: "Parada especial en la escénica Laguna Sibinacocha." },
      { time: "8:30 PM", activity: "Llegada a Cusco", description: "Arribo final cerca de la Plaza Regocijo." }
    ]
  }
];

export const categories = [
  { name: "Cultural", slug: "cultural", icon: "🏛️", count: 15 },
  { name: "Aventura", slug: "aventura", icon: "🏔️", count: 12 },
  { name: "Naturaleza", slug: "naturaleza", icon: "🌿", count: 8 },
  { name: "Místico", slug: "mistico", icon: "✨", count: 6 },
  { name: "Vivencial", slug: "vivencial", icon: "👨‍👩‍👧", count: 5 },
  { name: "Trekking", slug: "trekking", icon: "🥾", count: 10 }
];

export const testimonials = [
  {
    id: "1",
    name: "Carlos Mendez",
    location: "España",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Increíble experiencia en Machu Picchu. La organización de Mukis Travel fue impecable, nuestro guía Raúl conocía cada rincón de la ciudadela. ¡100% recomendados!",
    rating: 5,
    tour: "Machu Picchu Full Day"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    location: "USA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Best travel agency in Peru! The guides were so knowledgeable and friendly. The Rainbow Mountain was breathtaking. Will definitely book again!",
    rating: 5,
    tour: "Montaña de Colores"
  },
  {
    id: "3",
    name: "María García",
    location: "Chile",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Muy recomendados. Nos ayudaron con todo el itinerario y fue un viaje soñado. La laguna Humantay superó todas nuestras expectativas.",
    rating: 5,
    tour: "Laguna Humantay"
  },
  {
    id: "4",
    name: "Jean Pierre Dubois",
    location: "Francia",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Service exceptionnel! Le pont Q'eswachaka était incroyable. Une expérience culturelle authentique que je n'oublierai jamais.",
    rating: 5,
    tour: "Puente Q'eswachaka"
  },
  {
    id: "5",
    name: "Ana Lucía Torres",
    location: "Colombia",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    text: "Desde el primer contacto fueron muy profesionales. El tour al Valle Sagrado fue mágico, los paisajes impresionantes y la comida deliciosa.",
    rating: 5,
    tour: "Valle Sagrado Full Day"
  }
];

export const blogPosts = [
  {
    id: "1",
    slug: "como-elegir-tour-perfecto-cusco",
    title: "Cómo Elegir el Tour Perfecto para Descubrir Cusco",
    excerpt: "Guía completa para planificar tu viaje a la capital del Imperio Inca. Tips, recomendaciones y errores a evitar.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    date: "2026-01-15",
    author: "Equipo Mukis",
    category: "Guías de Viaje"
  },
  {
    id: "2",
    slug: "mejor-epoca-visitar-machu-picchu",
    title: "La Mejor Época para Visitar Machu Picchu",
    excerpt: "Descubre cuándo es el momento ideal para visitar la maravilla del mundo según el clima, afluencia y precios.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800",
    date: "2026-01-10",
    author: "Equipo Mukis",
    category: "Tips de Viaje"
  },
  {
    id: "3",
    slug: "gastronomia-peruana-imperdible",
    title: "Gastronomía Peruana: 10 Platos que Debes Probar",
    excerpt: "Un recorrido por los sabores más emblemáticos de la cocina peruana, reconocida mundialmente.",
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=800",
    date: "2026-01-05",
    author: "Equipo Mukis",
    category: "Cultura"
  },
  {
    id: "4",
    slug: "preparacion-altura-cusco",
    title: "Cómo Prepararse para la Altura en Cusco",
    excerpt: "Consejos médicos y prácticos para evitar el mal de altura y disfrutar tu viaje al máximo.",
    image: "https://images.unsplash.com/photo-1580968014526-b1f0e8a49bae?auto=format&fit=crop&q=80&w=800",
    date: "2025-12-28",
    author: "Equipo Mukis",
    category: "Salud y Bienestar"
  }
];

export const faqs = [
  {
    question: "¿Cuál es la mejor época para visitar Cusco y Machu Picchu?",
    answer: "La mejor época es de abril a octubre (temporada seca). Sin embargo, Machu Picchu es hermoso todo el año. En temporada de lluvias (noviembre-marzo) hay menos turistas y los precios son más bajos."
  },
  {
    question: "¿Cómo puedo evitar el mal de altura?",
    answer: "Recomendamos descansar el primer día en Cusco, beber mucha agua, evitar comidas pesadas, tomar mate de coca y evitar el alcohol. Si es posible, subir gradualmente desde lugares más bajos."
  },
  {
    question: "¿Qué incluye el precio de los tours?",
    answer: "Cada tour especifica claramente qué incluye y qué no. Generalmente incluimos transporte, guía profesional bilingüe, entradas y algunas comidas. Los detalles están en cada descripción del tour."
  },
  {
    question: "¿Puedo pagar en cuotas o con tarjeta?",
    answer: "Sí, aceptamos pagos con tarjeta de crédito/débito (Visa, Mastercard), transferencias bancarias, PayPal y pagos en efectivo. También ofrecemos facilidades de pago para grupos."
  },
  {
    question: "¿Ofrecen tours privados o personalizados?",
    answer: "¡Absolutamente! Podemos diseñar itinerarios a tu medida según tus intereses, tiempo disponible y presupuesto. Contáctanos por WhatsApp para una cotización personalizada."
  },
  {
    question: "¿Es seguro viajar con Mukis Travel?",
    answer: "Somos una agencia registrada y autorizada por el Ministerio de Comercio Exterior y Turismo (MINCETUR). Contamos con seguros de viaje, vehículos en óptimas condiciones y guías certificados."
  },
  {
    question: "¿Qué debo llevar para los tours de trekking?",
    answer: "Recomendamos: ropa en capas, impermeable, protector solar, gorra/sombrero, lentes de sol, snacks, agua, zapatillas de trekking, cámara y dinero en efectivo para gastos personales."
  },
  {
    question: "¿Puedo cancelar o reprogramar mi tour?",
    answer: "Sí, puedes cancelar hasta 48 horas antes sin penalidad. Las reprogramaciones están sujetas a disponibilidad. Para grupos o paquetes especiales, aplican términos específicos."
  }
];
