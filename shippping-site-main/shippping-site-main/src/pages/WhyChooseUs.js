import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';
import top_img from '../images/why_choose_us.jpg';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-wrapper">
            {/* Page Title */}
            <div 
                className="service-title" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${top_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '250px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <div className="container">
                    <div className="title-content">
                        <h1 className="animate-title">Why Choose Us</h1>
                        <div className="breadcrumb-main">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">Why Choose Us</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <Container>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h5>Safe & Secure Delivery</h5>
                                <p>Express delivery innovative service with secure and safe delivery solutions</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-coins"></i>
                                </div>
                                <h5>Cost Savings</h5>
                                <p>Optimized logistics solutions to help reduce your operational costs</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h5>Transport Optimization</h5>
                                <p>Efficient transport solutions to maximize your logistics performance</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-medal"></i>
                                </div>
                                <h5>Proven Experience</h5>
                                <p>Years of expertise in providing comprehensive logistics solutions</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h5>24/7 Hours Support</h5>
                                <p>Round-the-clock customer support for all your logistics needs</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <i className="fas fa-credit-card"></i>
                                </div>
                                <h5>Easy Payment Methods</h5>
                                <p>Flexible and convenient payment options for your convenience</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Call to Action */}
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
        </div>
    );
};

export default WhyChooseUs; 