import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Landmark, Wine, Palmtree, Utensils } from "lucide-react";

import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.46_1759071455441.jpeg";

const Dintorni = () => {
  const attractions = [
    {
      title: "Ostuni - La Città Bianca",
      distance: "15 km",
      description: "Incantevole borgo bianco arroccato su tre colli, famoso per le sue casette imbiancate a calce e le stradine labirintiche del centro storico.",
      icon: Landmark
    },
    {
      title: "Alberobello e i Trulli",
      distance: "25 km",
      description: "Patrimonio UNESCO, la città dei trulli offre un'esperienza unica tra le caratteristiche costruzioni coniche in pietra.",
      icon: Palmtree
    },
    {
      title: "Cisternino",
      distance: "20 km",
      description: "Uno dei Borghi più Belli d'Italia, famoso per le sue macellerie con fornelli dove gustare carne alla brace.",
      icon: Utensils
    },
    {
      title: "Martina Franca",
      distance: "30 km",
      description: "Elegante città barocca della Valle d'Itria, nota per l'architettura raffinata e il prestigioso Festival della Valle d'Itria.",
      icon: Landmark
    },
    {
      title: "Polignano a Mare",
      distance: "45 km",
      description: "Perla dell'Adriatico con scogliere mozzafiato, grotte marine e il centro storico affacciato sul mare cristallino.",
      icon: Palmtree
    },
    {
      title: "Lecce - La Firenze del Sud",
      distance: "50 km",
      description: "Capitale del barocco pugliese, con monumenti straordinari scolpiti nella pietra leccese dorata.",
      icon: Landmark
    }
  ];

  const traditions = [
    {
      title: "Olio Extravergine DOP",
      description: "La zona è famosa per la produzione di olio extravergine di oliva di altissima qualità, con uliveti secolari che caratterizzano il paesaggio.",
      icon: Wine
    },
    {
      title: "Sagre e Feste Patronali",
      description: "Durante l'estate, ogni paese celebra il proprio santo patrono con processioni, luminarie, concerti e bancarelle di prodotti tipici.",
      icon: Calendar
    },
    {
      title: "Cucina Tradizionale",
      description: "Orecchiette, burrata, bombette, puccia e pasticciotto: la cucina pugliese è un'esperienza autentica da non perdere.",
      icon: Utensils
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={heroImage} 
          alt="Dintorni della villa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              I Dintorni
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Nel cuore della Puglia tra tradizioni e meraviglie
            </p>
          </div>
        </div>
      </section>

      {/* Latiano Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Latiano
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Il Nostro Paese
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Latiano è un autentico paese pugliese situato nel cuore della provincia di Brindisi, 
              a metà strada tra il mare Adriatico e lo Ionio. Il suo centro storico conserva il fascino 
              della tradizione con le tipiche case bianche, le corti interne e i balconi fioriti.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Paese agricolo per eccellenza, Latiano è circondato da distese di ulivi secolari e vigneti 
              che producono vini pregiati. La sua posizione strategica lo rende il punto di partenza ideale 
              per esplorare le meraviglie della Puglia, dalla Valle d'Itria al Salento.
            </p>
          </div>
        </div>
      </section>

      {/* Attrazioni Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
              Luoghi da Scoprire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => {
                const Icon = attraction.icon;
                return (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                        <Badge variant="secondary">{attraction.distance}</Badge>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                        {attraction.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {attraction.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tradizioni Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
              Tradizioni e Cultura
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {traditions.map((tradition, index) => {
                const Icon = tradition.icon;
                return (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                        {tradition.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tradition.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Info Pratiche */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Informazioni Utili
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">Periodo Migliore</h3>
                <p className="text-muted-foreground">
                  La primavera (aprile-giugno) e l'autunno (settembre-ottobre) sono ideali per visitare 
                  la Puglia, con clima mite e meno affollamento. L'estate è perfetta per il mare.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">Eventi Estivi</h3>
                <p className="text-muted-foreground">
                  Luglio e agosto sono ricchi di sagre, concerti e feste patronali. Ogni paese celebra 
                  le proprie tradizioni con eventi che durano diversi giorni.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">Spiagge Vicine</h3>
                <p className="text-muted-foreground">
                  Le spiagge più belle sono raggiungibili in 20-40 minuti: Torre Guaceto (riserva naturale), 
                  le marine di Ostuni, Specchiolla e le coste del Salento.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 text-foreground">Enogastronomia</h3>
                <p className="text-muted-foreground">
                  Non perdere le visite alle cantine per degustare Primitivo e Negroamaro, e alle 
                  masserie per acquistare olio DOP e prodotti tipici locali.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dintorni;
