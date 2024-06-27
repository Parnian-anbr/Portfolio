
"use client";
import { useState } from "react";
import About from "./About";
import HomePage from "./HomePage";
import Projects from "./Projects";
import ContactMain from "./contact/ContactMain";

export default function Content() {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showProjects, setShowProjects] = useState<boolean>(false);

  const handleMenuClick = (menuType: string) => {
    setShowAbout(menuType === "about" ? !showAbout : false);
    setShowContact(menuType === "contact" ? !showContact : false);
    setShowProjects(menuType === "projects" ? !showProjects : false);
  };

  return (
    <div className="content flex flex-col md:flex-row">
      <div className="flex md:flex-row flex-col flex-1">
        <div className={"menu-container h-10v md:h-100v md:w-24"} onClick={() => handleMenuClick("about")}>
          <span className="menu-Items md:-rotate-90">About</span>
        </div>
        {showAbout && <About />}

        <div className={"menu-container h-10v md:h-100v md:w-24"} onClick={() => handleMenuClick("contact")}>
          <span className="menu-Items md:-rotate-90">Contact</span>
        </div>
        {showContact && <ContactMain />}

        <div className={"menu-container h-10v md:h-100v md:w-24"} onClick={() => handleMenuClick("projects")}>
          <span className="menu-Items md:-rotate-90">Projects</span>
        </div>
        {showProjects && <Projects />}
      </div>
      
      {!showAbout && !showContact && !showProjects && <HomePage />}
    </div>
  );
}