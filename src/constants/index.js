import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
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
    gdsc,
    Spotify,
    Food,
    Amazon,
    threejs,
    Shadab
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
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
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Core Team Menber",
      company_name: "Google Developer Student Club",
      icon: gdsc,
      iconBg: "#383E56",
      date: "August 2022 - July 2023",
      points: [
       // "Developing and maintaining web applications using React.js and other related technologies.",
       //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //"Implementing responsive design and ensuring cross-browser compatibility.",
       // "Participating in code reviews and providing constructive feedback to other developers.",
       "Being a 'Media Outreach Lead' of GDSC, have created many content of the events", 
       "Organized many events on tech and Coding Competitions",
        
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sohana is curious about technology and her expertise in Frontend Development proved her ability on tech.",
      name: "Md Shadab Imran",
      //designation: "CFO",
      //company: "Acme Co",
      image: Shadab,
    },
  ];
  
  const projects = [
    {
      name: "Food Delivery app",
      description:
        "Web-based platform that allows users to search, and order food from various resturants, providing a user friendly interface.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Food,
      source_code_link: "https://ornate-custard-b59714.netlify.app/",
    },
    {
      name: "Amazon-Clone",
      description:
        "An E-commerce Web application that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location",
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
      image: Amazon,
      source_code_link: "https://challenge-2adce.web.app/",
    },
    {
      name: "Spotify Clone",
      description:
        "A Web application that allows you to listen to music have the flexibility to search for tracks and artists, discover new songs, and create playlists easily",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Spotify,
      source_code_link: "https://playful-caramel-f9d017.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };