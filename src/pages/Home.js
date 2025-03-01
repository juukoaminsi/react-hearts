import React from 'react';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  // Sample data for programs section
  const programs = [
    {
      id: 1,
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and educational resources to underprivileged children across Uganda.',
      icon: 'fas fa-book-open',
      image: '/programs/education.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Initiatives',
      description: 'Delivering essential healthcare services, medical outreach, and health education to communities in need.',
      icon: 'fas fa-heartbeat',
      image: '/programs/healthcare.jpg'
    },
    {
      id: 3,
      title: 'Community Development',
      description: 'Building sustainable communities through clean water projects, infrastructure, and economic empowerment programs.',
      icon: 'fas fa-hands-helping',
      image: '/programs/community.jpg'
    }
  ];

  // Sample data for impact metrics
  const impactData = [
    { metric: '10,000+', label: 'Children Supported' },
    { metric: '50+', label: 'Communities Served' },
    { metric: '25+', label: 'Schools Built' },
    { metric: '100,000+', label: 'Lives Impacted' }
  ];

  // Sample data for recent news
  const recentNews = [
    {
      id: 1,
      title: 'New School Opening in Kampala',
      excerpt: 'Touched Hearts is proud to announce the opening of our newest school facility in the eastern region of Kampala...',
      date: 'February 15, 2025',
      image: '/news/school-opening.jpg',
      link: '/blog/new-school-opening'
    },
    {
      id: 2,
      title: 'Clean Water Initiative Reaches Milestone',
      excerpt: 'Our clean water program has successfully provided access to clean drinking water to over 50,000 people across rural communities...',
      date: 'January 25, 2025',
      image: '/news/water-initiative.jpg',
      link: '/blog/water-initiative-milestone'
    },
    {
      id: 3,
      title: 'Volunteer Registration Now Open',
      excerpt: 'Join our summer volunteer program and make a difference in the lives of children in Uganda. Registration is now open for...',
      date: 'January 10, 2025',
      image: '/news/volunteer-program.jpg',
      link: '/blog/volunteer-registration'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Touched Hearts</h2>
              <p>
                Founded in 2010, Touched Hearts is a passionate humanitarian organization dedicated to 
                improving the lives of underprivileged children and communities across Uganda.
              </p>
              <p>
                Our mission is to create sustainable change through education, healthcare, and community 
                development programs that empower individuals and communities to build a better future.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img src="/about-home.jpg" alt="Children in a classroom" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Programs</h2>
            <p>Discover how we're making a difference through our key initiatives</p>
          </div>
          
          <div className="programs-grid">
            {programs.map(program => (
              <div className="program-card" key={program.id}>
                <div className="program-icon">
                  <i className={program.icon}></i>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to="/our-work" className="program-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="programs-cta">
            <Link to="/our-work" className="btn btn-primary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header light">
            <h2>Our Impact</h2>
            <p>The difference we've made together</p>
          </div>
          
          <div className="impact-metrics">
            {impactData.map((item, index) => (
              <div className="impact-metric" key={index}>
                <div className="metric-number">{item.metric}</div>
                <div className="metric-label">{item.label}</div>
              </div>
            ))}
          </div>
          
          <div className="impact-cta">
            <Link to="/about#impact" className="btn btn-light">
              See Our Full Impact Report
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Get Involved Section */}
      <section className="get-involved-section">
        <div className="container">
          <div className="section-header">
            <h2>How You Can Help</h2>
            <p>Join us in making a difference in the lives of those in need</p>
          </div>
          
          <div className="involvement-options">
            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Donate</h3>
              <p>
                Your financial support helps us provide education, healthcare, and resources to 
                underprivileged children and communities.
              </p>
              <Link to="/donate" className="btn btn-primary">
                Donate Now
              </Link>
            </div>
            
            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3>Volunteer</h3>
              <p>
                Share your skills and time to make a direct impact on our programs and the 
                communities we serve.
              </p>
              <Link to="/get-involved#volunteer" className="btn btn-primary">
                Become a Volunteer
              </Link>
            </div>
            
            <div className="involvement-card">
              <div className="involvement-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Partner with Us</h3>
              <p>
                Organizations and businesses can partner with us to create sustainable impact 
                through collaboration.
              </p>
              <Link to="/get-involved#partner" className="btn btn-primary">
                Explore Partnerships
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Recent News & Updates</h2>
            <p>Stay informed about our latest activities and stories from the field</p>
          </div>
          
          <div className="news-grid">
            {recentNews.map(news => (
              <div className="news-card" key={news.id}>
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="news-content">
                  <div className="news-date">{news.date}</div>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <Link to={news.link} className="news-link">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="news-cta">
            <Link to="/blog" className="btn btn-secondary">
              View All News & Stories
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Connected</h2>
            <p>
              Subscribe to our newsletter for updates on our programs, success stories, 
              and ways to get involved.
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
              <div className="privacy-note">
                <small>We respect your privacy. Unsubscribe at any time.</small>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;