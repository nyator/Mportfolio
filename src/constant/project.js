import example_project from "../assets/example_project.jpg";
import hoobank from "../assets/hoobank.png";
import portfolio1 from "../assets/portfolio1.png";
import stembit from "../assets/stembit.jpeg";
import portfolio2 from "../assets/portfolio2.png";


export const projects = [
  {
    id: 1,
    img: portfolio1,
    title: "Portfolio 1.0",
    tech: "React - Tailwind - Figma",
    description:
      "Built within a few days, to satisfy the urgent need for a portfolio",
    github: "https://github.com/nyator/Hportfolio",
    live: "https://henry-portfolio-1.vercel.app/",
  },
  {
    id: 2,
    img: hoobank,
    title: "Hoobank",
    tech: "React - Tailwind",
    description:
      "This project showcases modern web design principles using an exemplary banking website.",
    github: "https://github.com/nyator/Hoo_Bank",
    live: "https://hoo-bank-murex.vercel.app/",
  },
  {
    id: 3,
    img: portfolio2,
    title: "Portfolio 2.0",
    tech: "React - Tailwind - AnimeJS - CSS",
    description:
      "Current portfolio i am using to showcase my works and amplify my presence online. Will be updated when the need arises.",
    github: "https://github.com/nyator/Mportfolio",
    live: "https://henry-portfolio-2.vercel.app/",
  },
  {
    id: 4,
    img: stembit,
    title: "StemBIt MVP - Coming Soon",
    tech: "React Native - NativeWind - Expo Audio",
    description:
      "Stembit a Music playback mobile app that helps user play loops and can change tempo to fit music.",
    github: "https://github.com/nyator/StemBit-MVP",
    live: "",
  },
];