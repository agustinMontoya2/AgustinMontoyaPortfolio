import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Mensaje enviado correctamente");
      reset();
    } catch {
      toast.error("Error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 relative"
    >
      <div className="w-full max-w-6xl mx-auto flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-primary text-[10px] tracking-[0.35em] uppercase font-semibold">
              Contacto
            </p>
            <h2
              className="font-extrabold text-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              ¿Tenés un proyecto{" "}
              <span className="text-primary">en mente?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm lg:text-base">
              Contame qué querés construir. Te ayudo a convertir una idea o una
              necesidad de negocio en una solución web clara y escalable.
            </p>
            <p className="text-muted-foreground text-sm italic">
              La primera conversación es el comienzo.
            </p>

            <div className="flex gap-5 mt-1 flex-wrap">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/agustin-montoya-26083031a" },
                { label: "GitHub", href: "https://github.com/agustinMontoya2" },
                { label: "WhatsApp", href: "https://wa.me/5491138717699" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs font-semibold tracking-widest uppercase underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3"
              >
                ¿Cómo te llamás?
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "El nombre es obligatorio" })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3"
              >
                ¿Cuál es tu correo?
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email inválido",
                  },
                })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3"
              >
                ¿Qué necesitás construir?
              </label>
              <textarea
                id="message"
                rows={3}
                {...register("message", { required: "Contame sobre tu proyecto" })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
              />
              {errors.message && (
                <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="self-start inline-flex items-center gap-2.5 bg-primary text-white px-7 py-3 text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <ArrowRight size={14} />
              )}
              {isSubmitting ? "Enviando..." : "Quiero hablar de mi proyecto"}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto border-t border-border py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-muted-foreground text-xs">© 2026 Agustín Montoya</p>
        <p className="text-muted-foreground text-xs">agus7_montoya@hotmail.com</p>
      </div>
    </section>
  );
}
