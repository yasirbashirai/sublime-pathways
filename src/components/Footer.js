import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLeaf, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-white">
      {/* CTA Banner */}
      <div className="bg-green-dark">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start the Journey?</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Every step forward is a step toward healing. Let us walk this path together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-gold hover:bg-gold-light text-teal-dark font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Begin Admission Process
            </Link>
            <a
              href="tel:8328831689"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-all border-2 border-white/30"
            >
              Call (832) 883-1689
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Sublime Pathways" className="h-12 w-auto brightness-200" />
              <div>
                <h3 className="font-bold text-lg">Sublime Pathways</h3>
                <p className="text-xs text-gold tracking-wider">Heal &middot; Grow &middot; Thrive</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A residential treatment center dedicated to providing comprehensive care for young girls
              facing challenges of abuse, neglect, and abandonment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold text-lg mb-4 flex items-center gap-2">
              <FaLeaf /> Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Our Services' },
                { path: '/admission', label: 'Admission' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-gold transition-colors text-sm">
                    &rarr; {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-bold text-lg mb-4 flex items-center gap-2">
              <FaHeart /> Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Childcare Services</li>
              <li>Treatment Services</li>
              <li>Medication Management</li>
              <li>Psychotherapy</li>
              <li>Cognitive Behavioral Therapy</li>
              <li>Case Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:8328831689" className="flex items-start gap-3 text-gray-300 hover:text-gold transition-colors">
                <FaPhone className="text-gold mt-0.5 shrink-0" />
                (832) 883-1689
              </a>
              <a href="mailto:abashir1@sublimepathways.com" className="flex items-start gap-3 text-gray-300 hover:text-gold transition-colors">
                <FaEnvelope className="text-gold mt-0.5 shrink-0" />
                abashir1@sublimepathways.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-gold mt-0.5 shrink-0" />
                2127 Hackberry Bank Ln, Rosenberg, TX
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <FaClock className="text-gold mt-0.5 shrink-0" />
                24/7 Residential Care
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sublime Pathways LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
