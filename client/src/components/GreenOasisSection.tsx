import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";

import green1 from "@assets/WhatsApp Image 2025-09-25 at 10.56.49_1759299431306.jpeg";
import green2 from "@assets/WhatsApp Image 2025-09-25 at 10.56.47 (1)_1759299431307.jpeg";
import green3 from "@assets/WhatsApp Image 2025-09-25 at 10.56.46_1759299431307.jpeg";
import green4 from "@assets/WhatsApp Image 2025-09-25 at 10.56.43 (1)_1759299431307.jpeg";
import green5 from "@assets/WhatsApp Image 2025-09-25 at 10.56.42 (1)_1759299431308.jpeg";
import green6 from "@assets/WhatsApp Image 2025-09-25 at 10.56.42_1759299431308.jpeg";
import green7 from "@assets/WhatsApp Image 2025-09-25 at 10.56.23_1759299431309.jpeg";
import green8 from "@assets/WhatsApp Image 2025-09-25 at 10.56.22_1759299431309.jpeg";

const GreenOasisSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-primary mr-3" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Un Oasi di relax immersa nel verde degli ulivi
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Circondata da maestosi ulivi secolari, la nostra villa offre un rifugio di pace e tranquillità. 
            Il verde intenso del giardino mediterraneo crea un'atmosfera unica dove ritrovare il contatto con la natura 
            e rigenerarsi lontano dallo stress quotidiano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover-elevate col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src={green1}
              alt="Giardino con ulivi"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-1"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green2}
              alt="Verde degli ulivi"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-2"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green3}
              alt="Ulivi secolari"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-3"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green4}
              alt="Giardino villa"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-4"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate col-span-1 md:col-span-2">
            <img
              src={green5}
              alt="Oasi verde"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-5"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green6}
              alt="Relax nel verde"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-6"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green7}
              alt="Natura e relax"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-7"
            />
          </Card>
          
          <Card className="overflow-hidden hover-elevate">
            <img
              src={green8}
              alt="Verde mediterraneo"
              className="w-full h-80 object-cover"
              data-testid="img-green-oasis-8"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GreenOasisSection;
