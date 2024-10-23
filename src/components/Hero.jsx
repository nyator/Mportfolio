import { Typewriter } from "react-simple-typewriter";

import Button from "@/design/button";
import WaterDropGrid from "@/design/waterDropGrid";

const Hero = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden py-24 md:py-32 pointer-events-none relative z-10">
        <div className="space-y-3">
          <h1 className="relative overflow-hidden w-fit text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
            Hi, I'm Henry
            <span className="text-blue-500">.</span>
          </h1>
          <h2 className="pointer-events-auto relative overflow-hidden w-fit text-xl sm:text-2xl font-extrabold text-zinc-300 md:text-4xl">
            I am a{" "}
            <span className="text-blue-500">
              <Typewriter
                words={["Software", "Mobile", "Frontend"]}
                loop={0}
                typeSpeed={180}
                delaySpeed={4000}
                deleteSpeed={150}
              />
            </span>{" "}
            Developer👨🏽‍💻
          </h2>
          <p className="pointer-events-auto relative overflow-hidden w-fit leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
            I'm really excited to connect with you 😊. I've spent some years
            building and scaling app and websites for awesome individual and a few companies.
          </p>
          <Button
            href="https://tailwindcss.com/docs/z-index"
            title="Contact Me"
            className="pointer-events-auto border-blue-600 bg-blue-500 before:bg-blue-600 hover:border-blue-600 mt-3"
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
