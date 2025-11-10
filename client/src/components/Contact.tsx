import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/Students_celebrating_academic_success_d0d6a5e9.png";

export function Contact() {
  const phoneNumber = "9678165375";
  const whatsappMessage =
    "Hi, I'm interested in joining your tuition classes to improve my marks. Please share the details with me.";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background relative"
      data-testid="section-contact"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-contact-title"
          >
            GET IN TOUCH
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your learning journey? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 md:p-8 hover-elevate hover-lift transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Phone Number
                    </p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      data-testid="link-whatsapp-contact"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 h-14 text-base"
                onClick={() =>
                  window.open(`tel:${phoneNumber}`)
                }
                data-testid="button-call"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-14 text-base"
                onClick={() =>
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`,
                    "_blank"
                  )
                }
                data-testid="button-whatsapp"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Students learning together"
                className="w-full h-auto object-cover"
                data-testid="img-contact"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full bg-primary/10 rounded-2xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
