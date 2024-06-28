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
    <div className="text-white font-dmsan">
      <Navbar />
      <div className="ml-[55px]">
        <Topnav />
        <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24">
          {/* <Hero /> */}
          <About />
          <Projects />
          <Exp />
          <Contact />
        </div>
      </div>
    </div>
  );
};


export default App;

