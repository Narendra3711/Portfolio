;


import React, { useState, useEffect } from 'react';
import headerstyles from "./Header.module.css"; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className={headerstyles.headerContainer}>
            <div className={headerstyles.content}>
                <div className={headerstyles.left}>
                    <h1>Narendra</h1>
                </div>

                
                <div className={headerstyles.rightGroup}>
                    <nav className={headerstyles.desktopNav}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href}>{link.name}</a>
                        ))}
                    </nav>
                    <div className={headerstyles.resumeWrapper}>
                        <a href="/myyresume (1).pdf" className={headerstyles.resumeLink}>Resume</a>
                    </div>
                </div>

                {/* Mobile Icon */}
                <div className={headerstyles.line} onClick={toggleMenu}>
                <div className={headerstyles.mobileIcon}>
                    <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                </div>
            </div>

            
            <div className={`${headerstyles.mobileMenu} ${isMenuOpen ? headerstyles.active : ""}`}>
    <nav className={headerstyles.mobileNavLinks}>
        {navLinks.map((link, index) => (
            <a 
                key={link.name} 
                href={link.href} 
                onClick={closeMenu} 
                style={{ "--i": index + 1 }}
            >
                {link.name}
            </a>
        ))}
        
        <a 
            href="/myyresume (1).pdf" 
            onClick={closeMenu} 
            className={headerstyles.mobileResumeBtn} 
            style={{ "--i": navLinks.length + 1 }}
        >
            Resume
        </a>
    </nav>
</div>
        </header>

    );
};

export default Header;