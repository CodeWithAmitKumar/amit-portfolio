import {
  aws,
  backend,
  c,
  cpp,
  creator,
  css,
  express,
  figma,
  firstTestimonial,
  git,
  html,
  java,
  javascript,
  mobile,
  mongodb,
  mysql,
  nodejs,
  php,
  project01,
  project02,
  project03,
  project04,
  project05,
  project06,
  reactjs,
  secondTestimonial,
  tailwind,
  thirdTestimonial,
  web
} from '../assets';


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


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

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Php",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "figma",
    icon: figma,
  },
 

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Amit proved me wrong.",
    name: "Bhagaban Patra",
    designation: "Manager",
    company: "QuicKart.com",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Amit does.",
    name: "Ramakanta Behera",
    designation: "Assistant Professor",
    company: "mems.edu.in",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Amit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Snehasis Behera",
    designation: "Tour-Manager",
    company: "MakemyJourney.com",
    image: thirdTestimonial,
  },
];

const projects = [
  //project1
  {
    name: "MakeMyJourney-Travel",
    description:
      "It is a web based travel booking system with separate interface for custumer and administrator , The system makes travel booking easy , keep records organised and connect with other services for a safe and smooth experience .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "white-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: project03,
    source_code_link: "https://github.com/#",
  },

  // project2

  {
    name: "EmployeeWorld",
    description:
      "A web app to manage employee data , including adding , updateing and deleteing records , it supports role based access , salary details and attendence tracking , streamilimimg HR operations .",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
 
    ],
    image: project01,
    source_code_link: "https://github.com/CodeWithAmitKumar/employeemanagementsystm",
  },

  //projectt3
  {
    name: "McqSystem",
    description:
      "The web based exam system is an online platform designed to conduct exam efficiently and securely over the internet . It allows teacher to create , manage and shedule exam , while students can register , login and attempt exam from any device.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project02,
    source_code_link: "https://github.com/CodeWithAmitKumar/mcq_system",
  },

  //project4

  {
    name: "IdeaGpt",
    description:
      "IdeaGpt is an Ai-Powered online assistant designed to help users generate ideas , write content and get instant responce to their queries .  ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "GeminiApi",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: project04,
    source_code_link: "https://github.com/CodeWithAmitKumar/IdeaGpt",
  },

  // project5
  {
    name: "DigitalSignPad",
    description:
      "It is a web based application that allows user to create and capture electronic signature  .  ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: project05,
    source_code_link: "https://github.com/CodeWithAmitKumar/digitalsignpad",
  },

  // project6
  {
    name: "VolumeBooster-Extension",
    description:
      "It is a chrome extension designe to enhance your YouTube audio experience by boosting the volume beyond the default maximum limit .  ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
     
    ],
    image: project06,
    source_code_link: "https://github.com/CodeWithAmitKumar/volume-peeker",
  },

  //addproject
];

export { experiences, projects, services, technologies, testimonials };

