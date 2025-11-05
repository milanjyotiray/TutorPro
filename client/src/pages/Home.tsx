import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Classes } from "@/components/Classes";
import { Features } from "@/components/Features";
import { ImportantNotes } from "@/components/ImportantNotes";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Classes />
        <Features />
        <ImportantNotes />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
