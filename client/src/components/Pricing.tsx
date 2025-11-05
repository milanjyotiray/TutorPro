import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User } from "lucide-react";
import { pricingData } from "@shared/schema";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-pricing"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-pricing-title"
          >
            TUITION FEE STRUCTURE
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options to suit your learning preferences
          </p>
        </div>

        <div className="space-y-8">
          {pricingData.map((tier) => (
            <Card
              key={tier.id}
              className="hover-elevate"
              data-testid={`card-pricing-${tier.id}`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground mb-2"
                      data-testid={`text-pricing-category-${tier.id}`}
                    >
                      {tier.category}
                    </h3>
                    {tier.isOnlineOnly && (
                      <Badge variant="secondary" data-testid={`badge-online-${tier.id}`}>
                        Online Only
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        One-to-One Tuition
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <p
                        className="text-2xl md:text-3xl font-bold text-primary"
                        data-testid={`text-price-one-to-one-${tier.id}`}
                      >
                        {tier.oneToOne.price}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {tier.oneToOne.details}
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 relative">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        Group Tuition
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <p
                        className="text-2xl md:text-3xl font-bold text-primary"
                        data-testid={`text-price-group-${tier.id}`}
                      >
                        {tier.group.price}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {tier.group.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
