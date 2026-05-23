import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerChildren({ 
  children, 
  staggerDelay = 0.1, 
  delay = 0,
  className = '' 
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
