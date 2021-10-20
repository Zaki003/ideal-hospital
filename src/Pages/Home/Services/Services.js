import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
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
        <div>
            <h1 className="text-4xl font-semibold">We provide:</h1>
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