import React from 'react';

const Service = ({ service }) => {
    return (
        <div>
            <img src={service.img} alt="" />
            <h2 className="text-3xl">{service.name}</h2>
            <p>{service.shortDescription}</p>
            <button className="details-btn">See details</button>
        </div>
    );
};

export default Service;