import { Link } from "react-router-dom";
import logo from "@/assets/akilo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Akiló Music" className="h-10 mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              From classical to contemporary — Akiló Music delivers unforgettable 
              live performances tailored to your unique moment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-sans tracking-widest uppercase text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Clients", "Contact"].map((item) => {
                if (item === "Clients" && !showClients) return null; // hide Clients
                return (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
               );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans tracking-widest uppercase text-foreground mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@akilomusic.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  hello@akilomusic.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Akiló Music. All rights reserved.
          </p>
          {showSocials && (
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wider"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wider"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wider"
            >
              LinkedIn
            </a>
          </div>
        )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
