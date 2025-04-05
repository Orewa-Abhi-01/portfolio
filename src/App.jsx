import React, { useEffect } from "react";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import SkillsnInterest from "./pages/SkillsnInterest";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ReactLenis from "lenis/react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    lenis.on("scroll", () => {
      // Handle scroll event
      console.log("Scroll event:");
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <ReactLenis root>
      <div>
        <HeroPage />
        <AboutPage />
        <SkillsnInterest />
        <ProjectsPage />
        <ContactPage />
      </div>
    </ReactLenis>
  );
};

export default App;
