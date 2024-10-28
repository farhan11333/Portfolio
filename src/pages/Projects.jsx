import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.projectsContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={styles.pageTitle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className={styles.projectGrid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            opacity: selectedProject ? 0.3 : 1
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCard = ({ project, onClick, index }) => (
  <motion.div
    className={styles.projectCard}
    whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
    onClick={onClick}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    <div className={styles.projectImageContainer}>
      <img src={project.image} alt={project.title} className={styles.projectImage} />
      <div className={styles.projectOverlay}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
      </div>
    </div>
    <div className={styles.projectTags}>
      {project.technologies.slice(0, 3).map((tech, index) => (
        <span key={index} className={styles.projectTag}>
          {tech}
        </span>
      ))}
      {project.technologies.length > 3 && (
        <span className={styles.projectTag}>
          +{project.technologies.length - 3}
        </span>
      )}
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={styles.modalOverlay}
    onClick={onClose}
  >
    <motion.div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <button className={styles.closeButton} onClick={onClose}>
        <FaTimes />
      </button>
      <h3 className={styles.modalTitle}>{project.title}</h3>
      <img src={project.image} alt={project.title} className={styles.modalImage} />
      <p className={styles.modalDescription}>{project.fullDescription}</p>
      <div className={styles.modalSection}>
        <h4 className={styles.modalSubtitle}>Technologies Used:</h4>
        <div className={styles.modalTags}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.modalTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.modalSection}>
        <h4 className={styles.modalSubtitle}>My Role:</h4>
        <p className={styles.modalText}>{project.role}</p>
      </div>
      <div className={styles.modalLinks}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.modalLink}
        >
          <FaExternalLinkAlt className="mr-2" /> Live Demo
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const projectsData = [
  {
    id: 1,
    title: "Moqller",
    image: "/assets/moqller.png",
    shortDescription: "An e-commerce platform for artisanal products.",
    fullDescription: "Moqller is a dynamic social media platform that allows users to share and discover various types of content. It features a responsive design, real-time updates, and a robust recommendation system.",
    technologies: ["Angular", ".NET", "SQL", "Socket.io", "Azure"],
    role: "Led the frontend development using Angular and implemented real-time features with Socket.io.",
    github: "https://github.com/farhanali/moqller",
    liveDemo: "https://moqller.com"
  },
  {
    id: 2,
    title: "Garving",
    image: "/assets/garving.png",
    shortDescription: "An educational platform for buying services and products using video call services.",
    fullDescription: "Garving is an e-commerce platform specializing in artisanal products. It features a user-friendly interface, secure payment integration, and a vendor management system.",
    technologies: ["Angular", "Express.js", "SQL", "Stripe", "Socket.io", "Docker", ".NET", "Twillio"],
    role: "Developed the backend API using .NET and integrated Stripe for payment processing.",
    github: "https://github.com/farhanali/garving",
    liveDemo: "https://garving.com"
  },
  {
    id: 3,
    title: "SalusHealth",
    image: "/assets/salushealth.png",
    shortDescription: "A cardiac rehab services application.",
    fullDescription: "SalusHealth provide cardiac rehab services at the comfort of home. Client is solving a problem by allowing cardiac patients to self-monitor their health vitals through guided workout or through physician guided sessions remotely by using the application. Business logic states, once patients are done with cardiac surgery, they are required to complete a 3 months cardiac rehab in the hospital. After this period, self-monitoring phase kicks off. Mostly cardiac patients fall under upper-age bracket, so it becomes difficult for them to visit facilities to go through this phase. Client’s platform would address the issue by allowing self-monitoring phase to be completed at home.",
technologies: ["NodeJs", "Express.js", "SQL Server", "AWS", "React", "Healthie","Socket.io","GraphQL"],
  role: "Implemented the backend functionality and frontend integration.",
    github: "https://github.com/farhanali/linvest",
      liveDemo: "https://devmygovaweb.azurewebsites.net/"
    
  },
  {
    id: 4,
    title: "SketchBox",
    image: "/assets/sketchbox.png",
    shortDescription: "A self-taught artists doing its best to help the world create more art.",
    fullDescription: "SketchBox is an innovative monthly subscription service dedicated to empowering artists and creatives by providing them with a curated selection of high-quality materials and resources. Our mission is to inspire individuals at all skill levels— from beginners to seasoned professionals— to explore new techniques and unleash their full creative potential.",
    technologies: ["React", "Node.js", "Express.js", "SQL Server", "AWS", "Klaviyo", "Cratejoy"],
    role: "Implemented the backend functionality and cron jobs with third party APIs.",
    github: "https://github.com/farhanali/linvest",
    liveDemo: "https://getsketchbox.com/"
  },
  {
    id: 5,
    title: "Brandco",
    image: "/assets/brandco.png",
    shortDescription: "An inventory management application for the fire industry.",
    fullDescription: "Brandco are proud of there excellent history of reliable and timely service work in the fire industry. There goal is simple: to provide fast, professional service at competitive prices. Whether you are starting a new business or just need an inspection, They want to be the fire service company you call first. No job is too large or too small for Brandco. There highly skilled service team will assess your needs and discuss your options with you..",
    technologies: [".NET MVC", "SQL Server", "Azure"],
    role: "Implemented the backend functionality and frontend integration.",
    github: "https://github.com/farhanali/linvest",
    liveDemo: "https://brandco.azurewebsites.net/"
  },
  {
    id: 6,
    title: "MyGova",
    image: "/assets/gova.png",
    shortDescription: "A document and loan management  application.",
    fullDescription: "MyGOVA aims to develop a custom solution for their customer to provide a secure and easy-to use platform for their document management and loan application needs. The new MyGOVA portal will be the hub for all MyGOVA services, accessible through a single sign- on experience using the same credentials as The Edge.The portal will feature a clean and intuitive interface,designed to provide users with quick and easy access to all the services they need.",
technologies: [".NET", "SQL Server", "Azure", "React", "Hubspot"],
  role: "Implemented the backend functionality and frontend integration.",
    github: "https://github.com/farhanali/linvest",
      liveDemo: "https://devmygovaweb.azurewebsites.net/"
  },
  {
    id: 7,
    title: "Linvest",
    image: "/assets/linvest.png",
    shortDescription: "A financial investment tracking and analysis tool.",
    fullDescription: "Linvest is a comprehensive financial investment tracking and analysis tool. It provides real-time market data, portfolio management, and advanced analytics for investors.",
    technologies: ["React", "Node.js", "Express.js", "SQL Server", "AWS"],
    role: "Implemented the frontend dashboard using React and backend using NodeJs also integrated it with the NodeJs backend.",
    github: "https://github.com/farhanali/linvest",
    liveDemo: "https://linvest.io"
  },
  {
    id: 8,
    title: "LumberClick",
    image: "/assets/lumber.png",
    shortDescription: "The Lumber Estimation Portal.",
    fullDescription: "The Lumber Estimation Portal is a cloud-based solution to be developed for the client to streamline and enhance the lumber estimation process for both customers and suppliers. The primary goal is to facilitate accurate material assessments for customer projects through the creation of detailed 3D models, referred to as 'takeoffs.' This collaborative platform enables seamless communication and collaboration between various roles involved in the estimation process",
technologies: ["NodeJs", "Express.js", "MongoDB", "AWS", "Angular", "AutoDesk","Socket.io"],
  role: "Implemented the backend functionality and frontend integration.",
    github: "https://github.com/farhanali/linvest",
      liveDemo: "https://www.portal.lumberclick.com/"
  },
  // Add more projects here...
];

export default Projects;
