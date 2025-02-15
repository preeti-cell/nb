import React, { useState, useEffect } from 'react';
import './Portfolio.css'; // Ensure you import the CSS file

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  const [items, setItems] = useState([]);

  const portfolioItems = [
    {
      id: 1,
      category: ['financial'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-01.jpg',
      title: 'NB Clearance Pvt Ltd'
    },
    {
      id: 2,
      category: ['business', 'academic'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-02.jpg',
      title: 'NB Clearance Pvt Ltd'
    },
    {
      id: 3,
      category: ['travel'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-03.jpg',
      title: 'NB Clearance Pvt Ltd'
    },
    {
      id: 4,
      category: ['business'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-04.jpg',
      title: 'NB Clearance Pvt Ltd'
    },
    {
      id: 5,
      category: ['travel'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-05.jpg',
      title: 'NB Clearance Pvt Ltd'
    },
    {
      id: 6,
      category: ['financial', 'academic'],
      image: 'https://www.aeroshipgroup.com/images/portfolio-img-07.jpg',
      title: 'NB Clearance Pvt Ltd'
    }
  ];

  useEffect(() => {
    setItems(portfolioItems);
  }, []);

  const filterItems = (filterValue) => {
    setFilter(filterValue);
    if (filterValue === '*') {
      setItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => 
        item.category.includes(filterValue.replace('.', ''))
      );
      setItems(filtered);
    }
  };

  return (
    <div className="container">
      <div className="portfolio-main">
      <h2>Our Portfolio</h2>
      <p>Explore our successful projects and achievements</p>
        <div className="col-lg-12">
          <div className="project-menu text-center">
            <button 
              className={`btn btn-primary ${filter === '*' ? 'active' : ''}`}
              data-filter="*"
              onClick={() => filterItems('*')}
            >
              All
            </button>
            <button 
              className={`btn btn-primary ${filter === '.business' ? 'active' : ''}`}
              data-filter=".business"
              onClick={() => filterItems('.business')}
            >
              Business growth
            </button>
            <button 
              className={`btn btn-primary ${filter === '.travel' ? 'active' : ''}`}
              data-filter=".travel"
              onClick={() => filterItems('.travel')}
            >
              Vision
            </button>
            <button 
              className={`btn btn-primary ${filter === '.financial' ? 'active' : ''}`}
              data-filter=".financial"
              onClick={() => filterItems('.financial')}
            >
              Solutions
            </button>
            <button 
              className={`btn btn-primary ${filter === '.academic' ? 'active' : ''}`}
              data-filter=".academic"
              onClick={() => filterItems('.academic')}
            >
              Logistics
            </button>
          </div>
        </div>
        <div id="projects" className="projects-main row">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`col-lg-4 col-sm-6 pro-item portfolio-item ${item.category.join(' ')}`}
            >
              <div className="card h-100">
                <div className="card-img">
                  <a href={item.image} data-fancybox="images">
                    <img className="card-img-top" src={item.image} alt="" />
                    <div className="overlay">
                      <div className="overlay-content">
                        <h3 className="overlay-title">{item.title}</h3>
                        <i className="fas fa-arrows-alt"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;