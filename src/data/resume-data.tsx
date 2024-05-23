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
  name: "Anupam Maurya",
  initials: "AM",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Versatile Full-Stack Developer and AI/ML Enthusiast, Passionate about Web Development and Open Source Contribution",
  summary:
    "Experienced Frontend Developer with a strong background in the internet industry, AI, ML, and open-source contribution. Proficient in C++, I excel in problem-solving and effective communication. Skilled in Web Development, I bring creativity and technical expertise to projects. Hold a Bachelor of Technology degree in Computer Science from Delhi Technological University (Formerly DCE). Explore my AI, ML, and open-source contributions.I am skilled in leveraging AI and modern frameworks (Next.js, React.js) to create solutions that empower businesses and individuals. I am capable of managing large teams and effectively assign work.",
  avatarUrl: "https://avatars.githubusercontent.com/u/96181413?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "anupammaurya981@gmail.com",
    tel: "+91 9911057242",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/anupammaurya6767",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anupam-maurya-b9a04a225/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/anupammaurya981",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "DTU-AUV",
      link: "https://auv-dtu.netlify.app/",
      badges: ["Remote"],
      title: "Vice Captain - Software Head",
      start: "2021",
      end: "2023",
      description:
        "As Vice Captain and Software Head at DTU-AUV, I led groundbreaking projects and initiatives that elevated our team's performance and achievements. Notably, I spearheaded the development of innovative underwater image restoration systems, leveraging OpenCV and ML algorithms. Additionally, I led projects that integrated cutting-edge technologies like OpenCV, ROS/ROS2, and YOLO, showcasing our team's commitment to innovation and technical excellence.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "C++",
    "Tailwind CSS",
    "Dart",
  ],
  projects: [
    {
      title: "Luffy",
      techStack: [
        "Side Project",
        "TypeScript",
        "Javascript",
      ],
      description: "A WhatsApp bot with many functionalities",
      logo: ConsultlyLogo,
      link: {
        label: "luffy",
        href: "https://github.com/anupammaurya6767/luffy",
      },
    },
    {
      title: "Tanji",
      techStack: ["Side Project", "Python","pip package"],
      description:
        "Tanji is a Python encryption library that provides a secure and flexible solution for encrypting and decrypting messages. It leverages both symmetric and asymmetric encryption techniques to ensure the confidentiality and integrity of your data.",
      logo: MonitoLogo,
      link: {
        label: "Tanji",
        href: "https://github.com/anupammaurya6767/tanji",
      },
    },
    {
      title: "GPT4",
      techStack: ["Side Project", "Python", "Selenium", "pip package"],
      description:
        "The GPT-4 API is an interface for interacting with the powerful GPT-4 language model. It allows you to generate natural language text, perform question-answering tasks, and more. Whether you're building chatbots, content generators, or creative writing tools, GPT-4 has got you covered!",
      logo: JarockiMeLogo,
      link: {
        label: "GPT4",
        href: "https://tanjiro-gpt4.netlify.app/",
      },
    },
    {
      title: "Kanao",
      techStack: ["Side Project", "Python", "Langchain", "pip package"],
      description:
        "Kanao is a project designed to train a GPT (Generative Pre-trained Transformer) model on custom datasets. It provides the capability to train the model using various data sources, including PDFs, Word documents, plain text files, and URLs.",
      logo: Minimal,
      link: {
        label: "kanao",
        href: "https://kanao.vercel.app/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
