import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Mountain, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Reduced parallax range (15% instead of 30%) for smoother mobile performance
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "15%"]);
  // Spring dampens sudden scroll jumps — especially important on mobile
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax & Ken Burns */}
      <motion.div
        style={{ y, scale, willChange: "transform", translateZ: 0 }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroImage}
          alt="Koti Banal Villa Resort in the Himalayas at golden hour"
          className="w-full h-full object-cover dark:brightness-[0.85] dark:contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 dark:from-black/60 via-transparent to-background/90 dark:to-background" />
        <div className="absolute inset-0 bg-black/5 dark:bg-black/10 mix-blend-overlay" />
      </motion.div>

      {/* Content with Fade Out */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 backdrop-blur-sm rounded-full"
        >
          <span className="text-[10px] font-body tracking-[0.3em] uppercase text-primary font-bold">
            First Phase Begins March 2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm font-body tracking-[0.34em] uppercase text-foreground/60 mb-6 font-medium"
        >
          A Sanctuary of Timeless Architecture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground leading-[1.1] mb-4"
        >
          Koti Banal
          <br />
          <span className="text-primary font-medium italic">Villa Resort</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-xl md:text-3xl text-foreground/80 italic mb-10"
        >
          Architectural Resilience. Himalayan Soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs font-body tracking-widest uppercase text-foreground/60 mb-12"
        >
          <span className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Mountain size={14} className="text-primary" />
            <a
              href="https://maps.app.goo.gl/oEz41UpGL46FSkyv8?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              15KM from Haridwar
            </a>
          </span>
          <span className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <ShieldCheck size={14} className="text-primary" />
            Seismic Resistant Heritage
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("contact")}
            className="px-12 py-5 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-full hover:bg-gold-light shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500"
          >
            Reserve Your Stay
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("amenities")}
            className="px-12 py-5 border border-primary/50 text-foreground font-body text-sm tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 backdrop-blur-sm shadow-xl shadow-black/10"
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
