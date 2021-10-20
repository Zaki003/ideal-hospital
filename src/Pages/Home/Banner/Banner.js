import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/Banner/banner-1.png';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="banner flex items-center text-blue-800">
            <div className="pl-8">
                <h1 className="text-5xl font-semibold pb-2">A Hospital everyone likes.</h1>
                <h3 className="text-2xl">One of the best hospital in the city with excellent doctors and stuffs.</h3>
            </div>
        </div>
    );
};

export default Banner;