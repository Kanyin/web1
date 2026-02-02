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
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  eventDate: z.string().optional(),
  eventType: z.string().optional(),
  location: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(2000),
  _gotcha: z.string().optional(),
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
    _gotcha: "",
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

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          eventDate: formData.eventDate || undefined,
          eventType: formData.eventType || undefined,
          location: formData.location?.trim() || undefined,
          message: formData.message.trim(),
          _gotcha: formData._gotcha,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
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
        _gotcha: "",
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Submission failed.";
      setSubmitError(message);
      toast({
        title: "Submission Failed",
        description: message,
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif">
            Let's Create Your <span className="block text-primary">Perfect Performance</span>
          </h1>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:info@eastgroove.com">info@eastgroove.com</a>
          </div>

          <div className="lg:col-span-2">
            {submitError && (
              <div className="mb-6 text-destructive">{submitError}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="form-input"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="form-input"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your vision for the event..."
                className="form-textarea"
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Availability"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
