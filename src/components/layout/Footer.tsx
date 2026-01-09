import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-semibold">
                Re<span className="text-primary">SKN</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Personalised skin plans, evidence-informed guidance, and curated treatments. Your skin health journey starts here.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/resknclinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Follow us on Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/quiz" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Skin Quiz
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
                <Link to="/booking" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Skin Concerns */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Skin Concerns</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/concerns/acne" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Acne
                </Link>
              </li>
              <li>
                <Link to="/concerns/pigmentation" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Pigmentation
                </Link>
              </li>
              <li>
                <Link to="/concerns/sensitivity" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Sensitivity & Redness
                </Link>
              </li>
              <li>
                <Link to="/concerns/ingrowns" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ingrown Hairs
                </Link>
              </li>
              <li>
                <Link to="/concerns/anti-ageing" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Anti-Ageing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">16 Dower Park, Windsor, SL4 4BQ, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:hello@resknclinic.co.uk" className="text-background/70 hover:text-primary transition-colors text-sm">Nori@resknclinic.co.uk</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+441234567890" className="text-background/70 hover:text-primary transition-colors text-sm">+44 (0) 7887 630 676</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} ReSKN Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;