import { Badge } from "@/components/ui/badge";
import { Percent } from "lucide-react";

const DiscountBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 dark:from-red-950/30 dark:via-rose-950/30 dark:to-red-950/30 border-l-4 border-red-400 py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Badge variant="default" className="bg-red-500 hover:bg-red-600 text-white">
          <Percent className="w-3 h-3 mr-1" />
          Sconto 10%
        </Badge>
        <p className="text-sm md:text-base text-red-800 dark:text-red-200 font-semibold text-center">
          Prenota direttamente dal nostro sito e ottieni subito uno <strong>sconto del 10%</strong> sulla tua vacanza
        </p>
      </div>
    </div>
  );
};

export default DiscountBanner;
