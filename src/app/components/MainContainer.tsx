"use client";
import { Ubuntu } from "next/font/google";
import { useState } from "react";
import About from "./about";
import Contact from "./contact/ContactMain";
import HomePage from "./homePage";
import Projects from "./projects";

const ubuntuFont = Ubuntu({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Content() {
  const [showAbout, setShowAbout] = useState<boolean>();
  const [showContact, setShowContact] = useState<boolean>();
  const [showProjects, setShowProjects] = useState<boolean>();

  return (
    <>
      <div className="content">
        <div className="flex flex-row flex-1">
          <div
            className={"menu-container"}
            onClick={() => {
              setShowAbout(!showAbout);
              console.log(showAbout, showContact);
            }}
          >
            <span className="menu-Items -rotate-90">About</span>
          </div>{" "}
          {showAbout && <About />}
          <div
            className={"menu-container"}
            onClick={() => {
              setShowContact(!showContact);
              console.log(showAbout, showContact);
            }}
          >
            <span className="menu-Items -rotate-90">Contact</span>
          </div>{" "}
          {showContact && <Contact />}
          <div
            className={"menu-container"}
            onClick={() => {
              setShowProjects(!showProjects);
            }}
          >
            <span className="menu-Items -rotate-90">Projects</span>
          </div>{" "}
          {showProjects && <Projects />}
        </div>
        {!(showAbout || showContact || showProjects) && <HomePage/>}
      </div>
    </>
  );
}
