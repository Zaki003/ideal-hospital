import React from 'react';

const WorkingHours = () => {
    return (
        <div className="text-center bg-red-100 p-8 mb-12">
            <h2 className="text-4xl font-semibold pb-4 italic">Working Hour</h2>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Saturday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Sunday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Monday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Tuesday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Wednesday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Thursday:</span> 08:00 am - 12:00 pm</h4>
            <h4 className="text-2xl"><span className="text-green-700 font-medium">Friday:</span> 10:00 am - 12:00 pm</h4>
        </div>
    );
};

export default WorkingHours;