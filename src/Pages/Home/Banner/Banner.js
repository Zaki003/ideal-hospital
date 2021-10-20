import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/Banner/banner-1.png';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="banner">
            <h1 className="text-5xl">A Hospital everyone likes.</h1>
        </div>
    );
};

export default Banner;