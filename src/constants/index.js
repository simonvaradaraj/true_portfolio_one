import {
  javascript,
  reactjs,
  tailwind,
  nodejs,
  figma,
  threejs,
  opencv,
  python,
  tensorflow,
  azure,
  tradem,
  vibe,
  holocalc,
  framer,
  sql,
  ccfd
} from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "ABOUT",
    },
    {
      id: "work",
      title: "WORK",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];

export const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "framer",
      icon: framer,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "azure",
      icon: azure,
    },
  ];

export const projects = [
    {
      name: "Tradem",
      description:
        "React-based platform that encourages college-students to trade items with each other in order to prevent unnessary waste.",
      tag: "REACT",
      image: tradem,
      source_code_link: "https://github.com/SloanBDavis/TradeEm",
    },
    {
      name: "Holocalc",
      description:
        "Python application that tracks a user's hand position, in order to input and compute values on an on-screen calulator. ",
      tag: "OPENCV",
      image: holocalc,
      source_code_link: "https://github.com/simonvaradaraj/HoloCalc",
    },
    {
      name: "VIBE",
      description:
        'A convenient web-based platform that offers curated recommendations for attractions, restaurants, and locations that fit a given "vibe".',
      tag: "REACT",
      image: vibe,
      source_code_link: "https://github.com/simonvaradaraj/vibe",
    },
    {
      name: "CCFD",
      description:
        'A study on what specific features of credit card data can be used to predict fraudulent transactions before they happen.',
      tag: "SKLEARN",
      image: ccfd,
      source_code_link: "https://github.com/simonvaradaraj/CCFD",
    },
  ];