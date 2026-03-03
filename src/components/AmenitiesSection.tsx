import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  CircleDot,
  Crown,
  Leaf,
  TreePine,
  Mountain,
  Flame,
  Utensils,
  Wifi,
  Car,
  Camera,
  Sunset,
  ArrowRight,
  Star,
} from "lucide-react";
import Section from "./Section";

// ─── Data ───────────────────────────────────────────────────────────────────

const categories = ["All", "Outdoor", "Wellness", "Dining", "Facilities"];

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Refreshing infinity pools perched against the Himalayan skyline, open all year round with heated options in winter.",
    category: "Outdoor",
    tag: "Signature",
    gradient: "from-blue-900/80 via-blue-800/60 to-cyan-900/40",
    accent: "#38bdf8",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    size: "large",
  },
  {
    icon: Crown,
    title: "Horse Riding",
    desc: "Guided equestrian sessions through forest trails led by experienced handlers.",
    category: "Outdoor",
    tag: "Adventure",
    gradient: "from-amber-900/80 via-amber-800/60 to-orange-900/40",
    accent: "#f59e0b",
    img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    size: "small",
  },
  {
    icon: Leaf,
    title: "Ashram & Meditation",
    desc: "Sacred spaces for silent retreats, yoga, and spiritual renewal surrounded by ancient deodar forest.",
    category: "Wellness",
    tag: "Spiritual",
    gradient: "from-emerald-900/80 via-green-800/60 to-teal-900/40",
    accent: "#34d399",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    size: "small",
  },
  {
    icon: Utensils,
    title: "Heritage Dining",
    desc: "Farm-to-table cuisine crafted with local Garhwali recipes, served under open skies or in our stone-walled hall.",
    category: "Dining",
    tag: "Culinary",
    gradient: "from-rose-900/80 via-red-800/60 to-orange-900/40",
    accent: "#fb7185",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    size: "large",
  },
  {
    icon: TreePine,
    title: "Botanical Garden",
    desc: "Manicured terraced gardens with over 200 endemic Himalayan species and morning dew walking paths.",
    category: "Outdoor",
    tag: "Nature",
    gradient: "from-lime-900/80 via-green-800/60 to-emerald-900/40",
    accent: "#84cc16",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    size: "small",
  },
  {
    icon: Mountain,
    title: "Nature Trails",
    desc: "Guided treks through pristine rhododendron forests with panoramic ridgeline views.",
    category: "Outdoor",
    tag: "Trek",
    gradient: "from-slate-900/80 via-slate-800/60 to-stone-900/40",
    accent: "#94a3b8",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    size: "small",
  },
  {
    icon: Flame,
    title: "Bonfire Evenings",
    desc: "Curated evening bonfires with folk music, stargazing, and artisanal local spirits.",
    category: "Outdoor",
    tag: "Evening",
    gradient: "from-orange-900/80 via-amber-800/60 to-red-900/40",
    accent: "#fb923c",
    img: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=800&q=80",
    size: "small",
  },
  {
    icon: Camera,
    title: "Sunrise Photography",
    desc: "Expert-guided golden-hour sessions from our private viewpoint, offering unobstructed Himalayan panoramas.",
    category: "Facilities",
    tag: "Exclusive",
    gradient: "from-yellow-900/80 via-amber-800/60 to-orange-900/40",
    accent: "#fbbf24",
    img: "https://images.unsplash.com/photo-1706301879977-9e855bd11caf?w=800&q=80",
    size: "large",
  },
  {
    icon: CircleDot,
    title: "Box Cricket",
    desc: "Floodlit box cricket arena set against forest backdrop — for competitive guests of all ages.",
    category: "Facilities",
    tag: "Sports",
    gradient: "from-violet-900/80 via-purple-800/60 to-indigo-900/40",
    accent: "#a78bfa",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    size: "small",
  },
];

const stats = [
  { value: "9+", label: "Amenities" },
  { value: "12", label: "Acres" },
  { value: "24/7", label: "Service" },
  { value: "200+", label: "Guest Reviews" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const StatCounter = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center px-6"
  >
    <div className="font-display text-4xl md:text-5xl text-primary font-light tracking-tight">
      {value}
    </div>
    <div className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
      {label}
    </div>
  </motion.div>
);

const AmenityCard = ({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const isLarge = amenity.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${isLarge ? "md:col-span-2 min-h-[380px]" : "min-h-[320px]"
        }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${amenity.img})` }}
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${amenity.gradient} transition-opacity duration-500`}
        style={{ opacity: hovered ? 0.95 : 0.75 }}
      />

      {/* Corner Tag */}
      <div
        className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-body font-semibold uppercase tracking-widest"
        style={{
          background: `${amenity.accent}22`,
          border: `1px solid ${amenity.accent}55`,
          color: amenity.accent,
          backdropFilter: "blur(8px)",
        }}
      >
        {amenity.tag}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        {/* Icon */}
        <motion.div
          className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: `${amenity.accent}20`,
            border: `1px solid ${amenity.accent}50`,
          }}
          animate={{ rotate: hovered ? 8 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <amenity.icon size={22} style={{ color: amenity.accent }} />
        </motion.div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-white font-light leading-tight mb-2">
          {amenity.title}
        </h3>

        {/* Description — reveals on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-body text-sm text-white/75 leading-relaxed mb-4 max-w-sm">
                {amenity.desc}
              </p>
              <div
                className="inline-flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-widest"
                style={{ color: amenity.accent }}
              >
                Discover <ArrowRight size={13} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Static short cue when NOT hovered */}
        {!hovered && (
          <p className="font-body text-xs text-white/50 uppercase tracking-widest">
            Hover to explore
          </p>
        )}
      </div>

      {/* Shimmer border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 0 1.5px ${amenity.accent}55, 0 25px 60px -10px ${amenity.accent}30`
            : "0 0 0 1px rgba(255,255,255,0.07)",
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

// ─── Main Section ────────────────────────────────────────────────────────────

const AmenitiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? amenities
      : amenities.filter((a) => a.category === activeFilter);

  return (
    <Section id="amenities" className="bg-background" withReveal={false}>
      {/* ── Header ── */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.3em] font-body mb-5"
        >
          <Star size={11} fill="currentColor" />
          World-Class Facilities
          <Star size={11} fill="currentColor" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground font-light leading-none mb-5"
        >
          Premium{" "}
          <span className="italic text-primary">Amenities</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-48 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-display text-lg text-muted-foreground italic max-w-xl mx-auto"
        >
          Every detail curated for those who expect nothing less than extraordinary.
        </motion.p>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 mb-14 py-6 border-y border-border/50"
      >
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </motion.div>

      {/* ── Filter Tabs ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full font-body text-xs uppercase tracking-widest transition-all duration-300 ${activeFilter === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* ── Cards Grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        >
          {filtered.map((amenity, i) => (
            <AmenityCard key={amenity.title} amenity={amenity} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="font-display text-xl italic text-muted-foreground mb-6">
          Ready to experience it all?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground font-body text-xs uppercase tracking-[0.2em] rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
        >
          Book Your Stay <ArrowRight size={14} />
        </a>
      </motion.div>
    </Section>
  );
};

export default AmenitiesSection;
