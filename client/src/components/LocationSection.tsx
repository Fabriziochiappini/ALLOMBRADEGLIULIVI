import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Car, Plane } from "lucide-react";

const LocationSection = () => {
  const contactInfo = {
    phone: "+39 377 393 8627",
    whatsapp: "+39 377 393 8627",
    address: "Latiano, Brindisi, Puglia",
    coordinates: "40.5833° N, 17.7167° E"
  };

  const nearbyAttractions = [
    { name: "Ostuni (Città Bianca)", distance: "25 km", time: "30 min" },
    { name: "Alberobello (Trulli)", distance: "35 km", time: "40 min" },
    { name: "Lecce (Firenze del Sud)", distance: "45 km", time: "50 min" },
    { name: "Polignano a Mare", distance: "50 km", time: "55 min" },
    { name: "Locorotondo", distance: "30 km", time: "35 min" },
    { name: "Cisternino", distance: "20 km", time: "25 min" }
  ];

  const transportInfo = [
    {
      icon: Plane,
      title: "Aeroporto di Brindisi",
      distance: "25 km",
      time: "30 minuti",
      description: "Aeroporto internazionale del Salento"
    },
    {
      icon: Car,
      title: "Stazione di Latiano",
      distance: "5 km",
      time: "8 minuti",
      description: "Collegamento ferroviario regionale"
    }
  ];

  const handleCallClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Ciao! Sono interessato alla villa All'Ombra degli Ulivi. Potreste darmi informazioni sulla disponibilità?");
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Posizione e Contatti
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nel Cuore della Puglia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La villa si trova a Latiano, in posizione strategica per esplorare le meraviglie della Puglia. 
            Siamo sempre disponibili per assistervi durante il vostro soggiorno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Contatti Diretti</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">Telefono</div>
                    <div className="text-muted-foreground">{contactInfo.phone}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleCallClick}
                    data-testid="button-call-direct"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">Risposta immediata</div>
                  </div>
                  <Button 
                    size="sm"
                    onClick={handleWhatsAppClick}
                    data-testid="button-whatsapp-contact"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Messaggio
                  </Button>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">Orari di Contatto</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tutti i giorni: 8:00 - 22:00<br />
                    Risposta WhatsApp entro 1 ora
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle>Come Raggiungerci</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {transportInfo.map((transport, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <transport.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{transport.title}</div>
                      <div className="text-sm text-muted-foreground mb-1">{transport.description}</div>
                      <div className="text-sm">
                        <span className="text-primary font-medium">{transport.distance}</span>
                        <span className="text-muted-foreground"> • {transport.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map and Nearby Attractions */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">Latiano, Puglia</div>
                  <div className="text-sm text-muted-foreground">Mappa interattiva</div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground">
                  <strong>Indirizzo:</strong> {contactInfo.address}<br />
                  <strong>Coordinate GPS:</strong> {contactInfo.coordinates}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle>Luoghi di Interesse Vicini</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg hover-elevate">
                      <div>
                        <div className="font-medium text-foreground">{attraction.name}</div>
                        <div className="text-sm text-muted-foreground">{attraction.distance}</div>
                      </div>
                      <Badge variant="secondary">{attraction.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Pronto a Prenotare?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Contattaci ora per verificare la disponibilità e ricevere informazioni personalizzate 
              sul tuo soggiorno in Puglia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                data-testid="button-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contatta su WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleCallClick}
                data-testid="button-call-cta"
              >
                <Phone className="w-5 h-5 mr-2" />
                Chiama Ora
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LocationSection;