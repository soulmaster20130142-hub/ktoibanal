import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { target: 300, suffix: "+", label: "Years of Heritage" },
  { target: 15, suffix: "KM", label: "From Haridwar" },
  { target: 8, suffix: "+", label: "Premium Amenities" },
  { target: 100, suffix: "%", label: "Seismic Resilient" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-6xl font-light text-primary">{count}</span>
      <span className="font-display text-2xl text-primary ml-1">{suffix}</span>
    </div>
  );
};

const StatsRibbon = () => (
  <section className="py-20 bg-secondary/20 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <AnimatedNumber target={stat.target} suffix={stat.suffix} />
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground mt-4 font-semibold text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsRibbon;
