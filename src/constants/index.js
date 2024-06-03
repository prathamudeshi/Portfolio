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
    python_compiler,
    something,
    portfolio
  } from "../assets";
  
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
    {
      name: "git",
      icon: git,
    },
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
      title: "Full-Stack Developer",
      company_name: "Somaiya Vidyavihar University",
      icon: svu,
      iconBg: "#383E56",
      date: "July 2023 - Ongoing",
      points: [
        "Developing web application using React.js, Django, Sqlite and other related technologies.",
        "Collaborating with cross-functional teams including designers, backend and fronted developers, faculties and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Team Leader/Full-Stack Developer",
      company_name: "Computer Science Department",
      icon: svu,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Ongoing",
      points: [
        "Developing a compiler to conduct coding examinations at university level.",
        "Learning basics to execute a server side compiler without any use of third party API's.",
        "Implementing simplistic and minimalistic design for the  ease of use and to reduce complications in the conduction of an examination.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
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