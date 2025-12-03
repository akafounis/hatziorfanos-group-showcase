import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bienteImage from "@/assets/biente-preview.jpg";
import aperImage from "@/assets/aper-preview.jpg";
import astateImage from "@/assets/astate-preview.jpg";
const brands = [{
  name: "Biente",
  tagline: "Redefining Modern Living",
  description: "From Italian and German kitchen furniture, bathrooms, wardrobes, and tiles, Biente transforms essential spaces into areas of inspiration and confidence. These are the places where new ideas take shape, where refined interior design creates a protective and harmonious living environment.",
  keywords: ["Timelessness", "Revolutionary Design", "Reliability", "Functionality"],
  image: bienteImage,
  link: "#biente",
  featured: true
}, {
  name: "Àper",
  tagline: "Architectural Solutions",
  description: "Inspiring architectural solutions for modern living. Àper brings innovative design concepts that blend form and function seamlessly.",
  image: aperImage,
  link: "#aper",
  featured: false
}, {
  name: "A.State",
  tagline: "Luxury Real Estate",
  description: "Luxury real estate redefined, offering exclusive properties in prime locations across Greece.",
  image: astateImage,
  link: "#astate",
  featured: false
}];
const BrandsSection = () => {
  return <section id="brands" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="label-uppercase mb-4 block font-mono">Our Portfolio</span>
          <h2 className="heading-section text-foreground mb-4 font-mono">
            Meet Our Brands
          </h2>
          <p className="text-body max-w-2xl mx-auto font-mono font-light text-sm px-[2px] text-center">
            Explore our dynamic portfolio of brands, each dedicated to quality
            and innovation.
          </p>
          <div className="line-separator mx-auto mt-6" />
        </div>

        {/* Featured Brand - Biente */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-background rounded-sm overflow-hidden">
            <div className="relative h-80 lg:h-full min-h-[400px]">
              <img src={brands[0].image} alt={`${brands[0].name} - ${brands[0].tagline}`} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <span className="label-uppercase mb-2 block font-mono">Featured Brand</span>
              <h3 className="text-3xl md:text-4xl text-foreground mb-2 font-mono">
                {brands[0].name}
              </h3>
              <p className="text-accent font-medium mb-4 font-mono">
                {brands[0].tagline}
              </p>
              {brands[0].keywords && <div className="flex flex-wrap gap-2 mb-6">
                  {brands[0].keywords.map(keyword => <span key={keyword} className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {keyword}
                    </span>)}
                </div>}
              <p className="text-muted-foreground leading-relaxed mb-8 font-mono">
                {brands[0].description}
              </p>
              <Button variant="hero" asChild>
                <a href={brands[0].link}>
                  Discover Biente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Other Brands */}
        <div className="grid md:grid-cols-2 gap-8">
          {brands.slice(1).map(brand => <div key={brand.name} className="group bg-background rounded-sm overflow-hidden hover-lift">
              <div className="relative h-56 overflow-hidden">
                <img src={brand.image} alt={`${brand.name} - ${brand.tagline}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-foreground mb-1 font-mono">
                  {brand.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-3 font-mono">
                  {brand.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-mono">
                  {brand.description}
                </p>
                <Button variant="minimal" asChild>
                  <a href={brand.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BrandsSection;