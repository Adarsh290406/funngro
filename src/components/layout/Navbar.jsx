import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBrandPage = location.pathname === '/for-brands';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
    });
    return () => cancelAnimationFrame(handle);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Funngro
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {!isBrandPage ? (
            <>
              <Link to="/" className="nav-link active">Teens</Link>
              <Link to="/for-brands" className="nav-link">Companies</Link>
              <a href="#parents" className="nav-link">Parents</a>
              <a href="#about" className="nav-link">About Us</a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">Teens</Link>
              <Link to="/for-brands" className="nav-link active">Companies</Link>
              <a href="#why-funngro" className="nav-link">Platform</a>
              <a href="#capabilities" className="nav-link">Capabilities</a>
              <a href="#pricing" className="nav-link">Pricing</a>
            </>
          )}
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          {isBrandPage ? (
            <a href="#contact" className="btn btn-primary btn-cta">Get Started</a>
          ) : (
            <a href="#download" className="btn btn-primary btn-cta">Get App</a>
          )}
          
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {!isBrandPage ? (
            <>
              <Link to="/" className="mobile-nav-link">Teens</Link>
              <Link to="/for-brands" className="mobile-nav-link">Companies</Link>
              <a href="#parents" className="mobile-nav-link">Parents</a>
              <a href="#about" className="mobile-nav-link">About Us</a>
            </>
          ) : (
            <>
              <Link to="/" className="mobile-nav-link">Teens</Link>
              <Link to="/for-brands" className="mobile-nav-link">Companies</Link>
              <a href="#why-funngro" className="mobile-nav-link">Platform</a>
              <a href="#capabilities" className="mobile-nav-link">Capabilities</a>
              <a href="#pricing" className="mobile-nav-link">Pricing</a>
            </>
          )}
          {isBrandPage ? (
            <a href="#contact" className="btn btn-primary btn-cta-mobile">Get Started</a>
          ) : (
            <a href="#download" className="btn btn-primary btn-cta-mobile">Get App</a>
          )}
        </nav>
      </div>
    </header>
  );
}
