import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Car, 
  Train, 
  MapPin, 
  Clock, 
  Navigation as NavigationIcon 
} from "lucide-react";
import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.43_1759071455441.jpeg";

export default function ComeRaggiungerci() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={heroImage} 
          alt="Piscina villa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Come Raggiungerci
            </h1>
            <p className="text-xl md:text-2xl">
              Tutte le informazioni per raggiungere la villa
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
                Raggiungere Villa all'Ombra degli Ulivi, Latiano
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La villa si trova a Latiano, nel cuore della Puglia, 
                facilmente raggiungibile con diversi mezzi di trasporto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Plane className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>In Aereo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Aeroporto di Brindisi</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Aeroporto più vicino (30 km - 30 minuti)
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">30 km</Badge>
                        <Badge variant="secondary">30 min</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Aeroporto di Bari</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Alternativa con più voli (100 km - 1h 15min)
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">100 km</Badge>
                        <Badge variant="secondary">1h 15min</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Car className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>In Auto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Dall'Aeroporto di Brindisi</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Seguire indicazioni per Latiano via SS7
                      </p>
                      <Badge variant="secondary">Noleggio auto disponibile</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dall'Aeroporto di Bari</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        SS16 in direzione Brindisi, uscita per Latiano
                      </p>
                      <Badge variant="secondary">SS16</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Train className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>In Treno</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Stazione di Latiano</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Stazione ferroviaria nel centro del paese
                      </p>
                      <Badge variant="secondary">5 min dalla villa</Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Collegamento</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Treni regionali da Bari e Brindisi
                      </p>
                      <Badge variant="secondary">Trenitalia</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Indirizzo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Villa all'Ombra degli Ulivi, Latiano</h4>
                      <p className="text-muted-foreground">Contrada La speccia SNC</p>
                      <p className="text-muted-foreground">Latiano (BR), Puglia</p>
                    </div>
                    <Badge variant="outline">Parcheggio privato incluso</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Distances */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <NavigationIcon className="h-6 w-6 text-primary" />
                  Distanze dalle Principali Città
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Ostuni</h4>
                    <p className="text-muted-foreground">15 km</p>
                    <Badge variant="secondary">15 min</Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Brindisi</h4>
                    <p className="text-muted-foreground">30 km</p>
                    <Badge variant="secondary">30 min</Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Lecce</h4>
                    <p className="text-muted-foreground">50 km</p>
                    <Badge variant="secondary">50 min</Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Alberobello</h4>
                    <p className="text-muted-foreground">35 km</p>
                    <Badge variant="secondary">35 min</Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Polignano a Mare</h4>
                    <p className="text-muted-foreground">60 km</p>
                    <Badge variant="secondary">1h</Badge>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold">Costa Adriatica</h4>
                    <p className="text-muted-foreground">20 km</p>
                    <Badge variant="secondary">20 min</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mappa */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Mappa e Posizione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.9!2d17.7!3d40.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMwJzAwLjAiTiAxN8KwNDInMDAuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Villa all'Ombra degli Ulivi, Latiano"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Contrada La speccia SNC, Latiano (BR)
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/Contrada+La+speccia+Latiano" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Apri in Google Maps →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact for directions */}
            <Card className="bg-card/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Hai Bisogno di Aiuto?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Contattaci per ricevere indicazioni dettagliate e coordinate GPS precise. 
                  Siamo disponibili per assisterti nel raggiungere la villa.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge variant="outline">+39 377 393 8627</Badge>
                  <Badge variant="outline">WhatsApp disponibile</Badge>
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