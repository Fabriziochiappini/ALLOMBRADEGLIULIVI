import { Badge } from "@/components/ui/badge";
import { Percent } from "lucide-react";

const DiscountBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Badge variant="default" className="bg-primary">
          <Percent className="w-3 h-3 mr-1" />
          Sconto 10%
        </Badge>
        <p className="text-sm md:text-base text-foreground font-medium text-center">
          Prenota direttamente dal nostro sito e ottieni subito uno <strong>sconto del 10%</strong> sulla tua vacanza
        </p>
      </div>
    </div>
  );
};

export default DiscountBanner;
