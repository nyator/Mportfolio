import React, { useState } from "react";

import PopModel from "@/design/popModel";
import { projects } from "../constant/project";

import { SiGithub } from "react-icons/si";
import { RiShareCircleFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { style } from "../constant/index";

import { Dude22 } from "@/assets/illustration";

// import { ModalComponent } from "@/design/model";

export const About = () => {
  // const [showModel, setShowModel] = useState(false);

  return (
    <div id="/projects" className="flex flex-col">
      <div className="flex flex-row gap-8 items-center mb-12">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl font-black md:text-5xl text-end font-Guy">
          Projects<span className="text-blue-500">.</span>
        </h1>
        <img src={Dude22} className="absolute w-24 h-24" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
        {projects.map((item) => (
          <div key={item.title}>
            <div
              // onClick={() => window.open(item.live, "_blank")}
              className="overflow-hidden relative w-full rounded-lg cursor-pointer group aspect-video bg-zinc-700"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[85%] absolute bottom-16 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all duration-200 rounded group-hover:w-[91%] group-hover:rotate-[2deg]"
              />
              <div className="bg-gradient-to-b from-[#00000000] to-zinc-950 absolute translate-y-32 w-full h-2/4"></div>
              <div className="bg-gradient-to-r from-[#000] to-[#786] absolute translate-y-60 w-full h-full"></div>
            </div>

            <div className="flex flex-row gap-8 items-center mt-4">
              <h1 className="font-black text-xl shrink-0 max-w-[calc(100%_-_150px)]">
                {item.title}
                <span className="text-blue-500">.</span>
              </h1>
              <div className="w-full h-[1px] bg-zinc-700" />
              <div className="flex flex-row gap-2">
                <a href={item.github} target="_blank">
                  <SiGithub className={`${style.navicon} size-5`} />
                </a>
                <a href={item.live} target="_blank">
                  <RiShareCircleFill className={`${style.navicon} size-5`} />
                </a>
              </div>
            </div>

            <p className="space-x-3 text-sm text-blue-300 opacity-70">
              {item.tech}
            </p>
            <p className=" text-gray-300 text-[15px] ">{item.description}</p>
            <span
              className=" text-blue-300 text-[15px] block cursor-pointer"
              onClick={() => setShowModel(true)}
            >
              {" "}
              {/* Learn more... */}
            </span>
          </div>
        ))}

        {/* <div className="flex overflow-y-scroll fixed inset-0 z-50 justify-center px-4 py-12 backdrop-blur cursor-pointer bg-zinc-950/50">
  <button className="absolute top-4 right-4 text-xl md:top-6"><IoClose size={30}/></button>
  <div className="overflow-hidden w-full max-w-2xl rounded-lg shadow-lg cursor-auto h-fit bg-zinc-900">
  <img className="w-full" src={projects[0].img} alt="" />

  <div className="p-8">
  <h4 class="mb-2 text-3xl font-bold">The Canvas Club</h4>
  <p class="flex flex-wrap gap-2 text-sm text-indigo-300">The Canvas Club is a community of artists,,/</p>
  <div className="my-6 space-y-4 text-sm leading-relaxed text-zinc-300">
    <p>The Canvas Club is a social community for painters to connect with others in their community.</p>
    <p>I work primarily on the backend, a collection of Node & Express microservices. Data is stored primarily in Postgres & cached in Redis.</p>
    <p>The team in total consists of 5 developers. This is a passion project for all of us.</p>
  </div>

  <div>
    <p className="mb-2 text-xl font-bold">Project Links<span className="text-blue-500">.</span></p>
    <div className="flex flex-row gap-5">
      <a href="" target="blank" className='flex gap-2 text-center text-gray-300'><SiGithub className={`${style.navicon}  size-4`}/><p className='text-[12px]'>Source code</p></a>
      <a href="" target="blank" className='flex gap-2 text-center text-gray-300' ><RiShareCircleFill className={`${style.navicon} size-4`}/><p className='text-[12px]'>Live Demo</p></a>
    </div>
  </div>

  </div>
  </div>
</div> */}

        {/* <button onClick={() => setShowModel(true)} className="p-5 bg-blue-700">
          show PopModel
        </button>
        {showModel && <PopModel onClose={() => setShowModel(false)} />} */}
      </div>
    </div>
  );
};

export default About;
