import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  docker,
  carrent,
  jobit,
  tripguide,
  java,
  python,
  c,
  cplusplus,
  aspnet,
  mysql,
  firebase,
  perceptive,
  shrinath,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Database Admin",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Software Developer",
    companyName: "Perceptive Solutions Inc.",
    icon: perceptive,
    iconBg: "#ffffff",
    date: "July 2025 - Present",
    points: [
      "Developed web applications using ASP.NET, React.js and JavaScript",
      "Built responsive UI and deployed applications on IIS",
      "Implemented Azure WAF to improve application security",
      "Developed Python chatbot features for developer support",
      "Supported Power BI reports and fixed production issues",
      "Collaborated using Git/GitHub in agile teams",
    ],
  },
  {
    title: "Freelance Front-End Developer",
    companyName: "Shrinath Furnitures",
    icon: shrinath,
    iconBg: "#fed894",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Designed and developed a responsive e-commerce website for a local furniture business using React.js and Redux Toolkit.",
      "Integrated Firebase for real-time database management and user authentication.",
      "Collaborated closely with the business owner to align the website's design with their brand identity.",
      "Ensured cross-browser compatibility and optimized performance for a seamless shopping experience.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Selva Priya transformed our offline furniture business into a beautiful, easy-to-use e-commerce store. The website perfectly captures our brand and our customers love the shopping experience!",
    name: "Arvind Shaktivel",
    designation: "Owner",
    company: "Shrinath Furnitures",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Shrinath Furnitures",
    description:
      "Built responsive furniture e-commerce site using React.js and Redux Toolkit. Integrated Firebase authentication and real-time database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Selva-Priya17",
  },
  {
    name: "Employee Management System",
    description:
      "Designed CRUD-enabled Java application to manage employee records. Utilized SQL for backend data handling with a user-friendly interface.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Selva-Priya17",
  },
  {
    name: "AI-Powered Code Assistant",
    description:
      "Built with HTML/ CSS/ JS to assist Java developers with code suggestions and error detection. Enhanced coding productivity with real-time auto-fixes and clean UI.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Selva-Priya17",
  },
];

export { services, technologies, experiences, testimonials, projects };
