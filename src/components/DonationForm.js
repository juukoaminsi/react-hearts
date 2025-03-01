import React, { useState } from 'react';
import { processPayment } from '../utils/api';
import { validateDonationForm } from '../utils/formValidation';
import '../styles/global.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    amount: '',
    customAmount: '',
    frequency: 'oneTime',
    dedicateGift: false,
    dedicationType: 'inHonor',
    recipientName: '',
    notification: false,
    recipientEmail: '',
    message: '',
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500];

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

  const handleAmountSelect = (amount) => {
    setFormData(prevState => ({
      ...prevState,
      amount: amount,
      customAmount: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateDonationForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Calculate final amount (either predefined or custom)
      const donationAmount = formData.amount || formData.customAmount;
      
      // Prepare payment data
      const paymentData = {
        ...formData,
        amount: donationAmount
      };
      
      // Process payment using the API utility
      const result = await processPayment(paymentData);
      
      if (result.success) {
        setFormSubmitted(true);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          amount: '',
          customAmount: '',
          frequency: 'oneTime',
          dedicateGift: false,
          dedicationType: 'inHonor',
          recipientName: '',
          notification: false,
          recipientEmail: '',
          message: '',
          paymentMethod: 'card'
        });
      } else {
        setErrors({ submission: result.message || 'Payment processing failed. Please try again.' });
      }
    } catch (error) {
      setErrors({ submission: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="donation-success">
        <div className="success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2>Thank You for Your Donation!</h2>
        <p>Your generosity helps us continue our mission to support underprivileged children and communities in Uganda.</p>
        <p>A confirmation email has been sent to your email address.</p>
        <button 
          className="btn btn-primary" 
          onClick={() => setFormSubmitted(false)}
        >
          Make Another Donation
        </button>
      </div>
    );
  }

  return (
    <div className="donation-form-container">
      <form className="donation-form" onSubmit={handleSubmit}>
        {errors.submission && (
          <div className="error-message form-wide-error">
            {errors.submission}
          </div>
        )}
        
        <div className="form-section">
          <h3>Donation Amount</h3>
          <div className="amount-options">
            {predefinedAmounts.map(amount => (
              <button
                key={amount}
                type="button"
                className={`amount-btn ${formData.amount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </button>
            ))}
            <div className="custom-amount">
              <label htmlFor="customAmount">Custom Amount ($):</label>
              <input
                type="number"
                id="customAmount"
                name="customAmount"
                value={formData.customAmount}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setFormData(prev => ({ ...prev, amount: '' }));
                  }
                }}
                min="1"
                placeholder="Enter amount"
              />
              {errors.amount && <div className="error-message">{errors.amount}</div>}
            </div>
          </div>
          
          <div className="donation-frequency">
            <h4>Frequency</h4>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="frequency"
                  value="oneTime"
                  checked={formData.frequency === 'oneTime'}
                  onChange={handleInputChange}
                />
                One-time
              </label>
              <label>
                <input
                  type="radio"
                  name="frequency"
                  value="monthly"
                  checked={formData.frequency === 'monthly'}
                  onChange={handleInputChange}
                />
                Monthly
              </label>
              <label>
                <input
                  type="radio"
                  name="frequency"
                  value="quarterly"
                  checked={formData.frequency === 'quarterly'}
                  onChange={handleInputChange}
                />
                Quarterly
              </label>
              <label>
                <input
                  type="radio"
                  name="frequency"
                  value="annually"
                  checked={formData.frequency === 'annually'}
                  onChange={handleInputChange}
                />
                Annually
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3>Your Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
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
        
        <div className="form-section">
          <h3>Dedicate Your Gift (Optional)</h3>
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="dedicateGift"
                checked={formData.dedicateGift}
                onChange={handleInputChange}
              />
              I'd like to dedicate this gift
            </label>
          </div>
          
          {formData.dedicateGift && (
            <div className="dedication-options">
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="dedicationType"
                    value="inHonor"
                    checked={formData.dedicationType === 'inHonor'}
                    onChange={handleInputChange}
                  />
                  In Honor Of
                </label>
                <label>
                  <input
                    type="radio"
                    name="dedicationType"
                    value="inMemory"
                    checked={formData.dedicationType === 'inMemory'}
                    onChange={handleInputChange}
                  />
                  In Memory Of
                </label>
              </div>
              
              <div className="form-group">
                <label htmlFor="recipientName">Recipient Name</label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="notification"
                    checked={formData.notification}
                    onChange={handleInputChange}
                  />
                  Send notification about this gift
                </label>
              </div>
              
              {formData.notification && (
                <div className="form-group">
                  <label htmlFor="recipientEmail">Recipient Email</label>
                  <input
                    type="email"
                    id="recipientEmail"
                    name="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={handleInputChange}
                  />
                  {errors.recipientEmail && (
                    <div className="error-message">{errors.recipientEmail}</div>
                  )}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Add a personal message..."
                ></textarea>
              </div>
            </div>
          )}
        </div>
        
        <div className="form-section">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <div className="radio-group payment-radio">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                <i className="far fa-credit-card"></i> Credit/Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                <i className="fab fa-paypal"></i> PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mobileMoney"
                  checked={formData.paymentMethod === 'mobileMoney'}
                  onChange={handleInputChange}
                />
                <i className="fas fa-mobile-alt"></i> Mobile Money
              </label>
            </div>
            
            {/* Card payment form fields would be conditionally rendered here */}
            {formData.paymentMethod === 'card' && (
              <div className="card-payment-fields">
                <p className="secure-payment-notice">
                  <i className="fas fa-lock"></i> Your payment information is securely processed
                </p>
                <p className="payment-redirect-notice">
                  You will be redirected to our secure payment processor to complete your donation.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="donation-summary">
          <h3>Donation Summary</h3>
          <div className="summary-details">
            <div className="summary-item">
              <span>Donation Amount:</span>
              <span>${formData.amount || formData.customAmount || 0}</span>
            </div>
            <div className="summary-item">
              <span>Frequency:</span>
              <span>
                {formData.frequency === 'oneTime' 
                  ? 'One-time donation' 
                  : `${formData.frequency.charAt(0).toUpperCase() + formData.frequency.slice(1)} donation`}
              </span>
            </div>
          </div>
        </div>
        
        <div className="form-disclaimer">
          <p>
            By proceeding, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>. 
            Touched Hearts is a registered non-profit organization.
          </p>
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary btn-large" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Complete Donation'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;