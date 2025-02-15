import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel fade interval={5000} className="main-slider">
            <Carousel.Item>
                <div 
                    className="slider-item"
                    style={{ backgroundImage: "url('https://www.aeroshipgroup.com/images/slider-01.jpg')" }}
                >
                    <div className="slider-content">
                        <div className="container">
                            <h1>Air Freight</h1>
                            <p>Providing reliable and efficient air freight solutions worldwide</p>
                            <a href="/services#air-freight" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div 
                    className="slider-item"
                    style={{ backgroundImage: "url('https://www.aeroshipgroup.com/images/slider-02.jpg')" }}
                >
                    <div className="slider-content">
                        <div className="container">
                            <h1>Ocean Freight</h1>
                            <p>Global ocean freight services for all your shipping needs</p>
                            <a href="/services#ocean-freight" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div 
                    className="slider-item"
                    style={{ backgroundImage: "url('https://www.aeroshipgroup.com/images/slider-03.jpg')" }}
                >
                    <div className="slider-content">
                        <div className="container">
                            <h1>Certification Services</h1>
                            <p></p>
                            <a href="/services#break-bulk-cargo" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div 
                    className="slider-item"
                    style={{ backgroundImage: "url('https://www.aeroshipgroup.com/images/slider-04.jpg')" }}
                >
                    <div className="slider-content">
                        <div className="container">
                            <h1>Project Logistics</h1>
                            <p>End-to-end project cargo management solutions</p>
                            <a href="/services#project-logistics" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;