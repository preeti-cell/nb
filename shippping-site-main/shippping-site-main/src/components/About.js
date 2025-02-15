// 

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import main_img from '../images/ocean_freight_main.jpg';

const About = () => {
    return (
        <div className="about-section">
            <div className="content-wrapper">
                <div className="about-main">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2 className="section-title">Welcome to NB Clearance</h2>
                                <div className="title-underline"></div>
                                <p className="lead-text">
                                    <strong>NB Clearance is an international Freight Forwarder and Licensed Customs Broker, Delhi based, with presence in Dehradun, Jaipur, Mumbai.</strong>
                                </p>
                                <div className="about-description">
                                    <p>Taking into consideration the demand of customers, cargo people offers all type of transportation services of shipments by rail, road and air. Consignments are picked up from the desired locations mentioned by the customer and are delivered at the destination of their choice.</p>
                                    <p>An excellent network of global associates promises safe and timely delivery of the cargo to the client. The company also provides a comprehensive range of value-added distribution services for export and import of shipments (LCL/FCL) by air or ocean.</p>
                                </div>
                                <Link to="/about" className="learn-more-btn">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img 
                                    className="img-fluid rounded shadow-lg" 
                                    src={main_img} 
                                    alt="About NB Clearance"
                                    loading="lazy"
                                />
                                <div className="experience-badge">
                                    <span className="years">15+</span>
                                    <span className="text">Years of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;