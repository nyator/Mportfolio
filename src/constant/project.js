import example_project from "../assets/example_project.jpg";
import hoobank from "../assets/hoobank.png";
import portfolio1 from "../assets/portfolio1.png";
import stembit from "../assets/stembit2.png";
import portfolio2 from "../assets/portfolio2.png";
import pncreatives from "../assets/pncreatives.png";
import entrynest from "../assets/entrynest.png";
import netSpeed from "../assets/netSpeed.png";
import cvscore from "../assets/cvscore.png";
import eastwood from "../assets/eastwood.png";
// project image should be view on  chrome full screen

export const projects = [
  {
    id: 2,
    img: entrynest,
    title: "Entrynest",
    tech: "React - tailwind - Figma",
    description:
      "EntryNest is a job and internship platform designed for early-career job seekers in Ghana. As the full-stack developer, I built the frontend with React and Tailwind CSS, and developed RESTful APIs using Node.js and Express, with MongoDB for data management. The app includes multi-role access (students, employers, admins), secure JWT-based authentication, and mobile responsiveness.",
    github: "https://github.com/nyator/entrynest",
    live: "https://entrynest.vercel.app/",
  },
  {
    id: 3,
    img: netSpeed,
    title: "netSpeed",
    tech: "React Native - NativeWind - Expo Network",
    description:
      "A mobile app that helps user check their internet speed. It provides a simple and intuitive interface for users to test their internet connection speed.",
    github: "https://github.com/nyator/netSpeed",
    live: "", //appstore link or playstore link will be added later
  },
  {
    id: 6,
    img: cvscore,
    title: "CV SCORE",
    tech: "React Native - NativeWind - GEMINI AI",
    description:
      "A mobile app that helps user check if their resume matches with a job description. It provides a simple and intuitive interface for users to match cv to a job based on a score between 1% - 100%",
    github: "https://github.com/nyator/cvscore",
    live: "", //appstore link or playstore link will be added later
  },
  {
    id: 1,
    img: eastwood,
    title: "Eman Studios",
    tech: "React - Tailwind - Framer Motion, Strapi",
    description:
      "Worked on website, which is visited by clients and customers of the company everyday. Built features that improve the customer experience and increase revenue.",
    github: "https://github.com/nyator/eastwood",
    live: "https://eastwoodmantey.vercel.app",
  },
  {
    id: 7,
    img: stembit,
    title: "StemBit",
    tech: "React Native - NativeWind - Expo Audio",
    description:
      "StemBit is a React Native mobile application designed for musicians and performers. It provides an integrated suite of tools including a metronome, loop player, pad interface, and session manager to enhance practice and performance sessions.",
    github: "https://github.com/nyator/StemBit",
    live: "", //appstore link or playstore link will be added later
  },
  {
    id: 4,
    img: portfolio2,
    title: "Portfolio 2.0",
    tech: "React - Tailwind - AnimeJS - CSS",
    description:
      "Current portfolio i am using to showcase my works and amplify my presence online. Will be updated when the need arises.",
    github: "https://github.com/nyator/Mportfolio",
    live: "https://henry-portfolio-2.vercel.app/",
  },
  {
    id: 5,
    img: hoobank,
    title: "Hoobank",
    tech: "React - Tailwind",
    description:
      "This project showcases modern web design principles using an exemplary banking website.",
    github: "https://github.com/nyator/Hoo_Bank",
    live: "https://hoo-bank-murex.vercel.app/",
  },
  // {
  //   id: 6,
  //   img: portfolio1,
  //   title: "Portfolio 1.0",
  //   tech: "React - Tailwind - Figma",
  //   description:
  //     "Built within a few days, to satisfy the urgent need for a portfolio",
  //   github: "https://github.com/nyator/Hportfolio",
  //   live: "https://henry-portfolio-1.vercel.app/",
  // },
];
