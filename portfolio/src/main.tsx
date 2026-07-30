import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./styles/index.css";
import App from "./app/app";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <App />
  </ThemeProvider>,
);
