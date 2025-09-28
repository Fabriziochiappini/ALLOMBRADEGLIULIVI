import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/villa", label: "La Villa" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/come-raggiungerci", label: "Come Raggiungerci" },
    { href: "/contatti", label: "Contatti" },
  ];

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors hover:text-primary ${
            location === item.href ? "text-primary font-medium" : "text-foreground"
          } ${mobile ? "block py-2 text-lg" : ""}`}
          onClick={onClose}
          data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, '-')}`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-serif text-xl font-bold text-primary">
            All'Ombra degli Ulivi
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" data-testid="button-call">
            <Phone className="w-4 h-4 mr-2" />
            Chiama Ora
          </Button>
          <Button size="sm" data-testid="button-whatsapp">
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks mobile onClose={() => setIsOpen(false)} />
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="outline" className="w-full" data-testid="button-call-mobile">
                  <Phone className="w-4 h-4 mr-2" />
                  +39 377 393 8627
                </Button>
                <Button className="w-full" data-testid="button-whatsapp-mobile">
                  WhatsApp
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;