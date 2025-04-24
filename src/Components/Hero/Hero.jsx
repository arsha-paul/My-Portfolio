import React, { useEffect } from "react";
import "../Hero/Hero.css";
import my_image from "../../assets/my_image.png";
import WhatsApp from "../WhatsApp";

const Hero = () => {
  useEffect(() => {
    // Particles effect
    const canvas = document.getElementById("particles");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const ctx = canvas.getContext("2d");
      const particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: `rgba(2, 205, 255, ${Math.random() * 0.3 + 0.2})`
        });
      }

      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });
        
        requestAnimationFrame(animateParticles);
      };
      
      animateParticles();

      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleDownloadResume = () => {
    const pdfUrl = "/Arsha Paul - resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Arsha Paul - resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="home">
      <canvas id="particles" className="particles-canvas"></canvas>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">Arsha Paul</span>
            <span className="title">MCA Graduate & Data Science Enthusiast</span>
          </h1>
          
          <p className="hero-description">
            Result-oriented MCA graduate with expertise in data science and analysis. 
            Experienced with frappe framework and ERP-next. Strong problem-solving 
            skills with a commitment to teamwork and clear communication of complex findings.
          </p>
          
          <div className="hero_buttons">
            <button 
              className="action_button primary" 
              onClick={() => document.querySelector('.whatsapp-button').click()}
            >
              <span className="button-content">
                <span className="button-text">Connect With Me</span>
                <span className="button-icon">→</span>
              </span>
              <span className="button-hover-effect"></span>
            </button>
            
            <button 
              className="action_button secondary" 
              onClick={handleDownloadResume}
            >
              <span className="button-content">
                <span className="button-text">Download Resume</span>
                <span className="button-icon">↓</span>
              </span>
              <span className="button-hover-effect"></span>
            </button>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="image-decoration"></div>
          <img
            src={my_image}
            alt="Arsha Paul - MCA graduate"
            className="my_profile"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Hidden WhatsApp button for functionality */}
      <div style={{ display: 'none' }}>
        <WhatsApp className="whatsapp-button" />
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;