import { TECH } from "../data/tech";

export function TechStack() {
  return (
    <section
      id="stack"
      className="h-screen flex items-center px-8 md:px-16 lg:px-24 relative"
    >
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
          Herramientas
        </p>
        <h2
          className="font-extrabold text-foreground mb-14 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Tecnologías para construir{" "}
          <span className="text-primary">tu producto</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(TECH).map(([category, items]) => (
            <div key={category}>
              <p className="text-primary text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                {category}
              </p>
              <div className="flex flex-col">
                {items.map((item, i) => (
                  <span
                    key={item}
                    className={`text-foreground text-sm py-2.5 ${
                      i < items.length - 1 ? "border-b border-border" : ""
                    } hover:text-primary transition-colors duration-200 cursor-default`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
