import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Clang,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  django,
  flutter,
  sql,
  bootstrap,
  svu,
  // codingjudge,
  python_compiler,
  something,
  portfolio,
} from "../assets";

import codingjudge from "../assets/company/codingjudge.png";
import hostkar from "../assets//hostkar.png";
import welltrack from "../assets/welltrack.png";
import emandi from "../assets/emandi.png";
import insightmeet from "../assets/insightmeet.png";
import StockIt from "../assets/StockIt.png";
import flightbook from "../assets/flightbook.png";
import igniteweb from "../assets/igniteweb.png";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Intern/Freelancer",
    icon: backend,
  },
  {
    title: "Student",
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
  // {
  //   name: "C/C++",
  //   icon: Clang,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Django",
  //   icon: django,
  // },
  // {
  //   name: "Flutter",
  //   icon: flutter,
  // },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
];

const experiences = [
  {
    title: "Frontend Developer | Project leader",
    company_name: "Expert SCM",
    icon: codingjudge,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Produced a simple-to-play Supply Chain Management game aiming for easy learning and understanding of supply chain management for students.",
      "Brainstormed accurate game logic and implemented smooth animations.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Coding Judge",
    icon: codingjudge,
    iconBg: "#E6DEDD",
    date: "3rd July 2024 - 14th August 2024",
    points: [
      "Developed frontend features while collaborating with peers from IIT Bombay and mentored by a Microsoft SDE-2.",
      "Delivered quality work under tight deadlines while improving problem-solving skills and mastering the art of learning while implementing.",
    ],
  },
  {
    title: "Team Leader/Full-Stack Developer",
    company_name: "Computer Science Department",
    icon: svu,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Aug 2024",
    points: [
      "Developing a compiler to conduct coding examinations at university level.",
      "Learning basics to execute a server side compiler without any use of third party API's.",
      "Implementing simplistic and minimalistic design for the  ease of use and to reduce complications in the conduction of an examination.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Somaiya Vidyavihar University",
    icon: svu,
    iconBg: "#383E56",
    date: "July 2023 - July 2024",
    points: [
      "Developing web application using React.js, Django, Sqlite and other related technologies.",
      "Collaborating with cross-functional teams including designers, backend and fronted developers, faculties and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HostKar",
    description:
      "A platform to streamline the hosting process. CI/CD integration to accommodate future changes.",
    tags: [
      {
        name: "aws-S3",
        color: "blue-text-gradient",
      },
      {
        name: "redis-queue",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: hostkar,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "InsightMeet",
    description:
      "AI-powered interview platform to analyse and evaluate candidates. It provides a comprehensive solution for conducting interviews and assessing candidates' skills.",
    tags: [
      {
        name: "websockets",
        color: "blue-text-gradient",
      },
      {
        name: "statisics-page",
        color: "green-text-gradient",
      },
      {
        name: "claude",
        color: "pink-text-gradient",
      },
    ],
    image: insightmeet,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "IgniteWeb",
    description:
      "Ai website builder using just a prompt. Loaded with features like a preview and accomodation of future changes.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "anthropic-api",
        color: "green-text-gradient",
      },
      {
        name: "monaco-editor",
        color: "pink-text-gradient",
      },
    ],
    image: igniteweb,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },

  {
    name: "StockIt",
    description:
      "Portfolio management system to track and manage stock portfolios. It provides a comprehensive solution for managing investments and tracking performance.",
    tags: [
      {
        name: "live-info",
        color: "blue-text-gradient",
      },
      {
        name: "highcharts",
        color: "green-text-gradient",
      },
      {
        name: "detailed-analytics",
        color: "pink-text-gradient",
      },
    ],
    image: StockIt,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "Emandi",
    description:
      "One stop solution for farmers to deliver their prodeuce direct from farm to the consumer helping them to maximize their profits",
    tags: [
      {
        name: "CRUD operations",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "easy-to-use",
        color: "pink-text-gradient",
      },
    ],
    image: emandi,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "Flight-Booking Web App",
    description:
      "A flight booking web application that allows users to search and book flights. It provides a user-friendly interface and a seamless booking experience.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: flightbook,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "WellTrack",
    description:
      "A frontend project shocasing eye-catching animations and transitions. Aimed at providing a platform for students to track their mental health and well-being.",
    tags: [
      {
        name: "animation",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "transition",
        color: "pink-text-gradient",
      },
    ],
    image: welltrack,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "Online Compiler",
    description:
      "Developed a full-fledged online compiler for Python and C languages. Minimalistic design for easy surfing and robust backend for server side compilation of the code.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: python_compiler,
    source_code_link: "https://github.com/prathamudeshi/Online_Compiler",
  },
  {
    name: "Frontend Project",
    description:
      "Web Applications showcasing some good animations and a clean combo of UI and UX. Also this website has user authentication functionality using php and sql.",
    tags: [
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "scroller-locomotive",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: something,
    source_code_link: "https://github.com/prathamudeshi/WorkFlow",
  },
  {
    name: "Portfolio",
    description:
      "A modern personal portfolio filled with 3D design and attractive animations. Utilization of latest softwares for funxtionalities such as 3d model rendering.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/prathamudeshi/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
