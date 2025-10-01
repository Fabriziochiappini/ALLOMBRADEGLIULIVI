import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GreenOasisSection from "@/components/GreenOasisSection";
import WelcomeSection from "@/components/WelcomeSection";
import RoomsSection from "@/components/RoomsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GreenOasisSection />
      <WelcomeSection />
      <RoomsSection />
      <ReviewsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;