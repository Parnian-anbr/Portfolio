"use client";
import { Ubuntu } from "next/font/google";
import { useState } from "react";
import About from "./About";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Contact from "./contact/ContactMain";

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
      <div className="content flex flex-col md:flex-row">
        <div className="flex md:flex-row flex-col flex-1">
          <div
            className={"menu-container h-10v md:h-100v md:w-24"}
            onClick={() => {
              setShowAbout(!showAbout);
              setShowProjects(!!showProjects ? false : showProjects);
              setShowContact(!!showContact ? false : showContact);
              console.log(showAbout, showContact);
            }}
          >
            <span className="menu-Items md:-rotate-90 ">About</span>
          </div>{" "}
          {showAbout && <About />}
          <div
            className={"menu-container h-10v md:h-100v md:w-24"}
            onClick={() => {
              setShowContact(!showContact);
              setShowProjects(!!showProjects ? false : showProjects);
              setShowAbout(!!showAbout ? false : showAbout);
            }}
          >
            <span className="menu-Items md:-rotate-90 ">Contact</span>
          </div>{" "}
          {showContact && <Contact />}
          <div
            className={"menu-container h-10v md:h-100v md:w-24"}
            onClick={() => {
              setShowProjects(!showProjects);
              setShowAbout(!!showAbout ? false : showAbout);
              setShowContact(!!showContact ? false : showContact);
            }}
          >
            <span className="menu-Items md:-rotate-90">Projects</span>
          </div>{" "}
          {showProjects && <Projects />}
        </div>
        {!(showAbout || showContact || showProjects) && <HomePage />}
      </div>
    </>
  );
}
