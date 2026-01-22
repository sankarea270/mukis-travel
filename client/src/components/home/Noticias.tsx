import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/tours";

export function Noticias() {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
        >
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">
              Blog de Viajes
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-2 text-gray-900">
              Noticias y Artículos
            </h2>
            <p className="mt-2 text-gray-600 max-w-lg">
              Tips, guías y consejos para tu próxima aventura en Perú.
            </p>
          </div>
          <Link href="/blog">
            <span className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all cursor-pointer">
              Ver todos los artículos <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar size={14} className="text-primary" />
                      {new Date(post.date).toLocaleDateString("es-PE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                      {post.title}
                    </h3>

                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                      Leer más <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
