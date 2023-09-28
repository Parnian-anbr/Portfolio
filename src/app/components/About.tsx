import { useState } from "react";


interface AboutProps {

}

export default function About({}: AboutProps) {
  return (
    <>
    <div className="flex items-center justify-center flex-1 md:w-1/3 ">
      <section className="pattern plane text-xl md:text-2xl ">
        <p className="m-[4rem] xl:m-[10rem] text-justify" >
          Hello, I'm Parnian I'm a junior front-end developer based in Iran and currently work in
          Chargoon IT company. I'm passionate about building websites with nice User experience and designe
        </p>       
      </section>  
    </div>
    </>
  );
}
