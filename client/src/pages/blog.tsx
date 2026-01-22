import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { blogPosts } from "@/data/tours";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <nav className="flex justify-center items-center gap-2 text-sm mb-6 text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">Blog de Viajes</span>
            </nav>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Blog de Viajes
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tips, guías y consejos para tu próxima aventura en Perú
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                        Artículo Destacado
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-primary" />
                        {new Date(featuredPost.date).toLocaleDateString('es-PE', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={16} className="text-primary" />
                        {featuredPost.author}
                      </span>
                    </div>
                    
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                      {featuredPost.category}
                    </span>
                    
                    <h2 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                      Leer Artículo <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900">
              Últimas Publicaciones
            </h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('es-PE', { 
                            day: 'numeric', 
                            month: 'short' 
                          })}
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        Leer más <ArrowRight size={16} />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-emerald-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center text-white"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Suscríbete a Nuestro Newsletter
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Recibe tips de viaje, ofertas exclusivas y las últimas noticias sobre destinos en Perú.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button 
                type="submit"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Suscribirse
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
