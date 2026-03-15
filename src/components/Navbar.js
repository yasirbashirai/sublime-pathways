import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      {/* Top bar */}
      <div className="bg-teal-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:8328831689" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaPhone className="text-gold" /> (832) 883-1689
            </a>
            <a href="mailto:abashir1@sublimepathways.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaEnvelope className="text-gold" /> abashir1@sublimepathways.com
            </a>
          </div>
          <div className="text-gold font-semibold tracking-wide">
            Heal &middot; Grow &middot; Thrive
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Sublime Pathways" className="h-16 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-teal-dark leading-tight">Sublime Pathways</h1>
                <p className="text-xs text-green-dark tracking-wider">Residential Treatment Center</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-green-dark text-white shadow-md'
                      : 'text-teal-dark hover:bg-sage hover:text-green-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admission"
                className="ml-3 bg-gold hover:bg-gold-light text-teal-dark font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Get Help Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-teal-dark text-2xl p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                  location.pathname === link.path
                    ? 'bg-green-dark text-white'
                    : 'text-teal-dark hover:bg-sage'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="block text-center bg-gold text-teal-dark font-bold px-6 py-3 rounded-full mt-4"
            >
              Get Help Now
            </Link>
            <div className="pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
              <a href="tel:8328831689" className="flex items-center gap-2">
                <FaPhone className="text-gold" /> (832) 883-1689
              </a>
              <a href="mailto:abashir1@sublimepathways.com" className="flex items-center gap-2">
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
