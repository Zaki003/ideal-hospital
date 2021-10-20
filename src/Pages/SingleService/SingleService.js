import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);


    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setService(data[serviceId - 1]))
    }, [serviceId]);
    return (
        <div className="flex my-12 mx-auto container">
            <div className="w-2/5 mr-8">
                <img width="100%" src={service.img} alt="" />
            </div>

            <div className="w-3/5 px-8 py-8">
                <h2 className="text-3xl">{service.name}</h2>
                <p>{service.LongDescription}</p>
                <h3 className="text-2xl text-red-500 font-semibold">Price: {service.price}/- taka</h3>
                <button className="details-btn">Book Now</button>
            </div>
        </div>
    );
};

export default SingleService;