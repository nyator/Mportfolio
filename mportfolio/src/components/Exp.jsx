import { experience } from "@/constant/exp";



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
          <h1 className="font-black text-xl shrink-0">{item.company}</h1>
          <h1 className="font-semibold text-[14px] shrink-0">{item.date}</h1>
        </div>
        <div className="flex items-center justify-between text-nowrap">
         <h2 className="font-bold text-blue-300  shrink-0 max-w-[calc(100%_-_150px)]">{item.title}</h2>
         <h2 className="font-normal text-[14px]  shrink-0 max-w-[calc(100%_-_150px)]">{item.location}</h2>
        </div>
      </div>

      <p className="font-normal text-gray-300 shrink-0 ">{item.description}</p>

      <div className="flex flex-wrap flex-col-4 gap-2">
      {item.tech.map((tech) => (
        <p className="text-[12px] text-gray-300 bg-zinc-700 w-fit px-2 py-1 rounded">{tech}</p>
      ))}
      </div>
     </div>
      ))}






        {/* <div className="space-y-10">
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
        </div> */}
      </div>
  );
};

export default Exp;
