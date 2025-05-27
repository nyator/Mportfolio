import { experience } from "@/constant/exp";
import { style } from "../constant/index";
import { CgLink } from "react-icons/cg";

const Exp = () => {
  return (
    <div id="/exp" className="flex flex-col">
      <div className="flex items-center gap-8 mb-12 flex-row-reverse">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl md:text-5xl font-black text-end">
          Experience<span className="text-blue-500">.</span>
        </h1>
      </div>

      {experience.map((item, index) => (
        <div className="mb-6 border-b pb-6 border-zinc-700 space-y-4">
          <div key={index} className="flex flex-col space-y-1">
            <div className="flex items-center justify-between text-nowrap ">
              <a
                href={item.link}
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-300 hover:underline transition-all duration-300"
              >
                <h1 className="font-black text-xl shrink-0">{item.company}</h1>
                <span className="text-blue-500">.</span>
                <CgLink className={`size-5`} />
              </a>

              <h1 className="font-semibold text-[14px] shrink-0">
                {item.date}
              </h1>
            </div>
            <div className="flex items-center justify-between text-nowrap">
              <h2 className="font-bold text-blue-300  shrink-0 max-w-[calc(100%_-_150px)]">
                {item.title}
              </h2>
              <h2 className="font-normal text-[14px]  shrink-0 max-w-[calc(100%_-_150px)]">
                {item.location}
              </h2>
            </div>
          </div>

          <p className="font-normal text-gray-300 shrink-0 ">
            {item.description}
          </p>

          <div className="flex flex-wrap flex-col-4 gap-2">
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
