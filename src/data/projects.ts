import projectMini from "@/assets/project-mini.jpg";
import projectCloned from "@/assets/project-cloned.jpg";
import projectSplash from "@/assets/project-splash.jpg";
import projectMealy from "@/assets/project-mealy.jpg";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  fullDescription: string;
  github?: string;
  live?: string;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    title: "AlertCap",
    description: "Defined product vision and validated market demands for an EEG-based driver safety wearable.",
    tags: ["Product", "Cornell", "IoT"],
    fullDescription:
      "AlertCap is an EEG-based wearable designed to detect driver fatigue in real-time. I defined the product vision, validated market demands, and projected $6.6M in first-year revenue. The project included go-to-market strategy, competitive analysis, and a pitch to a panel of advisors at Cornell.",
    github: "https://github.com/kuceli",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Community Literacy Program",
    description: "Collaborated with a cross-functional team of 12 on a one-year literacy improvement initiative.",
    tags: ["Project Management", "Cornell"],
    fullDescription:
      "A comprehensive one-year community literacy improvement program developed at Cornell. Collaborated with a cross-functional team of 12 to create a full Work Breakdown Structure (WBS), Gantt chart scheduling, risk analysis, resource allocation, and detailed budget planning.",
    github: "https://github.com/kuceli",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Rehoboth Health Care",
    description: "Delivered a responsive patient-facing healthcare platform that increased engagement by 40%.",
    tags: ["React", "Tailwind", "Healthcare"],
    fullDescription:
      "Rehoboth Health Care is a patient-facing healthcare platform built with React and Tailwind CSS. The application provides appointment scheduling, health records access, and telehealth features — resulting in a 40% increase in patient engagement, along with supporting digital assets.",
    github: "https://github.com/kuceli",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "EduAfrica",
    description: "Responsive online learning platform democratizing education across Africa.",
    tags: ["React", "Frontend", "Stutern"],
    fullDescription:
      "EduAfrica is a responsive online learning platform designed to democratize education across Africa. Built during the Stutern Graduate Accelerator program, it features course catalogs, user dashboards, and an accessible UI optimized for low-bandwidth environments.",
    github: "https://github.com/kuceli",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Mini Projects Collection",
    description: "A collection of skill-building projects including a To-Do List, Calculator, Tic Tac Toe, and more.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    fullDescription:
      "A collection of projects built to sharpen my frontend skills. Includes a To-Do List, Contact Form, Calculator, Tic Tac Toe Game, Star Wars App, and Profile Search App. Some are replicated projects while others are original designs, built using HTML, CSS, JS, and ReactJS.",
    live: "https://kucelienglamaminiprojects.netlify.app",
    thumbnail: projectMini,
  },
  {
    title: "Cloned Sites",
    description: "Pixel-perfect replications of Netflix, Udemy, Instagram, and Google landing pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    fullDescription:
      "A showcase of impeccably replicated webpages including the Netflix landing page, Udemy landing page, Instagram home page, and Google search page among others. Designed using HTML, CSS, and JavaScript to demonstrate attention to detail and frontend proficiency.",
    live: "https://kucelienglamaclonedsites.netlify.app",
    thumbnail: projectCloned,
  },
  {
    title: "Splash Screen",
    description: "An animated splash screen built as a JavaScript challenge without prior JS knowledge.",
    tags: ["JavaScript", "CSS", "Animation"],
    fullDescription:
      "This was a challenge given to me at iTech Computer Education, Abuja to work on the functionality of this splash screen without prior knowledge of JavaScript. It demonstrates CSS animations and JS-driven transitions for a polished loading experience.",
    live: "https://splashscreenbykuceli.netlify.app",
    thumbnail: projectSplash,
  },
  {
    title: "Mealy",
    description: "A food ordering app designed as a final project for the Stutern software development course.",
    tags: ["React", "Team Project", "Stutern"],
    fullDescription:
      "Mealy is a food ordering app designed by me and my team as a final project to sum up our software development course at Stutern. It features location-based ordering, a menu carousel, and a modern UI with an orange-themed design system.",
    live: "https://project-mealy.netlify.app",
    thumbnail: projectMealy,
  },
];
