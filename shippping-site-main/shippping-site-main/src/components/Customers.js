import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Customers.css'; // Ensure you import the CSS file
import logo1 from '../images/dcba.jpg'; // Import the logo image
import logo2 from '../images/iata.png'; // Import the logo image



const Customers = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="customers">
            <Slider {...settings}>
                <div className="customer-logo">
                    <img className="img-fluid" src="https://www.aeroshipgroup.com/images/logo_03.png" alt="Customer Logo" />
                </div>
                <div className="customer-logo">
                    <img className="img-fluid" src={logo1} alt="Customer Logo" />
                </div>
                <div className="customer-logo">
                    <img className="img-fluid" src={logo2} alt="Customer Logo" />
                </div>
                <div className="customer-logo">
                    <img className="img-fluid" src="https://www.aeroshipgroup.com/images/logo_04.png" alt="Customer Logo" />
                </div>
                <div className="customer-logo">
                    <img className="img-fluid" src="https://www.aeroshipgroup.com/images/logo_05.png" alt="Customer Logo" />
                </div>
            </Slider>
        </div>
    );
};

export default Customers;