import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  withReveal?: boolean;
}

const Section = ({
  id,
  children,
  className,
  containerClassName,
  withReveal = true,
}: SectionProps) => {
  const content = (
    <div className={cn("container mx-auto px-6", containerClassName)}>
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 overflow-hidden", className)}
    >
      {withReveal ? <Reveal>{content}</Reveal> : content}
    </section>
  );
};

export default Section;
