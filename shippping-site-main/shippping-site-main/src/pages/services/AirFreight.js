import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import main_img from '../../images/air_freight_main.avif';
import top_img from '../../images/air_freight_top.jpg';

const AirFreight = () => {
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
            <h1 className="animate-title">Air Freight</h1>
            <div className="breadcrumb-main">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="breadcrumb-item active">Air Freight</li>
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
              <h2>Air Freight Services</h2>
              <p className="lead">NB Clearance specializes in handling Air Freight with expertise and precision.we ensure that the shipment moves in the most safest and cost-effective way within the given time slot. </p>
            </div>

            <div className="service-features">
              <h3>Our Air Freight Services Include:</h3>
              <div className="features-grid">
                <div className="feature-item blue-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-truck-loading"></i>
                  </div>
                  <span>Insurance at customer’s costs</span>
                </div>
                <div className="feature-item purple-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <span>Option of Door to Door OR Port to Port Pricing</span>
                </div>
                <div className="feature-item green-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-box"></i>
                  </div>
                  <span>Multimodal transport</span>
                </div>
                <div className="feature-item orange-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-ship"></i>
                  </div>
                  <span>Local clearance</span>
                </div>
              </div>
            </div>

            <div className="service-benefits">
              <h3>Why Choose Our Break Bulk Services?</h3>
              <div className="benefits-grid">
                <div className="benefit-item blue-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h4>Global Network</h4>
                  <p>Access to major ports worldwide</p>
                </div>
                <div className="benefit-item purple-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>Secure Handling</h4>
                  <p>Safety is our top priority</p>
                </div>
                <div className="benefit-item green-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h4>Cost-Effective Solutions</h4>
                  <p>Affordable shipping options</p>
                </div>
              </div>
            </div>

            <div className="service-cta" style={{ 
              backgroundImage: `linear-gradient(135deg, rgba(0, 123, 255, 0.95), rgba(0, 47, 167, 0.95)), url(${main_img})`,
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
            }}>
              <p>Our experienced team ensures your shipments are handled with utmost care and delivered on time. We provide expert logistics solutions tailored to your needs.</p>
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
  )

}

export default AirFreight; 




