import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/hatziorfanos-logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Journey",
    href: "#journey"
  }, {
    label: "Values",
    href: "#values"
  }, {
    label: "Brands",
    href: "#brands"
  }, {
    label: "News",
    href: "#news"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-10">
          <img alt="HATZIORFANOS GROUP" className="h-6 md:h-8 w-auto" src="https://astate-hg.com/wp-content/uploads/2025/04/Product_Image__1000_x_1000_p.png" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.label} href={link.href} className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.label}
            </a>)}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden relative z-10 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-background/98 backdrop-blur-lg transition-all duration-500 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl text-foreground hover:text-accent transition-colors duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {link.label}
              </a>)}
            <Button variant="hero" size="lg" onClick={() => setIsMobileMenuOpen(false)} asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;