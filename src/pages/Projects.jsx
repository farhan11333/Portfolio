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
    image: "/path-to-moqller-image.jpg",
    shortDescription: "A social media platform for sharing and discovering content.",
    fullDescription: "Moqller is a dynamic social media platform that allows users to share and discover various types of content. It features a responsive design, real-time updates, and a robust recommendation system.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    role: "Led the frontend development using React and implemented real-time features with Socket.io.",
    github: "https://github.com/farhanali/moqller",
    liveDemo: "https://moqller.com"
  },
  {
    id: 2,
    title: "Garving",
    image: "/path-to-garving-image.jpg",
    shortDescription: "An e-commerce platform for artisanal products.",
    fullDescription: "Garving is an e-commerce platform specializing in artisanal products. It features a user-friendly interface, secure payment integration, and a vendor management system.",
    technologies: ["Angular", "Express.js", "PostgreSQL", "Stripe", "Docker"],
    role: "Developed the backend API using Express.js and integrated Stripe for payment processing.",
    github: "https://github.com/farhanali/garving",
    liveDemo: "https://garving.com"
  },
  {
    id: 3,
    title: "Linvest",
    image: "/path-to-linvest-image.jpg",
    shortDescription: "A financial investment tracking and analysis tool.",
    fullDescription: "Linvest is a comprehensive financial investment tracking and analysis tool. It provides real-time market data, portfolio management, and advanced analytics for investors.",
    technologies: ["React", "Python", "Django", "Redis", "TensorFlow"],
    role: "Implemented the frontend dashboard using React and integrated it with the Django backend.",
    github: "https://github.com/farhanali/linvest",
    liveDemo: "https://linvest.io"
  },
  // Add more projects here...
];

export default Projects;
