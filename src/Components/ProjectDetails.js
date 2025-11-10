
import { useParams } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';// Using React-Bootstrap for the carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./ProjectDetails.css"; // Import custom styles
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PortfolioDetailsHeader.css'; // Use the provided styles here

import jntugv1 from "../assets/img/jntugv-hero.png"
import jntugv2 from "../assets/img/jntugv2.png"
import jntugv3 from "../assets/img/jntugv3.png"
 
import issue1 from "../assets/img/issue1.png"
import issue2 from "../assets/img/issue2.png"
import issue3 from "../assets/img/issue3.png"
import resucraft1 from "../assets/img/resucraft.png"
import resucraft2 from "../assets/img/resucraft4.png"
import resucraft3 from "../assets/img/resucraft3.png"

// import portfolio1 from "../assets/img/portfolio.png"
// import portfolio2 from "../assets/img/portfolio2.png"
// import portfolio3 from "../assets/img/portfolio3.png"
 
import auto1 from "../assets/img/auto1.png"
import auto2 from "../assets/img/auto2.png"
import auto3 from "../assets/img/auto3.png"


import library1 from "../assets/img/library1.png"
import library2 from "../assets/img/library2.png"
import library3 from "../assets/img/library3.png"
import Button from '@mui/material/Button';


// Mock data for demonstration
const projectData = { 
    "jntugv-website": {
      title: "JNTUGV Website",
      description: `Developed and deployed the official website for Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV). 
      The website acts as a comprehensive digital platform, offering university-related details such as academic information, notifications, and event updates. 
      This project was a collaborative effort where I led the front-end development, ensuring an intuitive user experience and responsive design.`,
      features: [
        "User-friendly navigation for university details and notifications.",
        "Responsive design for seamless access across devices.",
        "Collaborative effort with the backend team to deliver a robust system."
      ],
      techStack: ["ReactJS", "Material-UI", "Node.js", "MySQL"],
      images: [jntugv1, jntugv2, jntugv3], // Replace with actual paths
      liveLink: "https://jntugv.edu.in",
    },
    "autotrack": {
  title: "AutoTrack - Vehicle Maintenance System",
  description: `AutoTrack is a Java full-stack vehicle maintenance tracking system, developed as a microservice within the CarCaddy project during my Infosys Springboard internship. 
  The system is designed to streamline vehicle service management, providing users with features like registration, maintenance tracking, and service history visibility.`,
  features: [
    "Built with a RESTful microservices architecture ensuring modularity and scalability.",
    "Allows efficient vehicle registration, progress tracking, and service status management.",
    "Provides clear visibility of service history and expected delivery timelines.",
    "Integrated backend with MySQL and Spring Boot, and frontend with ReactJS for seamless user experience."
  ],
  techStack: ["Java", "Spring Boot", "ReactJS", "MySQL"],
  images: [auto1, auto2, auto3], // Replace with actual image imports/paths
  liveLink: "https://autrotrack-deployment.netlify.app",
},

    "issue-tracking-system": {
      title: "Issue Tracking System",
      description: `The Issue Tracking System is a full-stack Java web application designed to streamline the process of logging, managing, 
      and resolving issues in an organizational or project environment. It provides a centralized platform for tracking issue progress 
      and assigning responsibilities, ensuring efficient task management and resolution.`,
      features: [
        "Centralized issue logging and management.",
        "Role-based issue assignment and monitoring.",
        "Detailed tracking and resolution progress dashboard."
      ],
      techStack: ["Java Servlets", "JSP", "JDBC", "MySQL"],
      images: [issue1, issue2, issue3], // Replace with actual paths
      liveLink: null,
    },
    "resucraft": {
      title: "ResuCraft/ResuMate",
     "description": `ResuCraft (also known as ResuMate) is a collaborative web application project designed to simplify the process of creating professional resumes. 
  As a frontend developer on the team, I contributed to building the user interface and interactive components of the application. 
  The platform allows users to select templates, input their details, and generate polished resumes in PDF format, all in a few simple steps.`,
      features: [
        "Customizable templates for personalized resumes.",
        "Easy-to-use input fields for quick data entry.",
        "PDF generation for offline use and sharing."
      ],
      techStack: ["ReactJS", "Django", "HTML5", "CSS3"],
      images: [resucraft1, resucraft3, resucraft2], // Replace with actual paths
      liveLink: "https://resucraft.vercel.app",
    },
//     "portfolio": {
//       title: "Portfolio",
//       description: `  An interactive and visually appealing portfolio website created to showcase my skills, projects, and professional experiences as a front-end developer. 
//       This portfolio acts as a digital resume and networking tool for potential employers and collaborators.
// `,
//       features: [
//         "Visually appealing and responsive layout.",
//         "Sections for skills, projects, and contact information.",
//         "Optimized for performance and accessibility."
//       ],
//       techStack: ["ReactJS", "Material-UI", "HTML5", "CSS3"],
//       images: [portfolio1, portfolio2, portfolio3], // Replace with actual paths
//       liveLink: "https://harsha-vivek03.github.io/personalportfolio",
//     },
    "E-library": {
      title: "E-Library",
      description: `The E-Library project is a sample front-end application developed to simulate the management of library books. 
      This project was part of my learning journey in HTML and CSS and demonstrates my ability to design a clean and functional user interface.`,
      features: [
        "Simulated book browsing, borrowing, and returning functionalities.",
        "Interactive design for a better user experience.",
        "Created as a learning project using HTML and CSS."
      ],
      techStack: ["HTML5", "CSS3"],
      images: [library1, library2, library3], // Replace with actual paths
      liveLink: null,
    },
  };
  



function PortfolioDetailsHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <header className="header1 header d-flex align-items-center sticky-top justify-content-around">
      <div className="container-fluid d-flex align-items-center justify-content-between ">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1 className="sitenames">Harsha...</h1>
        </Link>
        <nav className={`navmenu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                
             
              <Button variant="outlined">Home</Button>
              
              </Link>
            </li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle d-xl-none" onClick={toggleMenu}>
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <div className="header-social-links">
        <a href="https://x.com/" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/harshavivek.nani?mibextid=ZbWKwL" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://github.com/Harsha-vivek03" className="github"><i class="fa-brands fa-github"></i></a>
          
          <a href="https://www.linkedin.com/in/harsha-vivek-a47309243" className="linkedin"><i className="bi bi-linkedin"></i></a>
       
        </div>
      </div>
    </header>
  );
}






const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];
  
    if (!project) {
      return <p>Project not found!</p>;
    }
  
    return (
      <div className="project-details">
        <PortfolioDetailsHeader />
        <br />
        <br />

        <h1 className="text-center mt-4">{project.title}</h1>

        <div className="d-flex flex-column">
          {/* Left Column: Carousel */}
          <div className="carousel-container align-self-center">
            <Carousel
              animation="fade"
              interval={2000}
              duration={700}
            >
              {project.images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Right Column: Project Details */}
          <div className="project-info">
            <div className="description mt-4">
              <h3>About the Project</h3>
              <p>{project.description}</p>

              {project.features && (
                <>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.techStack && (
                <>
                  <h4>Tech Stack:</h4>
                  <ul>
                    {project.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {project.liveLink && (
              <div className="text-center mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProjectDetails;
