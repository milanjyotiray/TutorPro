import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Classes } from "@/components/Classes";
import { SpecialOffers } from "@/components/SpecialOffers";
import { Features } from "@/components/Features";
import { ImportantNotes } from "@/components/ImportantNotes";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.015] pointer-events-none" />
      <Header />
      <main className="relative">
        <Hero />
        <Classes />
        <SpecialOffers />
        <Features />
        <ImportantNotes />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
