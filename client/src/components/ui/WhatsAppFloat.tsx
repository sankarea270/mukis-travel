import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, Phone, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Bienvenido a Mukis Travel. ¿Cómo puedo ayudarte a planificar tu viaje soñado por el Perú hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Show a small notification bubble after 5 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const whatsappNumber = "51930476116";

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "¡Qué buena pregunta! 😊 Un asesor experto de Mukis Travel se pondrá en contacto contigo pronto para brindarte atención personalizada. ¿Te gustaría agilizar la respuesta chateando directamente por WhatsApp?";
      
      const lowerText = text.toLowerCase();
      
      // Extensive logic for more dynamic responses
      if (lowerText.includes("hola") || lowerText.includes("buenos días") || lowerText.includes("buenas tardes")) {
        botResponse = "¡Hola viajero! 👋 Bienvenido a Mukis Travel. Soy tu guía virtual. ¿Tienes algún destino en mente o necesitas que te recomiende los mejores rincones de Perú?";
      } else if (lowerText.includes("precio") || lowerText.includes("costo") || lowerText.includes("cuánto") || lowerText.includes("tarifa") || lowerText.includes("promoción") || lowerText.includes("oferta")) {
        botResponse = "¡Tenemos ofertas increíbles! 💰 Los precios varían según la temporada y el tipo de servicio. Tours diarios desde $40 USD y paquetes completos desde $450 USD. ¿Buscas algo económico o un servicio VIP?";
      } else if (lowerText.includes("machu picchu") || lowerText.includes("machupicchu") || lowerText.includes("cusco")) {
        botResponse = "¡El ombligo del mundo te espera! 🏔️ En Cusco operamos tours a Machu Picchu (Tren o Camino Inca), Valle Sagrado y City Tour. ¿Sabías que también tenemos una ruta secreta por el Valle Sur?";
      } else if (lowerText.includes("humantay") || lowerText.includes("laguna")) {
        botResponse = "¡La Laguna Humantay es un diamante turquesa! 💎 Es una caminata de intensidad media-alta. Recomendamos estar en Cusco al menos 2 días antes para aclimatarte bien. ¿Te gustaría ver las fotos del tour?";
      } else if (lowerText.includes("colores") || lowerText.includes("vinicunca") || lowerText.includes("rainbow")) {
        botResponse = "Vinicunca es tendencia mundial. 🌈 Te llevamos en grupos pequeños para una experiencia más íntima. Salimos muy temprano para llegar antes que la multitud. ¿Te atreves a llegar a los 5,036 metros?";
      } else if (lowerText.includes("ica") || lowerText.includes("paracas") || lowerText.includes("huacachina") || lowerText.includes("nazca")) {
        botResponse = "El sur costero es pura adrenalina y relax. 🏜️ Sandboarding en Huacachina, sobrevuelo a las Líneas de Nazca y lobos marinos en Paracas. ¡Es el escape perfecto desde Lima!";
      } else if (lowerText.includes("selva") || lowerText.includes("iquitos") || lowerText.includes("tambopata") || lowerText.includes("manu") || lowerText.includes("madre de dios")) {
        botResponse = "¡Siente el pulmón del mundo! 🌿 Tenemos paquetes a Iquitos (cruceros de lujo) y Tambopata (lodges de aventura). Ideal para desconectarse de la ciudad. ¿Te gusta la fauna silvestre?";
      } else if (lowerText.includes("clima") || lowerText.includes("cuándo ir") || lowerText.includes("mejor época") || lowerText.includes("tiempo")) {
        botResponse = "El clima en Perú es diverso. ☀️ Temporada seca (Sierra/Selva): Mayo a Octubre. Verano costero (Lima/Ica): Diciembre a Marzo. ¿En qué mes tienes tus vacaciones?";
      } else if (lowerText.includes("vuelo") || lowerText.includes("pasaje") || lowerText.includes("transporte")) {
        botResponse = "Nos encargamos de todos tus traslados internos. 🚐 Aunque no vendemos vuelos internacionales, podemos ayudarte a gestionar tus vuelos domésticos con las mejores aerolíneas locales.";
      } else if (lowerText.includes("guía") || lowerText.includes("idioma") || lowerText.includes("inglés") || lowerText.includes("french") || lowerText.includes("portugués")) {
        botResponse = "Nuestros guías son especialistas bilingües certificados. 🎓 Ofrecemos servicios en Español, Inglés y bajo pedido en Francés o Portugués. ¡La comunicación no será un problema!";
      } else if (lowerText.includes("comprar") || lowerText.includes("reservar") || lowerText.includes("pago") || lowerText.includes("tarjeta")) {
        botResponse = "¡Reservar es muy fácil! ✅ Aceptamos todas las tarjetas de crédito, PayPal y transferencias bancarias. ¿Deseas que te envíe el enlace de reserva segura?";
      } else if (lowerText.includes("gracias") || lowerText.includes("vale") || lowerText.includes("ok") || lowerText.includes("perfecto") || lowerText.includes("entendido")) {
        botResponse = "¡Para eso estamos! 😊 Me alegra haberte ayudado. Si tienes más dudas, estaré aquí. O si prefieres, haz clic abajo para hablar con un agente humano. ¡Buen viaje!";
      }

      const newBotMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const options = [
    {
      icon: MapPin,
      label: "Mejores destinos 🏔️",
      message: "¿Cuáles son los destinos imperdibles en Perú?"
    },
    {
      icon: Calendar,
      label: "Cuándo viajar ☀️",
      message: "¿Cuál es la mejor época para viajar a Cusco?"
    },
    {
      icon: Phone,
      label: "Precios tours 💰",
      message: "¿Cuál es el costo promedio de los tours?"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-4 w-87.5 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 flex flex-col h-125 focus-within:ring-2 focus-within:ring-primary/10 transition-shadow"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-primary to-primary/80 p-5 text-white relative shrink-0 shadow-lg">
              <button 
                onClick={toggleChat}
                className="absolute top-4 right-4 p-1.5 hover:bg-white/20 rounded-full transition-transform hover:rotate-90 duration-300"
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner"
                  >
                    <Bot size={24} className="text-white drop-shadow-sm" />
                  </motion.div>
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full shadow-sm animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base tracking-tight text-white">Mukis Concierge</h3>
                  <p className="text-white/90 text-[10px] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_5px_rgba(74,222,128,0.5)] animate-pulse" />
                    Asistente en vivo
                  </p>
                </div>
              </div>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4 scrollbar-hide">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id} 
                    initial={{ opacity: 0, scale: 0.8, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm border ${
                        msg.sender === 'user' ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-primary/10 border-primary/20 text-primary'
                      }`}>
                        {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                      </div>
                      <div className={`p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-xs ${
                        msg.sender === 'user' 
                          ? 'bg-linear-to-br from-primary to-primary/90 text-white rounded-tr-none' 
                          : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
                      }`}>
                        {msg.text}
                        <div className={`text-[9px] mt-1.5 font-medium opacity-60 flex items-center gap-1 ${msg.sender === 'user' ? 'justify-end text-white' : 'justify-start text-gray-400'}`}>
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          {msg.sender === 'user' && (
                            <span className="flex">
                              <span className="w-2.5 h-2.5 font-bold">✓</span>
                              <span className="w-2.5 h-2.5 -ml-1.5 font-bold text-blue-200">✓</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
                      <Bot size={12} />
                    </div>
                    <div className="bg-white p-3 px-4 rounded-2xl rounded-tl-none shadow-xs border border-gray-100 flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.span 
                          key={i}
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }} 
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                          className="w-1.5 h-1.5 bg-primary/60 rounded-full" 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Options */}
              {messages.length < 5 && !isTyping && (
                <div className="space-y-3 mt-6 ml-9">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2">Sugerencias recomendadas</p>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.03, backgroundColor: "hsl(var(--primary) / 0.05)", borderColor: "hsl(var(--primary) / 0.2)" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSendMessage(option.message)}
                        className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 text-[11px] font-medium transition-all hover:text-primary shadow-xs"
                      >
                        <option.icon size={12} className="text-primary/70" />
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="relative mb-3.5"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Consulta tus dudas aquí..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 pr-12 text-[13px] focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-gray-400"
                />
                <motion.button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  whileHover={{ scale: 1.1, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1.5 p-2 text-primary disabled:text-gray-300 transition-all"
                >
                  <Send size={18} />
                </motion.button>
              </form>

              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, shadow: "0 10px 25px -5px rgba(37,211,102,0.4)" }}
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white p-3 rounded-xl text-[12px] font-extrabold transition-all shadow-md group mt-1"
              >
                <MessageCircle size={16} fill="white" className="group-hover:rotate-12 transition-transform" />
                <span>Hablar con un Humano en WhatsApp</span>
              </motion.a>
              <p className="text-[9px] text-center text-gray-400 mt-3 font-medium tracking-wide">
                OPERADOR LOCAL • MINCETUR • 24/7 🇵🇪
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <div className="relative -translate-y-2.5">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-full right-0 mb-4 w-48 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 text-sm text-gray-700 font-medium"
            >
              ¡Hola! 👋 ¿Tienes alguna duda sobre nuestros tours?
              <div className="absolute top-full right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 -translate-y-1.5" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleChat}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 z-50 ${
            isOpen ? "bg-gray-800 text-white" : "bg-[#25D366] text-white"
          }`}
          aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <div className="relative">
              <MessageCircle size={32} fill="currentColor" className="text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse" />
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
