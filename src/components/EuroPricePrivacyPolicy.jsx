import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EuroPricePrivacyPolicy = () => {
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
      <Link to="/projects/europrice-inspector" className="inline-flex items-center mb-6 text-deepblue dark:text-cream hover:text-gold transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to EuroPrice Inspector
      </Link>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-deepblue dark:text-cream">Privacy Policy</h1>
        <p className="text-xl text-deepblue/80 dark:text-cream/80">
          EuroPrice Inspector
        </p>
        <p className="text-sm text-deepblue/60 dark:text-cream/60 mt-2">
          Last Updated: July 27, 2025
        </p>
      </header>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Introduction</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              EuroPrice Inspector ("we," "our," or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application designed to verify price conversions between Bulgarian Lev (BGN) and Euro (EUR).
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Our Privacy Commitment</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-4">
              <strong>EuroPrice Inspector operates on a privacy-first principle:</strong>
            </p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>All price detection and conversion verification happens entirely on your device</li>
              <li>No images or personal data are transmitted to external servers</li>
              <li>We do not collect, store, or process any personal information</li>
              <li>The app works completely offline - no internet connection required for core functionality</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Information We Do NOT Collect</h2>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Location data or GPS coordinates</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Images captured by your camera</li>
              <li>Price data or shopping patterns</li>
              <li>Usage analytics or behavior tracking</li>
              <li>Contact lists or social media information</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Camera Usage</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-4">
              The app requires camera access to scan price labels. Here's how we handle camera data:
            </p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>Camera images are processed in real-time on your device only</li>
              <li>No images are saved, stored, or transmitted</li>
              <li>All image processing uses on-device AI models (TensorFlow Lite and ML Kit)</li>
              <li>Once price detection is complete, image data is immediately discarded</li>
              <li>Camera permission can be revoked at any time through your device settings</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Local Storage</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-4">
              The app may store the following information locally on your device:
            </p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>Language preference (Bulgarian or English)</li>
              <li>App settings and preferences</li>
              <li>Cached AI models for offline functionality</li>
            </ul>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mt-4">
              This data never leaves your device and can be cleared by uninstalling the app.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Third-Party Services</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              EuroPrice Inspector does not integrate with any third-party analytics, advertising, or tracking services. The app does not contain ads and does not share data with any third parties.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Security</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-4">
              We implement security measures to protect the app:
            </p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>Code obfuscation to prevent tampering</li>
              <li>Integrity checks to ensure app authenticity</li>
              <li>No network communication eliminates data interception risks</li>
              <li>All processing happens in isolated app sandbox</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Children's Privacy</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              EuroPrice Inspector is a general audience app that does not collect any personal information from users of any age. The app is safe for use by everyone, including children, as it does not collect, store, or transmit any personal data.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">GDPR Compliance</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              As we do not collect, process, or store any personal data, most GDPR provisions do not apply. However, we are committed to transparency and user privacy rights. Since no personal data is collected, there is no data to access, correct, delete, or port.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Changes to This Policy</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected in the app with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Contact Information</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or the app's privacy practices, please contact us through the app store where you downloaded EuroPrice Inspector.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed text-center italic">
              Your privacy is our priority. EuroPrice Inspector is designed to empower consumers while respecting their privacy completely.
            </p>
          </div>
        </Card>
      </section>
    </motion.div>
  );
};

export default EuroPricePrivacyPolicy;