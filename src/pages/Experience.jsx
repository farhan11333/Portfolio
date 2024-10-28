import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaTasks } from 'react-icons/fa';
import styles from './Experience.module.css';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.experienceContainer}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={styles.pageTitle}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {experienceData.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                isSelected={selectedJob === job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </motion.div>
          
          <motion.div
            className={styles.jobDetailsContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {selectedJob ? (
                <JobDetails key={selectedJob.title} job={selectedJob} />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.jobDetailsPlaceholder}
                >
                  <FaBriefcase className="text-6xl text-gray-400 mb-4" />
                  <p className="text-xl text-gray-300">Select a job to view details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const JobCard = ({ job, isSelected, onClick }) => (
  <motion.div
    className={`${styles.jobCard} ${isSelected ? styles.selectedJob : ''}`}
    whileHover={{ scale: 1.03 }}
    onClick={onClick}
  >
    <h3 className={styles.jobTitle}>{job.title}</h3>
    <p className={styles.jobCompany}>{job.company}</p>
    <div className={styles.jobDuration}>
      <FaCalendar className="mr-2" />
      <span>{job.duration}</span>
    </div>
  </motion.div>
);

const JobDetails = ({ job }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className={styles.jobDetails}
  >
    <h3 className={styles.jobDetailsTitle}>{job.title}</h3>
    <p className={styles.jobDetailsCompany}>{job.company}</p>
    <div className={styles.jobDetailsDuration}>
      <FaCalendar className="mr-2" />
      <span>{job.duration}</span>
    </div>
    <h4 className={styles.responsibilitiesTitle}>Responsibilities:</h4>
    <ul className={styles.responsibilitiesList}>
      {job.responsibilities.map((resp, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {resp}
        </motion.li>
      ))}
    </ul>
    <h4 className={styles.technologiesTitle}>Technologies:</h4>
    <div className={styles.technologiesList}>
      {job.technologies.map((tech, index) => (
        <motion.span
          key={index}
          className={styles.technologyTag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const experienceData = [
  {
    title: "Software Engineer",
    company: "Reporteq Solutions, Lahore",
    duration: "2021 - Present",
    responsibilities: [
      "Developed and maintained web applications using Angular and React.js",
      "Implemented AWS services including S3, Cognito, and Amplify",
      "Integrated Stripe payment gateway for secure transactions",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
    technologies: ["Angular", "React.js", "AWS", "Stripe", "Node.js",".NET", "C#","Azure"]
  },
  {
    title: "Associate Software Engineer",
    company: "Cube Healthcare Systems, Abbottabad",
    duration: "2020 - 2021",
    responsibilities: [
      "Developed SQL queries and stored procedures for efficient data management",
      "Built and maintained ASP.NET MVC applications",
      "Assisted in the design and implementation of database schemas",
      "Participated in code reviews and contributed to improving development processes",
    ],
    technologies: ["SQL", "ASP.NET MVC", "C#", ".NET Framework", "Azure"]
  }
];

export default Experience;
