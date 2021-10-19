import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/Banner/banner-1.png';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})` }} className="banner">
            {/* <img src={bannerImg} alt="" /> */}
        </div>
    );
};

export default Banner;