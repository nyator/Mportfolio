import React from "react";


import Linkicon from "../design/linkicon";
import Button from "../design/button";
import resume from "../assets/resume.pdf";
import Construction from "./Construction";


const Topnav = () => {
    return (
        <>
            {/* <Construction/> */}
            <header className="sticky top-0 z-20 h-[72px] bg-zinc-900/50 backdrop-blur-md">
                <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 md:px-8">
                    <Linkicon/>
                    <div>
                        <Button title="My Resume" href={resume}
                                className='hover:text-zinc-950 border-white before:bg-white ml-2' disabled={true}/>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Topnav;
