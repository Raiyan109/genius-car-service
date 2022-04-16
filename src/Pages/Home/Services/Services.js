import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


// const services = [
//     { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/72KxkNJ/erik-mclean-3u-Hl-GFnz-PDU-unsplash.jpg' },
//     { id: 1, name: 'oil change', price: 100, description: '', img: 'https://i.ibb.co/zhVDb87/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance.jpg' }
// ]

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='services-title mt-5'>Our Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;