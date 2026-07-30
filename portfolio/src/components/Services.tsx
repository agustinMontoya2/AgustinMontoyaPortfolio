const services = [
  {
    num: "01",
    title: "Páginas que generan confianza",
    body: "Diseño y desarrollo páginas web modernas, claras y rápidas para presentar tu negocio, convertir visitas en consultas y ofrecer una experiencia profesional en cualquier dispositivo.",
  },
  {
    num: "02",
    title: "Sistemas backend preparados para crecer",
    body: "Construyo APIs y servicios escalables con NestJS, TypeScript y PostgreSQL. Cuando el proyecto lo necesita, incorporo microservicios, RabbitMQ, Redis y observabilidad desde el comienzo.",
  },
  {
    num: "03",
    title: "Un aliado técnico para tu proyecto",
    body: "Te acompaño desde la idea hasta la entrega: definimos prioridades, elegimos la arquitectura adecuada y construimos una solución mantenible, testeada y lista para evolucionar.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="h-screen flex items-center px-8 md:px-16 lg:px-24 relative"
    >
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
          Lo que hago
        </p>
        <h2
          className="font-extrabold text-foreground mb-14 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Cómo puedo <span className="text-primary">ayudarte</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-300 cursor-default"
            >
              <p className="text-primary text-[10px] tracking-[0.3em] font-semibold mb-6">
                {s.num}
              </p>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-300 mb-5 leading-snug">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
