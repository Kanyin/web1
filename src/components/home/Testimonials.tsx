import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Akiló Music transformed our wedding into something truly magical. The seamless blend of classical pieces during the ceremony and contemporary hits at the reception kept our guests captivated all night.",
    author: "Sarah & Michael",
    role: "Wedding, The Plaza Hotel",
  },
  {
    quote:
      "Their professionalism and musical versatility are unmatched. From the moment they arrived, every detail was handled with care. Our corporate gala has never felt so elegant.",
    author: "Jennifer Walsh",
    role: "Events Director, Goldman Sachs",
  },
  {
    quote:
      "Working with Akiló was a revelation. They understood our vision for a genre-crossing concert experience and delivered a performance that left our audience breathless.",
    author: "David Chen",
    role: "Artistic Director, Lincoln Center",
  },
  {
    quote:
      "The custom arrangements they created for our brand launch were absolutely stunning. They captured our company's spirit perfectly through music.",
    author: "Alexandra Moore",
    role: "CMO, Hermès Americas",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    const autoPlay = setInterval(next, 6000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Testimonials
        </p>
        <h2 className="section-title">What Our Clients Say</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="testimonial-card relative">
          <Quote className="w-12 h-12 text-primary/30 absolute top-8 left-8" />
          
          <div className="pt-8 px-4 md:px-8">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed text-center mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="text-center">
                <p className="text-foreground font-sans font-medium">
                  {testimonials[current].author}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
