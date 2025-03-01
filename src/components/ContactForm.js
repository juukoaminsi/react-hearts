import React, { useState } from 'react';
import { submitContactForm } from '../utils/api';
import { validateContactForm } from '../utils/formValidation';
import '../styles/global.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reason: 'general',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prevErrors => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit form using the API utility
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setFormSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          reason: 'general',
          newsletter: false
        });
      } else {
        setErrors({ submission: result.message || 'Form submission failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ submission: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="contact-success">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Thank You for Contacting Us!</h2>
        <p>Your message has been received. We'll get back to you as soon as possible.</p>
        <button 
          className="btn btn-primary" 
          onClick={() => setFormSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        {errors.submission && (
          <div className="error-message form-wide-error">
            {errors.submission}
          </div>
        )}
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Optional"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="reason">Reason for Contact *</label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
            >
              <option value="general">General Inquiry</option>
              <option value="donation">Donation Question</option>
              <option value="volunteer">Volunteering</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="media">Media Request</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          {errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            required
          ></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        
        <div className="form-group newsletter-checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />
            Subscribe to our newsletter to receive updates about our work
          </label>
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;