import Button from "@/design/button";
import WaterDropGrid from "@/design/waterDropGrid";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden py-24 md:py-32 pointer-events-none relative z-10">
        <div className="space-y-5 ">
          <h1 className="relative overflow-hidden w-fit text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
            Hi, I'm HenRy🔰
            {/* <span className="text-blue-500">.</span> */}
          </h1>
          <h2 className="pointer-events-auto relative overflow-hidden w-fit my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
            I am a Full Stack Developer
          </h2>
          <p className="pointer-events-auto relative overflow-hidden w-fit leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. I also teach people to paint online (incase
            you've got an empty canvas layin' around 🎨). Let's connect!
          </p>
          <Button
          link='https://tailwindcss.com/docs/z-index'
            title="Contact Me"
            className="pointer-events-auto border-blue-500 bg-blue-500 before:bg-blue-700 hover:border-blue-700 ml-0"
          />
        </div>
      </div>
      <div className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]">
        <WaterDropGrid />
      </div>
    </div>
  );
};

export default Hero;
