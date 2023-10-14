 
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
import project2 from '../assets/project 2.png'
import project1 from '../assets/project1.png'






 




 




   
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
      name: "Three JS",
      icon: threejs,
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
      title: "Full stack Developer",
      company_name: "FYB",
      icon: onshopi,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jul 2023",
      points: [
        "The project on OnShopi, an eCommerce platform built with the MERN stack, aimed to provide a seamless online shopping experience for customers and store owners.",
         "The project involved designing the user interface with React and Bootstrap, implementing the backend with Node.js, Express.js, and MongoDB",
         "Integrating secure payment gateways like PayPal, and using Elasticsearch for enhanced search functionality.",
          "The project has been successfully completed and is fully functional."
      ],
    },

    // {
    //   title: "React.js Developer",
    //   company_name: "Potfolio",
    //   icon: logo,
    //   iconBg: "#383E56",
    //   date: "Oct 2023 - Nov 2023",
    //   points: [
    //     "Welcome to my portfolio, a dynamic showcase of my work as a web developer.",
    //     " This website is a testament to my proficiency in React.js, Tailwind CSS, and Three.js.",
    //      "As you navigate through the pages, you'll find a comprehensive 'About Me' section that provides insights into my background and interests.",
    //      " The 'Work' page highlights my most notable projects, offering a glimpse of my skills in action. ",
    //      "Lastly, the 'Contact' page provides a means to get in touch with me. Feel free to explore and reach out; I'm excited to connect and discuss potential collaborations."
    //   ],
    // },
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
    
  ];
  
  // export { services, technologies, experiences, testimonials, projects };







  