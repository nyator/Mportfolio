import React from "react";



import { logo } from "../constant/image";
import { style } from "../constant/index";

const Navbar = () => {
  return (
    <div className="justify-start -z-50 no-scrollbar bg-zinc-950 w-fit h-screen fixed top-0 left-0 flex flex-col items-center overflow-y-scroll pt-3.5">
      <div className="shrink-0 flex items-center justify-center my-4">
        <img src={logo} alt="Logo" />
      </div>
      <div className="mt-3">

        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">About</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">Projects</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">Exp.</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90 ">Contact</h1></a>
      
      </div>
    </div>
  );
};

export default Navbar;
