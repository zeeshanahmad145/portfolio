import SkillImg1 from "../assets/images/HTML.png";
import SkillImg2 from "../assets/images/CSS.png";
import SkillImg3 from "../assets/images/JavaScript.png";
import SkillImg4 from "../assets/images/react.png";
import SkillImg5 from "../assets/images/Node.png";
import SkillImg6 from "../assets/images/Mongodb.png";
import SkillImg7 from "../assets/images/Git.png";
import SkillImg8 from "../assets/images/Github.png";
import ProjectImage1 from "../assets/images/tritech_old.png";
import ProjectImage2 from "../assets/images/tritech_new.png";
import ProjectImage3 from "../assets/images/travelatr.png";
import ProjectImage6 from "../assets/images/portfolio_old.png";
import ProjectImage7 from "../assets/images/travel.png";
import ProjectImage9 from "../assets/images/portfolio_new.png";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiGithub, FiMail  } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Blogs",
    href: "blogs",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social media
export const social = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/zeeshan-ahmad-7886ba28b/",
    color: "text-sky-500",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <FiInstagram />,
    href: "",
    color: "text-pink-600",
    ariaLabel: "Instagram",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/zeeshanahmad145",
    color: "text-white",
    ariaLabel: "Github",
  },
  {
    icon: <FiMail  />,
    href: "zeeshanahmad214538@gmail.com",
    color: "text-white",
    ariaLabel: "Medium",
  },
];

// about me
export const aboutMe = [
  {
    description:
      "Hi there! my name is Zeeshan Ahmad, a Software Engineer with experience building Mern stack applications with ReactJS, NodeJS, MongoDB. Possess strong skills in designing, developing and testing multiple web-based applications. Data driven and creative in finding solutions to complex problems. Love to develop innovative applications that enable creativity.",
  },
  {
    description:
      "I love the entire process of developing creative websites. It allows me to create something both beautiful and functional. I want to continue improving my skills that can enable me to be more creative and be able to build visually appealing websites.",
  },
  {
    description: "Here are a few technologies I’ve been working with recently:",
  },
];

// skills
export const skills = [
  {
    name: "React.JS",
  },
  {
    name: "Node.JS",
  },
  {
    name: "MongoDB",
  },
  {
    name: "GitHub",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "Tailwind"
  }
];

// skills image
export const skillImages = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// project details
export const projects = [
  {
    image: ProjectImage1,
    name: "TriTech Solution Version 1.0",
    description:
      "Developed For Tritech Solution Company.",
    tags: ["React", "HTML", "Tailwind CSS"],
    frontend: "",
    backend: "",
    live: "https://tritech-solution.netlify.app/",
    video: "",
    repo: "https://github.com/zeeshanahmad145/tritech-solution-website",
  },
  {
    image: ProjectImage9,
    name: "Portfolio Website Version 2.0",
    description:
      "This is my new portfolio website. Built with React and Tailwind CSS.",
    tags: ["REACT", "HTML", "Tailwind CSS"],
    frontend: "",
    backend: "",
    live: "https://zeeshan-portfolioo.web.app/",
    video: "",
    repo: "",
  },
  {
    image: ProjectImage2,
    name: "TriTech Solution Version 2.0",
    description:
      "Developed For Tritech Solution Company.",
    tags: [
      "REACT",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    frontend: "",
    backend: "",
    live: "https://tritechwebsite.netlify.app/",
    video: "",
    repo: "",
  },
  {
    image: ProjectImage3,
    name: "Travelatr",
    description:
      "A travel information website provides latest travel destination recommendations, including facts, and flights search.",
    tags: [
      "React",
      "HTML",
      "CSS",
      "Node",
      "MongoDb"
    ],
    frontend: "",
    backend: "",
    live: "",
    video: "",
    repo: "",
  },
  {
    image: ProjectImage6,
    name: "Portfolio Website Version 1.0",
    description:
      "This is my old portfolio website. Built with HTML & CSS.",
    tags: [
      "HTML",
      "CSS"
    ],
    frontend: "",
    backend: "",
    live: "https://design-portfolio-website.netlify.app/",
    video: "",
    repo: "https://github.com/zeeshanahmad145/simple-portfolio",
  },
  {
    image: ProjectImage7,
    name: "Travel The World",
    description:
      "Travel the world, Experencies the greateness. It's the best gift given by nature.",
    tags: [
      "HTML",
      "CSS"
    ],
    frontend: "",
    backend: "",
    live: "https://worldtravelwebsite.netlify.app/",
    video: "",
    repo: "https://github.com/zeeshanahmad145/Travel-Website",
  },
];
