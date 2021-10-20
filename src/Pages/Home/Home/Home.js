import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WorkingHours from '../WorkingHours/WorkingHours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WorkingHours></WorkingHours>
        </div>
    );
};

export default Home;