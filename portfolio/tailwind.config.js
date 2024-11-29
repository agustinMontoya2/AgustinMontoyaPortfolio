/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "subir-bajar": "subirBajar 2s ease-in-out infinite", // Define la animación 'subir-bajar'
        escribir:
          "escribir 3s steps(12, end) forwards, cursor 0.8s steps(8) infinite",
        "slide-right-to-left": "slideRightToLeft 1s ease-out forwards",
      },
      keyframes: {
        subirBajar: {
          "0%": { transform: "translateY(0)" }, // Posición inicial (sin movimiento)
          "50%": { transform: "translateY(-8px)" }, // Subir 20px
          "100%": { transform: "translateY(0)" }, // Regresar a la posición inicial
        },
        escribir: {
          "0%": { maxWidth: "0%" },
          "100%": { maxWidth: "100%" },
        },
        cursor: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#FFB800" }, // Color del cursor
        },
        slideRightToLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" }, // Empieza a la derecha y opaco
          "100%": { transform: "translateX(0)", opacity: "1" }, // Llega a la posición original y completamente visible
        },
      },
    },
  },
  plugins: [],
};
