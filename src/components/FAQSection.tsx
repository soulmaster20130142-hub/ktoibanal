import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, Star } from "lucide-react";
import Section from "./Section";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = ["All", "Stay", "Activities", "Heritage", "Booking"];

const faqs: { q: string; a: string; category: string }[] = [
  {
    q: "What types of accommodation are available?",
    a: "We offer a range of accommodation from Deluxe Heritage Rooms and Premium Forest Suites to exclusive Family Villas. Every room is built in the traditional Koti Banal style — alternating stone and wood construction — and furnished with curated local artefacts for an authentic Himalayan ambiance.",
    category: "Stay",
  },
  {
    q: "Is the resort suitable for families with young children?",
    a: "Absolutely. Our Family Heritage Villas come with interconnected rooms, child-safe terraces, and access to a supervised play area. Our kitchen team is happy to prepare simple, child-friendly meals and allergen-aware menus on request.",
    category: "Stay",
  },
  {
    q: "Do the rooms have modern amenities like Wi-Fi and air conditioning?",
    a: "Yes. All rooms feature high-speed Wi-Fi, 24-hour room service, in-room heating essential for Himalayan winters, and modern en-suite bathrooms with hot water. We intentionally avoid air conditioning — the mountain climate keeps rooms naturally cool in summer.",
    category: "Stay",
  },
  {
    q: "Are pets allowed at the resort?",
    a: "We welcome well-behaved dogs in select garden-facing rooms. Please inform us when booking so we can prepare accordingly. A small pet supplement applies. Cats and other animals are not currently permitted on the property.",
    category: "Stay",
  },
  {
    q: "What activities are available during the stay?",
    a: "Guests enjoy guided nature trails through rhododendron forests, morning yoga on open terraces, evening bonfires with folk music, horse riding sessions, box cricket, Himalayan bird-watching walks, and expert-led sunrise photography from our private viewpoint.",
    category: "Activities",
  },
  {
    q: "Is the swimming pool open year-round?",
    a: "Our main pool is open from April through October. A heated plunge pool remains available through the winter months. Both overlook the valley — a truly cinematic experience at any time of year.",
    category: "Activities",
  },
  {
    q: "Can we arrange bespoke experiences or private events?",
    a: "Yes. We regularly curate private forest picnics, candlelit heritage dinners, private yoga retreats, and even intimate wedding ceremonies. Our concierge team will design an experience tailored entirely to you. Contact us at least 72 hours in advance.",
    category: "Activities",
  },
  {
    q: "What makes Koti Banal architecture special?",
    a: "Koti Banal is a 4,000-year-old Himalayan construction technique that alternates layers of stone and timber without mortar. This unique interlocking method creates buildings that are naturally earthquake-resilient, thermally efficient, and extraordinarily beautiful — each structure a living piece of history.",
    category: "Heritage",
  },
  {
    q: "How old is the main heritage structure?",
    a: "The central complex dates to the 18th century, with some foundational stone courses believed to be significantly older. The property has been meticulously restored over 12 years, preserving authentic joinery, wooden carvings, and stone facades while integrating discreet modern infrastructure.",
    category: "Heritage",
  },
  {
    q: "Can I participate in heritage walks or guided tours of the architecture?",
    a: "Yes. We offer a 90-minute 'Living Architecture' guided tour every morning at 8:30 AM. An expert historian walks you through the construction techniques, the symbolism of the carved woodwork, and the social history of the Garhwal communities who built and inhabited this place.",
    category: "Heritage",
  },
  {
    q: "How far is the resort from Har Ki Pauri, Haridwar?",
    a: "We are approximately 15 km from Har Ki Pauri — roughly a 25–35 minute drive along a scenic mountain road. We provide complimentary airport and railway station transfers from Haridwar and Rishikesh upon advance request.",
    category: "Booking",
  },
  {
    q: "What is the check-in and check-out time?",
    a: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged subject to availability — please contact us in advance and we will do our best to accommodate you.",
    category: "Booking",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations made 7 or more days before arrival receive a full refund. Cancellations within 3–7 days receive a 50% refund. Within 72 hours, the booking is non-refundable. For peak season (October–November, December 23–January 5), a 14-day cancellation window applies.",
    category: "Booking",
  },
];

// ─── FAQ Accordion Row ─────────────────────────────────────────────────────────

const FAQRow = ({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.055, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    className={`rounded-xl border transition-colors duration-300 overflow-hidden ${isOpen
      ? "border-primary/30 bg-primary/5"
      : "border-border bg-transparent hover:border-primary/15"
      }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
    >
      <span
        className={`font-display text-base md:text-lg leading-snug flex-1 transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground"
          }`}
      >
        {faq.q}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`shrink-0 mt-1 transition-colors duration-300 ${isOpen ? "text-primary" : "text-muted-foreground/50 group-hover:text-primary/50"
          }`}
      >
        <Plus size={16} strokeWidth={1.5} />
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6">
            <div className="h-px bg-primary/20 mb-4" />
            <p className="font-body text-sm text-muted-foreground leading-loose">
              {faq.a}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const FAQSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeFilter);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Category meta — count per category
  const countFor = (cat: string) =>
    cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length;

  return (
    <Section id="faq" className="bg-background" withReveal={false}>
      {/* ── Section header ── */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.3em] font-body mb-5"
        >
          <Star size={10} fill="currentColor" />
          Guest Inquiries
          <Star size={10} fill="currentColor" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight"
        >
          Frequently{" "}
          <span className="italic text-primary">Asked</span>
        </motion.h2>
      </div>

      {/* ── Split layout ── */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* ── LEFT: Sticky sidebar ── */}
        <aside className="md:sticky md:top-32 shrink-0 w-full md:w-48">
          <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Browse by topic
          </p>
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setOpenIndex(null);
                }}
                className={`relative flex items-center justify-between gap-3 shrink-0 md:shrink text-left px-4 py-2.5 rounded-lg font-body text-sm transition-all duration-250 ${activeFilter === cat
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
              >
                <span className="tracking-wide">{cat}</span>
                <span
                  className={`hidden md:inline-flex text-[10px] font-body tabular-nums px-1.5 py-0.5 rounded transition-colors duration-250 ${activeFilter === cat
                    ? "bg-primary/15 text-primary"
                    : "bg-secondary text-muted-foreground/60"
                    }`}
                >
                  {countFor(cat)}
                </span>
                {activeFilter === cat && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary rounded-full"
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Divider + CTA (desktop only) */}
          <div className="hidden md:block mt-10 pt-8 border-t border-border">
            <p className="font-display text-base text-foreground mb-1">
              Still have questions?
            </p>
            <p className="font-body text-xs text-muted-foreground mb-4 leading-relaxed">
              Our concierge team is available 24/7.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-primary hover:text-primary/70 transition-colors"
            >
              <MessageCircle size={12} />
              Contact us
            </a>
          </div>
        </aside>

        {/* ── RIGHT: FAQ list ── */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {filtered.map((faq, i) => (
                <FAQRow
                  key={faq.q}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-body text-xs uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <MessageCircle size={13} />
          Contact Concierge
        </a>
      </div>
    </Section>
  );
};

export default FAQSection;
