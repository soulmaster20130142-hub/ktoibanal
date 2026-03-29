import { MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import Section from "./Section";

const ContactSection = () => {
  return (
    <Section id="contact" className="bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Book Your Stay</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-display text-lg text-muted-foreground italic max-w-xl mx-auto">
          Ready to experience the magic of Koti Banal? Reach out to us directly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Main CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Email card */}
          <a
            href="mailto:kbvresort@gmail.com"
            className="group p-10 bg-background border border-border rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center gap-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
              <Mail size={26} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 font-semibold">
                Email Us
              </p>
              <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                kbvresort@gmail.com
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                We typically reply within a few hours
              </p>
            </div>
          </a>

          {/* Message card */}
          <a
            href="https://wa.me/918755598661"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 bg-background border border-border rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-center text-center gap-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
              <MessageSquare size={26} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-body tracking-[0.25em] uppercase text-muted-foreground mb-2 font-semibold">
                Message Us
              </p>
              <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                +91 87555 98661
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                Tap to WhatsApp
              </p>
            </div>
          </a>
        </div>

        {/* Supporting info row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-background/40 backdrop-blur-sm border border-border rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1 font-semibold">Location</p>
              <a
                href="https://maps.app.goo.gl/oEz41UpGL46FSkyv8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg text-foreground hover:text-primary transition-colors"
              >
                15 KM from Haridwar
              </a>
            </div>
          </div>

          <div className="p-8 bg-background/40 backdrop-blur-sm border border-border rounded-2xl flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-1 font-semibold">Availability</p>
              <p className="font-display text-lg text-foreground">24/7 Concierge</p>
            </div>
          </div>
        </div>

        {/* Tagline banner */}
        <div className="mt-8 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center">
          <h4 className="font-display text-2xl text-foreground mb-3">Immersive Himalayan Luxury</h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Experience the perfect blend of 300-year-old architectural heritage and world-class modern hospitality.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
