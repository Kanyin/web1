import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Heart, Building2, Music, Check } from "lucide-react";
import weddingImage from "@/assets/wedding-performance.jpg";
import corporateImage from "@/assets/corporate-performance.jpg";
import concertImage from "@/assets/concert-performance.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
              Music Designed Around
              <span className="block text-primary">Your Moment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              From intimate ceremonies to grand galas, we craft bespoke musical 
              experiences that elevate every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Weddings Section */}
      <section className="bg-card/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                  Weddings
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Your Love Story, Set to Music
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe the music at your wedding should be as unique as your 
                relationship. From the processional to the last dance, we create 
                a seamless musical journey that captures the emotion of every moment.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Ceremony music with custom arrangements of your favorite songs",
                  "Cocktail hour ambiance — from classical elegance to jazz sophistication",
                  "Reception entertainment spanning classical, pop, and everything between",
                  "First dance arrangements tailored to your song selection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={weddingImage}
                  alt="Wedding performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={corporateImage}
                alt="Corporate event performance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                Corporate & Private Events
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Elevate Your Event Experience
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're hosting an intimate dinner party or a 
              thousand-person gala, live music sets the tone for 
              unforgettable experiences. We bring sophistication and 
              energy in equal measure.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Corporate galas and award ceremonies",
                "Brand launches and product unveilings",
                "Private parties and milestone celebrations",
                "Flexible ensemble sizes from duo to full orchestra",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section className="bg-card/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Music className="w-6 h-6 text-primary" />
                <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                  Concerts & Special Performances
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Artistry on the Concert Stage
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond private events, Akiló Music presents innovative concert 
                programming that challenges convention while honoring tradition. 
                We partner with venues, festivals, and cultural institutions to 
                create memorable musical experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Ticketed concert series and subscription performances",
                  "Residencies with performing arts centers and museums",
                  "Themed programs blending classical repertoire with contemporary works",
                  "Collaborative projects with guest artists and composers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={concertImage}
                  alt="Concert performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Arrangements */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Custom Arrangements & Genre Blending
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            One of our signature offerings is the ability to create custom 
            arrangements of any song for any ensemble configuration. Want 
            your favorite pop song performed by a string quartet? A cinematic 
            film score for your cocktail hour? Classical pieces reimagined 
            with a jazz sensibility? We make it happen.
          </p>
          <Link to="/contact" className="cta-primary">
            Customize Your Performance
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
