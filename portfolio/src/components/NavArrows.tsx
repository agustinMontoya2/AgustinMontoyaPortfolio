import { ChevronUp, ChevronDown } from "lucide-react";
import { SECTION_IDS } from "../data/sections";

interface NavArrowsProps {
  currentSection: number;
  scrollTo: (index: number) => void;
}

export function NavArrows({ currentSection, scrollTo }: NavArrowsProps) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      <button
        onClick={() => scrollTo(currentSection - 1)}
        disabled={currentSection === 0}
        aria-label="Sección anterior"
        className="w-9 h-9 flex items-center justify-center border border-border bg-background/80 backdrop-blur-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-20 disabled:pointer-events-none"
      >
        <ChevronUp size={15} />
      </button>
      <button
        onClick={() => scrollTo(currentSection + 1)}
        disabled={currentSection === SECTION_IDS.length - 1}
        aria-label="Sección siguiente"
        className="w-9 h-9 flex items-center justify-center border border-border bg-background/80 backdrop-blur-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-200 disabled:opacity-20 disabled:pointer-events-none"
      >
        <ChevronDown size={15} />
      </button>
    </div>
  );
}
