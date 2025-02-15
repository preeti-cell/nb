import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import main_img from '../../images/transport_main.jpg';
import top_img from '../../images/transport_top.jpg';


const Transportation = () => {
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
            <h1 className="animate-title">Transportation</h1>
            <div className="breadcrumb-main">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="breadcrumb-item active">Transportation</li>
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
              <h2>Transportation Services</h2>
              <p className="lead">NB Clearance minimizes costs, improves transport efficiencies, overcomes trade, technical and paper barriers, and applies improving technologies to ensure completion of project requirements as per committed timelines. We offer single window services covering all aspects of integrated project logistics.</p>
            </div>


            <div className="service-features">
              <h3>Our Transportation Services Include:</h3>
              <div className="features-grid">
                <div className="feature-item blue-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-truck-loading"></i>
                  </div>
                  <span>Transportation of General Cargo</span>
                </div>
                <div className="feature-item purple-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <span>Heavy and Over-Dimensional Cargo Transport</span>
                </div>
                <div className="feature-item green-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-box"></i>
                  </div>
                  <span>Multi-Modal Transportation Solutions</span>
                </div>
                <div className="feature-item orange-gradient">
                  <div className="icon-circle">
                    <i className="fas fa-ship"></i>
                  </div>
                  <span>Port Operations</span>
                </div>
              </div>
            </div>

            <h2> Our additional services include</h2>
            <ul>
                   <li>PWD/RTO/Police/Forest Department Clearances</li>
                  <li>Feasibility Studies for Port and Road Transportation</li>
                  <li>Hydraulic Axle Trailer Transportation</li>
                  <li>Civil and Structural Engineering Support</li>
                  <li>Special Structure Design and Fabrication</li>
                  <li>Site Unloading Services</li>
                </ul>

            <div className="service-benefits">
              <h3>Why Choose Our Transportation Services?</h3>
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
              <p>Our comprehensive transportation services ensure safe and timely delivery of your cargo, whether it's standard containers or specialized project cargo. We handle all necessary permits and provide end-to-end logistics solutions.</p>
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

export default Transportation; 