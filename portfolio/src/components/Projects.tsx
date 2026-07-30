import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

export function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  const prevProject = () =>
    setProjectIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const nextProject = () =>
    setProjectIndex((i) => (i + 1) % PROJECTS.length);

  const project = PROJECTS[projectIndex];
  if (!project) return null;

  return (
    <section
      id="projects"
      className="h-screen flex items-center px-8 md:px-16 lg:px-24 relative"
    >
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
          Portfolio
        </p>
        <h2
          className="font-extrabold text-foreground mb-8 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Proyectos <span className="text-primary">destacados</span>
        </h2>

        <div className="border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2" aria-live="polite">
            <div className="relative h-48 lg:h-72 bg-muted overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-foreground/10" />
              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
                {project.type}
              </span>
            </div>

            <div className="p-7 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
                  {project.tag}
                </p>
                <h3
                  className="font-extrabold text-foreground mb-4 leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-border text-muted-foreground text-[11px] px-3 py-1 tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border flex items-center">
            <button
              onClick={prevProject}
              className="px-6 py-4 flex items-center gap-2 text-muted-foreground text-xs tracking-widest hover:text-primary hover:bg-card transition-all duration-200 border-r border-border"
            >
              <ChevronLeft size={14} />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <div className="flex-1 flex items-center justify-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setProjectIndex(i)}
                  aria-label={`Proyecto ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === projectIndex
                      ? "w-5 h-1.5 bg-primary"
                      : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <span className="text-muted-foreground text-xs tracking-widest px-4 hidden sm:block">
              {String(projectIndex + 1).padStart(2, "0")} /{" "}
              {String(PROJECTS.length).padStart(2, "0")}
            </span>

            <button
              onClick={nextProject}
              className="px-6 py-4 flex items-center gap-2 text-muted-foreground text-xs tracking-widest hover:text-primary hover:bg-card transition-all duration-200 border-l border-border"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
