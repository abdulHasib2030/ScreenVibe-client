import React from 'react';
import Banner from '../components/Banner';
import FeatureMovie from '../components/FeatureMovie';
import { useLoaderData } from 'react-router-dom';
import ActionAndDrama from '../components/ActionAndDrama';
import FunnestMovie from '../components/FunnestMovie';
import TopRating from '../components/TopRating';
import { Helmet } from 'react-helmet-async';
import Category from '../components/Category';


const Home = () => {
    const {data1, data2 } = useLoaderData()
    
    const comedy1 = data1.result.filter(item => 
        item.genres.some(gen => gen === 'comedy')
    );
     const comedy = comedy1.filter(item => item.year === 2024)

   
    return (
        <div>
             <Helmet>
        <title>ScreenVibe | Home</title>
      </Helmet>
            <Banner></Banner>
           <Category data={data1}></Category>
            <FeatureMovie data={data2}></FeatureMovie>
            <ActionAndDrama data={data1.actionDrama}></ActionAndDrama>
            <FunnestMovie data={comedy}></FunnestMovie>
            <div className='divider '></div>
           <TopRating data={data1.result}></TopRating>
           
        </div>
    );
};

export default Home;