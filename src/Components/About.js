import React, { useEffect } from 'react';
import './About.css';


const About = () => {
  // Dynamic skills array
  const skills = [
  
    { name: 'Java', level: '80%', color: '#FF8A8A' },
    { name: 'SpringBoot', level: '70%', color: '#264de4' },
    { name: 'React', level: '70%', color: '#61dafb' },
    { name: 'HTML', level: '90%', color: '#e44d26' },
    { name: 'Python', level: '60%', color: '#41B3A2' },
    { name: 'CSS', level: '85%', color: '#264de4' },
    { name: 'JavaScript', level: '75%', color: '#f7df1e' },
    { name: 'Node', level: '40%', color: '#e44d26' },
    { name: 'Sql', level: '85%', color: '#41B3A2' },

  ];

  useEffect(() => {
    // Function to check if an element is in view
    const inView = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    // Function to add animation class when skills are in view
    const checkSkillsInView = () => {
      const skillItems = document.querySelectorAll('.skill-item');
      skillItems.forEach((item) => {
        if (inView(item)) {
          item.querySelector('.progress-bar').style.width = item.getAttribute('data-skill-level');
        }
      });
    };

    // Event listener for scroll
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Initial check on page load

    return () => {
      window.removeEventListener('scroll', checkSkillsInView);
    };
  }, []);

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="section-subtitle">
            <p>Web Developer with a passion for creating amazing user experiences.</p>
          </div>
          <div className="row">
           
            
              <div className="content">
                <h3 className="content-title">Hi, I'm Androthu Harsha Vivek Gangadhar</h3>
                <p className="fst-italic">
                  A web developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <strong>Location:</strong> <span>Rajahmundry, India</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <strong>Email:</strong> <span> <a href="mailto:hvgnani79813@gmail.com?subject=Regarding Your Portfolio&body=Hello Harsha, I just went through your portfolio and would like to connect with you.">
      hvgnani79813@gmail.com
    </a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <strong>Phone:</strong> <span><a href="tel:+919550617522">+91 9550617522</a>
                    </span>
                  </li>
                  <li>
                  <i class="fa-brands fa-google-scholar"></i>
                    <strong>Degree:</strong> <span>B-Tech</span>
                  </li>

                  <li>
                  <i class="fa-solid fa-laptop-code"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                  <li>
                  <i class="fa-brands fa-square-github"></i>
                    <strong>Github:</strong> <span><a href="https://github.com/HarshaAndrothu3">HarshaAndrothu3</a></span>
                  </li>
                </ul>
                <p className="fst-matter">
                My career objective is to grow as a software engineer who develops user-centered, impactful solutions that
support organizational goals. I’m eager to contribute to innovative projects and collaborate across teams to
drive both technical and business growth..</p>
              </div>
           
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div
                  className="skill-item"
                  key={index}
                  data-skill-level={skill.level}
                >
                  <div className="skill-title">{skill.name}</div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        backgroundColor: skill.color,
                        width: '0', // Initial width for animation
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
