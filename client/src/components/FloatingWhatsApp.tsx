import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "393773938627";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* Floating Button - Più grande e visibile su mobile */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 md:w-14 md:h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
        aria-label="Contattaci su WhatsApp"
        data-testid="button-floating-whatsapp"
      >
        <MessageCircle className="w-8 h-8 md:w-7 md:h-7" />
      </button>
    </>
  );
};

export default FloatingWhatsApp;
