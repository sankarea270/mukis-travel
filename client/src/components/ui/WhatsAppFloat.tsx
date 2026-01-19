import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/51984000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
        ¡Chatea con nosotros!
      </span>
    </a>
  );
}
