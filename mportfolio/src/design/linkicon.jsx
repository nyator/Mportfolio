import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { style } from "../constant/index";

const Linkicon = () => {
  return (
    <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/henry-nyator-674392269/" target="blank"><SiLinkedin size="18" className={`${style.navicon}`}/></a>
        <a href="https://github.com/nyator" target="blank"><SiGithub size="18" className={`${style.navicon}`}/></a>
        <a href="https://x.com/nyator_" target="blank"><SiX size="18" className={`${style.navicon}`}/></a>
    </div>
  )
}

export default Linkicon