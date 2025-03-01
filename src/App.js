// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import DonationForm from './components/DonationForm';
import ContactForm from './components/ContactForm';

// Importing pages
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Importing styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/footer.css';
import './styles/home.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* Hero Section on Home page */}
        <Route exact path="/" component={HeroSection} />

        {/* Main content */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/donate" component={Donate} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms" component={Terms} />
        </Switch>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;