import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/admission', label: 'Admission' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="bg-teal-dark text-white text-sm py-2.5 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:8328831689" className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
              <FaPhone className="text-gold text-xs" /> (832) 883-1689
            </a>
            <a href="mailto:abashir1@sublimepathways.com" className="flex items-center gap-2 hover:text-gold transition-colors duration-300">
              <FaEnvelope className="text-gold text-xs" /> abashir1@sublimepathways.com
            </a>
            <span className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="text-gold text-xs" /> Rosenberg, TX
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold tracking-widest text-xs uppercase">Heal &middot; Grow &middot; Thrive</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-xl py-1'
          : 'bg-white shadow-md py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 py-2">
              <img
                src="/logo.png"
                alt="Sublime Pathways LLC"
                className={`transition-all duration-500 logo-glow ${scrolled ? 'h-14' : 'h-16'}`}
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-teal-dark leading-tight tracking-tight">
                  Sublime Pathways
                </h1>
                <p className="text-[11px] text-green-dark tracking-[0.2em] uppercase font-medium">
                  Residential Treatment Center
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg font-semibold text-[13px] uppercase tracking-wider transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-green-dark'
                      : 'text-teal-dark hover:text-green-dark'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gold rounded-full"></span>
                  )}
                </Link>
              ))}
              <Link
                to="/admission"
                className="ml-4 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-teal-dark font-bold px-7 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 text-sm"
              >
                Get Help Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-teal-dark text-2xl p-2 hover:bg-sage rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                  location.pathname === link.path
                    ? 'bg-sage text-green-dark border-l-4 border-gold'
                    : 'text-teal-dark hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="block text-center bg-gradient-to-r from-gold to-gold-light text-teal-dark font-bold px-6 py-3 rounded-full mt-4 shadow-md"
            >
              Get Help Now
            </Link>
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3 text-sm text-gray-600">
              <a href="tel:8328831689" className="flex items-center gap-3">
                <FaPhone className="text-gold" /> (832) 883-1689
              </a>
              <a href="mailto:abashir1@sublimepathways.com" className="flex items-center gap-3">
                <FaEnvelope className="text-gold" /> abashir1@sublimepathways.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
