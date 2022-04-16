import React from 'react';
import sleeping from '../../../images/lauren-kay-wUMfrBfNNq0-unsplash.jpg'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Mechanic is sleeping </h1>
            <img className='d-flex justify-content-center' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;