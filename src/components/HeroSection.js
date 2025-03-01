import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Empowering Communities, Transforming Lives</h1>
        <p>
          Touched Hearts is dedicated to providing education, healthcare, and sustainable
          development opportunities to underprivileged children and communities across Uganda.
        </p>
        <div className="hero-buttons">
          <Link to="/donate" className="btn btn-primary">
            Donate Now
          </Link>
          <Link to="/get-involved" className="btn btn-secondary">
            Become a Volunteer
          </Link>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Children Helped</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Communities Served</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>Years of Service</p>
        </div>
        <div className="stat-item">
          <h3>200+</h3>
          <p>Active Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;