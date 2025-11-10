import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for routing
import issue1 from "../assets/img/issue1.png";
import library from "../assets/img/library.png";

import resucraft from "../assets/img/resucraft.png";
import jntugv from "../assets/img/jntugv-hero.png";
import auto1 from "../assets/img/auto1.png"

import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
  const navigate = useNavigate(); // For navigation to detailed components

  useEffect(() => {
    // Add your AOS (Animate On Scroll) initialization here if you're using it
    // AOS.init();
  }, []);

  const projects = [
    {
      id: 1,
      category: "filter-app",
      imgSrc: jntugv,
      title: "JNTUGV Website",
      description: "Developed and deployed a Real Time University website for JNTUGV",
      github: "https://github.com/Jntu-Gurajada-Vizianagaram/JNTU-GV",
      detailsRoute: "/projects/jntugv-website",
    },
     {
      id: 6,
      category: "filter-app",
      imgSrc: auto1,
      title: "AutoTrack - Vehicle Maintenance",
      description: "A Java full-stack, RESTful vehicle maintenance tracking system.",
      github: "https://github.com/Harsha-vivek03/AutoTrack",
      detailsRoute: "/projects/autotrack",
    },
    {
      id: 2,
      category: "filter-product",
      imgSrc: issue1,
      title: "Issue Tracking System",
      description: "A java full stack project for tracking and managing different types of issues",
      github: "https://github.com/Harsha-vivek03/IssueTrackingSystem",
      detailsRoute: "/projects/issue-tracking-system",
    },
    {
      id: 3,
      category: "filter-branding",
      imgSrc: resucraft,
      title: "ResuCraft",
      description: "Collaboratively developed a free online resume builder to make resumes with ease.",
      github: "https://github.com/Harsha-vivek03/ResuCraft",
      detailsRoute: "/projects/resucraft",
    },
    // {
    //   id: 4,
    //   category: "filter-branding",
    //   imgSrc: portfolio,
    //   title: "Personal Portfolio",
    //   description: "My personal portfolio built with ReactJS, fully responsive.",
    //   github: "https://github.com/Harsha-vivek03/personalportfolio",
    //   detailsRoute: "/projects/portfolio",
    // },
    {
      id: 5,
      category: "filter-branding",
      imgSrc: library,
      title: "E-Library",
      description: "Built a front-end for E-Library using basic HTML and CSS.",
      github: null,
      detailsRoute: "/projects/E-library",
    },
  ];

  return (
    <main className="main">
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Explore My Projects: A glimpse into my work as a softeware engineer, combining creativity and functionality.</p>
        </div>

        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-branding">Web</li>
               <li data-filter=".filter-product">Static</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {projects.map((project) => (
                <PortfolioItem
                  key={project.id}
                  category={project.category}
                  imgSrc={project.imgSrc}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  detailsRoute={project.detailsRoute}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const PortfolioItem = ({ category, imgSrc, title, description, github, detailsRoute, navigate }) => {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item isotope-item ${category}`}>
      <img src={imgSrc} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          GitHub <i className="bi bi-github"></i>
        </a> 
        <button
          className="btn btn-secondary"
          onClick={() => navigate(detailsRoute)}
        >
          View Details <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
