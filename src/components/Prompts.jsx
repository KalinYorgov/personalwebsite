import React from 'react';
import { motion } from 'framer-motion';

const Prompts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-8 mt-32"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-deepblue dark:text-cream">Prompts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div className="bg-cream/30 dark:bg-olivegreen/30 p-6 rounded-lg shadow-lg backdrop-blur-md transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-deepblue dark:text-cream">Coming Soon</h2>
          <p className="text-deepblue/80 dark:text-cream/80">AI prompts and examples will be added here.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Prompts; 