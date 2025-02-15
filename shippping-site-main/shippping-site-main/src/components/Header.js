import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import logo from '../images/logo.png'; // Import the logo image

const Header = () => {
  
  return (
    <>
  <div className="top-bar" style={{ backgroundColor: '#007bff' }}> {/* Custom blue background */}
  <div className="container px-0"> {/* Remove padding from container */}
    <div className="row g-0"> {/* Remove gutters */}
      <div className="col-12"> {/* Changed from col-lg-12 for better mobile display */}
        <div className="contact-details d-flex justify-content-center justify-content-lg-end"> {/* Center on mobile, end on desktop */}
          <div className="contact-item d-flex align-items-center flex-wrap justify-content-center"> {/* Added flex-wrap for mobile */}
            <div className="me-2">
              <i className="fas fa-phone fa-rotate-90 text-white"></i>
            </div>
            <a href="tel:+917906558989" className="text-decoration-none text-white fw-medium"> {/* Medium bold text */}
              +91-7906558989
            </a>
            <span className="mx-2 text-white"> </span>
            <div className="me-2">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <a href="mailto:sales@nbclearance.in" className="text-decoration-none text-white fw-medium"> {/* Medium bold text */}
              sales@nbclearance.in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Main Navigation */}
      <Navbar expand="lg" className="main-nav">
        <Container className="header-container">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="NB Clearance" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="mobile-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-text">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-text">About</Nav.Link>
              <div className="nav-item dropdown">
                <Nav.Link className="nav-text dropdown-toggle">
                  Services <i className="fas fa-chevron-down"></i>
                </Nav.Link>
                <div className="dropdown-menu">
                  <Link to="/services/air-freight" className="dropdown-item">
                    <i className="fas fa-plane"></i> Air Freight
                  </Link>
                  <Link to="/services/sea-freight" className="dropdown-item">
                    <i className="fas fa-ship"></i> Sea Freight
                  </Link>
                  <Link to="/services/project-logistics" className="dropdown-item">
                    <i className="fas fa-project-diagram"></i> Project Logistics
                  </Link>
                  <Link to="/services/transportation" className="dropdown-item">
                    <i className="fas fa-truck"></i> Transportation
                  </Link>
                  <Link to="/services/custom-clearance" className="dropdown-item">
                    <i className="fas fa-file-contract"></i> Custom Clearance
                  </Link>
                </div>
              </div>
              <Nav.Link as={Link} to="/why-choose-us" className="nav-text">WHY CHOOSE US</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-text">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default Header;
