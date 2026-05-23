import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
    <div className="min-h-screen text-white font-dmsan">
      <Navbar />
      <div className="ml-[55px] min-h-screen overflow-hidden">
        <Topnav />
        <main className="mx-auto w-full max-w-5xl px-4 pb-24 md:px-8 space-y-32">
          <Hero />
          <About />
          <Projects />
          <Exp />
          <Contact />
        </main>
      </div>
    </div>
    </>
  );
};

export default App;
