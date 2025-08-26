import { Typewriter } from "react-simple-typewriter";

import Button from "@/design/button";
import WaterDropGrid from "@/design/waterDropGrid";

const Hero = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative z-10 py-24 pointer-events-none md:py-32">
        <div className="space-y-3">
          <h1 className="overflow-hidden relative py-2 text-4xl font-bold w-fit sm:text-6xl text-zinc-100 md:text-8xl font-Guy">
            <span className="text-blue-600">Henry </span>Nyator 
            {/* HENRY NYATOR */}
            <span className="text-blue-500"> .</span>
          </h1>
          <h2 className="overflow-hidden relative text-xl font-extrabold pointer-events-auto w-fit sm:text-2xl text-zinc-300 md:text-4xl">
            I am a{" "}
            <span className="text-blue-200">
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
          <p className="overflow-hidden relative max-w-xl text-sm leading-relaxed pointer-events-auto w-fit md:leading-relaxed text-zinc-300 md:text-base">
            I'm really excited to connect with you 😊. I've spent some years
            building and scaling app and websites for awesome individual and a
            few companies.
          </p>
          <Button
            href="mailto:nyatorhenry@gmail.com"
            title="Contact Me"
            className="mt-3 bg-blue-500 border-blue-600 pointer-events-auto before:bg-blue-600 hover:border-blue-600"
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
