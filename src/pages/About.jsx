import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.aboutContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={styles.pageTitle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.imageContainer}
          >
            <img src="/assets/skills.png" alt="Farhan Ali" className={styles.profileImage} />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className={styles.sectionTitle}>Professional Summary</h3>
            <p className={styles.sectionText}>
              As a dedicated Software Engineer, I bring a wealth of experience in developing robust and scalable applications. 
              My expertise spans across frontend and backend technologies, with a particular focus on creating intuitive user experiences 
              and implementing efficient server-side solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className="space-y-8 mt-8">
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ValueCard = ({ icon, title }) => (
  <motion.div
    className={styles.valueCard}
    whileHover={{ scale: 1.05 }}
  >
    <span className={styles.valueIcon}>{icon}</span>
    <span className={styles.valueTitle}>{title}</span>
  </motion.div>
);

const EducationCard = ({ degree, institution, year }) => (
  <motion.div
    className={styles.educationCard}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-start">
      <FaGraduationCap className={styles.educationIcon} />
      <div>
        <h4 className={styles.educationDegree}>{degree}</h4>
        <p className={styles.educationInstitution}>{institution}</p>
        <p className={styles.educationYear}>{year}</p>
      </div>
    </div>
  </motion.div>
);

const values = [
  { icon: <FaCode />, title: "Problem Solver" },
  { icon: <FaLightbulb />, title: "Innovative" },
  { icon: <FaUsers />, title: "Team Player" },
  { icon: <FaGraduationCap />, title: "Continuous Learner" },
];

const educationData = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "Federal Urdu, Islamabad",
    year: "2016 - 2020"
  },
  {
    degree: "Intermediate",
    institution: "Fazaia Degree College, Risalpur",
    year: "2014 - 2016"
  },
  {
    degree: "Matric",
    institution: "Tameer-i-Wattan Public School, Abbottabad",
    year: "2012 - 2014"
  }
];

export default About;
