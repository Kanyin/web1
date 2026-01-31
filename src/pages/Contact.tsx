import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Gala",
  "Concert",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    eventType: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Received",
      description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      eventDate: "",
      eventType: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Book the Ensemble
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
              Let's Create Your
              <span className="block text-primary">Perfect Performance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Every event is unique. Tell us about yours, and we'll design 
              a musical experience tailored to your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form &  */}
      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact  */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif text-foreground mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-1">Email</p>
                  <a
                    href="mailto:info@eastgroove.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    info@eastgroove.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-1">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-1">Based In</p>
                  <p className="text-muted-foreground text-sm">
                    New York City
                    <br />
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours. 
                For urgent requests, please call us directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-foreground text-sm font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-foreground text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-foreground text-sm font-medium mb-2"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-foreground text-sm font-medium mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="form-input bg-muted cursor-pointer"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-foreground text-sm font-medium mb-2"
                >
                  Event Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Venue name or city"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground text-sm font-medium mb-2"
                >
                  Tell Us About Your Event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Share your vision for the event, any specific songs or genres you'd like, and any other details that would help us understand your needs..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  * Required fields
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-primary group inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Availability
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Consultation Note */}
      <section className="bg-card/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Every performance begins with a conversation. After receiving your 
            inquiry, we'll schedule a complimentary consultation to discuss your 
            vision, explore musical options, and craft a proposal tailored to 
            your event.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
