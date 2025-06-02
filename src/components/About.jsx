import { tools, fun_tools } from "@/constant/text";

import Linkicon from "../design/linkicon";
import { VscIndent, VscLibrary } from "react-icons/vsc";
import { BsEmojiSmileFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="/about">
    <div className="flex flex-col">
      <div className="flex items-center gap-8 mb-12 flex-row-reverse">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl md:text-5xl font-black text-end">
          About<span className="text-blue-500">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-6 text-gray-300 font-medium leading-relaxed text-[15px] text-start">
          <div className="overflow-hidden w-fit">
            <p>
              <span className="bg-blue-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I'm Henry, if you haven't already gathered that by now. I'm a
              Software Developer from Ghana, Accra. I specialize in the
              Frontend, primarily ReactJs, but love building with whatever tools
              are right for the job.
            </p>
          </div>
          <p>
            In addition to my work as a developer, I also teach coding skills to
            others. It's incredibly rewarding to see my students develop their
            skills and work towards their goals.
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
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 text-blue-300 text-sm opacity-70">
              My Links <VscIndent />
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
              <BsEmojiSmileFill className="text-blue-500 size-5" />

              <h1 className="font-black text-gray-300">Use for fun </h1>
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
    </section>
  );
};

export default About;
