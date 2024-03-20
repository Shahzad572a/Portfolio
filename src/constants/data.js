   
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import web from '../assets/web.png'
import full from '../assets/full.png'
import logo from '../assets/logo.svg'
import onshopi from '../assets/onshopi.png'
import Html from '../assets/html-5.svg'
import express from '../assets/express.png'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwind.svg'
import javascript from '../assets/bootstrap (4).svg'
import mongodb from '../assets/mongodb.jpg'
import github from '../assets/github.png'
import figma from '../assets/figma.png' 
import threejs from '../assets/threejs.png'
import project2 from '../assets/project2.png'
import project1 from '../assets/project1.png'
import task1 from '../assets/task1.png'
import task2 from '../assets/task2.png'








 




 




   
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
  
   export const services = [
    {
      title: "Fronted Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: nodejs,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full stack developer",
      icon: full,
    },
  ];
  
  export const technologies = [
    {
      name: "HTML 5",
      icon: Html,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "tailwind",
      icon: tailwind,
    },
   

 
    {
      name: "JavaScript",
      icon: javascript,
    },
     
    {
      name: "React JS",
      icon: react,
    },
    
    {
      name: "Next JS",
      icon: react,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
     
    {
      name: "git",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
     
  ];
  
  export const experiences = [
   
    
    {
      title: "MERN Stack Developer",
      company_name: "FYB",
      icon: onshopi,
      iconBg: "#E6DEDD",
      date: "DEC 2022 - Jun 2023",
      points: [
        "The project on OnShopi, an eCommerce platform built with the MERN stack, aimed to provide a seamless online shopping experience for customers and store owners.",
         "The project involved designing the user interface with React and Bootstrap, implementing the backend with Node.js, Express.js, and MongoDB",
         "Integrating secure payment gateways like PayPal, and using Elasticsearch for enhanced search functionality.",
          "The project has been successfully completed and is fully functional."
      ],
    },

    {
      title: "MERN Stack Developer",
      company_name: "SAS Technology",
      icon: logo,
      iconBg: "#383E56",
      date: "Sep 2023 - Dec 2023",
      points: [
        "I completed a 3-month internship at SAS Technology, where I mastered dynamic application development using the MERn Stack (MongoDB, Express.js, React.js, Node.js). ",
        "This included frontend and backend development, JWT and bcrypt for authentication, Socket.IO for real-time communication, and implementing features like file uploading, card sorting, pagination, and search functionality."
        
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  export const projects = [
    {
      name: "Onshopi",
      description:
        " The project on OnShopi, an eCommerce platform using the MERN stack, aimed to enhance customer and store experience through user interface design, backend implementation, secure payment gateway integration, and Elasticsearch functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/Shahzad572a/OnShopi",
    },
    {
      name: "Portfolio",
      description:
        "Welcome to my portfolio, a dynamic showcase of my work as a web developer. The 'About Me' section provides background information, 'Work' showcases notable projects, and 'Contact' allows for contact and potential collaborations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/Shahzad572a/Portfolio",
    },

    {
      name: "Event",
      description:
        "'Event Management' using Next.js and Strapi, which includes features like user authentication, efficient CRUD operations, search functionality, pagination, and page routing. proficiency in Next.js and Strapi,",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "strapi",
          color: "pink-text-gradient",
        },
        {
          name: "page routing",
          color: "blue-text-gradient",
        },
      ],
      image: task2,
      source_code_link: "https://github.com/Shahzad572a/React-task",
    },

    {
      name: "Task 1",
      description:
        "Task involving fetching user data, implementing search functionality with filtering options for both male and female users, pagination for efficient navigation, and displaying detailed user information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Api",
          color: "pink-text-gradient",
        },
      ],
      image: task1,
      source_code_link: "https://github.com/Shahzad572a/React-task",
    },
    
  ];
  
  // export { services, technologies, experiences, testimonials, projects };







  

  
