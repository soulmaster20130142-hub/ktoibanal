import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollEnhancements = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.0005,
    mass: 0.3,
  });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] h-1 bg-primary origin-left shadow-[0_0_15px_hsl(var(--gold)/0.6)]"
        style={{
          scaleX,
          background: "linear-gradient(to right, hsl(var(--gold-dark)), hsl(var(--gold)), hsl(var(--gold-light)))"
        }}
      />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1, translateY: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[90] w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/40 transition-colors border border-white/10 backdrop-blur-sm group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollEnhancements;
