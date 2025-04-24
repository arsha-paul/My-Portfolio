import cleanser from "../assets/cleanser.png";
import thrift from "../assets/Thrift.png";
import library from "../assets/library.png";
import cake from "../assets/cake.png";

const mywork_data = [
  {
    id: 1,
    title: "Cleaning Service Management System",
    image: cleanser,
    category: "ERP Customization",
    year: "2025",
    description: "A sophisticated ERP solution built with Frappe and ERPNext for managing cleaning service operations with comprehensive scheduling, inventory, and client management tools.",
    technology: ["Frappe", "ERPNext", "Python", "HTML", "CSS", "JavaScript", "MariaDB"],
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["Python"],
    framework: ["Frappe", "ERPNext"],
    database: ["MariaDB"],
  },
  {
    id: 2,
    title: "Sustainable Thrift Store Platform",
    image: thrift,
    category: "E-Commerce",
    year: "2024",
    description: "An eco-conscious e-commerce solution promoting sustainable fashion with seamless user experience, built with the MERN stack.",
    technology: ["MongoDB", "Express", "Node.js", "React"],
    frontend: ["React", "Tailwind CSS"],
    backend: ["Node.js", "Express"],
    framework: ["React"],
    database: ["MongoDB"],
  },
  {
    id: 3,
    title: "Digital Library Management System",
    image: library,
    category: "Education",
    year: "2023",
    description: "An efficient system for library management, enabling streamlined book searches, lending, and user administration with PHP and MySQL.",
    technology: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["PHP"],
    framework: [],
    database: ["MySQL"],
  },
  {
    id: 4,
    title: "Custom Cake Ordering Platform",
    image: cake,
    category: "E-Commerce",
    year: "2022",
    description: "A bespoke platform for custom cake orders, featuring product customization, order tracking, and delivery scheduling.",
    technology: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["PHP"],
    framework: [],
    database: ["MySQL"],
  },
];

export default mywork_data;