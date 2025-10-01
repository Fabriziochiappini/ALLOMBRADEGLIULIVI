import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";

export default function Contatti() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/393773938627', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+393773938627';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      toast({
        title: "Richiesta Inviata!",
        description: "Ti abbiamo inviato una email di conferma. Ti risponderemo al più presto!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "C'è stato un problema nell'invio del messaggio. Riprova o contattaci su WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
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
                  <MessageCircle className="h-8 w-8 text-primary mb-2" />
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
                      className="w-full"
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
                      <span className="font-medium">All'Ombra degli Ulivi</span>
                    </div>
                    <div className="text-muted-foreground">
                      Contrada La speccia SNC
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

            {/* Contact Form */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Richiedi Informazioni</CardTitle>
                </div>
                <p className="text-muted-foreground mt-2">
                  Compila il form e ti risponderemo al più presto. Riceverai una conferma via email.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Mario Rossi"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="mario.rossi@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+39 333 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Numero Ospiti</Label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        max="12"
                        placeholder="2"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        data-testid="input-guests"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Data Check-in</Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                        data-testid="input-checkin"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Data Check-out</Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                        data-testid="input-checkout"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio *</Label>
                    <Textarea
                      id="message"
                      placeholder="Scrivi qui la tua richiesta o domanda..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1"
                      data-testid="button-submit-form"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Invio in corso...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Invia Richiesta
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="lg"
                      onClick={handleWhatsApp}
                      data-testid="button-whatsapp-alternative"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      O scrivi su WhatsApp
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campi obbligatori. Risponderemo entro 24 ore.
                  </p>
                </form>
              </CardContent>
            </Card>

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
                  <Button onClick={handleWhatsApp} size="lg" data-testid="button-footer-whatsapp">
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