import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import MainContainer from "./components/MainContainer";
import About from "./components/About";
import MenuItems from "./components/MenuItems";
import { MenuItemsList } from "./types";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between ">
      <MainContainer />
    </main>
  );
}
