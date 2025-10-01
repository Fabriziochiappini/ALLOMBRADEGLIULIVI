import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[100] animate-in slide-in-from-bottom-5">
      <div className="bg-card border border-border rounded-lg shadow-2xl p-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <p className="text-sm text-foreground">
              Utilizziamo cookie per migliorare la tua esperienza. Continuando, accetti la nostra{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={acceptCookies}
                data-testid="button-accept-cookies"
                className="text-xs h-8"
              >
                Accetta
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={rejectCookies}
                data-testid="button-reject-cookies"
                className="text-xs h-8"
              >
                Rifiuta
              </Button>
            </div>
          </div>
          <button
            onClick={rejectCookies}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Chiudi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
