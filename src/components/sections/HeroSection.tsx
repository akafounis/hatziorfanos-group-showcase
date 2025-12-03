import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img alt="Luxury kitchen interior showcasing HATZIORFANOS Group premium design" className="w-full h-full object-cover" src="/lovable-uploads/e066b90c-84e2-462a-8ecc-31f88de73ac7.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full text-black">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="label-uppercase mb-6 block">Since 1989</span>
          <h1 className="heading-display text-foreground mb-6">
            Welcome to
            <br />
            <span className="font-normal text-primary bg-primary">HATZIORFANOS</span> Group
          </h1>
          <p className="text-body max-w-xl mb-8">
            For over three decades, HATZIORFANOS Group has been a driving force
            in the Greek market, evolving from a family-owned business into a
            dynamic group of companies known for its excellence in design and
            innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#journey">
                Legacy & Future
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#brands">Our Brands</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>;
};
export default HeroSection;