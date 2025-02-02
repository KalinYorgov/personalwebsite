import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">Kalin Yorgov</Link>
          
          <div className="flex items-center space-x-4">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? 'text-blue-400' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/cv"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? 'text-blue-400' : ''}`
                }
              >
                CV
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? 'text-blue-400' : ''}`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/prompts"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? 'text-blue-400' : ''}`
                }
              >
                Prompts
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? 'text-blue-400' : ''}`
                }
              >
                Blog
              </NavLink>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden pb-4`}
        >
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              CV
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/prompts"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Prompts
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md ${
                  isActive ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 