import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Touched Hearts Logo" />
          <span>Touched Hearts</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/our-work" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Our Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/get-involved" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Get Involved
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item donate-button">
            <Link to="/donate" className="nav-link-donate" onClick={() => setIsMobileMenuOpen(false)}>
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;