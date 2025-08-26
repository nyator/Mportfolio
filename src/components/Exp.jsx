import { experience } from "@/constant/exp";
import { style } from "../constant/index";
import { CgLink } from "react-icons/cg";

import { Dude23 } from "../assets/illustration";

const Exp = () => {
  return (
    <div id="/exp" className="flex flex-col">
      <div className="flex flex-row-reverse gap-8 items-center mb-12">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl font-black md:text-5xl text-end font-Guy">
          Experience<span className="text-blue-500">.</span>
        </h1>
        <img src={Dude23} className="absolute w-24 h-24" />
      </div>

      {experience.map((item, index) => (
        <div className="pb-6 mb-6 space-y-4 border-b border-zinc-700">
          <div key={index} className="flex flex-col space-y-1">
            <div className="flex justify-between items-center text-nowrap">
              <a
                href={item.link}
                target="_blank"
                className="flex gap-2 items-center transition-all duration-300 hover:text-blue-300 hover:underline"
              >
                <h1 className="text-xl font-black shrink-0">{item.company}</h1>
                <span className="text-blue-500">.</span>
                <CgLink className={`size-5`} />
              </a>

              <h1 className="font-semibold text-[14px] shrink-0">
                {item.date}
              </h1>
            </div>
            <div className="flex justify-between items-center text-nowrap">
              <h2 className="font-bold text-blue-300  shrink-0 max-w-[calc(100%_-_150px)]">
                {item.title}
              </h2>
              <h2 className="font-normal text-[14px]  shrink-0 max-w-[calc(100%_-_150px)]">
                {item.location}
              </h2>
            </div>
          </div>

          <p className="font-normal text-gray-300 shrink-0">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 flex-col-4">
            {item.tech.map((tech) => (
              <p className="text-[12px] text-gray-300 bg-zinc-700 w-fit px-2 py-1 rounded">
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exp;
