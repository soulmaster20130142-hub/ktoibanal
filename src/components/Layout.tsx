import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollEnhancements from "./ScrollEnhancements";

import { StatusBadge } from "./StatusBadge";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <ScrollEnhancements />
            <Navbar />
            <StatusBadge />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
