import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = ["Home", "Experience", "Projects", "Prompts"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <nav className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 rounded-full px-6 py-3 flex items-center space-x-8 border border-gold/20">
        {navItems.map((item, i) => (
          <motion.div key={item} className="relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-light tracking-wide text-deepblue dark:text-cream transition-colors relative z-10"
              >
                {item}
                <AnimatePresence>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 w-full h-px bg-gold origin-left"
                  />
                </AnimatePresence>
              </NavLink>
            </motion.div>
          </motion.div>
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="ml-2 text-deepblue hover:text-gold dark:text-cream dark:hover:text-gold transition-colors"
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </nav>
    </header>
  );
};

export default Navbar; 