import { GraduationCap, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                TutorPro
              </span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Empowering students to achieve their academic goals through
              personalized tutoring and expert guidance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("classes");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-classes"
                >
                  Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("features");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8011551863"
                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  <span>8011551863</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8011551863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} TutorPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
