import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import boxCricket from "@/assets/box-cricket-arena.jpg";
import illuminatedPath from "@/assets/illuminated-pathway.jpg";
import lushGarden from "@/assets/lush-garden-walk.jpg";
import openTheatre from "@/assets/open-theatre.jpg";
import heritageTerrace from "@/assets/heritage-terrace.jpg";
import mainGate from "@/assets/resort-main-gate.jpg";
import resortAerial from "@/assets/resort-aerial.jpg";
import Section from "./Section";

const images = [
  { src: heritageTerrace, alt: "Heritage Terrace", title: "Stone Terrace Views" },
  { src: illuminatedPath, alt: "Illuminated Path", title: "Midnight Walkways" },
  { src: lushGarden, alt: "Lush Garden", title: "Botanical Sanctuary" },
  { src: openTheatre, alt: "Open Theatre", title: "Amphitheatre Under Stars" },
  { src: boxCricket, alt: "Box Cricket", title: "Sporting Excellence" },
];

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string, alt: string, title?: string } | null>(null);

  return (
    <Section id="gallery" className="bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Gallery</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
        <p className="font-display text-lg text-muted-foreground italic max-w-xl mx-auto">
          Experience the untamed beauty of our sanctuary through these unfiltered captures.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-muted"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 dark:brightness-[0.9] dark:contrast-[1.05] group-hover:brightness-100 dark:group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-body tracking-[0.3em] uppercase text-foreground font-semibold">
                      Full View
                    </span>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] lg:max-w-[90vw] p-0 overflow-hidden border-none bg-transparent shadow-none">
              <DialogTitle className="sr-only">{img.title || img.alt}</DialogTitle>
              <div className="relative w-full h-full flex flex-col items-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl dark:brightness-110"
                />
                {img.title && (
                  <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="font-display text-3xl md:text-4xl text-white drop-shadow-2xl font-light italic">{img.title}</p>
                    <div className="w-12 h-0.5 bg-primary mx-auto my-3" />
                    <p className="font-body text-xs tracking-[0.4em] uppercase text-white/60 mt-1 font-medium">{img.alt}</p>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;
