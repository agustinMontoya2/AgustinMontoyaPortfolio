import { ArrowRight, Linkedin, Github, MessageCircle } from "lucide-react";
import foto from "../assets/myImage.webp";

interface HeroProps {
  scrollTo: (index: number) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="h-screen flex items-center px-8 md:px-16 lg:px-24 relative overflow-hidden"
    >
      <div className="absolute top-7 left-1/2 -translate-x-1/2 text-foreground/20" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-3 flex flex-col justify-center gap-7">
          <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-semibold">
            Disponible para nuevos proyectos
          </p>

          <div>
            <h1
              className="font-extrabold leading-[1.05] text-primary"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              ¿Tenés una idea?
            </h1>
            <p
              className="font-bold text-foreground mt-1"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.8rem)" }}
            >
              Soy Agustín Montoya
            </p>
          </div>

          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
            Creo páginas web y sistemas backend a medida para que tu negocio se vea
            profesional, funcione rápido y pueda crecer.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <button
              onClick={() => scrollTo(4)}
              className="inline-flex items-center gap-2.5 bg-primary text-white px-6 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              Hablemos de tu proyecto
              <ArrowRight size={14} />
            </button>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/agustin-montoya-26083031a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/agustinMontoya2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href="https://wa.me/5491138717699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
          <div className="relative w-full max-w-xs aspect-[3/4] border border-border overflow-hidden">
            <img
              src={foto}
              alt="Agustín Montoya"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-foreground/20" />
    </section>
  );
}
