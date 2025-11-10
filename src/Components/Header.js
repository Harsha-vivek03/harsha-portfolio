import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const socialLinks = [
    { href: "https://x.com/", icon: "bi-twitter", className: "twitter" },
    { href: "https://www.facebook.com/harshavivek.nani", icon: "bi-facebook", className: "facebook" },
    { href: "https://github.com/Harsha-vivek03", icon: "bi-github", className: "github" },
    { href: "https://www.linkedin.com/in/harsha-vivek-a47309243", icon: "bi-linkedin", className: "linkedin" }
  ];

  const navItems = ['home', 'about', 'resume', 'portfolio', 'contact'];

  return (
    <header id="header" className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container-fluid">
        <div className="header-content">
          <Link to="/" className="logo" onClick={() => scrollToSection('home')}>
            <h1 className="sitename">Harsha</h1>
          </Link>

          <nav className={`navmenu ${menuOpen ? 'open' : ''}`}>
            <ul>
              {navItems.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  >
                    <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className}
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>

          <button 
            className={`mobile-nav-toggle ${menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;