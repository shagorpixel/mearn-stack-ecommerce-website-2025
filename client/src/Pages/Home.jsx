import React from 'react';
import Hero from '../Components/Hero';
import LeatestCollection from '../Components/LeatestCollection';
import BestSeller from '../Components/BestSeller';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeatestCollection />
            <BestSeller />
        </div>
    );
};

export default Home;