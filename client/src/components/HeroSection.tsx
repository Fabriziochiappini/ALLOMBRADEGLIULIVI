import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Users, Wifi, Car, PawPrint, Wind } from "lucide-react";
import heroImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.42 (1)_1759071455441.jpeg";
import poolImage from "@assets/WhatsApp Image 2025-09-25 at 10.56.43_1759071455441.jpeg";
import interior1 from "@assets/Immagine 2025-09-28 164834_1759071422097.png";
import exterior1 from "@assets/Immagine 2025-09-28 164315_1759071422103.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroImage,
      title: "Villa all'Ombra degli Ulivi, Latiano",
      subtitle: "Casa Vacanza con Piscina in Puglia"
    },
    {
      image: poolImage,
      title: "Piscina Privata",
      subtitle: "Relax e Refrigerio"
    },
    {
      image: interior1,
      title: "Comfort e Eleganza",
      subtitle: "Interni Curati nei Dettagli"
    },
    {
      image: exterior1,
      title: "Terrazza Panoramica",
      subtitle: "Vista Mozzafiato"
    }
  ];

  const features = [
    { icon: Users, text: "8 Posti Letto" },
    { icon: Wifi, text: "WiFi Gratuito" },
    { icon: Wind, text: "Aria Condizionata" },
    { icon: Car, text: "Parcheggio Privato" },
    { icon: PawPrint, text: "Animali Ammessi" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : 
              index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            {/* Reviews Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                5.0 • 100% Feedback Positivi
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              {slides[currentSlide].subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                data-testid="button-book-now"
              >
                Prenota Ora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8"
                data-testid="button-virtual-tour"
              >
                Tour Virtuale
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            data-testid={`slide-indicator-${index}`}
          />
        ))}
      </div>

      {/* Booking Card - Floating */}
      <Card className="absolute top-1/2 right-8 -translate-y-1/2 z-20 p-6 w-80 bg-white/95 backdrop-blur-sm hidden lg:block">
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Prenota il Tuo Soggiorno</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground">Check-in</label>
              <div className="mt-1 p-2 border border-border rounded-md bg-background">
                <input 
                  type="date" 
                  className="w-full bg-transparent text-sm"
                  data-testid="input-checkin"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Check-out</label>
              <div className="mt-1 p-2 border border-border rounded-md bg-background">
                <input 
                  type="date" 
                  className="w-full bg-transparent text-sm"
                  data-testid="input-checkout"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-foreground">Ospiti</label>
            <select className="w-full mt-1 p-2 border border-border rounded-md bg-background text-sm" data-testid="select-guests">
              <option value="2">2 ospiti</option>
              <option value="4">4 ospiti</option>
              <option value="6">6 ospiti</option>
              <option value="8">8 ospiti</option>
            </select>
          </div>
          
          <Button className="w-full" data-testid="button-check-availability">
            Verifica Disponibilità
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;