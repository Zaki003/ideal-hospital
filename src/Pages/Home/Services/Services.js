import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

/*  */
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="my-16 w-6/7 mx-auto container">
            <h1 className="text-4xl font-semibold mb-4">We provide:</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;