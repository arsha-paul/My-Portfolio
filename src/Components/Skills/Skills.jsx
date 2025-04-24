import React from "react";
import { motion } from "framer-motion";
import "../Skills/Skills.css";
// Skills logos
import react from "../../assets/react.png";
import mariadb from "../../assets/mariadb.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import reactlogo from "../../assets/react_icon.png";
import mongodb from "../../assets/mongodb.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import python from "../../assets/python.png";
import erpnext from "../../assets/erpnext.png";
import frappe from "../../assets/frappe.png";

const skillsData = [
  { icon: reactlogo, name: "React", delay: 0.1 },
  { icon: mongodb, name: "MongoDB", delay: 0.2 },
  { icon: php, name: "PHP", delay: 0.3 },
  { icon: mysql, name: "MySQL", delay: 0.4 },
  { icon: js, name: "JavaScript", delay: 0.5 },
  { icon: html, name: "HTML", delay: 0.6 },
  { icon: python, name: "Python", delay: 0.6 },
  { icon: frappe, name: "Frappe", delay: 0.6 },
  { icon: erpnext, name: "Erpnext", delay: 0.6 },
  { icon: react, name: "React", delay: 0.6 },
  { icon: mariadb, name: "MariaDB", delay: 0.6 },
  { icon: css, name: "CSS", delay: 0.7 }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div 
        className="skills_title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My <span>Skills</span></h1>
        <div className="title_decoration"></div>
      </motion.div>

      <div className="skills_container">
        <motion.div 
          className="skills_grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill_card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                scale: 1.1,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 10,
                delay: skill.delay
              }}
              viewport={{ once: true }}
            >
              <div className="skill_icon_container">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill_icon"
                />
              </div>
              <p className="skill_name">{skill.name}</p>
              <div className="skill_shine"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;