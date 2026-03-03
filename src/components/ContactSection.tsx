import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Section from "./Section";

// Formsubmit.co — no account or domain needed.
// Using the unique encrypted email link for security.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/giheri";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        toast.success("Booking request sent! We'll be in touch shortly.");
      } else {
        toast.error("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      toast.error("Network error — please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Book Your Stay</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-display text-lg text-muted-foreground italic max-w-xl mx-auto">
          Ready to experience the magic of Koti Banal? Get in touch today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Form */}
        <div className="bg-background p-10 rounded-2xl shadow-xl border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formsubmit.co config fields */}
            <input type="hidden" name="_subject" value="New Booking Request — Koti Banal" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", type: "text", id: "name", name: "name", placeholder: "Enter your full name" },
                { label: "Email Address", type: "email", id: "email", name: "email", placeholder: "Enter your email" },
                { label: "Phone Number", type: "tel", id: "phone", name: "phone", placeholder: "Enter your phone number" },
              ].map((f) => (
                <div key={f.id} className={f.id === "name" ? "md:col-span-2" : ""}>
                  <label htmlFor={f.id} className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 font-semibold">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.name}
                    required
                    placeholder={f.placeholder}
                    className="w-full px-5 py-3.5 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkin" className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 font-semibold">Check-in</label>
                <input type="date" id="checkin" name="checkin" required className="w-full px-5 py-3.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" />
              </div>
              <div>
                <label htmlFor="checkout" className="block text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 font-semibold">Check-out</label>
                <input type="date" id="checkout" name="checkout" required className="w-full px-5 py-3.5 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || submitted}
              className="w-full py-5 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60 font-semibold transform hover:-translate-y-0.5 mt-4 flex items-center justify-center gap-2"
            >
              {submitting && <Loader2 size={16} className="animate-spin" />}
              {submitted ? "Request Sent ✓" : submitting ? "Sending…" : "Request Booking"}
            </button>
          </form>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
          {[
            { icon: Phone, title: "Phone", content: "+91 98765 43210" },
            { icon: Mail, title: "Email", content: "hello@kotibanal.com" },
            {
              icon: MapPin,
              title: "Location",
              content: "Haridwar, UK",
              link: "https://maps.app.goo.gl/oEz41UpGL46FSkyv8?g_st=iw"
            },
            { icon: Clock, title: "Availability", content: "24/7 Concierge" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-background/40 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/20 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={22} className="text-primary" />
              </div>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 font-semibold">{item.title}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener" className="font-display text-lg text-foreground hover:text-primary transition-colors">{item.content}</a>
              ) : (
                <p className="font-display text-lg text-foreground">{item.content}</p>
              )}
            </div>
          ))}

          <div className="md:col-span-2 mt-4 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
            <h4 className="font-display text-2xl text-foreground mb-3">Immersive Himalayan Luxury</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Experience the perfect blend of 300-year-old architectural heritage and world-class modern hospitality.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
