import React from 'react';
import './Services.css'; // Import a CSS file for custom styles

const Services = () => {
    return (
        <div className="services-bar">
            <div className="services-title">
                <h1>Our Services</h1>
            </div>
            <div className="services-container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-01.jpg" alt="Air Freight" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Air Freight</h4>
                                <p className="card-text">Polar Bear is the fastest growing air freight forwarding specialist in China, Middle East and USA besides covering all the major airports worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-02.jpg" alt="Ocean Freight" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Ocean Freight</h4>
                                <p className="card-text">NB Clearance to deliver the most flexible sea freight services through its network of agents, carriers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-03.jpg" alt="Break Bulk Cargo" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Break Bulk Cargo</h4>
                                <p className="card-text">Cargo that is too big or too heavy to be loaded onto a flat rack container can be loaded directly onto the vessel. These are known as Break Bulk Cargo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-04.jpg" alt="Project Logistics" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Project Logistics</h4>
                                <p className="card-text">Aeroship Logistics uses the most efficient methods available for transportation and order fulfillment and coupled with our many years of experience, we can be a single-source solution to meet your total logistics and distribution needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-05.jpg" alt="Transportation" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Transportation</h4>
                                <p className="card-text">The Challenge for NB Clearance Logistics is to minimize costs, improve transport efficiencies, overcome trade, technical and paper barriers and apply improving technologies to ensure completion of project requirements in the time allotted.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <div className="card-img">
                                <img className="img-fluid" src="https://www.aeroshipgroup.com/images/services-img-06.jpg" alt="Custom Clearance" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-header">Custom Clearance</h4>
                                <p className="card-text">Since NB Clearance Logistics inception, we have been growing day by day as a trustworthy and popular Custom Broking Agents, offering world class Custom Clearing Services from India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;