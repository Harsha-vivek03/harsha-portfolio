import { useState } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './hero.css';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import harsha1 from '../assets/img/harsha2.jpg';

import React from "react";




const Hero = () => {
  const [activeSection, setActiveSection] = useState('');
  const phoneNumber = "+919550617522"; 
  const defaultMessage = "Hello Harsha! I just went through your portfolio and I'd like to connect with you."; 
  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const particlesInit = async (main) => {
    // Load tsparticles package
    await loadFull(main);
  };

  const particlesOptions = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#f2f7f6ff"
      },
      "image": "",
      "position": "",
      "repeat": "",
      "size": "",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "opacity": 1,
        "color": {
          "value": ""
        }
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": true,
      "zIndex": -1
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          selectors: [],
          enable: false,
          mode: [],
          type: "circle",
        },
        onHover: {
          enable: true,
          mode: ["trail", "repulse"], // Enable both trail and repulse
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 0,
          pauseOnStop: true,
          quantity: 5,
          particles: {
            color: {
              value: "#fff000",
              animation: {
                enable: true,
                speed: 500,
                sync: true,
              },
            },
            collisions: { enable: false },
            links: { enable: false },
            move: {
              outModes: { default: "destroy" },
              speed: 1,
            },
            mode:false,
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 5,
                sync: true,
                startValue: "min",
                destroy: "max",
              },
            },
          },
        },
        repulse: {
          distance: 100, // Distance to push particles away from cursor
          duration: 0.5, // Duration of the repulse effect
        },
        // Other modes can remain as is...
      },
    },
    "manualParticles": [],
    "particles": {
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "collisions": {
        "absorb": {
          "speed": 2
        },
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "enable": true,
        "maxSpeed": 50,
        "mode": "absorb",
        "overlap": {
          "enable": true,
          "retries": 0
        }
      },
      "color": {
        "value": "#ff0000",
        "animation": {
          "h": {
            "count": 0,
            "enable": true,
            "speed": 50,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "offset": 0
          },
          "s": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          },
          "l": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": true,
            "offset": 0
          }
        }
      },
      "effect": {
        "close": true,
        "fill": true,
        "options": {},
        "type": []
      },
      "groups": {},
      "move": {
        "angle": {
          "offset": 0,
          "value": 90
        },
        "attract": {
          "distance": 200,
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "center": {
          "x": 50,
          "y": 50,
          "mode": "percent",
          "radius": 0
        },
        "decay": 0,
        "distance": {},
        "direction": "none",
        "drift": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "inverse": false,
          "maxSpeed": 50
        },
        "path": {
          "clamp": true,
          "delay": {
            "value": 0
          },
          "enable": false,
          "options": {}
        },
        "outModes": {
          "default": "out",
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "spin": {
          "acceleration": 0,
          "enable": false
        },
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fill": {}
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "width": 1920,
          "height": 1080
        },
        "limit": {
          "mode": "delete",
          "value": 0
        },
        "value": 200
      },
      "opacity": {
        "value": {
          "min": 0.3,
          "max": 0.8
        },
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 0.5,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "reduceDuplicates": false,
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#000"
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "close": true,
        "fill": true,
        "options": {},
        "type": "circle"
      },
      "size": {
        "value": 4,
        "animation": {
          "count": 0,
          "enable": true,
          "speed": 3,
          "decay": 0,
          "delay": 0,
          "sync": false,
          "mode": "auto",
          "startValue": "random",
          "destroy": "none"
        }
      },
      "stroke": {
        "width": 0
      },
      "zIndex": {
        "value": 0,
        "opacityRate": 1,
        "sizeRate": 1,
        "velocityRate": 1
      },
      "destroy": {
        "bounds": {},
        "mode": "none",
        "split": {
          "count": 1,
          "factor": {
            "value": 3
          },
          "rate": {
            "value": {
              "min": 4,
              "max": 9
            }
          },
          "sizeOffset": true,
          "particles": {}
        }
      },
      "roll": {
        "darken": {
          "enable": false,
          "value": 0
        },
        "enable": false,
        "enlighten": {
          "enable": false,
          "value": 0
        },
        "mode": "vertical",
        "speed": 25
      },
      "tilt": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "enable": false
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      },
      "wobble": {
        "distance": 5,
        "enable": false,
        "speed": {
          "angle": 50,
          "move": 10
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "value": 0,
          "sync": false
        },
        "duration": {
          "value": 0,
          "sync": false
        }
      },
      "rotate": {
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "decay": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "orbit": {
        "animation": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": false
        },
        "enable": false,
        "opacity": 1,
        "rotation": {
          "value": 45
        },
        "width": 1
      },
      "links": {
        "blink": false,
        "color": {
          "value": "random"
        },
        "consent": false,
        "distance": 100,
        "enable": true,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": 5,
          "color": {
            "value": "#000"
          },
          "enable": false
        },
        "triangles": {
          "enable": false,
          "frequency": 1
        },
        "width": 1,
        "warp": false
      },
      "repulse": {
        "value": 4,
        "enabled": false,
        "distance": 10,
        "duration": 2,
        "factor": 1,
        "speed": 1
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "responsive": [],
    "smooth": false,
    "style": {},
    "themes": [],
    "zLayers": 100,
    "emitters": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    }
  }
  
  
  return (
    <div>
      <Header />
      
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
     
      <section id="home" className="hero section">
   
        <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
       
          <div className="row justify-content-center">
         
            <div className="col-lg-8">
            <div className="image-logo">
              <img
                src={harsha1}
                alt="About"
                className="img-fluid"
              />
            </div>
              <h2>Harsha Vivek Gangadhar</h2>
              <p>I'm a Full Stack Developer</p>
              <Link onClick={() => scrollToSection('about')} className="card btn-get-started">
                Explore Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="portfolio">
        <Portfolio />
      
      </section>

      <section id="contact">
        <Contact />
      </section>

      <div >
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#25D366", // WhatsApp green color
        }}
      >
        <img
        className="whatsapp"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "60px", height: "60px", marginRight: "8px" }}
        />
      </a>
    </div>

    </div>
  );
};

export default Hero;
