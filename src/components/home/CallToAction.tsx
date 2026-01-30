import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
          Let's Create Something
          <span className="block text-primary">Unforgettable</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Every event deserves music that moves. Start the conversation, 
          and let's design a performance as unique as your vision.
        </p>
        <Link
          to="/contact"
          className="cta-primary group inline-flex items-center gap-3"
        >
          Start a Conversation
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
