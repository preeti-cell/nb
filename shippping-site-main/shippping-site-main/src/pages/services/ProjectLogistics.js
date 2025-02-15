import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import main_img from '../../images/air_freight_main.avif';
import top_img from '../../images/air_freight_top.jpg';

const ProjectLogistics = () => {
  return (
    <div className="wrapper-main">
      {/* Page Title */}
      <div 
        className="service-title" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${top_img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="title-content">
            <h1 className="animate-title">Project Logistics</h1>
            <div className="breadcrumb-main">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="breadcrumb-item active">Project Logistics</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="service-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="service-details">
                <div className="service-intro">
                  <div className="intro-image" style={{ backgroundImage: `url(${main_img})` }}></div>
                  <h2>Project Logistics Solutions</h2>
                  <p className="lead">NB Clearance uses the most efficient methods available for transportation and order fulfillment. With our years of experience, we serve as your single-source solution for total logistics and distribution needs.</p>
                </div>

                <div className="service-features">
                  <h3>Our Project Logistics Services Include:</h3>
                  <div className="features-grid">
                    <div className="feature-item blue-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-boxes"></i>
                      </div>
                      <span>Supply Chain Optimization</span>
                    </div>
                    <div className="feature-item purple-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-ship"></i>
                      </div>
                      <span>Global Distribution</span>
                    </div>
                    <div className="feature-item green-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-users-cog"></i>
                      </div>
                      <span>Vendor Management</span>
                    </div>
                    <div className="feature-item orange-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-tasks"></i>
                      </div>
                      <span>Logistics Planning</span>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h3>Why Choose Our Project Logistics?</h3>
                  <div className="benefits-grid">
                    <div className="benefit-item blue-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-rocket"></i>
                      </div>
                      <h4>Enhanced Efficiency</h4>
                      <p>Streamlined supply chain operations</p>
                    </div>
                    <div className="benefit-item purple-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h4>Supplier Management</h4>
                      <p>Proactive overseas supplier coordination</p>
                    </div>
                    <div className="benefit-item green-gradient">
                      <div className="icon-circle">
                        <i className="fas fa-globe-americas"></i>
                      </div>
                      <h4>Global Reach</h4>
                      <p>Worldwide logistics solutions</p>
                    </div>
                  </div>
                </div>

                <div className="service-cta" style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(0, 123, 255, 0.95), rgba(0, 47, 167, 0.95)), url(${main_img})`,
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                }}>
                  <p>Our experienced personnel help you plan and streamline your supply chain to maximize benefits and enhance your competitive advantages. Whether regional, national, or global, we transform your supply chain into an efficient distribution channel.</p>
                  <Link to="/contact" className="btn btn-glow">
                    <i className="fas fa-paper-plane"></i> Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLogistics; 