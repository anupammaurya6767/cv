import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kavya Malviya",
  initials: "KM",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Versatile Frontend Developer and AI/ML Enthusiast, Passionate about Web Development",
  summary:
    "Experienced Front-End Developer with expertise in AI, ML. Proficient in C++, Javascript. Skilled in problem-solving, communication, and team management. B.Tech in Software Engineering from Delhi Technological University (Formerly DCE)",
  avatarUrl: "https://avatars.githubusercontent.com/u/122686888?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "anupammaurya981@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/KavyaMalviya56",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kavya-malviya-461a76262/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Kavya0256",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "Bachelor's Degree in Software Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "DTU-AUV",
      link: "https://auv-dtu.netlify.app/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "2022",
      end: "2023",
      description:
        "I led groundbreaking projects and initiatives that elevated our team's performance and achievements. Notably, I spearheaded the development of innovative underwater image restoration systems, leveraging OpenCV and ML algorithms. Additionally, I led projects that integrated cutting-edge technologies like OpenCV, ROS/ROS2, and YOLO, showcasing our team's commitment to innovation and technical excellence.",
    }
  ],
  skills: [
    "JavaScript",
    "Python",
    "C++",
    "Tailwind CSS",
    "Dart",
  ],
  projects: [
    {
      title: "E - CommerceWebApplication",
      techStack: [
        "React.js", "Node.js", "MongoDB"
      ],
      description: " Developed a MERN stack E - Commerce web application using react.js for stunning frontend and express.js for robust backend, ensuring a delightful shopping experience for every user",
      logo: ConsultlyLogo,
      link: {
        label: "E - CommerceWebApplication",
        href: "https://github.com/KavyaMalviya56/E-Commerce",
      },
    },
    {
      title: "Gossipy - Chat App",
      techStack: [
        "Flutter", "Dart", "Dart Frog", "Web Sockets", "Rest API",
      ],
      description: "Developed a full-stack Flutter chat application with Dart Frog and WebSockets. The communication between the client and the database is handled by REST API and WebSockets",
      logo: ConsultlyLogo,
      link: {
        label: "Gossipy",
        href: "https://github.com/KavyaMalviya56/Gossipy-Chat-App",
      },
    },
    {
      title: "Anomaly detection in Network Security",
      techStack: ["Side Project", "Python","pip package"],
      description:
        "Machine Learning Project focused on fortifying network security through advanced anomaly detection techniques which employs a diverse set of powerful algorithms to proactively identify and mitigate potential security threats within network environments",
      logo: MonitoLogo,
      link: {
        label: "Anomaly detection in Network Security",
        href: "https://github.com/KavyaMalviya56/Anomaly-Detection-in-Network-Security",
      },
    },
  ],
} as const;
