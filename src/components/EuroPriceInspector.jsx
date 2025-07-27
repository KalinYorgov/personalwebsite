import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EuroPriceInspector = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 mt-24"
    >
      <Link to="/projects" className="inline-flex items-center mb-6 text-deepblue dark:text-cream hover:text-gold transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Projects
      </Link>

      <header className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/project-images/europrice-icon.png" 
            alt="EuroPrice Inspector" 
            className="w-32 h-32 rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-deepblue dark:text-cream">EuroPrice Inspector</h1>
        <p className="text-xl text-deepblue/80 dark:text-cream/80">
          Privacy-First Price Conversion Verification App
        </p>
      </header>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Overview</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-6">
              <strong>EuroPrice Inspector</strong> is a sophisticated Flutter-based mobile application designed specifically for the Bulgarian market to address price conversion accuracy between Bulgarian Lev (BGN) and Euro (EUR). The app leverages cutting-edge AI technology to provide instant verification of price conversions at the point of sale.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-deepblue dark:text-cream">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Real-time Camera Scanning
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Users simply point their phone camera at price labels to instantly analyze both BGN and EUR prices
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  AI-Powered Price Detection
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Uses TensorFlow Lite models (YOLOv8-Nano) to detect price blocks and Google ML Kit for OCR text recognition
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Automatic Conversion Validation
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Compares detected prices against the official Bulgarian National Bank rate (1 EUR = 1.95583 BGN) with EU rounding rules
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Instant Verdict System
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Provides immediate visual feedback with green checkmarks for valid conversions or red X marks for discrepancies
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Technical Architecture</h2>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li><strong>Cross-platform:</strong> Built with Flutter 3.x for both Android and iOS</li>
              <li><strong>Offline-first:</strong> All AI processing happens locally on the device - no internet required</li>
              <li><strong>Privacy-focused:</strong> No images are uploaded without explicit user consent</li>
              <li><strong>Performance optimized:</strong> Sub-2-second scan-to-verdict latency on mid-range devices</li>
              <li><strong>Accessibility:</strong> Full support for VoiceOver/TalkBack and color-blind-friendly design</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Bilingual Support</h3>
                <p className="text-deepblue/80 dark:text-cream/80">Available in Bulgarian and English with full internationalization</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Smart Price Extraction</h3>
                <p className="text-deepblue/80 dark:text-cream/80">Advanced algorithms to parse various price formats and currencies</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Visual Overlay</h3>
                <p className="text-deepblue/80 dark:text-cream/80">Real-time bounding box detection with verdict overlays</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Settings & Customization</h3>
                <p className="text-deepblue/80 dark:text-cream/80">Language preferences, accessibility options, and privacy controls</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Use Case</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              The app addresses a specific need in Bulgaria's retail environment where stores are required to display prices in both BGN and EUR. It helps consumers quickly verify that merchants are using correct conversion rates and proper rounding, protecting against potential pricing errors or intentional overcharging.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Privacy & Security</h2>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>All image processing occurs locally on the device</li>
              <li>No personal data collection or tracking</li>
              <li>GDPR-compliant privacy notices</li>
              <li>Optional anonymous reporting with explicit user consent</li>
              <li>Code obfuscation and integrity checks for security</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed italic">
              The app represents a practical solution to a real-world problem, combining modern AI technology with user-friendly design to empower consumers with price transparency and accuracy verification.
            </p>
          </div>
        </Card>
      </section>
    </motion.div>
  );
};

export default EuroPriceInspector;