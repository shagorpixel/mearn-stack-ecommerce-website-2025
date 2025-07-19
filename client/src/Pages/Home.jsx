import React from 'react';
import Hero from '../Components/Hero';
import LeatestCollection from '../Components/LeatestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewsLetterBox from '../Components/NewsLetterBox';

const Home = () => {
    return (
        <div>
            <Hero />
            <LeatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetterBox />
        </div>
    );
};

export default Home;