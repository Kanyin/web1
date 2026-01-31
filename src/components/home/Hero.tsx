import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-performance.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Akiló Music performing live"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Live Music Ensemble
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-6 animate-fade-in-delay">
          Built for the Moment
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          From classical to jazz and pop — custom performances for memorable events
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link to="/contact" className="cta-primary">
            Book an Ensemble
          </Link>
          <Link to="/services" className="cta-outline">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
