import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Mail, Star } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Ciao! Sono interessato alla Villa all'Ombra degli Ulivi, Latiano.");
    window.open(`https://wa.me/393773938627?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+393773938627';
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="font-serif text-2xl font-bold text-primary">
              Villa all'Ombra degli Ulivi, Latiano
            </div>
            <p className="text-background/80 leading-relaxed">
              Villa con piscina per vacanze indimenticabili in Puglia. Tra gli ulivi secolari di Latiano, 
              offriamo comfort moderni e l'autentica ospitalità pugliese per un soggiorno perfetto.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-background/80 text-sm">5.0 • 47 recensioni</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+39 377 393 8627</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">Latiano, Brindisi, Puglia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">info@villaombraulivi.it</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Prenota Subito</h3>
            <div className="space-y-3">
              <Button 
                variant="secondary"
                size="sm"
                className="w-full justify-start"
                onClick={handleWhatsAppClick}
                data-testid="button-footer-whatsapp"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="w-full justify-start border-background/20 text-background hover:bg-background/10"
                onClick={handleCallClick}
                data-testid="button-footer-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                Chiama Ora
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              <div>© 2025 Villa all'Ombra degli Ulivi, Latiano. Tutti i diritti riservati.</div>
              <div className="mt-1">
                Sito web realizzato da{" "}
                <a 
                  href="https://webproitalia.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  WEBPROITALIA
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
                data-testid="button-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
                data-testid="button-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-background/60">
              <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-background transition-colors">Termini di Servizio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;