import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";
import mainGate from "@/assets/resort-main-gate.jpg";
import lionStatue from "@/assets/heritage-lion-statue.jpg";
import sunsetPlaza from "@/assets/celestial-plaza-sunset.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import lushGarden from "@/assets/lush-garden-walk.jpg";
import Section from "./Section";

const slides = [
  {
    image: mainGate,
    title: "The Royal Entrance",
    desc: "A grand introduction to Koti Banal, where massive stone pillars and ornate wooden gates welcome you to a 300-year-old architectural marvel.",
  },
  {
    image: lionStatue,
    title: "Sacred Guardians",
    desc: "Intricately carved lion statues, a hallmark of Himalayan heritage, stand as silent observers of time, reflecting the region's rich artistic soul.",
  },
  {
    image: sunsetPlaza,
    title: "Celestial Terrace",
    desc: "As the sun dips below the Himalayan horizon, our stone-hewn plaza glows with ethereal light, offering the most breathtaking sunsets in the valley.",
  },
  {
    image: luxuryInterior,
    title: "Heritage Reimagined",
    desc: "Inside, the raw elegance of exposed wood and local stone meets modern comfort, creating a sanctuary that feels both ancient and contemporary.",
  },
  {
    image: lushGarden,
    title: "The Verdant Trail",
    desc: "A lush, green garden path that winds through ancient flora, offering a peaceful walking trail where nature and heritage meet in perfect harmony.",
  },
];

const HeritageSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6500); // 6.5 seconds as requested
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <Section id="heritage" className="bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Our Heritage</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-display text-lg text-muted-foreground italic max-w-xl mx-auto">
          Discover the ancient architectural legacy of Koti Banal.
        </p>
      </div>

      <div
        className="relative max-w-5xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-black/40 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Blurred Background Layer */}
              <img
                src={slides[current].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 brightness-50"
              />
              {/* Main Focused Image */}
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="relative w-full h-full object-contain dark:brightness-[0.9] dark:contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-black/90 via-transparent to-transparent pointer-events-none" />

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[10px] font-body tracking-[0.3em] text-primary uppercase mb-3 font-semibold">
                Chapter {String(current + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3 shadow-sm">{slides[current].title}</h3>
              <p className="font-body text-sm text-white/90 max-w-md leading-relaxed drop-shadow-md">{slides[current].desc}</p>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => {
                prev();
                setIsPaused(true);
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all pointer-events-auto backdrop-blur-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => {
                next();
                setIsPaused(true);
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all pointer-events-auto backdrop-blur-md"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setIsPaused(true);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${current === i ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HeritageSection;
