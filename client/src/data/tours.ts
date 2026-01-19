export interface Tour {
  id: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  location: string;
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Machu Picchu Full Day",
    price: 980,
    duration: "1 Día",
    location: "Cusco",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: "2",
    title: "Montaña de Colores",
    price: 150,
    duration: "1 Día",
    location: "Cusco",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000",
    featured: true
  },
  {
    id: "3",
    title: "Laguna Humantay",
    price: 140,
    duration: "1 Día",
    location: "Cusco",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000", // Placeholder
    featured: true
  },
  {
    id: "4",
    title: "Cusco Mágico 5D/4N",
    price: 1850,
    duration: "5 Días",
    location: "Cusco",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000", // Placeholder
  },
  {
    id: "5",
    title: "Lima City Tour + Pachacamac",
    price: 220,
    duration: "Full Day",
    location: "Lima",
    image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "6",
    title: "Aventura en Ica y Huacachina",
    price: 350,
    duration: "Full Day",
    location: "Ica",
    image: "https://images.unsplash.com/photo-1588612502843-03b1456209c2?auto=format&fit=crop&q=80&w=1000",
  }
];

export const destinations = [
  { name: "Cusco", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000" },
  { name: "Lima", image: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&q=80&w=1000" },
  { name: "Arequipa", image: "https://images.unsplash.com/photo-1569420624967-a5170f3f2038?auto=format&fit=crop&q=80&w=1000" },
  { name: "Puno", image: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?auto=format&fit=crop&q=80&w=1000" }
];

export const testimonials = [
  {
    name: "Carlos Mendez",
    location: "España",
    text: "Increíble experiencia en Machu Picchu. La organización de Mukis Travel fue impecable.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    location: "USA",
    text: "Best travel agency in Peru! The guides were so knowledgeable and friendly.",
    rating: 5
  },
  {
    name: "María Garcia",
    location: "Chile",
    text: "Muy recomendados. Nos ayudaron con todo el itinerario y fue un viaje soñado.",
    rating: 5
  }
];
