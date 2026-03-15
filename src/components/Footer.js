import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLeaf, FaHeart, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Pre-footer CTA with real image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
            alt="Peaceful nature pathway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/95 via-green-dark/90 to-teal-dark/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <img src="/logo.png" alt="Sublime Pathways" className="h-20 mx-auto mb-6 logo-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start the Journey?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Every step forward is a step toward healing. Let us walk this path together with your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-gold hover:bg-gold-light text-teal-dark font-bold px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
            >
              Begin Admission Process
            </Link>
            <a
              href="tel:8328831689"
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-10 py-4 rounded-full transition-all border-2 border-white/30 backdrop-blur-sm text-lg"
            >
              Call (832) 883-1689
            </a>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-teal-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.png" alt="Sublime Pathways" className="h-14 logo-glow" />
                <div>
                  <h3 className="font-bold text-lg leading-tight">Sublime Pathways</h3>
                  <p className="text-[10px] text-gold tracking-[0.25em] uppercase">Heal &middot; Grow &middot; Thrive</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A residential treatment center dedicated to providing comprehensive, compassionate care
                for young girls facing challenges of abuse, neglect, and abandonment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold font-bold text-base mb-5 flex items-center gap-2 uppercase tracking-wider">
                <FaLeaf className="text-sm" /> Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/services', label: 'Our Services' },
                  { path: '/admission', label: 'Admission' },
                  { path: '/about', label: 'About Us' },
                  { path: '/contact', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                      <FaChevronRight className="text-[8px] text-gold/50 group-hover:text-gold transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-gold font-bold text-base mb-5 flex items-center gap-2 uppercase tracking-wider">
                <FaHeart className="text-sm" /> Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {[
                  'Childcare Services',
                  'Treatment Services',
                  'Medication Management',
                  'Psychotherapy',
                  'Cognitive Behavioral Therapy',
                  'Case Management',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold font-bold text-base mb-5 uppercase tracking-wider">Get In Touch</h4>
              <div className="space-y-4 text-sm">
                <a href="tel:8328831689" className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <FaPhone className="text-gold text-xs" />
                  </div>
                  <div>
                    <p className="text-white font-medium">(832) 883-1689</p>
                    <p className="text-xs text-gray-500">Call us anytime</p>
                  </div>
                </a>
                <a href="mailto:abashir1@sublimepathways.com" className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <FaEnvelope className="text-gold text-xs" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs">abashir1@sublimepathways.com</p>
                    <p className="text-xs text-gray-500">Email us</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-gold text-xs" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">2127 Hackberry Bank Ln</p>
                    <p className="text-xs text-gray-500">Rosenberg, TX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <FaClock className="text-gold text-xs" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">24/7 Residential Care</p>
                    <p className="text-xs text-gray-500">Always here for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sublime Pathways LLC. All rights reserved.</p>
            <p className="text-gold/60">Residential Treatment Center &middot; Rosenberg, Texas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
