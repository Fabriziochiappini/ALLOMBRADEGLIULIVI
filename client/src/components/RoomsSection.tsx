import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Users, Wifi, Wind, Tv, Coffee, Waves } from "lucide-react";

import room1 from "@assets/Immagine 2025-09-28 164525_1759071422101.png";
import room2 from "@assets/Immagine 2025-09-28 164459_1759071422101.png";
import room3 from "@assets/Immagine 2025-09-28 164547_1759071422100.png";
import living1 from "@assets/Immagine 2025-09-28 164834_1759071422097.png";
import living2 from "@assets/Immagine 2025-09-28 164436_1759071422102.png";
import kitchen from "@assets/Immagine 2025-09-28 164744_1759299558338.png";

const RoomsSection = () => {
  const amenities = [
    { icon: Wifi, label: "WiFi Gratuito" },
    { icon: Wind, label: "Aria Condizionata" },
    { icon: Tv, label: "TV Satellitare" },
    { icon: Coffee, label: "Cucina Completa" },
    { icon: Waves, label: "Piscina Privata" },
    { icon: Bath, label: "Lavatrice" },
  ];

  const rooms = [
    {
      title: "Camera Matrimoniale Principale",
      description: "Camera elegante con letto matrimoniale, comunicante con il soggiorno tramite porta.",
      image: room1,
      features: ["Letto matrimoniale", "Armadio spazioso", "Vista giardino"]
    },
    {
      title: "Camera Matrimoniale 2",
      description: "Seconda camera matrimoniale con arredi moderni e comfort ottimali.",
      image: room2,
      features: ["Letto matrimoniale", "Climatizzazione", "Finestre panoramiche"]
    },
    {
      title: "Camera Matrimoniale 3",
      description: "Terza camera matrimoniale perfetta per famiglie e gruppi.",
      image: room3,
      features: ["Letto matrimoniale", "Spazio guardaroba", "Illuminazione naturale"]
    }
  ];

  const livingSpaces = [
    {
      title: "Soggiorno 1",
      description: "Ampio soggiorno con divano letto matrimoniale, perfetto per rilassarsi.",
      image: living1,
      features: ["Divano letto matrimoniale", "TV", "Area conversazione"]
    },
    {
      title: "Soggiorno 2",
      description: "Secondo spazio living con vista sulla piscina e giardino.",
      image: living2,
      features: ["Zona relax", "Accesso diretto piscina", "Ambiente climatizzato"]
    },
    {
      title: "Cucina",
      description: "Cucina moderna completamente attrezzata con tutto il necessario.",
      image: kitchen,
      features: ["Elettrodomestici moderni", "Piano cottura", "Zona pranzo"]
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Bed className="w-4 h-4 mr-2" />
            Camere e Servizi
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Spazi Confortevoli e Accoglienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ogni ambiente è stato pensato per offrirti il massimo comfort durante il tuo soggiorno. 
            Arredi curati, tecnologie moderne e l'atmosfera calda della tradizione pugliese.
          </p>
        </div>

        {/* Bedrooms */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            Camere da Letto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover-elevate">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{room.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{room.description}</p>
                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Living Spaces */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            Spazi Comuni
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {livingSpaces.map((space, index) => (
              <Card key={index} className="overflow-hidden hover-elevate">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{space.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{space.description}</p>
                  <div className="space-y-2">
                    {space.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capacity Summary */}
        <Card className="mt-16 p-8 bg-primary/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Capacità Totale
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold text-2xl text-foreground">8</div>
                  <div className="text-sm text-muted-foreground">Posti Letto</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Bed className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold text-2xl text-foreground">3</div>
                  <div className="text-sm text-muted-foreground">Camere</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Bath className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold text-2xl text-foreground">2</div>
                  <div className="text-sm text-muted-foreground">Bagni</div>
                </div>
              </div>
            </div>
            <Button className="mt-6" data-testid="button-see-all-rooms">
              Scopri Tutti gli Spazi
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RoomsSection;