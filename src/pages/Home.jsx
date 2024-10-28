import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-navy-blue to-light-blue flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full space-y-8 text-center">
        <motion.img
          src="./src/assets/farhan.jpg"
          alt="Farhan Ali"
          className="w-48 h-48 rounded-full mx-auto border-4 border-gold shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-5xl font-bold text-white font-heading"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Farhan Ali
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A passionate Software Engineer dedicated to crafting innovative and efficient solutions. 
          Specializing in full-stack development with expertise in React, .NET, and cloud technologies.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <SocialLink href="https://github.com/farhanali" icon={<FaGithub />} />
          <SocialLink href="https://www.linkedin.com/in/farhan-ali-1138531b0/" icon={<FaLinkedin />} />
          <SocialLink href="mailto:farhanali11333@gmail.com" icon={<FaEnvelope />} />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="./src/assets/Farhan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-navy-blue px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Download Resume
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gold transition-colors duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="text-3xl">{icon}</span>
  </motion.a>
);

export default Home;
