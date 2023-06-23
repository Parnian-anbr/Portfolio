"use client";
import { useState } from "react";
import About from "./about";
import Contact from "./contact/contactMain";
import Projects from "./projects";

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
            }}
          >
            <span className="menu-Items -rotate-90">About</span>
          </div>{" "}
          {showAbout && <About />}
          <div className={"menu-container"}  onClick={() => {
              setShowContact(!showContact);
            }}>
            <span className="menu-Items -rotate-90">Contact</span>
          </div>{" "}
            {showContact && <Contact />}
          <div className={"menu-container"}  onClick={() => {
              setShowProjects(!showProjects);
            }}>
            <span className="menu-Items -rotate-90">Projects</span>
          </div>{" "}
            {showProjects && <Projects />}
        </div>
        {!(showAbout || showContact || showProjects) && (
          <section className="flex  items-center justify-center  flex-1">
            <p className=" w-1/2 text-justify ">
              All that is solid melts into air, all that is holy is profaned,
              and man is at last compelled to face with sober senses his real
              condition of life and his relations with his kind.
            </p>
            {/*  <div id='slideset1'>
    <div>
      <p>\</p>
    </div>
    <div>
      <p>__</p>
    </div>
    <div>
      <p>/</p>
    </div>
  </div> */}
          </section>
        )}
      </div>
    </>
  );
}
