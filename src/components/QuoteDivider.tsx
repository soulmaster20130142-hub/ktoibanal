import { motion } from "framer-motion";
import aerialImage from "@/assets/resort-aerial.jpg";

const QuoteDivider = () => (
  <section className="relative py-40 overflow-hidden group">
    <div className="absolute inset-0 z-0">
      <img
        src={aerialImage}
        alt=""
        className="w-full h-full object-cover grayscale opacity-10 dark:opacity-20 group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 dark:via-background/60 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="font-display text-7xl text-primary/30 leading-none">&ldquo;</span>
        <p className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground/90 italic leading-snug max-w-4xl mx-auto -mt-6">
          Architecture is not just about building.
          <br />
          <span className="text-foreground">It's about crafting stories that transcend time and nature.</span>
        </p>
        <div className="w-12 h-0.5 bg-primary/30 mx-auto mt-10 mb-6" />
        <cite className="block font-body text-[10px] tracking-[0.4em] uppercase text-primary font-semibold not-italic">
          The Spirit of Koti Banal
        </cite>
      </motion.blockquote>
    </div>
  </section>
);

export default QuoteDivider;
