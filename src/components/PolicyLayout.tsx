import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PolicyLayoutProps {
  title: string;
  date: string;
  children: ReactNode;
}

const PolicyLayout = ({ title, date, children }: PolicyLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="mb-10">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">{title}</h1>
            <p className="text-xs font-body tracking-widest uppercase text-muted-foreground">
              Last updated: {date}
            </p>
          </header>
          <div className="p-8 bg-secondary border border-border rounded">
            <div className="prose-custom space-y-6">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PolicyLayout;
