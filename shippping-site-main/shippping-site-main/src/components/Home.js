import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="contact-section">
      <div className="curved-bg">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h3 className="text-white">Our skilled, dynamic and responsive team is committed to make difference through highest service quality</h3>
            </Col>
            <Col md={4} className="text-center">
              <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home; 