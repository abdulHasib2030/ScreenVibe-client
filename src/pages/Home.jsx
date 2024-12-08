import React from 'react';
import Banner from '../components/Banner';
import FeatureMovie from '../components/FeatureMovie';
import { useLoaderData } from 'react-router-dom';
import ActionAndDrama from '../components/ActionAndDrama';
import NewestMovie from '../components/NewestMovie';
import FunnestMovie from '../components/FunnestMovie';

const Home = () => {
    const {data1, data2 } = useLoaderData()
    
    const comedy1 = data1.result.filter(item => 
        item.genres.some(gen => gen === 'comedy')
    );
     const comedy = comedy1.filter(item => item.year === 2024)

   
    return (
        <div>
            <Banner></Banner>
            <FeatureMovie data={data2}></FeatureMovie>
            <ActionAndDrama data={data1.actionDrama}></ActionAndDrama>
            <FunnestMovie data={comedy}></FunnestMovie>
            <div className='divider my-10'></div>
           <NewestMovie data={data1.result}></NewestMovie>
           
        </div>
    );
};

export default Home;