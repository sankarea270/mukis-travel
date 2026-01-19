import { ShieldCheck, Heart, Clock, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    description: "Operamos con los más altos estándares de seguridad para tu tranquilidad."
  },
  {
    icon: Heart,
    title: "Pasión por el Servicio",
    description: "Creamos experiencias personalizadas con atención al detalle."
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo y cumplimos rigurosamente los itinerarios."
  },
  {
    icon: Users,
    title: "Guías Expertos",
    description: "Profesionales locales apasionados por compartir nuestra cultura."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">¿Por qué elegirnos?</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">La Experiencia Mukis Travel</h2>
          <p className="mt-4 text-gray-600">Nos dedicamos a hacer de tu viaje una experiencia inolvidable, cuidando cada detalle desde tu llegada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <feature.icon size={32} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
