import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Heritage", href: "heritage" },
    { label: "Amenities", href: "amenities" },
    { label: "Gallery", href: "gallery" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <svg viewBox="0 0 90 60" className="h-10 w-16">
            <path
              d="M10 50 L10 10 L32.5 35 L55 10 L55 50"
              fill="none"
              stroke="hsl(43, 74%, 49%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-display text-2xl font-semibold tracking-[0.15em] text-primary">
            KOTI BANAL
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {isHome ? (
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-body tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={`/#${link.href}`}
                  className="text-sm font-body tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {isHome ? (
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-2 border border-primary text-primary text-xs font-body tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
                >
                  Contact Now
                </button>
              ) : (
                <Link
                  to="/#contact"
                  className="px-5 py-2 border border-primary text-primary text-xs font-body tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
                >
                  Contact Now
                </Link>
              )}
            </div>
          </li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {isHome ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-lg font-display tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={`/#${link.href}`}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-display tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <div className="flex flex-col items-center gap-6">
                  <ThemeToggle />
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3 bg-primary text-primary-foreground text-base font-body tracking-widest uppercase rounded"
                  >
                    Contact Now
                  </button>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
