import { tools, fun_tools } from "@/constant/text";

import Linkicon from "../design/linkicon";
import { VscIndent, VscLibrary } from "react-icons/vsc";
import { BsEmojiSmileFill } from "react-icons/bs";

import { Dude17 } from "@/assets/illustration";

const About = () => {
  return (
    <section id="/about">
      <div className="flex flex-col">
        <div className="flex flex-row-reverse gap-8 items-center mb-12">
          <div className="w-full h-[1px] bg-zinc-700" />
          <h1 className="text-3xl font-black md:text-5xl font-Guy text-end">
            About<span className="text-blue-500">.</span>
          </h1>
          <img src={Dude17} className="absolute w-24 h-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6 text-gray-300 font-medium leading-relaxed text-[15px] text-start">
            <div className="overflow-hidden w-fit">
              <p>
                <span className="float-left px-3 py-2 mr-1 text-2xl font-bold text-white bg-blue-500 rounded">
                  H
                </span>
                ey! I'm Henry, if you haven't already gathered that by now. I'm
                a Software Developer from Ghana, Accra. I specialize in the
                Frontend, primarily ReactJs, but love building with whatever
                tools are right for the job.
              </p>
            </div>
            <p>
              In addition to my work as a developer, I also teach coding skills
              to others. It's incredibly rewarding to see my students develop
              their skills and work towards their goals.
            </p>
            <p>
              Outside of work, I love to make music. On any given day you'll
              find me on the stage, preforming some music. 🎸
            </p>
            <p>
              I'm passively looking for new positions where I can merge my love
              for code. If you think you've got an opening that I might like,
              let's connect 🔗
            </p>
            <div className="flex gap-3 items-center">
              <p className="flex gap-1 items-center text-sm text-blue-300 opacity-70">
                My Links <VscIndent />
              </p>
              <Linkicon />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex gap-3 items-center mb-5">
                <div className="bg-white p-[2px] rounded-[2px]">
                  <VscLibrary className="text-black" />
                </div>
                <h1 className="font-black text-gray-300">Tools for work </h1>
              </div>

              <div className="flex flex-wrap gap-2 flex-col-4">
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
              <div className="flex gap-3 items-center mb-5">
                <BsEmojiSmileFill className="text-white size-5" />

                <h1 className="font-black text-gray-300">Others tools</h1>
              </div>

              <div className="flex flex-wrap gap-2 flex-col-4">
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
    </section>
  );
};

export default About;
