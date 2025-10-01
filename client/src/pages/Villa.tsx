import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Wifi, 
  Wind, 
  Tv, 
  Coffee, 
  Waves,
  Bath,
  Car,
  PawPrint,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

// Import photos
import pool1 from "@assets/WhatsApp Image 2025-09-25 at 10.56.42 (1)_1759071455441.jpeg";
import pool2 from "@assets/WhatsApp Image 2025-09-25 at 10.56.42_1759071455442.jpeg";
import pool3 from "@assets/WhatsApp Image 2025-09-25 at 10.56.43_1759071455441.jpeg";
import exterior1 from "@assets/Immagine 2025-09-28 164315_1759071422103.png";
import exterior2 from "@assets/Immagine 2025-09-28 164335_1759071422103.png";
import garden1 from "@assets/WhatsApp Image 2025-09-25 at 10.56.46_1759071455441.jpeg";
import garden2 from "@assets/WhatsApp Image 2025-09-25 at 10.56.47 (1)_1759071455440.jpeg";

import interior1 from "@assets/Immagine 2025-09-28 164525_1759071422101.png";
import interior2 from "@assets/Immagine 2025-09-28 164459_1759071422101.png";
import interior3 from "@assets/Immagine 2025-09-28 164547_1759071422100.png";
import living1 from "@assets/Immagine 2025-09-28 164834_1759071422097.png";
import living2 from "@assets/Immagine 2025-09-28 164436_1759071422102.png";
import kitchen from "@assets/Immagine 2025-09-28 164449_1759071422102.png";
import interior4 from "@assets/Immagine 2025-09-28 164722_1759071422100.png";
import interior5 from "@assets/Immagine 2025-09-28 164804_1759071422099.png";
import interior6 from "@assets/Immagine 2025-09-28 164825_1759071422099.png";

const exteriorPhotos = [
  { src: pool1, alt: "Piscina vista 1" },
  { src: pool2, alt: "Piscina vista 2" },
  { src: pool3, alt: "Area piscina" },
  { src: exterior1, alt: "Terrazza esterna" },
  { src: exterior2, alt: "Vista esterna" },
  { src: garden1, alt: "Giardino con ulivi" },
  { src: garden2, alt: "Area esterna" }
];

const interiorPhotos = [
  { src: interior1, alt: "Camera matrimoniale 1" },
  { src: interior2, alt: "Camera matrimoniale 2" },
  { src: interior3, alt: "Camera matrimoniale 3" },
  { src: living1, alt: "Soggiorno 1" },
  { src: living2, alt: "Soggiorno 2" },
  { src: kitchen, alt: "Cucina" },
  { src: interior4, alt: "Interno villa" },
  { src: interior5, alt: "Cucina moderna" },
  { src: interior6, alt: "Spazio interno" }
];

function PhotoGallery({ photos, title }: { photos: typeof exteriorPhotos; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-2xl font-bold text-foreground text-center">{title}</h3>
      
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover-elevate"
                  onClick={() => setSelectedImage(index)}
                  data-testid={`gallery-image-${index}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg z-10"
          data-testid="button-gallery-prev"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg z-10"
          data-testid="button-gallery-next"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl p-0 bg-black/95">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! - 1 + photos.length) % photos.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3"
                data-testid="button-lightbox-prev"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! + 1) % photos.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3"
                data-testid="button-lightbox-next"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Villa() {
  const services = [
    { icon: Wifi, text: "WiFi Gratuito" },
    { icon: Wind, text: "Aria Condizionata" },
    { icon: Tv, text: "TV Satellitare" },
    { icon: Coffee, text: "Cucina Completa" },
    { icon: Waves, text: "Piscina Privata" },
    { icon: Bath, text: "Lavatrice" },
    { icon: Car, text: "Parcheggio Privato" },
    { icon: PawPrint, text: "Animali Ammessi" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              La Villa
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Un'oasi di tranquillità nel cuore della Puglia
            </p>
          </div>
        </div>
      </section>

      {/* Spazi Esterni Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4 mx-auto block w-fit">
              <Waves className="w-4 h-4 mr-2" />
              Spazi Esterni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-foreground">
              Piscina e Giardino
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-4">
              Gli spazi esterni della villa sono il cuore dell'esperienza estiva pugliese. 
              La piscina privata, circondata da comodi lettini e ombrelloni, offre il 
              refrigerio perfetto nelle calde giornate estive.
            </p>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Il giardino, ombreggiato da ulivi secolari, dispone di un'area barbecue e 
              una zona pranzo all'aperto dove gustare i sapori della tradizione pugliese. 
              Il parcheggio privato garantisce comodità e sicurezza durante tutto il soggiorno.
            </p>
          </div>
        </div>
      </section>

      {/* Galleria Spazi Esterni */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <PhotoGallery photos={exteriorPhotos} title="Galleria Spazi Esterni" />
        </div>
      </section>

      {/* Spazi Interni Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4 mx-auto block w-fit">
              <Coffee className="w-4 h-4 mr-2" />
              Spazi Interni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 text-foreground">
              Comfort e Eleganza
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-4">
              La villa dispone di 3 camere matrimoniali elegantemente arredate, ognuna con 
              aria condizionata e TV. I due ampi soggiorni, entrambi dotati di divano letto 
              matrimoniale, offrono spazi confortevoli per il relax e la convivialità.
            </p>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              La cucina, moderna e completamente attrezzata, permette di preparare pranzi e cene 
              in totale autonomia. Due bagni completi con doccia garantiscono comfort per tutti 
              gli ospiti. Ogni ambiente è curato nei dettagli per offrire un'esperienza di 
              soggiorno di alta qualità.
            </p>
          </div>
        </div>
      </section>

      {/* Galleria Spazi Interni */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <PhotoGallery photos={interiorPhotos} title="Galleria Spazi Interni" />
        </div>
      </section>

      {/* Servizi Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-foreground">
              Servizi e Comfort
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <span className="text-sm font-medium text-foreground">{service.text}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Pronto a Prenotare?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contattaci per verificare la disponibilità e ricevere tutte le informazioni 
              necessarie per il tuo soggiorno nella nostra villa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/contatti'}
                data-testid="button-contact-cta"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Contattaci
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://wa.me/393773938627', '_blank')}
                data-testid="button-whatsapp-cta"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
