import example_project from "../assets/example_project.jpg";
import hoobank from "../assets/hoobank.png";
import portfolio1 from "../assets/portfolio1.png";
import stembit from "../assets/stembit.png";
import portfolio2 from "../assets/portfolio2.png";
import pncreatives from "../assets/pncreatives.png";
import entrynest from "../assets/entrynest.png";
import netSpeed from "../assets/netSpeed.png";
// project image should be view on  chrome full screen

export const projects = [
  {
    id: 1,
    img: pncreatives,
    title: "PNCreatives",
    tech: "React - Tailwind - AnimeJS",
    description:
      "Worked on websites, which is visited by clients and customers of the company everyday. Built features that improve the customer experience and increase revenue.",
    github: "https://github.com/nyator/pncreatives-website",
    live: "https://pncreatives-website.vercel.app/",
  },
  {
    id: 2,
    img: entrynest,
    title: "Entrynest",
    tech: "React - tailwind - Figma",
    description:
      "A job search portal to discover internships, mentorships and entry-level jobs (entrynest). It is a platform that connects students and recent graduates with job opportunities.",
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
  {
    id: 6,
    img: portfolio1,
    title: "Portfolio 1.0",
    tech: "React - Tailwind - Figma",
    description:
      "Built within a few days, to satisfy the urgent need for a portfolio",
    github: "https://github.com/nyator/Hportfolio",
    live: "https://henry-portfolio-1.vercel.app/",
  },
  {
    id: 7,
    img: stembit,
    title: "StemBIt MVP - Coming Soon",
    tech: "React Native - NativeWind - Expo Audio",
    description:
      "Stembit a Music playback mobile app that helps user play loops and can change tempo to fit music.",
    github: "https://github.com/nyator/StemBit-MVP",
    live: "", //appstore link or playstore link will be added later
  },
];
