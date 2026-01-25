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
      "Propinas",
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
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/montana-de-colores.jpg`,
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=1600"
    ],
    featured: true,
    isOffer: true,
    difficulty: "difícil",
    maxGroup: 20,
    startTime: "3:30 AM",
    highlights: [
      "Caminata a más de 5,000 m.s.n.m.",
      "Paisajes únicos de colores minerales",
      "Desayuno y almuerzo buffet incluidos",
      "Encuentro con alpacas y llamas",
      "Oxígeno de emergencia disponible"
    ],
    included: [
      "Transporte turístico completo",
      "Desayuno buffet",
      "Almuerzo típico",
      "Guía profesional",
      "Bastones de trekking",
      "Oxígeno de emergencia",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Entrada a la Montaña de Colores (S/. 10)",
      "Caballo (opcional S/. 80)",
      "Propinas"
    ],
    itinerary: [
      { time: "3:30 AM", activity: "Recojo del hotel", description: "Te recogemos de tu hotel en el centro de Cusco." },
      { time: "6:00 AM", activity: "Desayuno buffet en Cusipata", description: "Delicioso desayuno para cargar energías." },
      { time: "7:30 AM", activity: "Inicio de la caminata (5 km)", description: "Comenzamos el ascenso por senderos andinos." },
      { time: "10:00 AM", activity: "Llegada a la Montaña de Colores", description: "¡Lo lograste! Disfruta de las vistas espectaculares." },
      { time: "11:00 AM", activity: "Tiempo para fotos y contemplación", description: "Captura los mejores momentos en este lugar único." },
      { time: "12:00 PM", activity: "Descenso", description: "Regreso tranquilo disfrutando del paisaje." },
      { time: "2:00 PM", activity: "Almuerzo típico", description: "Delicioso almuerzo con comida tradicional andina." },
      { time: "5:00 PM", activity: "Retorno a Cusco", description: "Llegada aproximada a tu hotel." }
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
    maxGroup: 18,
    startTime: "4:00 AM",
    highlights: [
      "Laguna de aguas turquesas glaciares",
      "Vistas del nevado Humantay",
      "Trekking de 3 km de dificultad moderada",
      "Desayuno y almuerzo incluidos",
      "Ceremonia de ofrenda a la Pachamama"
    ],
    included: [
      "Transporte turístico",
      "Desayuno buffet",
      "Almuerzo típico",
      "Guía profesional bilingüe",
      "Bastones de trekking",
      "Botiquín de primeros auxilios"
    ],
    notIncluded: [
      "Entrada a Humantay (S/. 10)",
      "Caballo (opcional S/. 100)",
      "Propinas"
    ],
    itinerary: [
      { time: "4:00 AM", activity: "Recojo del hotel en Cusco", description: "Nuestro equipo pasará a recogerte a tu hotel." },
      { time: "6:30 AM", activity: "Desayuno en Mollepata", description: "Delicioso desayuno buffet para cargar energías." },
      { time: "7:30 AM", activity: "Llegada a Soraypampa, inicio de caminata", description: "Comenzamos el trek de 3 km hacia la laguna." },
      { time: "9:30 AM", activity: "Llegada a la Laguna Humantay", description: "¡Disfruta de las vistas espectaculares!" },
      { time: "10:30 AM", activity: "Tiempo libre y fotografías", description: "Captura los mejores momentos de este lugar mágico." },
      { time: "11:30 AM", activity: "Descenso a Soraypampa", description: "Retorno tranquilo disfrutando del paisaje." },
      { time: "1:00 PM", activity: "Almuerzo típico", description: "Deliciosa comida andina tradicional." },
      { time: "5:00 PM", activity: "Retorno a Cusco", description: "Llegada aproximada a tu hotel." }
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
    title: "Puente Q'eswachaka",
    shortDescription: "El último puente inca tejido a mano que se renueva cada año.",
    description: "Visita el último puente inca de cuerda que aún se mantiene vivo gracias a la tradición de las comunidades locales. Cada año, las familias se reúnen para tejerlo nuevamente usando técnicas ancestrales.",
    aboutTour: "El Puente Q'eswachaka es una maravilla de la ingeniería inca que ha sobrevivido más de 600 años. Este puente colgante de cuerda, que cruza el río Apurímac, es renovado cada año en una ceremonia ancestral donde las comunidades locales se reúnen para tejerlo usando técnicas heredadas de sus antepasados. El tour te llevará a conocer este Patrimonio Cultural de la Humanidad, reconocido por la UNESCO, donde podrás cruzar el puente, aprender sobre su historia y significado cultural, y disfrutar de las hermosas lagunas de Pomacanchi en el camino. Una experiencia que te conecta con las tradiciones vivas del Perú.",
    price: 90,
    duration: "1 Día",
    tourType: "Tour cultural",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -14.3819, lng: -71.4906 },
    region: "sierra",
    category: "cultural",
    image: `${import.meta.env.BASE_URL}images/categories/puente1.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/puente1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/puente2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/puente3.jpeg`
    ],
    featured: true,
    difficulty: "fácil",
    maxGroup: 15,
    startTime: "6:00 AM",
    highlights: [
      "Último puente inca de cuerda del mundo",
      "Patrimonio Cultural de la Humanidad UNESCO",
      "Visita a las 4 Lagunas de Pomacanchi",
      "Tradiciones ancestrales vivas",
      "Almuerzo típico incluido"
    ],
    included: [
      "Transporte turístico completo",
      "Desayuno ligero",
      "Almuerzo buffet",
      "Guía profesional",
      "Entrada al puente"
    ],
    notIncluded: [
      "Bebidas adicionales",
      "Propinas",
      "Gastos personales"
    ],
    itinerary: [
      { time: "6:00 AM", activity: "Recojo del hotel", description: "Salida desde tu hotel en Cusco." },
      { time: "8:30 AM", activity: "Parada para desayuno", description: "Desayuno ligero en el camino." },
      { time: "10:30 AM", activity: "Visita a las 4 Lagunas de Pomacanchi", description: "Hermosas lagunas andinas con paisajes impresionantes." },
      { time: "12:00 PM", activity: "Llegada al Puente Q'eswachaka", description: "Conoce y cruza el último puente inca de cuerda." },
      { time: "1:00 PM", activity: "Almuerzo típico", description: "Delicioso almuerzo con comida tradicional." },
      { time: "3:00 PM", activity: "Retorno a Cusco", description: "Viaje de regreso con paradas fotográficas." },
      { time: "6:00 PM", activity: "Llegada a Cusco", description: "Drop-off en tu hotel." }
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
      "Alimentación",
      "Propinas"
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
      "Alimentación",
      "Propinas"
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
      "Propinas",
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
      "Sandboarding",
      "Propinas"
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
    aboutTour: "Vive una aventura inolvidable con el tour a Waqrapukara. La impresionante fortaleza de WaqraPukara te sorprenderá con su paisaje, ofreciéndole vistas espectaculares de los Andes, cañones profundos y ríos serpenteantes. Este recorrido le permitirá explorar recintos ceremoniales, terrazas agrícolas y torres defensivas, todo mientras disfruta de un trekking desafiante pero gratificante. La experiencia comienza temprano, a las 4:30 am, con un recojo en su hotel en Cusco. Después de un viaje de dos horas hacia el sur, llegaremos al pintoresco pueblo de Cusipata, donde disfrutará de un delicioso desayuno buffet antes de continuar nuestro trayecto hacia WaqraPukara.\\n\\nA medida que avanzamos en el Tour Waqrapukara, caminaremos por un sendero llano con pequeñas subidas y bajadas, pasando por impresionantes paisajes de lagunas alto andinas. Al llegar al Mirador WaqraPukara, tendrá la oportunidad de capturar las primeras fotos del impresionante Complejo Arqueológico. El descenso hacia el centro ceremonial le permitirá admirar las gigantescas formaciones pétreas que enmarcan el Valle del Río Apurímac. Durante aproximadamente una hora y media, exploraremos el centro ceremonial antes de iniciar el camino de retorno. Tras un breve descanso en el Mirador, continuaremos nuestra subida hasta llegar a las lagunas (Cochas) y finalmente, nuestro transporte nos llevará de regreso a Cusco, llegando entre las 18:00 y 19:00 horas.",
    price: 150,
    duration: "1 Día",
    tourType: "Tour diario",
    languages: ["Español", "Inglés"],
    location: "Cusco",
    locationCoords: { lat: -13.987, lng: -71.696 },
    region: "sierra",
    category: "aventura",
    image: `${import.meta.env.BASE_URL}images/categories/waqrapukara1.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/categories/waqrapukara1.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/waqrapukara2.jpeg`,
      `${import.meta.env.BASE_URL}images/categories/waqrapukara3.jpeg`
    ],
    maxGroup: 18,
    startTime: "4:30 AM",
    highlights: [
      "Vistas espectaculares de los Andes, cañones profundos, y ríos serpenteantes",
      "Exploración recintos ceremoniales, terrazas agrícolas, y torres defensivas",
      "Trekking a la fortaleza de Waqrapukara"
    ],
    included: [
      "Desayuno",
      "Almuerzo",
      "Guía español / inglés",
      "Recojo en el hotel",
      "Movilidad",
      "Asistencia permanente"
    ],
    notIncluded: [
      "Ingreso al Atractivo Extranjeros s/20.00 por persona, Nacional s/10.00 por persona",
      "Otros gastos no detallados"
    ],
    itinerary: [
      { time: "4:30 AM", activity: "Recojo del hotel", description: "Recojo en su hotel temprano para dirigirnos desde Cusco hacia el sur." },
      { time: "6:30 AM", activity: "Desayuno en Cusipata", description: "Nos trasladaremos por alrededor de 2 horas hasta el pueblo de Cusipata donde tomaremos nuestro desayuno buffet." },
      { time: "8:30 AM", activity: "Caminata al Mirador", description: "Caminaremos por un camino llano ligeramente tendido con pequeñas subidas y bajas por las 2 primeras horas, pasando por hermosos paisajes y lagunas alto andinas (Cochas)." },
      { time: "10:30 AM", activity: "Mirador WaqraPukara", description: "Llegada al Mirador para sacar las primeras fotos del Complejo Arqueológico. Luego descenso de 40 minutos al centro ceremonial." },
      { time: "11:10 AM", activity: "Exploración del Centro Ceremonial", description: "Recorremos el centro ceremonial de WaqraPukara por aproximado de una hora y media." },
      { time: "12:40 PM", activity: "Inicio del Retorno", description: "Camino de retorno por una hora de subida rumbo al Mirador." },
      { time: "1:40 PM", activity: "Descanso y Caminata", description: "Descanso de 10 minutos y subida de 30 minutos hasta (Cochas)." },
      { time: "2:20 PM", activity: "Regreso al Transporte", description: "Camino tendido de 2 horas hasta llegar a punta carretera." },
      { time: "6:00 PM", activity: "Retorno a Cusco", description: "Nuestro transporte nos traerá de regreso a la Ciudad de Cusco, llegando entre 18:00 y 19:00 horas." }
    ],
    faqs: [
      {
        question: "¿Qué época del año es mejor para visitar Waqrapukara?",
        answer: "La mejor época para visitar es durante la estación seca, entre mayo y septiembre, cuando hay menos probabilidades de lluvia y los caminos están en mejores condiciones. Durante la temporada de lluvias (de noviembre a marzo), los senderos pueden volverse resbaladizos y difíciles de transitar."
      }
    ]
  }
];

export const destinations = [
  { 
    name: "Cusco", 
    slug: "cusco",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000",
    description: "La capital del Imperio Inca, llena de historia y misterio."
  },
  { 
    name: "Lima", 
    slug: "lima",
    image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&q=80&w=1000",
    description: "La capital gastronómica de Sudamérica."
  },
  { 
    name: "Arequipa", 
    slug: "arequipa",
    image: `${import.meta.env.BASE_URL}images/categories/arequipa.jpg`,
    description: "La Ciudad Blanca, patrimonio de la humanidad."
  },
  { 
    name: "Puno", 
    slug: "puno",
    image: `${import.meta.env.BASE_URL}images/categories/puno.jpg`,
    description: "Capital del folklore peruano y hogar del Lago Titicaca."
  },
  { 
    name: "Ica", 
    slug: "ica",
    image: `${import.meta.env.BASE_URL}images/categories/ica.jpg`,
    description: "Desiertos, oasis y la mejor experiencia de aventura."
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
