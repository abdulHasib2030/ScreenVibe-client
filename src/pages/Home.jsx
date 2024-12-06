import React from 'react';
import Banner from '../components/Banner';
import FeatureMovie from '../components/FeatureMovie';
import { useLoaderData } from 'react-router-dom';
import ActionAndDrama from '../components/ActionAndDrama';
import NewestMovie from '../components/NewestMovie';

const Home = () => {
    const {data1, data2 } = useLoaderData()
    
     const comedy =   data1.result.filter(item => item.genre === 'comedy')
   
    return (
        <div>
            <Banner></Banner>
            <FeatureMovie data={data2}></FeatureMovie>
            <ActionAndDrama data={data1.actionDrama}></ActionAndDrama>
          
           <NewestMovie data={comedy}></NewestMovie>
        </div>
    );
};

export default Home;