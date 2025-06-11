import React, { useState } from "react";
import { Link } from "react-scroll";

import { logo } from "../constant/image";
import { style } from "../constant/index";

const Navbar = () => {

  return (
    <div className="justify-start no-scrollbar bg-zinc-950 w-fit h-screen fixed top-0 left-0 z-50 flex flex-col items-center overflow-y-scroll pt-3.5">
      <div className="shrink-0 flex items-center justify-center my-4">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <div className="mt-3">
        <Link to="/about"  activeClass={`${style.navActive}`} spy={true} smooth={true} offset={-20} duration={500}   className={` ${style.nav}`}><h1 className="rotate-90">About</h1></Link>
        <Link to="/projects"  activeClass={style.navActive} spy={true} smooth={true} offset={-20} duration={500}   className={`${style.nav}`}><h1 className="rotate-90">Project</h1></Link>
        <Link to="/exp"  activeClass={style.navActive} spy={true} smooth={true} offset={-20} duration={500}   className={`${style.nav}`}><h1 className="rotate-90">Exp.</h1></Link>
        <Link to="/contact"  activeClass={style.navActive} spy={true} smooth={true} offset={-20} duration={500}   className={`${style.nav}`}><h1 className="rotate-90 ">Contact</h1></Link>
      
      </div>
    </div>
  );
};

export default Navbar;
