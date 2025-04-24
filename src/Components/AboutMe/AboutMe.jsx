import React from "react";
import { motion } from "framer-motion";
import "../AboutMe/AboutMe.css";
import profilePic from "../../assets/my_image.png";

const AboutMe = () => {
  const journeyItems = [
    {
      year: "2025",
      degree: "MCA (Pursuing)",
      institution: "College of Engineering Vadakara",
      description: "Master's in Computer Applications (Expected completion 2025)"
    },
    {
      year: "2023",
      degree: "BCA",
      institution: "Shree Vidhyadhiraja College of Arts and Science, Karunagapally",
      description: "Bachelor's in Computer Applications"
    },
    {
      year: "2020",
      degree: "12th Standard",
      institution: "DVNSSHSS Poovattoor",
      description: "Higher secondary education in Computer Science"
    },
    {
      year: "2018",
      degree: "10th Standard",
      institution: "Sidddhartha Central School, Puthoor",
      description: "Completed secondary education with distinction"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const profileVariants = {
    hidden: { opacity: 0, rotateY: 45, x: -50 },
    visible: {
      opacity: 1,
      rotateY: 15,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }
    },
    hover: {
      rotateY: 0,
      y: -10,
      transition: { duration: 0.6 }
    }
  };

  const bioVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.2,
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1]
      }
    })
  };

  return (
    <div className="about-container" id="about">
      {/* About Me Section */}
      <motion.section 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="profile-container"
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="profile-wrapper">
              <div className="profile-frame">
                <div className="profile-shine"></div>
                <motion.img 
                  src={profilePic} 
                  alt="Profile" 
                  className="profile-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="profile-dots">
                  {[...Array(24)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="profile-dot"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: 0.8 + i * 0.05,
                          duration: 0.3
                        } 
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="profile-shadow"></div>
            </div>
          </motion.div>
          
          <div className="bio-content">
            {[
              "MCA student and Product Engineer at Efeone Pvt. Limited, with hands-on experience in full-stack development using PHP, HTML, JavaScript, Python, and the MERN stack.",
              "Currently focused on developing expertise in the Frappe framework and ERPNext as part of my project, aiming to gain deeper knowledge of ERP systems and their integration with business processes."
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={bioVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ x: 5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* My Journey Section */}
      <motion.section 
        className="journey-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          My Journey
        </motion.h2>
        
        <motion.div 
          className="timeline"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
          
          {journeyItems.map((item, index) => (
  <motion.div 
    key={index}
    className="timeline-item"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }
    }}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }}
  >
    <motion.div 
      className="timeline-year"
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "#2563eb",
        color: "white",
        boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)"
      }}
    >
      {item.year}
    </motion.div>
    
    <motion.div 
      className="timeline-content"
      whileHover={{
        x: 5,
        transition: { delay: 0.1 }
      }}
    >
      <h3>{item.degree}</h3>
      <h4>{item.institution}</h4>
      <p>{item.description}</p>
    </motion.div>
    
    <motion.div 
      className="timeline-dot"
      whileHover={{ 
        scale: 1.3,
        boxShadow: "0 0 0 8px rgba(37, 99, 235, 0.2)",
        background: "linear-gradient(135deg, #2563eb, #3b82f6)"
      }}
    />
  </motion.div>
))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutMe;