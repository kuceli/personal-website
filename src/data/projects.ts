import projectMini from "@/assets/miniprojects.png";
import projectCloned from "@/assets/clonedProjects.png";
import eduAfrica from "@/assets/eduafrica.png";
import rehoboth from "@/assets/rehoboth.png";
import mealy from "@/assets/mealy.png";
import splashscreen from "@/assets/splashscreen.png";
import mercySite from "@/assets/mercy-site.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  fullDescription: string;
  github?: string;
  live?: string;
  thumbnail: string;
  subProjects?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "Rehoboth Health Care",
    description:
      "Responsive patient-facing healthcare website, accompanied by branding materials including a logo and informational pamphlet.",
    tags: ["React", "Tailwind", "SEO"],
    fullDescription:
      "Rehoboth Health Care is a patient-facing healthcare platform built using React and Tailwind CSS. The project also includes a branding package, featuring the company’s logo and informational pamphlet, designed in Canva to help establish a strong and consistent brand identity.",
    live: "https://drive.google.com/drive/folders/1hWsoXZBn2fRjtbInGByylozuMzpyTihc?usp=drive_link",
    github: "https://github.com/kuceli/rehobothhealthcarellc",
    thumbnail: rehoboth,
  },
  {
    title: "EduAfrica",
    description:
      "Responsive online learning platform democratizing education across Africa.",
    tags: ["React", "Frontend", "Stutern"],
    fullDescription:
      "EduAfrica is a responsive online learning platform designed to democratize education across Africa. Built during the Stutern Graduate Accelerator program, it features course catalogs, user dashboards, and an accessible UI optimized for low-bandwidth environments.",
    live: "https://main--aducloud.netlify.app/",
    thumbnail: eduAfrica,
  },
  {
    title: "Mini Projects Collection",
    description:
      "A collection of skill-building projects including a To-Do List, Calculator, Tic Tac Toe, and more.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    fullDescription:
      "A collection of projects built to sharpen my frontend skills. Some are replicated projects while others are original designs, built using HTML, CSS, JS, and ReactJS.",
    thumbnail: projectMini,
    subProjects: [
      {
        label: "To‑Do List",
        url: "https://todolistbykuceli.netlify.app/",
      },
      {
        label: "Calculator",
        url: "https://calculatorbykuceli.netlify.app",
      },
      {
        label: "Tic Tac Toe",
        url: "https://tictactoebykuceli.netlify.app/",
      },
      {
        label: "Contact Form",
        url: "https://contactformbykuceli.netlify.app/",
      },
      {
        label: "Star Wars App",
        url: "https://starwarsappbykuceli.netlify.app/",
      },
      {
        label: "Profile Search App",
        url: "https://profile-search-app-by-kuceli.netlify.app/",
      },
    ],
  },

  {
    title: "Professional Portfolio Website",
    description:
      "Responsive portfolio built to highlight advocacy work on global development issues",
    tags: ["React.js", "Tailwind CSS"],
    fullDescription:
      "This project involved designing and developing a responsive portfolio website using React.js and Tailwind CSS. It was created to effectively showcase advocacy efforts of a client focused on global development issues, while also strengthening digital visibility and presenting content in a clean, accessible, and engaging format.",
    live: "https://mercyabutsa.netlify.app/",
    thumbnail: mercySite,
  },
  {
    title: "Splash Screen",
    description:
      "An animated splash screen built as a JavaScript challenge without prior JS knowledge.",
    tags: ["JavaScript"],
    fullDescription:
      "This was a challenge given to me at iTech Computer Education, Abuja to work on the functionality of this splash screen without prior knowledge of Js.",
    live: "https://splashscreenbykuceli.netlify.app/",
    thumbnail: splashscreen,
  },
  {
    title: "Mealy",
    description:
      "A food ordering app designed as a final project for the Stutern software development course.",
    tags: ["React", "Team Project", "Stutern"],
    fullDescription:
      "Mealy is a food ordering app designed by me and my team as a final project to sum up our software development course at Stutern. It features location-based ordering, a menu carousel, and a modern UI with an orange-themed design system.",
    live: "https://project-mealy.netlify.app",
    thumbnail: mealy,
  },
  {
    title: "Cloned Sites",
    description:
      "Pixel-perfect replications of Netflix, Udemy, Instagram, and Google landing pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    fullDescription:
      "An impeccably replicated webpages including the Netflix landing page, Udemy landing page, Instagram home page, and Google search page among others. Designed using HTML, CSS, and JavaScript to demonstrate attention to detail and frontend proficiency.",
    thumbnail: projectCloned,
    subProjects: [
      {
        label: "Google Search Page",
        url: "https://googlebykuceli.netlify.app/",
      },
      {
        label: "Netflix",
        url: "https://github.com/kuceli/NetflixClone",
      },
      {
        label: "Udemy",
        url: "https://udemybykuceli.netlify.app/",
      },
      {
        label: "Instagram",
        url: "https://github.com/kuceli/InstagramClone/",
      },
    ],
  },
];
