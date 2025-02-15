import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container bottom_border">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="headin5_amrc col_white_amrc pt2">About Us</h5>
                        <p className="mb10">
                            <b>NB Clearance is a international Freight Forwarder and Licensed Customs Broker, Delhi based, With presence in Dehradun, Jaipur, Mumbai.</b>
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/profile.php?id=61573019969565" target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/ClearanceNB" target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/nb-clearance-98379834b/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
            

<div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="headin5_amrc col_white_amrc pt2">Our Services</h5>
                        <ul className="footer_ul_amrc">
                            <li><Link to="/services/air-freight"><i className="fas fa-long-arrow-alt-right"></i> Air Freight</Link></li>
                            <li><Link to="/services/sea-freight"><i className="fas fa-long-arrow-alt-right"></i> Ocean Freight</Link></li>
                            <li><Link to="/services/break-bulk-cargo"><i className="fas fa-long-arrow-alt-right"></i>Certification Services</Link></li>
                            <li><Link to="/services/transportation"><i className="fas fa-long-arrow-alt-right"></i> Transportation</Link></li>
                            <li><Link to="/services/custom-clearance"><i className="fas fa-long-arrow-alt-right"></i> Custom Clearance</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="headin5_amrc col_white_amrc pt2">Online Support</h5>
                        <ul>
        <li>
            <p>Delhi: C-25, Ground Floor, Nagal Dewat, Vasant Kunj, Delhi - 110070</p>
            <p><b>P:</b> +91 7906558989</p>
        </li>
        <li>
            <p>Shop No. 152, Aggarwal Trade Centre, Plot No. 62, Sector-11, CBD Belapur, Navi Mumbai - 400614</p>
            <p><b>P:</b> 022 46092060</p>
        </li>
    </ul>
                        
                        <p><b>E:</b> <a href="mailto:sales@nbclearance.in">sales@nbclearance.in</a></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <h5 className="headin5_amrc col_white_amrc pt2">Newsletter</h5>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <button className="btn btn-secondary" type="button">Go!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
