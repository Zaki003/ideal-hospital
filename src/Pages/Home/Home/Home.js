import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import WorkingHours from '../WorkingHours/WorkingHours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WorkingHours></WorkingHours>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;