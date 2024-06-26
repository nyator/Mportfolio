import { tools, fun_tools } from "@/constant/text";

import Linkicon from "@/design/Linkicon";
import { VscIndent, VscLibrary } from "react-icons/vsc";
import { BsEmojiSmileFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="/about" className="flex flex-col">
      <div className="flex items-center gap-8 mb-12 flex-row-reverse">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl md:text-5xl font-black text-end">
          About<span className="text-blue-500">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-5 text-gray-300 leading-relaxed text-[16.5px] text-justify">
          <div className="overflow-hidden w-fit">
            <p>
              <span className="bg-blue-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I'm Bob, if you haven't already gathered that by now. I'm a
              painter turned software engineer from Daytona, Florida. I
              specialize in the backend, primarily Node and Rust, but love
              building with whatever tools are right for the job.
            </p>
          </div>
          <p>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </p>
          <p>
            Outside of work, I still love to paint. Any given Sunday you'll find
            me scribbling some happy clouds with my son ☁️ I even teach courses
            online if you're looking to learn!
          </p>
          <p>
            I'm passively looking for new positions where I can merge my love
            for code with my love for the canvas. If you think you've got an
            opening that I might like, let's connect 🔗
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 text-blue-300 opacity-70">
              My links <VscIndent />
            </p>
            <Linkicon />
          </div>
        </div>





        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-500 p-[2px] rounded-[2px]">
                <VscLibrary className="text-black" />
              </div>
              <h1 className="font-black text-gray-300">Use at work </h1>
            </div>

            <div className="flex flex-wrap flex-col-4 gap-2">
              {tools.map((tool, index) => (
                <p
                  key={index}
                  className="text-[12px] text-gray-300 bg-zinc-700 px-2 py-1 rounded"
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>


          <div>
            <div className="flex items-center gap-3 mb-5">
                <BsEmojiSmileFill  className="text-blue-500 size-5" />

              <h1 className="font-black text-gray-300">Use at work </h1>
            </div>

            <div className="flex flex-wrap flex-col-4 gap-2">
              {fun_tools.map((tool, index) => (
                <p
                  key={index}
                  className="text-[12px] text-gray-300 bg-zinc-700 px-2 py-1 rounded"
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
