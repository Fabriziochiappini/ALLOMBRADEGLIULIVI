import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";
import { Link } from "wouter";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Scopri tutti gli spazi della villa o contattaci direttamente per prenotare il tuo soggiorno 
            indimenticabile nel cuore della Puglia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/villa">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                data-testid="button-discover-villa"
              >
                <Home className="w-6 h-6 mr-3" />
                Scopri la Villa
              </Button>
            </Link>
            <Link href="/contatti">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
                data-testid="button-contact-us"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
