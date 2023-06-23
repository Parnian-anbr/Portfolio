import { useState } from "react";


interface AboutProps {
  //   onClick: () => void;
}

export default function About({}: AboutProps) {
  return (
    <>
    <div className="flex items-center justify-center flex-1 w-1/3 ">
      <section className="pattern plane submenu-content">
        <p className="">
          Hello, I'm Parnian I'm a junior front-end developer based in Iran and currently work in
          Chargoon IT company. I'm passionate about building websites with nice User experience and designe
        </p>       
      </section>  
    </div>
    </>
  );
}
