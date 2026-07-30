import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { SECTION_IDS } from "../data/sections";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { Contact } from "../components/Contact";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavDots } from "../components/NavDots";
import { NavArrows } from "../components/NavArrows";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) setCurrentSection(idx);
          }
        }
      },
      { threshold: 0.4 },
    );

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    for (const el of elements) observer.observe(el!);

    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    const id = SECTION_IDS[index];
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ThemeToggle />
      <NavDots currentSection={currentSection} scrollTo={scrollTo} />
      <NavArrows currentSection={currentSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Services />
      <Projects />
      <TechStack />
      <Contact />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
