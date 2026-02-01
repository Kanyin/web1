import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-ensemble.jpg";

const musicians = [
  {
    name: "Elena Vasquez",
    instrument: "Violin, Artistic Director",
    bio: "Grammy-nominated violinist with 20 years of international touring experience.",
  },
  {
    name: "Marcus Chen",
    instrument: "Cello",
    bio: "Former principal cellist with the Berlin Philharmonic. Passionate about musical innovation.",
  },
  {
    name: "Sophia Williams",
    instrument: "Piano",
    bio: "Juilliard-trained pianist specializing in classical, jazz, and contemporary arrangements.",
  },
  {
    name: "David Okonkwo",
    instrument: "Viola",
    bio: "Versatile performer and arranger with a background in film scoring and chamber music.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              About East Coast Groove
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
              Where Music
              <span className="block text-primary">Meets Mastery</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={aboutImage}
          alt="East Coast Groove Ensemble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Our Story
            </h2>
            <div className="divider-elegant !mx-0 mb-8" />
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              East Coast Groove was born from a shared understanding: that the East Coast 
              has always been a crucible where musical traditions collide, evolve, and endure. 
              Formed by a collective of musicians all shaped by the Eastern seaboard, 
              the band draws from a landscape defined by historic jazz corridors, academic rigor, 
              underground scenes, and cities where music is not an accessory—but a language.
            </p>
            <p>
              Our name reflects both place and philosophy. East Coast Groove speaks to the 
              rhythmic intelligence forged in cities like New York, Philadelphia, Boston, 
              and beyond—where swing met scholarship, soul met structure, and innovation
              has always lived alongside tradition. The “groove” is not a style; 
              it’s an approach—rooted, adaptive, and deeply human.
            </p>
            <p>
              What sets us apart is our commitment to collaboration. We work closely 
              with every client to understand not just their musical preferences, but 
              the atmosphere they want to create. The result is a performance that 
              feels both timeless and perfectly tailored to the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">What Guides Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Musical Excellence",
                description:
                  "Every note matters. Our musicians bring decades of training and performance experience to every event.",
              },
              {
                title: "Adaptive Artistry",
                description:
                  "We move fluidly between genres, creating seamless transitions that surprise and delight.",
              },
              {
                title: "Client Partnership",
                description:
                  "Your vision drives our performance. We listen, collaborate, and deliver beyond expectations.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-2xl font-serif text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musicians Section */}
      {/*<section className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
            The Ensemble
          </p>
          <h2 className="section-title">Meet Our Musicians</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicians.map((musician) => (
            <div key={musician.name} className="text-center">
              <div className="aspect-square bg-muted rounded-sm mb-6 flex items-center justify-center">
                <span className="text-4xl font-serif text-muted-foreground/30">
                  {musician.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-serif text-foreground mb-1">
                {musician.name}
              </h3>
              <p className="text-primary text-sm mb-3">{musician.instrument}</p>
              <p className="text-muted-foreground text-sm">{musician.bio}</p>
            </div>
          ))}
        </div>
      </section>*/}

      {/* CTA */}
      <section className="bg-card/30">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring exceptional live music to your next event.
          </p>
          <Link to="/contact" className="cta-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
