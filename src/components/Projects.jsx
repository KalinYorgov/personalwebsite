import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-8 mt-32"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-deepblue dark:text-cream">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <Link to="/projects/europrice-inspector">
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="/assets/project-images/europrice-icon.png"
                    alt="EuroPrice Inspector"
                    className="w-24 h-24 rounded-xl shadow-md"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  EuroPrice Inspector
                </h2>
                <p className="text-deepblue/80 dark:text-cream/80">
                  A privacy-first mobile app that helps Bulgarian shoppers instantly verify if Euro prices are correctly converted from Bulgarian Lev (BGN) prices using real-time camera scanning and AI-powered price detection.
                </p>
              </div>
            </Card>
          </motion.div>
        </Link>

        <Link to="/projects/namevoxel">
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="/assets/project-images/namevoxel-icon.svg"
                    alt="NameVoxel"
                    className="w-24 h-24 rounded-xl shadow-md"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-4 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  NameVoxel
                </h2>
                <p className="text-deepblue/80 dark:text-cream/80">
                  An AI-powered domain name generator that helps you find the perfect domain for your next project in minutes with instant availability checking and creative, brandable suggestions.
                </p>
              </div>
            </Card>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects; 