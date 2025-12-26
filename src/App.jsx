
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200, 
      delay: 300,
      easing: 'ease-out-back',
      once: false,    
      mirror: true,   
    });
  }, []);
  return (
    <div className="page-wrapper">
    
      <div className="blob-bg">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
      </div>

      
      <div className="bg-overlay"></div>

      
      <div className="content-layer">
        <Header />

        
        <main id="home" className="hero-section" data-aos="fade-up">
          <div className="hero-content">
            <span className="welcome-tag">Available for work</span>
            <h1 className="hero-name">Hii, I'm <span className="highlight">Narendra</span></h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-description">
              Building digital experiences that are fast, accessible, and visually stunning. 
              I turn complex problems into simple, beautiful designs.
            </p>
            
            <div className="hero-btns">
              <a href="/myresume.pdf" className="btn-primary" download>
                                        <i className="fa-solid fa-download"></i> Download CV
                                    </a>

              
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>

            

<div className="hero-social-static">
  <div className="social-track">
    <a href="https://github.com/Narendra3711" target="_blank" rel="noreferrer" className="social-link">
      <i className="fa-brands fa-github"></i>
      <span className="tooltip">GitHub</span>
    </a>
    <a href="https://www.linkedin.com/in/narendrajali/" target="_blank" rel="noreferrer" className="social-link">
      <i className="fa-brands fa-linkedin"></i>
      <span className="tooltip">LinkedIn</span>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
      <i className="fa-brands fa-x-twitter"></i>
      <span className="tooltip">Twitter</span>
    </a>
    <a href="mailto:your@email.com" className="social-link">
      <i className="fa-solid fa-envelope"></i>
      <span className="tooltip">Email</span>
    </a>
  </div>
</div>
          </div>
        </main>
      
      
        <section id="about" className="about-section"  data-aos="fade-left">
  {/* Centered Top Heading */}
  <div className="about-header">
    <h1 className="about-main-title">About Me</h1>
    <div className="title-underline"></div>
    <p className="about-subtitle">Every line of code brings a beautiful experience</p>
  </div>

  <div className="about-content-wrapper">
    {/* Left Side: Text and Buttons */}
    <div className="about-info">
      <div className="hello-wrapper">
        <h2 className="hello-text">Hello I'm</h2>
        <div className="horizontal-line"></div>
      </div>
      
      <h3 className="about-name">Veera Venkata Narendra</h3>
      <p className="about-bio">
        "I'm a final-year student passionate about software development and web
        technologies. I specialize in building full-stack applications using the MERN stack
        and enjoy creating clean, user-friendly, and real-time solutions. Alongside web
        development, I'm actively learning Java and Data Structures & Algorithms to
        strengthen my problem-solving skills. My goal is to grow as a versatile developer,
        contribute to impactful projects, and prepare myself for exciting opportunities in
        the tech industry."
      </p>

      <div className="about-actions">
        <button className="download-cv">
        
          <a href="/myresume.pdf" download>
                                        <i className="fa-solid fa-download"></i> Download CV
                                    </a>
        </button>
        <button className="view-projects">
          
          <a href="#projects" className="icon">{"</>"} View Projects</a>
        </button>
      </div>
    </div>

    <div className="about-profile-container">
      <div className="profile-circle-glow">
        <img 
          src="/my profile1.jpg" 
          alt="Narendra" 
          className="profile-image" 
        />
      </div>
    </div>
  </div>
</section>




<section id="skills" className="skills-section" data-aos="fade-right">
  <div className="section-header-centered">
    <h1 className="skills-main-title">Technical Skills</h1>
    <div className="title-underline"></div>
    <p className="skills-subtitle">Explore my core expertise in programming languages, frameworks, and essential tools.</p>
  </div>

  <div className="skills-grid-container">
    {[
      { 
        name: "ReactJS", 
        icon: <img src="/react.jpg" alt="React" className="skill-image" /> 
      },
      { 
        name: "JavaScript", 
        icon: <img src="/js.jpg" alt="JS" className="skill-image" /> 
      },
      { 
        name: "HTML5", 
        icon: <img src="/html.jpg" alt="HTML" className="skill-image" /> 
      },
      { 
        name: "CSS3", 
        icon: <img src="/css.png" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "Node js", 
        icon: <img src="/node.jpg" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "Express js", 
        icon: <img src="/express.jpg" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "Mongo DB", 
        icon: <img src="/mongodb.jpg" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "My SQL", 
        icon: <img src="/mysql.jpg" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "JAVA", 
        icon: <img src="/java.jpg" alt="CSS" className="skill-image" /> 
      },
      { 
        name: "GitHub", 
        icon: <img src="/github.jpeg" alt="CSS" className="skill-image" /> 
      },
      

    ].map((skill, index) => (
      <div className="skill-item-card" key={index} style={{ "--i": index }}>
        <div className="skill-icon-wrapper">
          
          {skill.icon}
        </div>
        <span className="skill-name">{skill.name}</span>
      </div>
    ))}
  </div>
</section>



<section id="education" className="education-section" data-aos="fade-left">
  <div className="section-header-centered">
    <h1 className="education-main-title">My Education</h1>
    <div className="title-underline"></div>
  </div>

  <div className="education-container">
    {/* Card 1: B.Tech */}
    <div className="education-card glass-card">
      <div className="edu-icon">🎓</div>
      <div className="edu-content">
        <h3>Master's Of Computer Applications [MCA]</h3>
        <p className="edu-place">Aditya University</p>
        <p className="edu-year">2024 - 2026</p>
        <div className="edu-separate">
        <div className="edu-score-badge">
          <span className="score-label">GPA:</span>
          <span className="score-value">8.0 / 10</span>
        </div>
        <div className="edu-score-badge">
          <span className="score-label">Status:</span>
          <span className="score-value">Ongoing</span>
        </div></div>
      </div>
    </div>

    {/* Card 2: Intermediate */}
    <div className="education-card glass-card">
      <div className="edu-icon">🏫</div>
      <div className="edu-content">
        <h3>Bachloar Of Science [B.sc]</h3>
        <p className="edu-place">Government (Autonomus) College Rajamundry</p>
        <p className="edu-year">2021 - 2024</p>
        <div className="edu-separate">
        <div className="edu-score-badge">
          <span className="score-label">GPA:</span>
          <span className="score-value">9.24 / 10</span>
        </div>
        <div className="edu-score-badge">
          <span className="score-label">Status:</span>
          <span className="score-value">Completed</span>
        </div></div>
      </div>
    </div>

    {/* Card 3: Schooling */}
    <div className="education-card glass-card">
      <div className="edu-icon">🏫</div>
      <div className="edu-content">
        <h3>Board Of Intermediate Education [MPC]</h3>
        <p className="edu-place">Divya Junior College</p>
        <p className="edu-year">2019 - 2021</p>
        <div className="edu-separate">
        <div className="edu-score-badge">
          <span className="score-label">Percentage:</span>
          <span className="score-value">873 / 1000</span>
        </div>
        <div className="edu-score-badge">
          <span className="score-label">Status:</span>
          <span className="score-value">Completed</span>
        </div></div>
        
      </div>
    </div>
    
    {/* Card 4: Optional (or a Certification/Other) */}
    <div className="education-card glass-card">
      <div className="edu-icon">🎒</div>
      <div className="edu-content">
        <h3>Board Of Secondary School (SSC)</h3>
        <p className="edu-place">Z.P. High School</p>
        <p className="edu-year">2018-2019</p>
        <div className="edu-separate">
           <div className="edu-score-badge">
          <span className="score-label">GPA:</span>
          <span className="score-value">9.2 / 10.0</span>
        </div>
        <div className="edu-score-badge">
          <span className="score-label">Status:</span>
          <span className="score-value">Completed</span>
        </div>
       
        </div>
        
        
      </div>
    </div>
  </div>
</section>

<section id="experience" className="experience-section" data-aos="fade-right">
  <div className="section-header-centered">
    <h1 className="experience-main-title">Experience</h1>
    <div className="title-underline"></div>
  </div>

  <div className="experience-large-wrapper">
    <div className="experience-large-box glass-card">
      
      
      <div className="exp-large-header">
        <div className="exp-company-info">
          <div className="company-logo-placeholder">TH</div> 
          <div>
            <h2 className="exp-role-title">Full Stack Developer Intern</h2>
            <h3 className="exp-company-name">Technical Hub</h3>
          </div>
        </div>
        <div className="exp-time-location">
          <p className="exp-date-range">June 2025</p>
          <p className="exp-loc">Surampalem, AP</p>
        </div>
      </div>

      <div className="exp-divider"></div>


      <div className="exp-large-body">
        <div className="exp-body-left">
          <h4 className="body-label">Role Overview</h4>
          <p className="exp-summary">
           Developed MyNivas, a full-stack web application to help students easily find and manage hostel accommodations. The system allows admins to add, edit, and manage hostel details dynamically, while students can search, filter, and view hostels based on location, price, and facilities. Integrated a Node.js and MongoDB backend for real-time data handling and a React.js frontend for an interactive user experience. The project improves transparency, accessibility, and efficiency in hostel booking and management.
          </p>
          
          <h4 className="body-label">Key Technical Contributions</h4>
          <ul className="exp-bullet-list">
             <li>Built RESTful APIs with Node.js/Express.js for hostel listings, reviews, and booking management.</li>
            <li>Designed responsive and intuitive UI using React.js with custom CSS modules and animations.</li>
            <li>Implemented MongoDB schemas for Hostels, Reviews, FAQs, and Users to support dynamic data.</li>
            <li>Added review submission system with star ratings and feedback stored in MongoDB.</li>
            <li>Integrated React Slick sliders for hostel image previews and dynamic review displays.</li>
            <li>Used GitHub for version control and deployed the app on Render & Vercel for live usage.</li>
          </ul>
        </div>

        <div className="exp-body-right">
          <h4 className="body-label">Tools & Technologies Used</h4>
          <div className="exp-tech-grid">
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">GitHub</span>
            
            <span className="tech-tag">Postman</span>
          </div>

          
        </div>
      </div>

    </div>
  </div>
</section>


<section id="projects" className="projects-section" data-aos="fade-left">
  <div className="section-header-centered">
    <h1 className="projects-main-title">Featured Projects</h1>
    <div className="title-underline"></div>
    <p className="projects-subtitle">A collection of my recent work, ranging from web applications to full-stack solutions.</p>
  </div>

  <div className="projects-grid">
    {[
      {
        title: "Event Management",
        desc: "A dynamic frontend dashboard designed for seamless event discovery and real-time filtering with a focus on responsive UI/UX.",
        tech: ["Html", "CSS", "Java Script", "React"],
        image: "/event management.jpeg", 
        link: "#",
        github: "#"
      },
      {
        title: "PG Finder",
        desc: "A robust MERN stack application featuring secure user authentication and a comprehensive property search engine for student accommodations.",
        tech: ["React", "Node JS", "Express JS", "Mongo DB"],
        image: "/pg finder image.jpg",
        link: "#",
        github: "#"
      },
    ].map((project, index) => (
      <div className="project-card" key={index} style={{ "--i": index }}>
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-img" />
          <div className="project-overlay">
            <div className="overlay-btns">
              <a href={project.github} className="icon-btn">GitHub</a>
              <a href={project.link} className="icon-btn live">Live Demo</a>
            </div>
          </div>
        </div>
        
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.desc}</p>
          <div className="project-tech-stack">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



<section id="certifications" className="cert-section" data-aos="fade-right">
  <div className="section-header-centered">
    <h1 className="cert-main-title">Certifications</h1>
    <div className="title-underline"></div>
    <p className="cert-subtitle">Validating my technical skills through industry-recognized programs.</p>
  </div>

  <div className="cert-grid">
    {[
      {
        title: "Java (Basic)",
        provider: "Hacker Ranker",
        date: "2025",
        icon: "☕",
        link: "https://www.hackerrank.com/certificates/14887ee0ff77"
      },
      {
        title: "Full Stack Development",
        provider: "Technical Hub",
        date: "2025",
        icon: "💻",
        link: "https://drive.google.com/file/d/1dP4kb3R7EiS7kc3gR2dxV-g_FaDQlFYT/view?usp=drivesdk"
      },
      {
        title: "JavaScript Essentials 1 & 2",
        provider: "Cisco",
        date: "2025",
        icon: "JS",
        link: "https://www.netacad.com/dashboard"
        
      }
    ].map((cert, index) => (
      <div className="cert-card-premium" key={index} style={{ "--i": index }}>
        <div className="cert-glow-overlay"></div>
        <div className="cert-icon-box">{cert.icon}</div>
        <div className="cert-content">
          <span className="cert-date-tag">{cert.date}</span>
          <h3 className="cert-card-title">{cert.title}</h3>
          <p className="cert-card-provider">{cert.provider}</p>
          <a href={cert.link} className="cert-verify-link">
            Verify Achievement <span>→</span>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>





<section id="contact" className="contact-section" data-aos="zoom-in">
  <div className="contact-header-centered">
    <h1 className="contact-main-title">Let's Connect</h1>
    <div className="title-underline"></div>
    <p className="contact-subtitle">I'm always excited to discuss new opportunities, collaborations, or projects.</p>
  </div>

  <div className="contact-container-dual">
    <div className="contact-card-box large-box">
      <form action="https://formspree.io/f/YOUR_ID" method="POST" className="contact-form-inner">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="send-btn">
           <i className="fa-solid fa-paper-plane"></i> Send Message
        </button>
      </form>
    </div>

    <div className="contact-card-box large-box info-card">
      <h2 className="info-title">Contact Information</h2>
      <div className="info-underline"></div>
      
      <div className="info-details">
        <div className="info-item">
          <span className="info-icon"><i className="fa-solid fa-envelope"></i></span>
          <p>jalinarendra@gmail.com</p>
        </div>
        <div className="info-item">
          <span className="info-icon"><i className="fa-solid fa-phone"></i></span>
          <p>+91 9704638129</p>
        </div>
        <div className="info-item">
          <span className="info-icon"><i className="fa-solid fa-location-dot"></i></span>
          <p>Vadisaleru, Andhra Pradesh, India</p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
      <Footer/>

      





    </div>
  );
}

export default App;