import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Head() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

 
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  // Detect location change and close menu if not on the same page
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">Harsha</h1>
        </Link>
        <nav className={`navmenu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('resume')} className="nav-link">Resume</button></li>
            <li><button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle d-xl-none" onClick={toggleMenu}>
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}

export default Head;
