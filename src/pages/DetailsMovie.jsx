import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsMovie = () => {
    const loadData = useLoaderData()
 console.log(loadData);
    return (
        <div>
            
        </div>
    );
};

export default DetailsMovie;