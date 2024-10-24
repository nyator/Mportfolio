import React from "react";


import Linkicon from "../design/linkicon";
import Button from "../design/button";
import resume from "../assets/resume.pdf";
import Construction from "./Construction";


const Topnav = () => {
  return (
    <>
    {/* <Construction/> */}
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <Linkicon />
      <div>
        <Button title="My Resume" href={""} className='hover:text-zinc-950 border-white before:bg-white ml-2' disabled={true}/>
      </div>
    </header>
    </>
  );
};

export default Topnav;
