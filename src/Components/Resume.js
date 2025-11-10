import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import kaggle from "../assets/img/kaggle.png";
import fedpro from "../assets/img/fedpro.png";
import dsa from "../assets/img/dsa-infosys.png";
import se from "../assets/img/se-agile.png";
import Nosql from "../assets/img/nosql-infosys.png";
import java from "../assets/img/java-oracle.png";
import js from "../assets/img/javascript.png";
import sql from "../assets/img/sql-datascience.png";
import ibmfed from "../assets/img/ibm-fed.png";
import workshop from "../assets/img/workshop.jpg";
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../assets/HarshaVivek_JavaFullStack_Resume.pdf"
const certificationsData = [
  {
    name: "Professional Front-End Developer",
    company: "edX | The World Wide Web Consortium (W3C)",
    year: "2024",
    description: "Gained expertise in front-end development through a comprehensive program. Mastered HTML5, CSS, and JavaScript, along with web development best practices, focusing on modern web standards and accessibility.",
    image: fedpro
  },
  {
    name: "Data Structures and Algorithms using Java",
    company: "Infosys | Springboard",
    year: "2024",
    description: "Acquired in-depth knowledge of data structures and algorithms, focusing on efficient data storage and manipulation. Learned to implement various algorithms in Java, optimizing code performance.",
    image: dsa
  },
  {
    name: "Software Engineering and Agile Software Development ",
    company: "Infosys | Springboard",
    year: "2024",
    description: "Developed a strong understanding of software engineering principles and Agile methodologies. Learned to manage software projects, collaborate in teams, and implement Agile practices for iterative development.",
    image: se
  },
  {
    name: "Introduction to NoSQL Databases",
    company: "Infosys | Springboard",
    year: "2024",
    description: "Gained knowledge of NoSQL database concepts and their applications. Learned about different types of NoSQL databases, including document, key-value, and graph databases, and how to design and query them.",
    image: Nosql
  },

  {
    name: "SQL for Data Science",
    company: "edX | IBM",
    year: "2024",
    description: "Developed proficiency in SQL for data manipulation and analysis. Learned to write complex queries to extract insights from databases, perform data aggregation, and utilize SQL functions in data science applications.",
    image: sql
  },
  {
    name: "JavaScript Introduction",
    company: "edX | The World Wide Web Consortium (W3C)",
    year: "2024",
    description: "Acquired foundational knowledge of JavaScript, focusing on core programming concepts. Learned to implement interactive features in web pages and manage data using variables, functions, and event handling.",
    image: js
  },
  {
    name: "ReactJs Workshop | Certificate of Appreciation",
    company: "JNTUGV | ITYUKTA",
    year: "2024",
    description: "Served as a resource person for a ReactJS workshop, instructing and mentoring students on building dynamic user interfaces with React. Provided hands-on experience by guiding students in developing their personal portfolios.",
    image: workshop
  },
  {
    name: "FED Internship completion Certificate",
    company: "edunet | IBM Skillbuild",
    year: "2024",
    description: "Acquired foundational knowledge of JavaScript, focusing on core programming concepts. Learned to implement interactive features in web pages and manage data using variables, functions, and event handling.",
    image: ibmfed
  },
  {
    name: "Python",
    company: "Kaggle",
    year: "2024",
    description: "Gained foundational Python skills for data science, including data structures, functions, and basic data analysis with Pandas and NumPy",
    image: kaggle
  },
  {
    name: "Java Foundation ",
    company: "Oracle",
    year: "2024",
    description: "Gained a strong understanding of Java programming fundamentals. Learned about object-oriented programming, data structures, and basic algorithms, laying the foundation for advanced software development.",
    image: java
  },
  // Add more certifications as needed
];







const ResumeDownload = () => {
  return (
    <Button
      href={resume}
      download="HarshaVivek_JavaFullStack_Resume.pdf"
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
    >
      Download Resume
    </Button>
  );
};






const Resume = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const isMobile = useMediaQuery('(max-width: 1500px)'); // Change to your preferred breakpoint

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Building Success Through Education, Experience, and Achievements</p>
      </div>
      <div className="container">

      <div className="row">
          

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
             
             

            
            <div className="resume-item">
  <h4>Full Stack Java Trainee</h4>
  <h5>2025 (Ongoing)</h5>
  <p><em>Revature</em></p>
  <p>
    Currently undergoing a 6-month intensive Full Stack Java training program at Revature.  
    Over the past 4 months, I’ve gained strong hands-on experience in Core Java, Spring, Spring Boot, RESTful APIs, and software development lifecycle best practices.  
    The upcoming modules focus on modern front-end frameworks and DevOps tools to strengthen full-stack capabilities.
  </p>
</div>

            <div className="resume-item">
              <h4>Front End Developer Intern</h4>
              <h5>2024- 2025</h5>
              <p><em>JNTUGV College</em></p>
              <p>Led the design and deployment of a responsive JNTUGV website using HTML5, CSS3, JavaScript, Material-UI, and React.js. Ensured a seamless user experience with 99% uptime and real-time updates, earning positive feedback from over 2,000 users.</p>
            </div>

            <div className="resume-item">
    <h4>Java Full Stack Intern</h4>
    <h5>2024</h5>
    <p><em>Infosys Springboard</em></p>
    <p>This was a 3-month project-based virtual internship where I developed full-stack applications using Java technologies. The experience enhanced my skills in both front-end and back-end development while collaborating on team projects.</p>
</div>
           
          
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor's Degree in IT - 7.8 CGPA</h4>
              <h5>2021 - 2025</h5>
              <p><em>JNTUGV College of Engineering, Vizianagaram</em></p>
              <p>Pursuing a comprehensive program focusing on core Information Technology subjects, including programming, web development, data structures, and algorithms.</p>
            </div>
            <div className="resume-item">
              <h4>Intermediate in MPC - 97%</h4>
              <h5>2019 - 2021</h5>
              <p><em>Narayana Junior College, Rajahmundry</em></p>
              <p>Completed an intensive curriculum in Mathematics, Physics, and Chemistry, building a strong foundation in analytical and problem-solving skills.</p>
            </div>
            <div className="resume-item">
              <h4>High School (SSC) - 10 CGPA</h4>
              <h5>2015 - 2019</h5>
              <p><em>Nagaraja Government High School, Rajahmundry</em></p>
              <p>Achieved a solid academic foundation with a focus on science and mathematics, setting the stage for further studies in engineering.</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <h3 className="resume-title">Positions of Responsibility</h3>
          <div className="col-lg-12">
            <div className="resume-item">
              <h4>Hour of Code Mentor</h4>
              <h5>2024</h5>
              <p><em>ACM JNTUGV Student Chapter</em></p>
              <p>Led the Hour of Code event during Computer Science Week, mentoring students in Python programming. Guided them through building the Rock Paper Scissors game, helping them understand programming fundamentals, logic, and code structure.</p>
            </div>
            <div className="resume-item">
              <h4>ReactJS Workshop Lead</h4>
              <h5>2024</h5>
              <p><em>WEBBLAZE Workshop</em></p>
              <p> I served as a resource person for a two-day ReactJS workshop at ITYUKTA - 2K24, where I taught 150 students from 30 different colleges. I guided them through creating personal portfolio projects with hands-on experience, culminating in project deployment.</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row certifications-section" data-aos="fade-up" data-aos-delay="400">
          <h3 className="resume-title">Certifications</h3>
          <div className="col-lg-12">
              <Carousel
               animation="fade" // Animation type (can be 'slide' or 'fade')
               interval={2000} // Time in milliseconds between automatic transitions
               duration={1000} 
               
               >
                {certificationsData.map((cert, index) => (
                  <div className="certification-item" key={index}>
                    <h4>{cert.name}</h4>
                    <h5>{cert.year}</h5>
                    <p><em>{cert.company}</em></p>
                    <p>{cert.description}</p>
                    <p><i class="fa-regular fa-image"></i> <i class="fa-solid fa-arrow-down"></i></p>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="certification-image"
                      onClick={() => handleOpen(cert.image)}
                    />
                  </div>
                ))}
              </Carousel>
           
          </div>
        </div>
      </div>

      {/* Modal for larger image */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
          />
        </Box>
      </Modal>
      <br></br>
      <ResumeDownload/>
    </section>
  );
};

export default Resume;
