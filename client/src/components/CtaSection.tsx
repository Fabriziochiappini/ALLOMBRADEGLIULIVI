import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Inizia la Tua Esperienza Pugliese
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scopri tutti gli spazi della villa o contattaci direttamente per prenotare il tuo soggiorno 
            indimenticabile nel cuore della Puglia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/villa'}
              className="text-lg px-8 py-6"
              data-testid="button-discover-villa"
            >
              <Home className="w-6 h-6 mr-3" />
              Scopri la Villa
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/contatti'}
              className="text-lg px-8 py-6"
              data-testid="button-contact-us"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contattaci
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
