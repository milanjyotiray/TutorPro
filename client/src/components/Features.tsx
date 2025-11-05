import { Card } from "@/components/ui/card";
import {
  User,
  TrendingUp,
  ClipboardList,
  Laptop,
  Award,
  Clock,
} from "lucide-react";
import { featuresData } from "@shared/schema";

const iconMap: Record<string, any> = {
  user: User,
  chart: TrendingUp,
  clipboard: ClipboardList,
  computer: Laptop,
  trophy: Award,
  clock: Clock,
};

export function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-features"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-features-title"
          >
            SPECIAL FEATURES
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes our tutoring services exceptional and designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card
                key={feature.id}
                className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col hover-elevate"
                data-testid={`card-feature-${feature.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-semibold text-foreground"
                    data-testid={`text-feature-title-${feature.id}`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3 flex-1">
                  {feature.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                      data-testid={`text-feature-item-${feature.id}-${idx}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
