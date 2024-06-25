import React from "react";



import { logo } from "../constant/image";
import { style } from "../constant/index";

const Navbar = () => {
  return (
    <div className="bg-black justify-start no-scrollbar bg-zinc-950 w-fit h-screen sticky top-0 left-0 z-20 flex flex-col items-center overflow-y-scroll pt-10">
      <div className="shrink-0 size-10 flex items-center justify-center my-4">
        <img src={logo} alt="Logo" />
        </div>

        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">About</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">Projects</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90">Exp.</h1></a>
        <a to="/" className={`${style.nav}`}><h1 className="rotate-90 ">Contact</h1></a>
      
      </div>
  );
};

export default Navbar;
