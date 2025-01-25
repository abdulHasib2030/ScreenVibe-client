

import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const CategoryCard = ({item}) => {
    return (

       
        <SwiperSlide><img src={item.poster} className='h-full opacity-90 ' alt="" /></SwiperSlide>
 
 



            //   <div className=' cursor-pointer mb-28 mr-5 '>
            //                 <Link to={`/movie-details/${item._id}`}>
            //                    <div className='relative h-full  hover:opacity-60'>
            //                      <img src={item.poster} className='h-full opacity-90 ' alt="" />
            //                    <div className=''>
            //                     <button className='font-bold text-white hover:bg-black h-full w-full absolute opacity-0  hover:opacity-60  z-20 top-0 uppercase '><Link to={`/movie-details/${item._id}`}> view details</Link> </button>
            //                    </div>
            //                     </div> 
            //                     <ul className="mt-2 text-sm text-gray-600 flex  gap-2">

                                
                        
            //               <li className="">
            //              {item.year}
            //               </li>
            //               <li className='flex flex-wrap'>{item.genres.map((gen,idx)=> <li>{gen}{idx === item.genres.length - 1? '':','}</li>)}</li>
                      
            //           </ul>
        
            //           <h4 className='text-xl'>{item.title}</h4>
            //                 </Link>
            //                 </div>
     
    );
};

export default CategoryCard;