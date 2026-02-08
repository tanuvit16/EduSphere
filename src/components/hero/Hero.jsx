import React from 'react';
import './hero.css';
import darkArrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero container">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <button className="btn glow-btn">
          Explore More <img src={darkArrow} alt="arrow" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
