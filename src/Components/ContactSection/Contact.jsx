import React from "react";
import { motion } from "framer-motion";
import "../ContactSection/Contact.css";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6933a7d3-ecdf-4c18-b5ea-f5294ae5993f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your form has been submitted successfully! I'll contact you soon.");
      event.target.reset();
    }
  };

  return (
    <motion.section 
      className="contact" 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact_container">
        <motion.div 
          className="contact_title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get In Touch</h1>
          <div className="title_underline"></div>
        </motion.div>

        <div className="contact_content">
          <motion.div 
            className="contact_info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Let's Collaborate</h2>
            <p className="info_text">
              I'm open to new opportunities and would love to collaborate on your
              next project. Feel free to reach out anytime to discuss your ideas
              or requirements!
            </p>

            <div className="contact_details">
              <motion.div 
                className="detail_item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="detail_icon">
                  <img src={mail_icon} alt="Email" />
                </div>
                <p>arshapaul7@gmail.com</p>
              </motion.div>

              <motion.div 
                className="detail_item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="detail_icon">
                  <img src={call_icon} alt="Phone" />
                </div>
                <p>+91 8891133782</p>
              </motion.div>

              <motion.div 
                className="detail_item"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="detail_icon">
                  <img src={location_icon} alt="Location" />
                </div>
                <p>Kollam, Kerala</p>
              </motion.div>
            </div>

            <div className="social_links">
              {/* Add your social media icons/links here */}
            </div>
          </motion.div>

          <motion.form 
            className="contact_form"
            onSubmit={onSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form_group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="form_group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required 
              />
            </div>

            <div className="form_group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message" 
                rows="6" 
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="submit_btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;