import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import main_img from '../../images/custom_clarance.jpg';
import top_img from '../../images/custom_top.png';

const CustomClearance = () => {
  return (


    

    //             <h3>Key Features:</h3>
    //             <ul>
    //               <li>Expert Knowledge of Customs Laws and Regulations</li>
    //               <li>Efficient Documentation Processing</li>
    //               <li>Duty and Tax Computation</li>
    //               <li>24/7 Online Filing Services</li>
    //               <li>Comprehensive Customs Support</li>
    //               <li>Timely Clearance of Goods</li>
    //             </ul>

    //             <p>Our Customs clearance team provides expertise across tariff and Customs laws, rules and regulations for the clearance of imported or exported goods. We handle all types of shipments, major or minor, to or from any port across the globe with ease and efficiency to facilitate the best results for your business.</p>
    //           </div>
    //         </div>
    //         <div className="col-lg-4">
    //           <div className="service-sidebar">
    //             <div className="service-list">
    //               <h3>Our Services</h3>
    //               <ul>
    //                 <li><Link to="/services/air-freight">Air Freight</Link></li>
    //                 <li><Link to="/services/sea-freight">Sea Freight</Link></li>
    //                 <li><Link to="/services/break-bulk-cargo">Break Bulk Cargo</Link></li>
    //                 <li><Link to="/services/project-logistics">Project Logistics</Link></li>
    //                 <li><Link to="/services/transportation">Transportation</Link></li>
    //                 <li className="active"><Link to="/services/custom-clearance">Custom Clearance</Link></li>
    //               </ul>
    //             </div>
    //             <div className="service-contact">
    //               <h3>Need Help?</h3>
    //               <p>Contact our team for any assistance with your shipping needs.</p>
    //               <Link to="/contact" className="btn btn-primary">Contact Us</Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>




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
      }}>
        
      <div className="container">
        <div className="title-content">
          <h1 className="animate-title">Custom Clearance</h1>
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active">Custom Clearance</li>
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
            <h2>Custom Clearance Services</h2>
            <p className="lead">Our team of specialized personnel is equipped to handle clearance of all consignments by sea, land, and air. With up-to-date knowledge of the latest regulations and procedures, we make clearance a breeze for you</p>
          </div>

          <div className="service-features">
            <h3>Our Custom Clearance Solutions Include:</h3>
            <div className="features-grid">
              <div className="feature-item blue-gradient">
                <div className="icon-circle">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <span>Single Window Contract</span>
              </div>
              <div className="feature-item purple-gradient">
                <div className="icon-circle">
                  <i className="fas fa-cogs"></i>
                </div>
                <span>Online Filing Round the Clock</span>
              </div>
              <div className="feature-item green-gradient">
                <div className="icon-circle">
                  <i className="fas fa-box"></i>
                </div>
                <span>Factory Stuffing/De-stuffing</span>
              </div>
              <div className="feature-item orange-gradient">
                <div className="icon-circle">
                  <i className="fas fa-ship"></i>
                </div>
                <span>High Sea Sales</span>
              </div>
              <div className="feature-item orange-gradient">
                <div className="icon-circle">
                  <i className="fas fa-ship"></i>
                </div>
                <span>End to End Solutions</span>
              </div>
              <div className="feature-item orange-gradient">
                <div className="icon-circle">
                  <i className="fas fa-ship"></i>
                </div>
                <span>Documentation Support</span>
              </div>
            </div>
          </div>
          

          <div className="service-benefits">
            <h3>Why Choose Custom Clearance Services?</h3>
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

  );
};

export default CustomClearance; 