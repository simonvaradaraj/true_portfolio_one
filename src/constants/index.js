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
  hca,
  fidelity,
  orgradar
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
      name: "OrgRadar",
      description:
        "Student organization ratings website, currently used by 1000+ students at Texas A&M University, managing over 1300+ organizations' data.",
      tag: "REACT",
      image: orgradar,
      source_code_link: "https://github.com/SloanBDavis/TradeEm",
    },
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
      role: "Data Engineer Intern",
      date: "May 2023 - July 2023",
      description: [
        {bullet: "Contributed to several data migration projects at HCA’s North Texas Branch, aiding the migration of 70 TB of critical patient data and client-side web applications using SSIS and SQL"},
        {bullet: "Developed optimized ETL pipelines and queries involving multiple joins, subqueries, and aggregate functions which extracted information up to 15% faster than prior implementations"},
        {bullet: "Actively managed and maintained over 50 production databases, ensuring high availability, performance, and data integrity in a mission-critical environment"}
      ],
      logo: hca,
      location: "Dallas, TX"
    },
    {
      company: "Fidelity Investments",
      role: "Software Engineer Intern",
      date: "June 2024 - August 2024",
      description: [
        {bullet: "Developed a chatbot leveraging Amazon Lex to assist developers in speeding up the creation of access requests for Fidelity’s unified testing platform, leading to a satisfaction rate of over 85%."},
        {bullet: "Created GraphQL APIs to provide developers with Azure Active Directory groups corresponding to the permissions requested, based on user security credentials."},
        {bullet: "Employed Jest and Cypress to develop comprehensive unit and integration tests, increasing code coverage to 96%, ensuring high software quality and reliability."}
      ],
      logo: fidelity,
      location: "Westlake, TX"
    }
  ];