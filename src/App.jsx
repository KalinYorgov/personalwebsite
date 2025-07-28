import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Prompts from './components/Prompts';
import Blog from './components/Blog';
import EuroPriceInspector from './components/EuroPriceInspector';
import EuroPricePrivacyPolicy from './components/EuroPricePrivacyPolicy';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-cream dark:bg-olivegreen min-h-screen relative">
          <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-5" />
          <CustomCursor />
          <div className="relative">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/europrice-inspector" element={<EuroPriceInspector />} />
                <Route path="/projects/europrice-inspector/privacy-policy" element={<EuroPricePrivacyPolicy />} />
                <Route path="/prompts" element={<Prompts />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 