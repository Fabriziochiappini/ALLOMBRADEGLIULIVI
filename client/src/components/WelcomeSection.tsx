import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Heart, Home } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Latiano, Puglia
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benvenuti All'Ombra degli Ulivi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una graziosa villa con piscina in affitto per vacanze in Puglia, immersa tra gli ulivi secolari 
                di Latiano. La villa offre fino a 8 posti letto ed è dotata di tutti i comfort moderni per 
                garantire un soggiorno indimenticabile.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Villa Indipendente</h4>
                  <p className="text-sm text-muted-foreground">Unica struttura con privacy totale</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">5 Stelle</h4>
                  <p className="text-sm text-muted-foreground">100% feedback positivi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Gestione Familiare</h4>
                  <p className="text-sm text-muted-foreground">Attenzione personalizzata</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Posizione Ideale</h4>
                  <p className="text-sm text-muted-foreground">Nel cuore della Puglia</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Posti Letto</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Camere da Letto</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Bagni</div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden hover-elevate">
              <img
                src="/attached_assets/Immagine 2025-09-28 164834_1759071422097.png"
                alt="Soggiorno villa"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover-elevate">
              <img
                src="/attached_assets/Immagine 2025-09-28 164315_1759071422103.png"
                alt="Terrazza esterna"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover-elevate">
              <img
                src="/attached_assets/Immagine 2025-09-28 164525_1759071422101.png"
                alt="Camera da letto"
                className="w-full h-48 object-cover"
              />
            </Card>
            <Card className="overflow-hidden hover-elevate">
              <img
                src="/attached_assets/Immagine 2025-09-28 164804_1759071422099.png"
                alt="Cucina moderna"
                className="w-full h-48 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;