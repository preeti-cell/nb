import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import AboutFullView from './pages/AboutFullView';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Customers from './components/Customers';
import ContactUs from './components/ContactUs';
import WhyChooseUs from './pages/WhyChooseUs';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import AirFreight from './pages/services/AirFreight';
import SeaFreight from './pages/services/SeaFreight';
import ProjectLogistics from './pages/services/ProjectLogistics';
import Transportation from './pages/services/Transportation';
import CustomClearance from './pages/services/CustomClearance';

const HomeComponent = () => (
  <>
    <Slider />
    <section className="about-section">
      <Container>
        <div className="section-title">
          <h2>Welcome to NB Clearance Logistics</h2>
          <p>Your trusted partner in global logistics and transportation solutions</p>
        </div>
        <About />
      </Container>
    </section>
    
    <section className="services-section">
      <Container>
        <Services /> 
      </Container>
    </section>
    
    <section className="portfolio-section">
      <Container>
        <Portfolio />
      </Container>
    </section>
    
    <section className="customers-section">
      <Container>
        <div className="section-title">
          <h2>Membership</h2>
          <p>Trusted by leading businesses worldwide</p>
        </div>
        <Customers />
      </Container>
    </section>
    
    <section className="contact-section">
      <Container>
        <div className="curved-bg">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p className="text-white mb-0">Our skilled, dynamic and responsive team is committed to make difference through highest service quality</p>
            </div>
            <div className="col-lg-4 text-end">
              <Link to="/contact" className="btn btn-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>

    
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutFullView />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route path="/services/sea-freight" element={<SeaFreight />} />
          <Route path="/services/project-logistics" element={<ProjectLogistics />} />
          <Route path="/services/transportation" element={<Transportation />} />
          <Route path="/services/custom-clearance" element={<CustomClearance />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
