import React from 'react';
import footerstyles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={footerstyles.footer}>
      <div className={footerstyles.footerContainer}>
        
        <button className={footerstyles.backToTop} onClick={scrollToTop}>
          ↑
        </button>

        <div className={footerstyles.mainGrid}>
          
          <div className={footerstyles.brandColumn}>
            <span className={footerstyles.logoText}>J.V.V.Narendra</span>
            <p className={footerstyles.description}>
              Building high-quality web experiences with modern tools. 
              Let's connect and create something impactful.
            </p>
          </div>

         
          <nav className={footerstyles.navColumn}>
            <div className={footerstyles.navLinks}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Skills</a>
              <a href="#contact">Education</a>
              <a href="#contact">Projects</a>
              <a href="#contact">Certifications</a>
              <a href="#contact">Contact</a>
              
            </div>
          </nav>

          
          <div className={footerstyles.socialColumn}>
            <a href="https://github.com/Narendra3711" className={footerstyles.socialIcon} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/narendrajali/" className={footerstyles.socialIcon} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:jalinarendra@gmail.com" className={footerstyles.socialIcon}>
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className={footerstyles.footerBottom}>
          <p>© 2025 Veera Venkata Narendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;