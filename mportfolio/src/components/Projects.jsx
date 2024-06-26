import React, { useState } from "react";
import PopModel from "@/design/popModel";


export const About = () => {
  const [showModel, setShowModel] = useState(false)

  return (
    <div id="/projects" className="flex flex-col">
      <div className="flex items-center gap-8 mb-12 flex-row">
        <div className="w-full h-[1px] bg-zinc-700" />
        <h1 className="text-3xl md:text-5xl font-black text-end">
          Projects<span className="text-blue-500">.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
      <button onClick={() => setShowModel(true)} className="bg-blue-700 p-5">show PopModel</button>
        {showModel && <PopModel onClose={() => setShowModel(false)} />}
        
      </div>
    </div>
  );
};




export default About;
