import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="absolute left-1 w-4 h-4 rounded-full bg-white shadow-lg"
        animate={{
          x: isDarkMode ? 24 : 0,
          backgroundColor: isDarkMode ? '#FDB813' : '#FFFFFF',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Sun/Moon icons */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          animate={{
            rotate: isDarkMode ? 360 : 0,
            scale: 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {isDarkMode ? (
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              className="text-gray-800"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
              className="text-yellow-500"
            />
          )}
        </motion.svg>
      </motion.div>
    </button>
  );
};

export default ThemeToggle; 