import { useRef, useEffect } from "react";
import AboutMe from "./views/AboutMe/AboutMe";
import Contact from "./views/Contact/Contact";
import Footer from "./views/Footer/Footer";
import Header from "./views/Header/Header";
import Proyects from "./views/Proyects/Proyects";
import Skills from "./views/Skills/Skills";

function App() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const currentSection = useRef(0);
  const isScrolling = useRef(false); // Bloqueo temporal

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling.current) return; // Evita el scroll si está bloqueado
      isScrolling.current = true; // Bloquea el scroll

      setTimeout(() => {
        isScrolling.current = false; // Desbloquea después del retraso
      }, 400); // Ajusta el tiempo para cambiar la sensibilidad (en ms)

      if (event.deltaY > 0) {
        // Scroll hacia abajo
        goToSection(currentSection.current + 1);
      } else {
        // Scroll hacia arriba
        goToSection(currentSection.current - 1);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const goToSection = (index: number) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
      currentSection.current = index;
    }
  };

  return (
    <div className="">
      <div ref={(el) => el && (sectionsRef.current[0] = el)}>
        <Header />
      </div>
      <div ref={(el) => el && (sectionsRef.current[1] = el)}>
        <AboutMe />
      </div>
      <div ref={(el) => el && (sectionsRef.current[2] = el)}>
        <Proyects />
      </div>
      <div ref={(el) => el && (sectionsRef.current[3] = el)}>
        <Skills />
      </div>
      <div ref={(el) => el && (sectionsRef.current[4] = el)}>
        <Contact />
      </div>
      <div ref={(el) => el && (sectionsRef.current[5] = el)}>
        <Footer />
      </div>
    </div>
  );
}

export default App;