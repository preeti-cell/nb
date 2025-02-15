import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            // await emailjs.sendForm(
            //     'service_rfmn48f',
            //     'template_112m1cq',
            //     form.current,
            //     '4L-3dYHj8mzTaE2Pv'
            // );

            await emailjs.sendForm(
                'service_d8hns3t',
                'template_b9kcxbo',
                form.current,
                'zc28uQL1mPWWdDqLZ'
            );
            
            setStatus('Success! Your message has been sent. We will contact you soon.');
            form.current.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Get in Touch</h2>
                            <p className="text-muted">We'd love to hear from you. Please fill out this form or use our contact information.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="contact-form">
                            <h4>Send us a Message</h4>
                            {status && (
                                <div className={`alert ${status.includes('Success') ? 'alert-success' : 'alert-danger'}`}>
                                    <i className={`fas ${status.includes('Success') ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
                                    {status}
                                </div>
                            )}
                            <Form ref={form} onSubmit={handleSubmit}>
                                <Form.Group className="mb-4">
                                    <Form.Label>
                                        <i className="fas fa-user me-2"></i>Your Name
                                    </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="user_name"
                                        placeholder="Enter your name" 
                                        required
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>
                                        <i className="fas fa-envelope me-2"></i>Email Address
                                    </Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="user_email"
                                        placeholder="Enter your email" 
                                        required
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>
                                        <i className="fas fa-phone me-2"></i>Phone Number
                                    </Form.Label>
                                    <Form.Control 
                                        type="tel" 
                                        name="user_phone"
                                        placeholder="Enter your phone number" 
                                        required
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>
                                        <i className="fas fa-comment me-2"></i>Message
                                    </Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        name="message"
                                        rows={4} 
                                        placeholder="Your message" 
                                        required
                                        disabled={isSubmitting}
                                    />
                                </Form.Group>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin me-2"></i>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="contact-info">
                            <h4>Contact Information</h4>
                            <h5>Our Locations</h5>
                            
                            {/* First Location */}
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h6 className="mb-2">Delhi Office</h6>
                                    <p><strong>Address:</strong> C-25, Ground Floor, Nagal Dewat, Vasant Kunj, Delhi - 110070</p>
                                    <p><strong>Mobile:</strong> <a href="tel:+917906558989">+91 7906558989</a></p>
                                </div>
                            </div>

                            {/* Second Location */}
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h6 className="mb-2">Mumbai Office</h6>
                                    <p><strong>Address:</strong> Shop No. 152, Aggarwal Trade Centre, Plot No. 62, Sector-11, CBD Belapur, Navi Mumbai - 400614</p>
                                    <p><strong>Phone:</strong> <a href="tel:02246092060">022 46092060</a></p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h6 className="mb-2">Email Us</h6>
                                    <p><a href="mailto:sales@nbclearance.in">sales@nbclearance.in</a></p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h6 className="mb-2">WhatsApp</h6>
                                    <p><a href="https://wa.me/7906558989" target="_blank" rel="noopener noreferrer">+91 7906558989</a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="contact-section">
                  <div className="curved-bg blue-gradient">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="contact-text">
                            <h2>Ready to Get Started?</h2>
                            <p className="text-white mb-0">Our skilled, dynamic and responsive team is committed to make difference through highest service quality</p>
                          </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                          <Link to="/contact" className="btn btn-light btn-glow">
                            <i className="fas fa-paper-plane"></i> Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
