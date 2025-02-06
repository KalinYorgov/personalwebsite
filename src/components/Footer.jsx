import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex gap-6">
          <a
            href="https://github.com/kalinyorgov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deepblue hover:text-gold dark:text-cream dark:hover:text-gold transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/kalinyorgov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deepblue hover:text-gold dark:text-cream dark:hover:text-gold transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 