import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { importantNotesData } from "@shared/schema";

export function ImportantNotes() {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/10 relative"
      data-testid="section-important-notes"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            <AlertCircle className="h-4 w-4" />
            <span>IMPORTANT NOTE</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            data-testid="text-notes-title"
          >
            Key Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {importantNotesData.map((note) => (
            <Card
              key={note.id}
              className="p-6 md:p-8 hover-elevate hover-lift transition-all duration-300 transform hover:scale-105 relative"
              data-testid={`card-note-${note.id}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md" />
              <div className="pl-4">
                <h3
                  className="text-lg md:text-xl font-semibold text-foreground mb-3"
                  data-testid={`text-note-title-${note.id}`}
                >
                  {note.title}
                </h3>
                <p
                  className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  data-testid={`text-note-description-${note.id}`}
                >
                  {note.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
