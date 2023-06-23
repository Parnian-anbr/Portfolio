import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import About from "./components/about";
import Content from "./components/contents";
import MenuItems from "./components/menuItems";
import { MenuItemsList } from "./types";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between ">
      <Content />
      <form method="POST" name="contactform" className="contactForm">
        <input type="hidden" name="form-name" value="contactForm" />
        <input
          className="border-2 border-sky-950 m-2 text-black"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className="border-2 border-sky-950 m-2  text-black"
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <textarea
          className="border-2 border-sky-950 m-2  text-black"
          name="message"
          placeholder="Messaage"
        ></textarea>

        <button type="submit" className=" bg-slate-600">
          Submit
        </button>
      </form>
    </main>
  );
}
