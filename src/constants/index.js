import {
  gcp,
  reactjs,
  java,
  nodejs,
  figma,
  typescript,
  opencv,
  python,
  tensorflow,
  azure,
  tradem,
  vibe,
  holocalc,
  cpp,
  sql,
  ccfd,
  hca
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
      id: "projects",
      title: "PROJECTS"
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
      name: "gcp",
      icon: gcp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "cpp",
      icon: cpp,
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
      name: "Typescript",
      icon: typescript,
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

  export const jobs = [
    {
      company: "HCA Healthcare",
      role: "Data Analyst Intern",
      description: "Spearheaded the migration of 4 Production ETL Servers using SSIS and SQL. Increased ETL Pipeline efficiency by 15%.",
      logo: hca
    }
  ]