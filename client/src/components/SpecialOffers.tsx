import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Percent, Users, Clock } from "lucide-react";

export function SpecialOffers() {
  const offers = [
    {
      id: "1",
      icon: Gift,
      title: "Free Demo Classes",
      description: "Get 3 days of FREE demo classes to experience our teaching quality",
      badge: "Limited Time",
      highlight: true,
    },
    {
      id: "2",
      icon: Percent,
      title: "Early Bird Discount",
      description: "Register in the first week and get 15% OFF on the first month's fee",
      badge: "New Students",
      highlight: false,
    },
    {
      id: "3",
      icon: Users,
      title: "Refer & Earn",
      description: "Refer a friend and both get ₹500 OFF on next month's tuition",
      badge: "Ongoing",
      highlight: false,
    },
    {
      id: "4",
      icon: Clock,
      title: "Flexible Payment",
      description: "Pay in installments with no extra charges - make learning affordable",
      badge: "All Students",
      highlight: false,
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden"
      data-testid="section-offers"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
            <Gift className="h-5 w-5" />
            <span>SPECIAL OFFERS</span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-offers-title"
          >
            Limited Time Offers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Take advantage of our exclusive offers and start your learning journey with amazing benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.id}
                className={`p-6 md:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover-elevate relative grouphover:border-2 hover:border-primary hover:bg-primary/5`}

                data-testid={`card-offer-${offer.id}`}
              >
                {offer.highlight && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <Badge variant="secondary" className="text-xs">
                    {offer.badge}
                  </Badge>
                  
                  <div className="space-y-2">
                    <h3
                      className="text-lg md:text-xl font-semibold text-foreground"
                      data-testid={`text-offer-title-${offer.id}`}
                    >
                      {offer.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-muted-foreground leading-relaxed"
                      data-testid={`text-offer-description-${offer.id}`}
                    >
                      {offer.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="text-base md:text-lg h-12 md:h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() =>
              window.open(
                "https://forms.gle/1tPqB9YspCoCvxsh6",
                "_blank"
              )
            }
            data-testid="button-claim-offers"
          >
            <Gift className="h-5 w-5 mr-2" />
            Claim Your Offers Now
          </Button>
        </div>
      </div>
    </section>
  );
}
