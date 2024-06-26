import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { style } from "../constant/index";

const Linkicon = () => {
  return (
    <div className="flex gap-4">
        <a href=""><SiLinkedin size="18" className={`${style.navicon}`}/></a>
        <a href=""><SiGithub size="18" className={`${style.navicon}`}/></a>
        <a href=""><SiX size="18" className={`${style.navicon}`}/></a>
    </div>
  )
}

export default Linkicon