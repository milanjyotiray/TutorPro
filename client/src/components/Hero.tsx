import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Students_celebrating_academic_success_d0d6a5e9.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              <span data-testid="text-welcome">Welcome! Register now and be part of our tuition family</span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                data-testid="text-hero-title"
              >
                PRIVATE HOME/ONLINE
                <span className="block text-primary mt-2">
                  TUTORING SERVICES
                </span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                data-testid="text-hero-subtitle"
              >
                Need Help with Your Studies? One-on-one tutoring tailored to your
                needs! Register now and unlock your path to becoming a topper!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-base md:text-lg h-12 md:h-14 px-8"
                onClick={() =>
                  window.open(
                    "https://forms.gle/TVEfUBmqcdGKw7Jk6",
                    "_blank"
                  )
                }
                data-testid="button-register-hero"
              >
                Click Here for FREE Registration
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg h-12 md:h-14 px-8 bg-background/60 backdrop-blur-sm"
                onClick={() =>
                  window.open(
                    "https://wa.me/7002642149?text=I%20want%20to%20book%20demo",
                    "_blank"
                  )
                }
                data-testid="button-demo-hero"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Free Demo
              </Button>
            </div>

            <div className="bg-accent/30 backdrop-blur-sm border border-accent-border rounded-lg p-4 md:p-6 inline-block">
              <p className="text-base md:text-lg font-semibold text-foreground">
                FREE DEMO CLASSES FOR 3 DAYS
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy students celebrating academic success"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-primary/20 rounded-2xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
