import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const WORKER_ENDPOINT = "https://contact-form.digbadara-finance.workers.dev";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Gala",
  "Concert",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  eventDate: z.string().optional(),
  eventType: z.string().optional(),
  location: z.string().trim().max(200, "Location must be less than 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type FormErrors = {
  [key: string]: string;
};

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          eventDate: formData.eventDate || undefined,
          eventType: formData.eventType || undefined,
          location: formData.location?.trim() || undefined,
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

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
      setErrors({});
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit form. Please try again.";
      setSubmitError(errorMessage);
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Contact Form & Info */}
      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
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
            {submitError && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <p className="text-destructive text-sm">{submitError}</p>
              </div>
            )}
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
                    className={`form-input ${errors.name ? "border-destructive" : ""}`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
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
                    className={`form-input ${errors.email ? "border-destructive" : ""}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
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
                  className={`form-textarea ${errors.message ? "border-destructive" : ""}`}
                  placeholder="Share your vision for the event, any specific songs or genres you'd like, and any other details that would help us understand your needs..."
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
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
