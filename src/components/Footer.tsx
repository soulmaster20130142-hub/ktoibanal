import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Koti Banal Villa Resort</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Experience the perfect blend of heritage architecture and modern luxury in the heart of Uttarakhand's pristine mountains.
            </p>
            <a
              href="https://maps.app.goo.gl/oEz41UpGL46FSkyv8?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body text-primary hover:text-gold-light transition-colors"
            >
              📍 View on Google Maps
            </a>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Heritage", "Amenities", "Gallery", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/#${link.toLowerCase()}`}
                  className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  {link === "Contact" ? "Contact Now" : link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl text-foreground mb-4">Policies</h4>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/cancellation" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Cancellation Policy</Link>
              <Link to="/safety" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Safety Guidelines</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-5">
            {[
              { label: "Facebook", url: "https://facebook.com/kotibanal", Icon: Facebook },
              { label: "Instagram", url: "https://instagram.com/kotibanal", Icon: Instagram },
              { label: "Twitter", url: "https://twitter.com/kotibanal", Icon: Twitter },
              { label: "YouTube", url: "https://youtube.com/kotibanal", Icon: Youtube },
            ].map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:-translate-y-0.5 transform"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <p className="text-xs font-body text-muted-foreground">
            &copy; {year} Koti Banal Villa Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
