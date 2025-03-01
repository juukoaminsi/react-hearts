import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Namukasa',
      role: 'Founder & Executive Director',
      bio: 'Sarah founded Touched Hearts in 2010 after witnessing the struggles of children in her home village. With over 15 years of experience in social work and development, she leads our organization with passion and vision.',
      image: '/team/sarah.jpg'
    },
    {
      id: 2,
      name: 'David Mukasa',
      role: 'Programs Director',
      bio: 'David oversees all of our educational and community development programs. He has a background in international development and has been with Touched Hearts for over 8 years.',
      image: '/team/david.jpg'
    },
    {
      id: 3,
      name: 'Grace Akello',
      role: 'Healthcare Initiatives Lead',
      bio: 'Dr. Grace leads our healthcare programs, bringing over 10 years of medical experience. She specializes in public health and has implemented numerous successful healthcare initiatives across Uganda.',
      image: '/team/grace.jpg'
    },
    {
      id: 4,
      name: 'Joseph Okafor',
      role: 'Operations Manager',
      bio: 'Joseph manages the day-to-day operations of Touched Hearts, ensuring our programs run efficiently. He has a background in business administration and nonprofit management.',
      image: '/team/joseph.jpg'
    },
    {
      id: 5,
      name: 'Rebecca Nantongo',
      role: 'Volunteer Coordinator',
      bio: 'Rebecca coordinates our volunteer programs, matching volunteers' skills with our projects' needs. She has a background in human resources and community engagement.',
      image: '/team/rebecca.jpg'
    },
    {
      id: 6,
      name: 'Daniel Ssekandi',
      role: 'Finance Director',
      bio: 'Daniel oversees the financial operations of Touched Hearts, ensuring transparency and accountability. He has over 12 years of experience in nonprofit financial management.',
      image: '/team/daniel.jpg'
    }
  ];

  // Timeline/history events
  const historyEvents = [
    {
      year: '2010',
      title: 'Founding of Touched Hearts',
      description: 'Sarah Namukasa established Touched Hearts as a grassroots initiative to support children in her home village.'
    },
    {
      year: '2012',
      title: 'First School Built',
      description: 'Completed construction of our first school in rural Kampala, providing education to 250 children.'
    },
    {
      year: '2014',
      title: 'Healthcare Program Launch',
      description: 'Launched our first healthcare outreach program, providing medical services to underserved communities.'
    },
    {
      year: '2016',
      title: 'Expansion to Multiple Regions',
      description: 'Extended our programs to three additional regions in Uganda, reaching over 5,000 beneficiaries.'
    },
    {
      year: '2018',
      title: 'Clean Water Initiative',
      description: 'Implemented our first clean water project, providing access to safe drinking water for over 10,000 people.'
    },
    {
      year: '2020',
      title: 'Vocational Training Center',
      description: 'Opened a vocational training center offering skills development programs for youth and women.'
    },
    {
      year: '2022',
      title: 'Sustainable Agriculture Program',
      description: 'Launched a sustainable agriculture initiative to promote food security and economic empowerment.'
    },
    {
      year: '2024',
      title: 'Digital Literacy Program',
      description: 'Introduced a digital literacy program equipping young people with technology skills for the future.'
    }
  ];

  // Partners and supporters
  const partners = [
    { id: 1, name: 'UNICEF', logo: '/partners/unicef.png' },
    { id: 2, name: 'World Vision', logo: '/partners/world-vision.png' },
    { id: 3, name: 'Bill & Melinda Gates Foundation', logo: '/partners/gates.png' },
    { id: 4, name: 'USAID', logo: '/partners/usaid.png' },
    { id: 5, name: 'Save the Children', logo: '/partners/save-children.png' },
    { id: 6, name: 'CARE International', logo: '/partners/care.png' },
    { id: 7, name: 'Global Fund for Children', logo: '/partners/gfc.png' },
    { id: 8, name: 'MTN Foundation', logo: '/partners/mtn.png' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1>About Touched Hearts</h1>
            <p>Learn about our mission, vision, and the team behind our work</p>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="icon-circle">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2>Our Mission</h2>
              <p>
                To improve the lives of underprivileged children and communities in Uganda 
                through sustainable education, healthcare, and community development programs 
                that empower individuals to create a better future for themselves and their communities.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="icon-circle">
                <i className="fas fa-eye"></i>
              </div>
              <h2>Our Vision</h2>
              <p>
                A Uganda where every child has access to quality education, healthcare, 
                and opportunities to thrive, and where communities are self-sustaining, 
                empowered, and resilient.
              </p>
            </div>
            
            <div className="values-card">
              <div className="icon-circle">
                <i className="fas fa-heart"></i>
              </div>
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><strong>Compassion:</strong> We act with kindness and empathy toward all people.</li>
                <li><strong>Integrity:</strong> We uphold the highest ethical standards in all we do.</li>
                <li><strong>Empowerment:</strong> We believe in enabling people to help themselves.</li>
                <li><strong>Excellence:</strong> We strive for the highest quality in our programs.</li>
                <li><strong>Collaboration:</strong> We work together with communities and partners.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>The journey that led to Touched Hearts</p>
          </div>
          
          <div className="story-content">
            <div className="story-image">
              <img src="/founder-story.jpg" alt="Founder with children" />
            </div>
            <div className="story-text">
              <p>
                Touched Hearts began with a simple act of kindness. In 2010, Sarah Namukasa returned 
                to her home village in Uganda after completing her education abroad. She was struck by 
                the challenges facing the children there – limited access to education, inadequate 
                healthcare, and few opportunities for advancement.
              </p>
              <p>
                Sarah started by helping a small group of children attend school, providing them with 
                uniforms, books, and school fees. Word of her efforts spread, and soon local community 
                members joined to help more children. This grassroots initiative quickly grew as more 
                people recognized the need and the impact of these efforts.
              </p>
              <p>
                By 2012, the initiative had formalized into Touched Hearts, a registered non-profit 
                organization. The organization expanded its focus beyond education to include healthcare, 
                clean water access, and community development programs. Today, Touched Hearts operates 
                across multiple regions in Uganda, having touched the lives of over 100,000 individuals.
              </p>
              <p>
                Our journey continues as we work toward a future where every child in Uganda has the 
                opportunity to realize their potential and every community has the resources to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History Timeline Section */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Our History</h2>
            <p>Key milestones in our journey</p>
          </div>
          
          <div className="timeline">
            {historyEvents.map((event, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>The dedicated individuals behind our mission</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-card" key={member.id}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="impact-section" id="impact">
        <div className="container">
          <div className="section-header light">
            <h2>Our Impact</h2>
            <p>The difference we've made together</p>
          </div>
          
          <div className="impact-content">
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Children provided with education</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Schools built or renovated</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">People with access to healthcare</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">75,000+</div>
                <div className="stat-label">People with clean water access</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">2,500+</div>
                <div className="stat-label">Women in economic empowerment programs</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Community projects completed</div>
              </div>
            </div>
            
            <div className="impact-cta">
              <Link to="/our-work" className="btn btn-light">
                Learn More About Our Programs
              </Link>
              <a href="/impact-report-2024.pdf" className="btn btn-outline-light" target="_blank">
                Download Impact Report
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Partners & Supporters</h2>
            <p>Organizations that help make our work possible</p>
          </div>
          
          <div className="partners-grid">
            {partners.map(partner => (
              <div className="partner-logo" key={partner.id}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
          
          <div className="partners-cta">
            <Link to="/get-involved#partner" className="btn btn-secondary">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
      
      {/* Annual Reports Section */}
      <section className="reports-section">
        <div className="container">
          <div className="section-header">
            <h2>Annual Reports & Financials</h2>
            <p>Transparency and accountability in all we do</p>
          </div>
          
          <div className="reports-content">
            <p>
              At Touched Hearts, we are committed to transparency and accountability. 
              We publish annual reports and financial statements to share our progress, 
              challenges, and how we use our resources to create impact.
            </p>
            
            <div className="reports-grid">
              <a href="/reports/annual-report-2024.pdf" className="report-card" target="_blank">
                <div className="report-icon">
                  <i className="far fa-file-pdf"></i>
                </div>
                <h3>Annual Report 2024</h3>
                <span className="report-link">Download PDF</span>
              </a>
              
              <a href="/reports/financial-statement-2024.pdf" className="report-card" target="_blank">
                <div className="report-icon">
                  <i className="far fa-file-pdf"></i>
                </div>
                <h3>Financial Statement 2024</h3>
                <span className="report-link">Download PDF</span>
              </a>
              
              <a href="/reports/annual-report-2023.pdf" className="report-card" target="_blank">
                <div className="report-icon">
                  <i className="far fa-file-pdf"></i>
                </div>
                <h3>Annual Report 2023</h3>
                <span className="report-link">Download PDF</span>
              </a>
              
              <a href="/reports/financial-statement-2023.pdf" className="report-card" target="_blank">
                <div className="report-icon">
                  <i className="far fa-file-pdf"></i>
                </div>
                      <div className="partners-grid">
        {partners.map(partner => (
          <div className="partner-card" key={partner.id}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="cta-section">
    <div className="container">
      <h2>Join Us in Making a Difference</h2>
      <p>Become a part of the movement to transform lives and communities.</p>
      <div className="cta-buttons">
        <Link to="/get-involved" className="btn btn-primary">
          Get Involved
        </Link>
        <Link to="/donate" className="btn btn-secondary">
          Donate Now
        </Link>
      </div>
    </div>
  </section>
</div>