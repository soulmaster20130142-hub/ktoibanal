import { useEffect, useState } from "react";
import { Cloud, Clock, MapPin } from "lucide-react";

export const StatusBadge = () => {
    const [time, setTime] = useState(new Date());
    const [nearBottom, setNearBottom] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const distFromBottom = document.body.scrollHeight - window.scrollY - window.innerHeight;
            setNearBottom(distFromBottom < 140);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <div
            className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col gap-2 transition-all duration-500"
            style={{ opacity: nearBottom ? 0 : 1, pointerEvents: nearBottom ? "none" : "auto", transform: nearBottom ? "translateY(12px)" : "translateY(0)" }}
        >
            <div className="flex items-center gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-full shadow-lg mb-2 animate-pulse">
                <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.2em] uppercase text-primary font-bold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span>First Phase Begins • March 2026</span>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-background/80 backdrop-blur-md border border-border px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2 text-[10px] font-body tracking-widest uppercase text-muted-foreground">
                    <MapPin size={12} className="text-primary" />
                    <span>Uttarakhand, India</span>
                </div>
                <div className="w-[1px] h-3 bg-border" />
                <div className="flex items-center gap-2 text-[10px] font-body tracking-widest uppercase text-foreground font-semibold">
                    <Clock size={12} className="text-primary" />
                    <span>{formattedTime}</span>
                </div>
                <div className="w-[1px] h-3 bg-border" />
                <div className="flex items-center gap-2 text-[10px] font-body tracking-widest uppercase text-primary font-bold">
                    <Cloud size={12} />
                    <span>Pristine 22°C</span>
                </div>
            </div>
        </div>
    );
};
