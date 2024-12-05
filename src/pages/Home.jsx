import React from 'react';
import Banner from '../components/Banner';
import FeatureMovie from '../components/FeatureMovie';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <FeatureMovie data={loadData}></FeatureMovie>
        </div>
    );
};

export default Home;