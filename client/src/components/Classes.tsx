import { Card } from "@/components/ui/card";
import { BookOpen, Beaker, Atom } from "lucide-react";
import { classesData } from "@shared/schema";

const iconMap: Record<string, any> = {
  "1": BookOpen,
  "2": Beaker,
  "3": Atom,
};

export function Classes() {
  return (
    <section
      id="classes"
      className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative"
      data-testid="section-classes"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            data-testid="text-classes-title"
          >
            CLASSES AVAILABLE
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tutoring for students across different grades and subjects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {classesData.map((classItem) => {
            const Icon = iconMap[classItem.id];
            return (
              <Card
                key={classItem.id}
                className="p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-elevate hover-lift"
                data-testid={`card-class-${classItem.id}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-lg md:text-xl font-semibold text-foreground"
                      data-testid={`text-class-title-${classItem.id}`}
                    >
                      {classItem.title}
                    </h3>
                    <div className="space-y-1 text-sm md:text-base text-muted-foreground">
                      <p data-testid={`text-class-boards-${classItem.id}`}>
                        {classItem.boards}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
