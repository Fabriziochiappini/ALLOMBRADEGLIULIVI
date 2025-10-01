import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "393773938627";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active-elevate-2"
        aria-label="Contattaci su WhatsApp"
        data-testid="button-floating-whatsapp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Tooltip (optional) */}
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none">
        <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 hover:opacity-100 transition-opacity">
          Chatta con noi
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
