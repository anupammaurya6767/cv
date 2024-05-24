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
    "Experienced Full-Stack Developer with a strong background in AI, ML, and open-source contribution. Proficient in C++, Web Development, and modern frameworks like Next.js and React.js. Skilled in problem-solving and effective communication, with a B.Tech in Computer Science from Delhi Technological University (Formerly DCE). Explore my contributions in AI, ML, and open source. Capable of managing large teams and assigning work effectively.",
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
      title: "Job Alert Bot (whatsapp)",
      techStack: [
        "Puppeteer",
        "TypeScript",
        "Javascript",
      ],
      description: "Implements automated job alert notifications using web-scrapping, keeping users informed about the latest job openings on whatsapp.",
      logo: ConsultlyLogo,
      link: {
        label: "Opp-alert-bot",
        href: "https://linktr.ee/jobalertbot",
      },
    },
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
      title: "Rakshak-app",
      techStack: ["Side Project", "Dart", "Flutter"],
      description:
        "Rakshak is a comprehensive home security Flutter app designed to provide users with a seamless and intuitive interface for monitoring and managing their home security system.",
      logo: BarepapersLogo,
      link: {
        label: "Rakshak",
        href: "https://github.com/anupammaurya6767/rakshak-app",
      },
    },
    {
      title: "Expresso",
      techStack: ["Side Project", "Javascript", "Next.js", "MongoDB"],
      description: "A blog site",
      logo: YearProgressLogo,
      link: {
        label: "Expresso",
        href: "https://expresso-beta.vercel.app/",
      },
    },
    {
      title: "Tuberculosis_Detection",
      techStack: [
        "Machine Learning",
        "Tensorflow",
        "Python",
        "Google-colab",
      ],
      description:
        "This project develops a machine learning model to detect tuberculosis from chest scans. Utilizing advanced image processing and AI algorithms, the model accurately identifies tuberculosis indicators in chest X-rays, providing a reliable tool for early diagnosis and intervention.",
      logo: ParabolLogo,
      link: {
        label: "tb",
        href: "https://colab.research.google.com/drive/17bq7mdHhAv8UA92Ohxe2D1obCArazrim?usp=sharing",
      },
    },
    {
      title: "AutoApply Bot",
      techStack: [
        "Automation", "Python", "Selenium", "Script", "Gemini", "Google-ai"
      ],
      description:
        "Auto apply to jobs on wellfound.com with a custom cover letter.",
      logo: EvercastLogo,
      link: {
        label: "auto-apply",
        href: "https://pypi.org/project/autoply/1.0.0/",
      },
    },
    {
      title: "Underwater Image restoration",
      techStack: ["Machine Learning",
        "Tensorflow",
        "Python",
        "Google-colab",],
      description:
        "Developed a model to restore and enhance underwater images, using advanced image processing techniques and machine learning algorithms. This model effectively addresses issues such as color distortion, blur, and noise, resulting in clearer and more accurate underwater visuals.",
      logo: MobileVikingsLogo,
      link: {
        label: "Underwater-Image-restoration",
        href: "https://colab.research.google.com/drive/1S2CK36-aaq44uPHqihufh334At2nPHv_?usp=sharing",
      },
    },
    {
      title: "Personal-Portfolio",
      techStack: ["Portfolio", "Javascript", "React.js"],
      description:
        "My personal portfolio",
      logo: Howdy,
      link: {
        label: "Portfolio",
        href: "https://personal-portfolio-two-sandy.vercel.app/",
      },
    },
    {
      title: "TEDxDTU",
      techStack: ["Full-Stack Developer", "Javascript", "Next.js", "Firebase"],
      description:
        "TEDxDTU is a self-organized branch of the humongous non-profit organization TEDx. Our motto is to enlighten people,to impact fellow humans with powerful words, to ask them to believe that life is worth all the hustle and to appeal to a world that is ready to grow, ready to flourish and to welcome to new and better possibilities.",
      logo: TastyCloudLogo,
      link: {
        label: "tedxdtu.in",
        href: "https://www.tedxdtu.in/",
      },
    },
  ],
} as const;
