import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300">Project details will be added here.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 