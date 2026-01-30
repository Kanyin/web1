import { Link } from "react-router-dom";
import { Heart, Building2, Music } from "lucide-react";
import weddingImage from "@/assets/wedding-performance.jpg";
import corporateImage from "@/assets/corporate-performance.jpg";
import concertImage from "@/assets/concert-performance.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "From ceremony to celebration, we create the perfect musical journey for your love story.",
    image: weddingImage,
  },
  {
    icon: Building2,
    title: "Corporate & Private Events",
    description:
      "Sophisticated entertainment for galas, brand launches, and exclusive gatherings.",
    image: corporateImage,
  },
  {
    icon: Music,
    title: "Concerts & Special Performances",
    description:
      "Captivating programs for concert halls, institutions, and curated cultural events.",
    image: concertImage,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="section-title">Tailored for Every Occasion</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 mb-6 overflow-hidden rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Icon */}
              <service.icon className="w-8 h-8 text-primary mb-4" />

              {/* Content */}
              <h3 className="text-2xl font-serif text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services" className="cta-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
