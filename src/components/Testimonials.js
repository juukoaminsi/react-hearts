import React, { useState, useEffect } from 'react';
import '../styles/home.css';

const testimonialData = [
  {
    id: 1,
    name: 'Sarah Nakato',
    role: 'Education Program Beneficiary',
    image: '/testimonials/sarah.jpg',
    quote: 'Touched Hearts provided me with school supplies and a scholarship that changed my life. Now I can pursue my dream of becoming a doctor and helping others in my community.',
  },
  {
    id: 2,
    name: 'David Okello',
    role: 'Healthcare Program Recipient',
    image: '/testimonials/david.jpg',
    quote: 'The medical outreach program saved my son's life. The team not only provided treatment but also educated us on preventive healthcare measures.',
  },
  {
    id: 3,
    name: 'Grace Atim',
    role: 'Community Leader',
    image: '/testimonials/grace.jpg',
    quote: 'Our village has transformed since Touched Hearts began their water project. We now have clean drinking water and our children are healthier than ever before.',
  },
  {
    id: 4,
    name: 'Joseph Muwanga',
    role: 'Skills Training Graduate',
    image: '/testimonials/joseph.jpg',
    quote: 'The vocational training I received helped me start my own carpentry business. I can now support my family and even employ two people from my community.',
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <div className="section-title">
        <h2>Impact Stories</h2>
        <p>Hear from the people whose lives have been transformed through our programs</p>
      </div>

      <div className="testimonials-carousel">
        <button className="carousel-arrow prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="testimonials-container">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="carousel-dots">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;