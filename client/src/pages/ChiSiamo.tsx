import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, MapPin, Star } from "lucide-react";
import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.46_1759071455441.jpeg";

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={heroImage} 
          alt="Giardino con ulivi" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Chi Siamo
            </h1>
            <p className="text-xl md:text-2xl">
              La storia della nostra famiglia e della villa
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
                La Nostra Storia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All'Ombra degli Ulivi nasce dalla passione della nostra famiglia 
                per l'ospitalità e l'amore per la terra pugliese.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>La Nostra Passione</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Da generazioni la nostra famiglia vive e ama questa terra. 
                    La villa è nata dal desiderio di condividere con i nostri 
                    ospiti la bellezza e l'autenticità della Puglia, creando 
                    un'esperienza unica e indimenticabile.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Territorio e Tradizione</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Latiano e i suoi dintorni offrono un patrimonio culturale 
                    e naturale straordinario. Dalle antiche masserie ai borghi 
                    bianchi, dalla costa adriatica agli uliveti secolari, 
                    ogni angolo racconta una storia millenaria.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Ospitalità Autentica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crediamo nell'ospitalità come arte del prendersi cura. 
                    Ogni dettaglio della villa è pensato per far sentire 
                    i nostri ospiti come a casa, circondati dal calore 
                    e dalla genuinità tipici del Sud Italia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Qualità e Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Uniamo la tradizione pugliese ai comfort moderni. 
                    La villa è stata ristrutturata con materiali di qualità 
                    e dotata di ogni servizio per garantire un soggiorno 
                    perfetto in ogni stagione.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Il Nostro Impegno
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ci impegniamo ogni giorno per offrire ai nostri ospiti 
                  un'esperienza autentica e di qualità. La vostra soddisfazione 
                  è la nostra priorità, e siamo sempre disponibili per consigli 
                  e suggerimenti per scoprire il meglio della Puglia.
                </p>
                <p className="text-primary font-medium">
                  Benvenuti nella nostra famiglia!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}