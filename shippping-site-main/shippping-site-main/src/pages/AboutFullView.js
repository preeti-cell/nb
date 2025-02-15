import React from 'react';
import { Link } from 'react-router-dom';
import Customers from '../components/Customers';
import './AboutFullView.css';
import top_img from '../images/about_us.jpg';

const AboutFullView = () => {
  return (
    <div className="wrapper-main">
    {/* Full Title */}
    <div 
      className="full-title" 
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
          <h1 className="animate-title text-white">About Us</h1>
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white">About Us</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
      <div className="container">
        {/* About Content */}
        <div className="about-main">
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid rounded mb-4" src="https://www.aeroshipgroup.com/images/about-img.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <p><b>NB Clearance is an international Freight Forwarder and Licensed Customs Broker based in Delhi, with a presence in Dehradun, Jaipur, and Mumbai.</b> Established to provide seamless logistics solutions, we specialize in air, ocean, and land transportation, ensuring efficient and timely delivery across multiple destinations.
With an excellent network of global associates, we guarantee safe and timely cargo delivery. Our company also provides a comprehensive range of value-added distribution services for export and import shipments (LCL/FCL) by air or ocean.</p>
              <p>NB Clearance is well-represented with offices and representations in all major ports and inland locations across India, including Delhi, Ludhiana, Mumbai, Mundra, Kandla, Kolkata, Cochin, and Hong Kong. Our team comprises experienced professionals dedicated to handling logistics efficiently and providing customer-centric solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-inner">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="left-ab">
                <h3>Our Vision & Mission</h3>
                <p>To become the world's preferred supply chain logistics company – applying insight, service quality and innovation to create sustainable growth for business and society</p>
                <ul>
                  <li>To be a preferred global partner to our clients offering reliable, competitive "one-stop, door-to-door" logistics and relocation solutions</li>
                  <li>To understand customer needs and provide timely, efficient, comprehensive solutions, using innovation and technology, thereby enabling customers to focus on their core business.</li>
                  <li>To achieve our vision and mission by attracting and retaining the best talent.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-ab">
                <img className="img-fluid rounded mb-4" src="https://www.aeroshipgroup.com/images/mission-img.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="right-ab">
                <img className="img-fluid rounded mb-4" src="https://www.aeroshipgroup.com/images/vision-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left-ab">
                <h3>Our Values</h3>
                <p>NB Clearance respects its customers, employees, and the laws by which its ventures are governed. We believe no relationship can succeed without respect, and the company acknowledges and appreciates that its packers and movers business would not have reached the pinnacle it has today without support from its customers and colleagues. Every transport logistics transaction and interaction that NB Clearance had is guided by professional courtesy and respect.</p>
                <ul>
                  <li><b>Trust:</b> It is the foundation on which the international logistics company's client-list was built, and it is the trust that NB Clearance has subsequently guarded that will keep the company among the ranks of the best logistics companies in India.</li>
                  <li><b>Teamwork:</b> NB Clearance skilled team of professionals is responsible for its continuing success in the field of relocation services. And it is the quality of their teamwork that gets all the logistics services from Aeroship running smoothly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Team Members */}
        <div className="team-members-box">
          <h2>Director</h2>
          <div className="row">
            <div className="col-lg-4 mb-4"></div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="our-team">
                  <img className="img-fluid" src="https://www.aeroshipgroup.com/images/team_01.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Vishal Saxena</h3>
                    <span className="post">Director</span>
                    <ul className="social">
                      <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4"></div>
          </div>
        </div>
      </div>

      <div className="customers-box">
        <div className="container">
          {/* Membership */}
          <h2>Membership</h2>
          <Customers />
        </div>
      </div>
    </div>
  );
};

export default AboutFullView;