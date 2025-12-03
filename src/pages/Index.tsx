import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import ValuesSection from "@/components/sections/ValuesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section id="about" className="sr-only">
        <h2>About HATZIORFANOS Group</h2>
      </section>
      <JourneySection />
      <ValuesSection />
      <BrandsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
