import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Bed, 
  Car, 
  Wifi, 
  AirVent, 
  Tv, 
  Utensils,
  Bath,
  Home,
  Waves
} from "lucide-react";

export default function Villa() {
  const amenities = [
    { icon: Users, text: "Fino a 8 ospiti" },
    { icon: Bed, text: "3 camere matrimoniali" },
    { icon: Bed, text: "2 soggiorni con divano letto" },
    { icon: Waves, text: "Piscina privata" },
    { icon: Car, text: "Parcheggio privato" },
    { icon: Wifi, text: "WiFi gratuito" },
    { icon: AirVent, text: "Aria condizionata" },
    { icon: Tv, text: "TV in ogni stanza" },
    { icon: Utensils, text: "Cucina completamente attrezzata" },
    { icon: Bath, text: "2 bagni completi" },
    { icon: Home, text: "Giardino privato" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              La Villa
            </h1>
            <p className="text-xl md:text-2xl">
              Un'oasi di tranquillità nel cuore della Puglia
            </p>
          </div>
        </div>
      </section>

      {/* Villa Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
                All'Ombra degli Ulivi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La nostra villa offre il perfetto equilibrio tra comfort moderno e 
                autenticità pugliese. Immersa in un rigoglioso uliveto, è il luogo 
                ideale per una vacanza indimenticabile con famiglia e amici.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="flex items-center p-4">
                      <Icon className="h-6 w-6 text-primary mr-3" />
                      <span className="text-sm font-medium">{amenity.text}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Description Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Spazi Interni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    La villa dispone di spazi ampi e luminosi, arredati con gusto 
                    e dotati di tutti i comfort moderni.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">3 camere matrimoniali</Badge>
                    <Badge variant="secondary">2 soggiorni</Badge>
                    <Badge variant="secondary">2 bagni completi</Badge>
                    <Badge variant="secondary">Cucina attrezzata</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Spazi Esterni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Goditi il clima pugliese negli spazi esterni della villa, 
                    perfetti per rilassarsi e socializzare.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Piscina privata</Badge>
                    <Badge variant="secondary">Giardino con ulivi</Badge>
                    <Badge variant="secondary">Area barbecue</Badge>
                    <Badge variant="secondary">Parcheggio privato</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Servizi e Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tutti i servizi necessari per un soggiorno confortevole 
                    e senza preoccupazioni.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">WiFi gratuito</Badge>
                    <Badge variant="secondary">Aria condizionata</Badge>
                    <Badge variant="secondary">TV satellitare</Badge>
                    <Badge variant="secondary">Lavatrice</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Posizione Strategica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Situata a Latiano, la villa offre facile accesso alle 
                    principali attrazioni della Puglia.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Centro storico 5 min</Badge>
                    <Badge variant="secondary">Mare 20 min</Badge>
                    <Badge variant="secondary">Aeroporto 30 min</Badge>
                    <Badge variant="secondary">Ostuni 15 min</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}