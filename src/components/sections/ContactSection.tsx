import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gold-light mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Reach Out to Us
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Get in touch with our team to explore partnerships, collaborations,
              and inquiries. We would be delighted to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:info@hatziorfanos.gr"
                    className="text-primary-foreground hover:text-gold-light transition-colors"
                  >
                    info@hatziorfanos.gr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+302101234567"
                    className="text-primary-foreground hover:text-gold-light transition-colors"
                  >
                    +30 210 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-light" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                    Location
                  </p>
                  <span className="text-primary-foreground">
                    Athens, Greece
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-sm border border-primary-foreground/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-primary-foreground/60 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold-light focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-primary-foreground/60 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold-light focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-wider text-primary-foreground/60 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold-light focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-primary-foreground/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-primary-foreground/20 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold-light focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-charcoal tracking-wider uppercase text-xs font-semibold h-12"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
