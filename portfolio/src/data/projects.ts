export interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  type: string;
  image: string;
  imageAlt: string;
}

export const PROJECTS: Project[] = [
  {
    tag: "PROYECTO PERSONAL · PRODUCTO DIGITAL",
    title: "Mr. Patan 2.0",
    description:
      "Aplicación frontend con Next.js para gestionar turnos, mascotas y un catálogo de productos. Diseñé una capa de persistencia con LocalStorage que abstrae el almacenamiento y permite ejecutar la aplicación completamente en el cliente, sin depender de infraestructura externa.",
    tech: ["Next.js", "TypeScript", "LocalStorage API"],
    type: "Frontend",
    image:
      "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1745084713/Captura_de_pantalla_2025-04-19_144450_llgrmn.png",
    imageAlt: "Imagen de demostración de la aplicación Mr. Patan 2.0",
  },
  {
    tag: "PROYECTO PERSONAL · PRODUCTO DIGITAL",
    title: "Fellini Bar",
    description:
      "Aplicación fullstack con Next.js, NestJS y PostgreSQL para gestionar reservas, pedidos y un catálogo de productos. Diseñé una arquitectura cliente-servidor que centraliza la administración del negocio y facilita la gestión tanto para clientes como para administradores.",
    tech: ["Next.js", "NestJs", "TypeScript", "PostgreSQL"],
    type: "Fullstack",
    image:
      "https://res.cloudinary.com/dxpxzcj2i/image/upload/fl_preserve_transparency/v1732834601/felliniPortada_yg9rwz.jpg?_s=public-apps",
    imageAlt: "Imagen de demostración de la aplicación Fellini Bar",
  },
  {
  tag: "PROYECTO CLIENTE · LANDING PAGE",
  title: "Team Rayo",
  description:
    "Landing page para un gimnasio de boxeo desarrollada con React y TypeScript. Arquitectura basada en componentes desacoplados por sección, con scroll suave entre anclas, integración de Google Maps embed y redirección directa a WhatsApp con mensaje prearmado vía deep link.",
  tech: ["React", "TypeScript", "Tailwind CSS"],
  type: "Frontend",
  image:
    "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1785486242/Captura_de_pantalla_2026-07-31_052148_wvxm6v.png",
  imageAlt: "Landing page del gimnasio de boxeo Team Rayo",
},
  {
    tag: "EXPERIENCIA PROFESIONAL · BACKEND",
    title: "Arquitectura Distribuida",
    description:
      "Trabajo en producción sobre una arquitectura de 15+ microservicios con NestJS, RabbitMQ y Redis. Implementación de DDD, CQRS y separación de responsabilidades, con trazas OpenTelemetry y testing E2E.",
    tech: ["NestJS", "PostgreSQL", "RabbitMQ", "Redis", "OpenTelemetry"],
    type: "Backend",
    image:
      "https://res.cloudinary.com/dxpxzcj2i/image/upload/v1785368528/E2E-muestra_ycr9ep.webp",
    imageAlt: "Imagen de demostración de la arquitectura distribuida",
  },
];
