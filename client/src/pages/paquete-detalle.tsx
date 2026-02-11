import { useState, useMemo } from "react";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { 
  Clock, MapPin, Users, ChevronRight, Star, Check, X, 
  Calendar, Mountain, Share2, Heart, Phone, Globe, 
  ChevronLeft, Play, MessageCircle, ThumbsUp,
  Camera, Navigation, Compass, Flag, Shield
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/i18n";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { tours, testimonials } from "@/data/tours";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function PaqueteDetalle() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isLiked, setIsLiked] = useState(false);

  // TikTok videos for randomization
  const tiktokVideos = useMemo(() => [
    "7494629445144399110",
    "7419346957447204102",
    "7494054658424589573"
  ], []);
  
  const randomTikTokId = useMemo(() => {
    return tiktokVideos[Math.floor(Math.random() * tiktokVideos.length)];
  }, [tiktokVideos]);

  // Instagram posts for randomization
  const instagramPosts = useMemo(() => [
    "DAT0ypbP41I",
    "DAtm5zNJIdh"
  ], []);

  const randomInstagramId = useMemo(() => {
    return instagramPosts[Math.floor(Math.random() * instagramPosts.length)];
  }, [instagramPosts]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{t.tourDetail.notFound}</h1>
          <p className="text-gray-600 mb-6">{t.tourDetail.notFoundDesc}</p>
          <Link href="/paquetes" className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all">
            {t.tourDetail.viewAllTours}
          </Link>
        </div>
      </div>
    );
  }

  const gallery = tour.gallery || [tour.image];
  const whatsappMessage = `Hola, me interesa reservar el tour "${tour.title}" para el ${selectedDate ? format(selectedDate, "dd 'de' MMMM, yyyy", { locale: es }) : "[seleccionar fecha]"}. Precio: $${tour.price}. ¿Podrían confirmar disponibilidad?`;
  
  // Get related tours (same category or location)
  const relatedTours = tours
    .filter((item) => item.id !== tour.id && (item.category === tour.category || item.location === tour.location))
    .slice(0, 4);

  // Calculate average rating
  const avgRating = tour.reviews?.length 
    ? (tour.reviews.reduce((acc, r) => acc + r.rating, 0) / tour.reviews.length).toFixed(1)
    : "5.0";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* ============ HERO SECTION WITH GALLERY ============ */}
      <section className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary transition-colors">{t.tourDetail.breadHome}</Link>
              <ChevronRight size={14} />
              <Link href="/paquetes" className="hover:text-primary transition-colors">{t.tourDetail.breadTours}</Link>
              <ChevronRight size={14} />
              <span className="text-primary font-medium">{tour.title}</span>
            </nav>
          </div>
        </div>

        {/* Title Section */}
        <div className="bg-white pb-6">
          <div className="container mx-auto px-4 pt-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                  {tour.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold text-gray-900">{avgRating}</span>
                    <span className="text-gray-500">({tour.reviews?.length || 0} {t.tourDetail.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} className="text-primary" />
                    <span>{tour.location}, Perú</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigator.share?.({ title: tour.title, url: window.location.href })}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Share2 size={18} />
                  <span className="hidden sm:inline">{t.tourDetail.share}</span>
                </button>
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    isLiked ? 'bg-red-50 border-red-200 text-red-500' : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                  <span className="hidden sm:inline">{t.tourDetail.save}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {/* Main Image */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden h-100 lg:h-125">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={gallery[selectedImage]}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              {/* Gallery Navigation */}
              {gallery.length > 1 && (
                <>
                  <button 
                    onClick={() => setSelectedImage(prev => prev === 0 ? gallery.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setSelectedImage(prev => prev === gallery.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === selectedImage ? 'bg-white w-6' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              <div className="absolute top-4 left-4 flex gap-2">
                {tour.isOffer && (
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {t.tourDetail.offer}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="hidden lg:grid grid-cols-2 lg:grid-cols-1 gap-3">
              {gallery.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative rounded-xl overflow-hidden h-30 transition-all ${
                    idx === selectedImage ? 'ring-3 ring-primary' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${tour.title} - ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {idx === 3 && gallery.length > 4 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Camera size={24} className="text-white mr-2" />
                      <span className="text-white font-bold">+{gallery.length - 4}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ============ LEFT COLUMN - TOUR INFO ============ */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Quick Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-gray-500 block">{t.tourDetail.duration}</span>
                  <span className="font-bold text-gray-900">{tour.duration}</span>
                </div>
                <div className="text-center">
                  <Compass className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-gray-500 block">{t.tourDetail.tourType}</span>
                  <span className="font-bold text-gray-900">{tour.tourType || t.tourDetail.dailyTour}</span>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-gray-500 block">{t.tourDetail.groupSize}</span>
                  <span className="font-bold text-gray-900">{tour.maxGroup || 15} {t.tourDetail.persons}</span>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-gray-500 block">{t.tourDetail.languages}</span>
                  <span className="font-bold text-gray-900">{tour.languages?.join(", ") || t.tourDetail.defaultLanguages}</span>
                </div>
              </motion.div>

              {/* About This Tour */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900 flex items-center gap-3">
                  <Navigation className="text-primary" />
                  {t.tourDetail.about}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {tour.aboutTour || tour.description}
                </p>
              </motion.div>

              {/* Preparación del viaje */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900 flex items-center gap-3">
                  <Compass className="text-primary" />
                  {t.tourDetail.preparation}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    t.tourDetail.prepWarmClothes,
                    t.tourDetail.prepSunscreen,
                    t.tourDetail.prepComfortShoes,
                    t.tourDetail.prepWater,
                    t.tourDetail.prepDocs,
                    t.tourDetail.prepCamera
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="bg-primary/10 rounded-full p-2">
                        <Check className="text-primary w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="font-heading font-bold text-2xl mb-6 text-gray-900 flex items-center gap-3">
                  <Calendar className="text-primary" />
                  {t.tourDetail.itinerary}
                </h2>
                <div className="relative">
                  <div className="absolute left-9.75 top-0 bottom-0 w-0.5 bg-primary/20" />
                  <div className="space-y-6">
                    {tour.itinerary.map((item, idx) => (
                      <div key={idx} className="flex gap-4 relative">
                        <div className="shrink-0 w-20 text-right">
                          <span className="text-primary font-bold text-sm">{item.time}</span>
                        </div>
                        <div className="relative">
                          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                        </div>
                        <div className="grow pl-4 pb-2">
                          <h4 className="font-bold text-gray-900">{item.activity}</h4>
                          {item.description && (
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Includes / Not Includes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Included */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
                  <h3 className="font-heading font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <Check className="text-green-500" /> {t.tourDetail.includes}
                  </h3>
                  <ul className="space-y-3">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-red-500">
                  <h3 className="font-heading font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <X className="text-red-500" /> {t.tourDetail.notIncludes}
                  </h3>
                  <ul className="space-y-3">
                    {tour.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <X size={18} className="text-red-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Tour Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900 flex items-center gap-3">
                  <Flag className="text-primary" />
                  {t.tourDetail.routeMap}
                </h2>
                <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                  {tour.mapImage ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="w-full h-80 md:h-96 bg-gray-50 cursor-zoom-in group relative overflow-hidden rounded-xl">
                          <img 
                            src={tour.mapImage} 
                            alt={t.tourDetail.routeMap} 
                            className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                              {t.tourDetail.clickToEnlarge}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                        <DialogTitle className="sr-only">{t.tourDetail.detailedMap} {tour.title}</DialogTitle>
                         <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden flex items-center justify-center p-2">
                           <img 
                             src={tour.mapImage} 
                             alt={`${t.tourDetail.detailedMap} ${tour.title}`}
                             className="w-full h-full object-contain"
                           />
                         </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="h-75 w-full flex flex-col items-center justify-center bg-gray-50">
                      <MapPin size={48} className="mx-auto mb-3 text-gray-400" />
                      <p className="text-lg font-medium text-gray-500">{t.tourDetail.mapUnavailable}</p>
                      <p className="text-sm text-gray-400">{t.tourDetail.comingSoon}</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Highlights / Summary */}
              {tour.highlights && tour.highlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-8"
                >
                  <h2 className="font-heading font-bold text-2xl mb-6 text-gray-900">
                    ✨ {t.tourDetail.tourSummary}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                        <div className="bg-primary/10 rounded-full p-2">
                          <Check className="text-primary w-5 h-5" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Política de cancelación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-8"
              >
                <h2 className="font-heading font-bold text-2xl mb-3 text-gray-900 flex items-center gap-3">
                  <Shield className="text-primary" />
                  {t.tourDetail.cancellation}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.tourDetail.cancelPolicyFull}
                </p>
              </motion.div>

              {/* Location Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h2 className="font-heading font-bold text-2xl mb-4 text-gray-900 flex items-center gap-3">
                  <MapPin className="text-primary" />
                  {t.tourDetail.tourLocation}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={18} className="text-primary" />
                  <span>{tour.location}, Perú</span>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-gray-100 h-75">
                  {tour.locationCoords ? (
                    <iframe
                      title={`Mapa de ${tour.title}`}
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${tour.locationCoords.lat},${tour.locationCoords.lng}&z=16&output=embed`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100">
                      <div className="text-center text-gray-500">
                        <MapPin size={48} className="mx-auto mb-3 text-primary" />
                        <p className="text-lg font-medium">{tour.location}</p>
                        <p className="text-sm text-gray-400">{t.tourDetail.locationMap}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {tour.locationCoords ? (
                    <>
                      <a
                        href={`https://www.google.com/maps?q=${tour.locationCoords.lat},${tour.locationCoords.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {t.tourDetail.viewOnGoogleMaps}
                      </a>
                      <a
                        href={`https://www.google.com/maps/@?api=1&map_action=map&center=${tour.locationCoords.lat},${tour.locationCoords.lng}&zoom=18&basemap=satellite&tilt=45`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {t.tourDetail.view3D}
                      </a>
                    </>
                  ) : (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${tour.location}, Perú`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {t.tourDetail.searchOnGoogleMaps}
                    </a>
                  )}
                </div>
              </motion.div>

              {/* FAQs */}
              {tour.faqs && tour.faqs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <h2 className="font-heading font-bold text-2xl mb-6 text-gray-900 flex items-center gap-3">
                    <MessageCircle className="text-primary" />
                    {t.tourDetail.faq}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {tour.faqs.map((faq, idx) => (
                      <AccordionItem 
                        key={idx} 
                        value={`faq-${idx}`}
                        className="border rounded-xl px-4 data-[state=open]:bg-primary/5"
                      >
                        <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              )}

              {/* Reviews Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold text-2xl text-gray-900 flex items-center gap-3">
                    <Star className="text-yellow-500" fill="currentColor" />
                    {t.tourDetail.reviews}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">{avgRating}</span>
                    <div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="text-yellow-500" 
                            fill={i < Math.floor(Number(avgRating)) ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{tour.reviews?.length || 0} {t.tourDetail.reviewCount}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = tour.reviews?.filter(r => r.rating === rating).length || 0;
                      const percentage = tour.reviews?.length ? (count / tour.reviews.length) * 100 : 0;
                      return (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16">
                            {rating === 5 ? t.tourDetail.ratExcellent : rating === 4 ? t.tourDetail.ratVeryGood : rating === 3 ? t.tourDetail.ratAverage : rating === 2 ? t.tourDetail.ratPoor : t.tourDetail.ratTerrible}
                          </span>
                          <div className="grow bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-500 h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-8">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Review Cards */}
                {tour.reviews && tour.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {tour.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-start gap-4">
                          <img 
                            src={review.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random`}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="grow">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.country}</span>
                              </div>
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    size={14} 
                                    className="text-yellow-500" 
                                    fill={i < review.rating ? "currentColor" : "none"}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 mt-2">{review.comment}</p>
                            <span className="text-sm text-gray-400 mt-2 block">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageCircle size={48} className="mx-auto mb-3 text-gray-300" />
                    <p>{ t.tourDetail.noReviewsYet}</p>
                    <p className="text-sm">{t.tourDetail.beFirstReview}</p>
                  </div>
                )}

                {/* Write Review Button */}
                <div className="mt-6 pt-6 border-t">
                  <a
                    href={`https://wa.me/51930476116?text=Hola, quiero dejar una reseña sobre el tour "${tour.title}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all"
                  >
                    <ThumbsUp size={18} />
                    {t.tourDetail.writeReview}
                  </a>
                </div>
              </motion.div>

            </div>

            {/* ============ RIGHT COLUMN - BOOKING SIDEBAR ============ */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg sticky top-24 border-2 border-primary/20"
              >
                {/* Price */}
                <div className="text-center pb-6 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">{t.tourDetail.pricePerPerson}</span>
                  <div className="flex flex-col items-center justify-center mt-1">
                    {tour.originalPrice && (
                      <span className="text-xl text-gray-400 line-through leading-none mb-1">
                        ${tour.originalPrice}
                      </span>
                    )}
                    <span className="font-heading font-bold text-4xl text-primary leading-none">
                      ${tour.price}
                    </span>
                  </div>
                  {tour.originalPrice && (
                    <span className="inline-block mt-2 bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
                      {t.tourDetail.youSave} ${tour.originalPrice - tour.price}
                    </span>
                  )}
                </div>

                {/* Date Selector */}
                <div className="py-6 border-b border-gray-100">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.tourDetail.selectDate}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12 border-2"
                      >
                        <Calendar className="mr-2 h-5 w-5 text-primary" />
                        {selectedDate ? (
                          format(selectedDate, "PPP", { locale: es })
                        ) : (
                          <span className="text-gray-500">{t.tourDetail.chooseDate}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        locale={es}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Quick Info */}
                <div className="py-6 space-y-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Clock size={18} className="text-primary" /> {t.tourDetail.duration}
                    </span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Users size={18} className="text-primary" /> {t.tourDetail.maxGroup}
                    </span>
                    <span className="font-medium">{tour.maxGroup || 15} {t.tourDetail.persons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Mountain size={18} className="text-primary" /> {t.tourDetail.difficulty}
                    </span>
                    <span className="font-medium capitalize">{tour.difficulty || t.common.moderate}</span>
                  </div>
                  {tour.startTime && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-2">
                        <Clock size={18} className="text-primary" /> {t.tourDetail.departure}
                      </span>
                      <span className="font-medium">{tour.startTime}</span>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="pt-6 space-y-3">
                  <a
                    href={`https://wa.me/51930476116?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t.tourDetail.bookNow}
                  </a>
                  
                  <a
                    href="tel:+51960470892"
                    className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all"
                  >
                    <Phone size={20} />
                    {t.tourDetail.callNow}
                  </a>
                </div>

                <p className="text-center text-sm text-gray-500 mt-4">
                  ✓ {t.tourDetail.instantResponse}
                </p>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-xs text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="block text-lg mb-1">🔒</span>
                      <span className="text-gray-600">{t.tourDetail.securePay}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="block text-lg mb-1">✅</span>
                      <span className="text-gray-600">{t.tourDetail.guarantee}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="block text-lg mb-1">🏆</span>
                      <span className="text-gray-600">{t.tourDetail.bestPrice}</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <span className="block text-lg mb-1">💬</span>
                      <span className="text-gray-600">{t.tourDetail.support247}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ RELATED TOURS ============ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-4">
            {t.tourDetail.relatedTours}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.tourDetail.relatedToursDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTours.map((relatedTour) => (
              <Link key={relatedTour.id} href={`/paquetes/${relatedTour.slug}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedTour.image} 
                      alt={relatedTour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {relatedTour.isOffer && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {t.tourDetail.offer}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm">
                      <Star size={14} className="text-yellow-500" fill="currentColor" />
                      <span className="font-bold">5.0</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <MapPin size={12} />
                      <span>{relatedTour.location}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{relatedTour.duration}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedTour.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <span className="text-xs text-gray-500">{t.common.from}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xl text-primary">${relatedTour.price}</span>
                          {relatedTour.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${relatedTour.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        {t.tourDetail.viewMore} →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VIDEO TESTIMONIALS ============ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-4">
            {t.tourDetail.testimonialTitle}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.tourDetail.testimonialDesc}
          </p>
          
          {/* Video Embeds from Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Instagram Video - Randomized */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-145 bg-gray-100 group">
              <iframe
                src={`https://www.instagram.com/p/${randomInstagramId}/embed`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              ></iframe>
            </div>

            {/* TikTok Video - Randomized */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-145 bg-gray-100 group">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${randomTikTokId}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Facebook Video */}
            <a 
              href="https://web.facebook.com/MukisTravelAgency"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-linear-to-br from-blue-100 to-blue-200 rounded-3xl h-145 flex items-center justify-center overflow-hidden group cursor-pointer hover:shadow-xl transition-all shadow-lg"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30" />
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-[#1877F2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <p className="text-gray-800 font-bold text-lg">{t.tourDetail.viewOnFacebook}</p>
                <p className="text-sm text-gray-600">Mukis Travel Agency</p>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent" />
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">{t.tourDetail.followUs}</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a 
                href="https://www.instagram.com/mukis_travel_agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@mukistravel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
              <a 
                href="https://web.facebook.com/MukisTravelAgency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GENERAL TESTIMONIALS ============ */}
      <section className="py-16 bg-linear-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            {t.tourDetail.whatTravelersSay}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
