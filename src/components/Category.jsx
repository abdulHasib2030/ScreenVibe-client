import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import CategoryCard from "./CategoryCard";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Category = ({ data }) => {
    let store_genres = []
    data.result.map(item => {
        item.genres.map(itm => {
            store_genres.push(itm)
        })
    })
    let duplicate_remove = new Set(store_genres)
    let genre_show = [...duplicate_remove]
    const [displayData, setDisplayData] = useState(data.result)
    
    const showCategoryData = (item) =>{
        // const filterCategoryData = data.result.map(item2 => item2.genres.map(itm => itm === item))
        // console.log(filterCategoryData);
        let temp = []
       const datafilter = data.result.map(item2 => item2.genres.map(itm => {
          if(itm === item){
            temp.push(item2)
          }
        }))

        setDisplayData(temp)
    }
    return (
        <div className="md:container mx-auto w-[90%] mt-16  ">
            <h1 className="text-start text-4xl font-bold mb-6">Category </h1>
            <Flicking moveType="freeScroll" bound={true}>
                {
                    genre_show.map(item =>
                        <button onClick={()=> showCategoryData(item)} className="px-6 py-2 mr-5 rounded-xl text-black hover:text-[#e05356]  bg-white font-bold">{item}</button>

                    )
                }


            </Flicking>
            {/* Data show in category data */}
            <div className=" mt-7 '">
                <Swiper navigation={true}
                    slidesPerView={4}
                    breakpoints={{
                        1088: {
                            slidesPerView: 5
                        },
                        768:{
                            slidesPerView: 4
                        },
                        480:{
                            slidesPerView: 2
                        }

                    }}
                    spaceBetween={30}
                  
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Navigation ]}
                    className="mySwiper"
                >
                    {
                        displayData.map(item => <SwiperSlide className="h-full">


                            <div className=' cursor-pointer'>
                                <Link to={`/movie-details/${item._id}`}>
                                    <div className='relative w-[100%] h-[500px] hover:opacity-60'>
                                        <img src={item.poster} className='h-full w-full opacity-90 ' alt="" />
                                        <div className=''>
                                            <button className='font-bold text-white hover:bg-black h-full w-full absolute opacity-0  hover:opacity-60  z-20 top-0 uppercase '><Link to={`/movie-details/${item._id}`}> view details</Link> </button>
                                        </div>
                                    </div>
                                    <ul className="mt-2 text-sm text-gray-600 flex  gap-2">



                                        <li className="">
                                            {item.year}
                                        </li>
                                        <li className='flex flex-wrap'>{item.genres.map((gen, idx) => <li>{gen}{idx === item.genres.length - 1 ? '' : ','}</li>)}</li>

                                    </ul>

                                    <h4 className='text-xl'>{item.title}</h4>
                                </Link>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Category;