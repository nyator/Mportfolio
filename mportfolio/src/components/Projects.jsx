import React, { useState } from "react";

import PopModel from "@/design/popModel";
import { projects } from "../constant/project"; 

import { SiGithub } from "react-icons/si";
import { RiShareCircleFill } from "react-icons/ri";
 
import { style } from "../constant/index"


export const About = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div id="/projects" className="flex flex-col">
      <div className="flex items-center gap-8 mb-12 flex-row">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl md:text-5xl font-black text-end">
          Projects<span className="text-blue-500">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
        {projects.map((item) => (
          <div>
            <div onClick={() => setShowModel(true)} className="w-full group aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"> 
            <img src={item.img} alt={item.title} className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded group-hover:w-[91%] group-hover:rotate-[2deg]" />
            </div>
            {showModel && <PopModel onClose={() => setShowModel(false)} />}
            <div className="flex items-center gap-8 mt-4 flex-row">
              <h1 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {item.title}<span className="text-blue-500">.</span>
              </h1>
              <div className="w-full h-[1px] bg-zinc-700" />
              <div className="flex flex-row gap-2">
              <a href="https://github.com/nyator/" target="blank"><SiGithub className={`${style.navicon} size-5`}/></a>
              <a href=""><RiShareCircleFill className={`${style.navicon} size-5`}/></a>
              </div>

            </div>

              <p className="text-sm space-x-3 text-blue-300 opacity-70">{item.tech}</p>
              <p className=" text-gray-300 text-[15px] ">{item.description}
              </p>
              <span className=" text-blue-300 text-[15px] block cursor-pointer" onClick={() => setShowModel(true)}> Learn more...</span>
          </div>
        ))}

        {/* <button onClick={() => setShowModel(true)} className="bg-blue-700 p-5">
          show PopModel
        </button>
        {showModel && <PopModel onClose={() => setShowModel(false)} />} */}
      </div>
    </div>
  );
};

export default About;
