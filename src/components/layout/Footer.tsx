import bientePreview from "@/assets/biente-preview.jpg";
import aperPreview from "@/assets/aper-preview.jpg";
import astatePreview from "@/assets/astate-preview.jpg";
import logo from "@/assets/hatziorfanos-logo.png";
const Footer = () => {
  const brandLogos = [{
    name: "Biente",
    src: bientePreview,
    href: "#biente"
  }, {
    name: "Àper",
    src: aperPreview,
    href: "#aper"
  }, {
    name: "A.State",
    src: astatePreview,
    href: "#astate"
  }];
  return <footer className="bg-charcoal text-cream-light">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Brand & Tagline */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img alt="HATZIORFANOS GROUP" className="h-8 w-auto brightness-0 invert" src="https://astate-hg.com/wp-content/uploads/2025/04/Product_Image__1000_x_1000_p.png" />
            </a>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              "Shaping the future of interior solutions through strategic growth, innovation, and premium design excellence."
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-cream mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <span className="text-gold">E:</span>
                <a href="mailto:connect@hatziorfanosgroup.gr" className="hover:text-gold transition-colors duration-300">
                  connect@hatziorfanosgroup.gr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">HQ:</span>
                <span>Kifisias 186, Chalandri 152 31</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">P:</span>
                <a href="tel:+302106747300" className="hover:text-gold transition-colors duration-300">
                  210 674 7300
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Logos */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-cream mb-6">
              Our Brands
            </h4>
            <div className="flex items-center gap-6">
              {brandLogos.map(brand => <a key={brand.name} href={brand.href} className="group relative w-16 h-16 rounded-full overflow-hidden border border-cream/20 hover:border-gold transition-all duration-300" aria-label={brand.name}>
                  <img src={brand.src} alt={brand.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#terms" className="text-xs uppercase tracking-[0.15em] text-cream/50 hover:text-gold transition-colors duration-300">
            Terms of Use
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;