import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  // todo: remove mock data when implementing real reviews
  const reviews = [
    {
      name: "Marco e Giulia",
      location: "Milano",
      rating: 5,
      comment: "Villa meravigliosa, pulita e con tutti i comfort. La piscina è stata perfetta per i nostri bambini. Proprietari disponibilissimi e zona molto tranquilla. Torneremo sicuramente!",
      date: "Agosto 2024"
    },
    {
      name: "Familie Weber",
      location: "Germania",
      rating: 5,
      comment: "Wunderbare Villa mit allem was man braucht. Der Pool war perfekt und die Lage sehr ruhig. Die Besitzer sind sehr hilfsbereit. Wir kommen gerne wieder!",
      date: "Luglio 2024"
    },
    {
      name: "Sara e Antonio",
      location: "Roma",
      rating: 5,
      comment: "Posto fantastico per rilassarsi. La villa è esattamente come nelle foto, anzi meglio! Zona strategica per visitare tutta la Puglia. Consigliatissimo!",
      date: "Settembre 2024"
    }
  ];

  const stats = [
    { label: "Valutazione Media", value: "5.0", suffix: "/5" },
    { label: "Recensioni Totali", value: "47", suffix: "" },
    { label: "Tasso di Ritorno", value: "85", suffix: "%" },
    { label: "Risposta Host", value: "100", suffix: "%" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
            Recensioni degli Ospiti
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quello che Dicono i Nostri Ospiti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei nostri ospiti è la nostra priorità. Leggi le recensioni autentiche 
            di chi ha già vissuto l'esperienza a Villa all'Ombra degli Ulivi, Latiano.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-elevate">
              <div className="font-serif text-3xl font-bold text-primary mb-2">
                {stat.value}<span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover-elevate">
              <CardContent className="p-0 space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground italic leading-relaxed">
                  "{review.comment}"
                </p>

                {/* Reviewer Info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location} • {review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;