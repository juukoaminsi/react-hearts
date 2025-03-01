import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>Touched Hearts</h3>
          <p>
            Helping underprivileged children and communities in Uganda through education, 
            healthcare, and sustainable development programs.
          </p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Charity Street, Kampala, Uganda
          </p>
          <p>
            <i className="fas fa-phone"></i> +256 700 123 456
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@touchedhearts.org
          </p>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates on our work and impact stories.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Touched Hearts. All Rights Reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;