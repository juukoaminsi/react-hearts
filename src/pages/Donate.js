import React, { useState } from 'react';
import '../styles/global.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationStatus, setDonationStatus] = useState('');

  const handleDonate = () => {
    if (donationAmount) {
      setDonationStatus('Thank you for your generous donation!');
    }
  };

  return (
    <div className="donate-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1>Support Our Work</h1>
            <p>Your donation helps us make a difference in the lives of children and communities in Uganda.</p>
          </div>
        </div>
      </section>
      
      <section className="donate-section">
        <div className="container">
          <div className="section-header">
            <h2>Make a Donation</h2>
            <p>Any amount you can donate will go a long way in supporting our programs.</p>
          </div>

          <div className="donate-form">
            <div className="form-group">
              <label htmlFor="donationAmount">Amount (USD)</label>
              <input
                type="number"
                id="donationAmount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount"
                min="1"
                required
              />
            </div>

            <button onClick={handleDonate} className="btn btn-primary">Donate</button>
          </div>

          {donationStatus && <div className="donation-status">{donationStatus}</div>}
        </div>
      </section>
    </div>
  );
};

export default Donate;