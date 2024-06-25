import React from "react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

const About = () => {
  return (
    <div className="flex">

      <div>
        <div className="flex gap-3">
          <SiLinkedin size="20" />
          <SiGithub size="20" />
          <SiX size="20" />
        </div>
        
      </div>

    </div>
  );
};

export default About;
