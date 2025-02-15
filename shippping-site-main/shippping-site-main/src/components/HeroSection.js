import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <Jumbotron>
            <h1>Welcome to NB Clearance Group</h1>
            <p>Your partner in logistics and transportation.</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    );
};

export default HeroSection;