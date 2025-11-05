import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
      data-testid="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
            data-testid="button-logo"
          >
            <GraduationCap className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-xl font-bold text-foreground">
              TutorPro
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("classes")}
              data-testid="link-classes"
            >
              Classes
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              data-testid="link-features"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("pricing")}
              data-testid="link-pricing"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact"
            >
              Contact
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://forms.gle/1tPqB9YspCoCvxsh6",
                  "_blank"
                )
              }
              className="ml-2"
              data-testid="button-register-header"
            >
              Register Now
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("classes")}
              className="justify-start"
              data-testid="link-classes-mobile"
            >
              Classes
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              className="justify-start"
              data-testid="link-features-mobile"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("pricing")}
              className="justify-start"
              data-testid="link-pricing-mobile"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="justify-start"
              data-testid="link-contact-mobile"
            >
              Contact
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://forms.gle/1tPqB9YspCoCvxsh6",
                  "_blank"
                )
              }
              className="w-full mt-2"
              data-testid="button-register-mobile"
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
