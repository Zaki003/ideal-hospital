import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    return (
        <div>
            <img src={service.img} alt="" />
            <h2 className="text-3xl">{service.name}</h2>
            <p>{service.shortDescription}</p>
            <button className="details-btn"><Link to={`/services/${service.id}`}>See details</Link></button>
        </div>
    );
};

export default Service;