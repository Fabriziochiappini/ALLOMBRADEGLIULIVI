import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DiscountBanner from "@/components/DiscountBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";
import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.47 (1)_1759071455440.jpeg";

export default function Contatti() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/393773938627', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+393773938627';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DiscountBanner />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={heroImage} 
          alt="Esterno villa con alberi" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Contatti
            </h1>
            <p className="text-xl md:text-2xl">
              Siamo qui per assisterti in ogni momento
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
                Come Possiamo Aiutarti
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contattaci per prenotazioni, informazioni o qualsiasi necessità 
                durante il tuo soggiorno. Siamo sempre disponibili!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover-elevate">
                <CardHeader>
                  <MessageCircle className="h-8 w-8 text-[#25D366] mb-2" />
                  <CardTitle>WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Il modo più veloce per contattarci. Rispondiamo rapidamente 
                    a tutte le tue domande su WhatsApp.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">+39 377 393 8627</span>
                      <Badge variant="secondary">Attivo 24/7</Badge>
                    </div>
                    <Button 
                      onClick={handleWhatsApp} 
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-transparent"
                      data-testid="button-whatsapp-contact"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Apri WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Telefono</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Chiamaci direttamente per prenotazioni o per informazioni 
                    immediate sulla villa.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">+39 377 393 8627</span>
                      <Badge variant="secondary">Sempre disponibile</Badge>
                    </div>
                    <Button 
                      onClick={handleCall} 
                      variant="outline" 
                      className="w-full"
                      data-testid="button-call-contact"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Chiama Ora
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Scrivici via email per informazioni dettagliate o 
                    richieste specifiche sulla prenotazione.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-sm break-all">antonelloprete10@gmail.com</span>
                    </div>
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full"
                      data-testid="button-email-contact"
                    >
                      <a href="mailto:antonelloprete10@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Invia Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Posizione</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    La villa si trova nel cuore di Latiano, facilmente 
                    raggiungibile e in posizione strategica.
                  </p>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Villa all'Ombra degli Ulivi, Latiano</span>
                    </div>
                    <div className="text-muted-foreground">
                      Contrada La Specchia SNC
                    </div>
                    <div className="text-muted-foreground">
                      Latiano (BR), Puglia
                    </div>
                    <Badge variant="outline">Parcheggio privato incluso</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Orari di Contatto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Siamo disponibili praticamente sempre per assisterti 
                    durante la tua esperienza.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>WhatsApp</span>
                      <Badge variant="secondary">24/7</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Telefono</span>
                      <Badge variant="secondary">8:00 - 22:00</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergenze</span>
                      <Badge variant="secondary">Sempre</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Niente form: le richieste arrivano su WhatsApp (Antonello, 25/09/2026) */}
            <a
              href="https://wa.me/393773938627?text=Ciao%2C%20vorrei%20informazioni%20sulla%20Villa%20all%27Ombra%20degli%20Ulivi"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 flex w-full items-center justify-center gap-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-8 md:py-10 shadow-xl transition-colors"
              data-testid="button-contattaci-whatsapp"
            >
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
              <span className="text-2xl md:text-4xl font-bold tracking-wide">CONTATTACI SU WHATSAPP</span>
            </a>

            {/* Contact info */}
            <Card className="bg-card/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Preferisci il Contatto Diretto?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Chiamaci o scrivici su WhatsApp per una risposta immediata. 
                  Siamo sempre disponibili per assisterti!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button onClick={handleWhatsApp} size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-transparent" data-testid="button-footer-whatsapp">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp: +39 377 393 8627
                  </Button>
                  <Button onClick={handleCall} variant="outline" size="lg" data-testid="button-footer-call">
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama Ora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}