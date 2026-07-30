import { SECTION_IDS } from "../data/sections";

interface NavDotsProps {
  currentSection: number;
  scrollTo: (index: number) => void;
}

export function NavDots({ currentSection, scrollTo }: NavDotsProps) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
      {SECTION_IDS.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Ir a sección ${i + 1}`}
          aria-current={i === currentSection ? "true" : undefined}
          className={`rounded-full transition-all duration-300 ${
            i === currentSection
              ? "w-1.5 h-4 bg-primary"
              : "w-1.5 h-1.5 bg-foreground/25 hover:bg-foreground/50"
          }`}
        />
      ))}
    </div>
  );
}
