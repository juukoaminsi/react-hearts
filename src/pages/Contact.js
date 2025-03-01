import React, { useState } from 'react';
import '../styles/global.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
    // You can integrate with a backend service for form submission here
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please reach out with any questions or inquiries.</p>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Fill out the form below to contact us directly.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          {formStatus && <div className="form-status">{formStatus}</div>}
        </div>
      </section>
    </div>
  );
};

export default Contact;