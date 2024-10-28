import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaTools } from 'react-icons/fa';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.skillsContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={styles.pageTitle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory
            title="Frontend Development"
            icon={<FaCode />}
            skills={['HTML', 'CSS', 'JavaScript', 'React', 'Angular']}
            delay={0.4}
          />
          <SkillCategory
            title="Backend Development"
            icon={<FaServer />}
            skills={['.NET', 'C#', 'ASP.NET MVC', 'Node.js', 'Express']}
            delay={0.6}
          />
          <SkillCategory
            title="Cloud Solutions"
            icon={<FaCloud />}
            skills={['AWS', 'Azure', 'S3', 'Cognito', 'Amplify']}
            delay={0.8}
          />
          <SkillCategory
            title="Tools & Others"
            icon={<FaTools />}
            skills={['Git', 'Docker', 'CI/CD', 'Agile', 'Scrum']}
            delay={1}
          />
        </div>

        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className={styles.sectionTitle}>Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {softSkills.map((skill, index) => (
              <SoftSkillCard key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, icon, skills, delay }) => (
  <motion.div
    className={styles.skillCategory}
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay }}
  >
    <div className="flex items-center mb-4">
      <span className={styles.categoryIcon}>{icon}</span>
      <h3 className={styles.categoryTitle}>{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className={styles.skillItem}>
          <motion.div 
            className={styles.skillBar}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={styles.skillProgress}
              initial={{ width: 0 }}
              animate={{ width: `${Math.random() * 30 + 70}%` }}
              transition={{ duration: 1, delay: delay + index * 0.1 }}
            ></motion.div>
          </motion.div>
          <span className={styles.skillName}>{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SoftSkillCard = ({ icon, name, description }) => (
  <motion.div
    className={styles.softSkillCard}
    whileHover={{ scale: 1.05 }}
  >
    <span className={styles.softSkillIcon}>{icon}</span>
    <h4 className={styles.softSkillName}>{name}</h4>
    <p className={styles.softSkillDescription}>{description}</p>
  </motion.div>
);

const softSkills = [
  { icon: '👑', name: 'Leadership', description: 'Guiding teams to success' },
  { icon: '🤝', name: 'Teamwork', description: 'Collaborating effectively' },
  { icon: '🔄', name: 'Adaptability', description: 'Embracing change' },
  { icon: '🧩', name: 'Problem Solving', description: 'Finding creative solutions' },
];

export default Skills;
