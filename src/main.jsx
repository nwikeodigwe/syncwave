import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import "./style.css";
import App from "./routes.jsx";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

gsap.to("body", {
  scrollTrigger: "body",
  scroll: 4,
  ease: "power2.inOut",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
