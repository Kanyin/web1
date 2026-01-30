import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";

const clientLogos = [
  "The Plaza Hotel",
  "Lincoln Center",
  "Goldman Sachs",
  "Hermès",
  "Carnegie Hall",
  "Metropolitan Museum",
  "Sotheby's",
  "The Ritz-Carlton",
  "Christie's",
  "Morgan Stanley",
  "Four Seasons",
  "Brooklyn Academy of Music",
];

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
  {
    quote:
      "We've worked with many ensembles over the years, but Akiló stands apart. Their ability to read a room and adjust their performance accordingly is remarkable.",
    author: "Patricia Reynolds",
    role: "Events Manager, The Ritz-Carlton",
  },
  {
    quote:
      "From Beethoven to Beyoncé without missing a beat. Our guests are still talking about it months later.",
    author: "Robert & Emma Thompson",
    role: "Anniversary Celebration, Private Residence",
  },
];

const Clients = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Our Clients
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
              Trusted by the World's
              <span className="block text-primary">Finest Institutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We're honored to have performed for leading venues, brands, 
              and individuals who demand excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                <span className="text-sm font-sans tracking-wider text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="section-title">Words From Our Clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 left-6" />
              <div className="pt-12 px-2">
                <blockquote className="text-foreground font-serif text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="text-foreground font-sans font-medium text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card/30">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Join Our Distinguished Clientele
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the Akiló difference at your next event.
          </p>
          <Link to="/contact" className="cta-primary">
            Request a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
