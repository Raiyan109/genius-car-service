import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
// import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)

    return (
        <div>
            <h1>You are about to book : {service.name}</h1>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary slide-fwd-center'>Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;