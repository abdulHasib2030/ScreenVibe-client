import React from 'react';
import { Link } from 'react-router-dom';

const NewestMovie = ({ data }) => {
    const rated = data.sort((a, b) => b.rating - a.rating)
    
    return (
        <div className='md:container mx-auto w-[90%] mb-32  mt-6'>
            <div className='grid  lg:grid-cols-6 md:grid-cols-4  grid-cols-2 gap-3  ' >

                <div className='md:order-2  gap-4 ml-5  md:col-span-2 col-span-2 '>

                    <div className='flex order-1 flex-col items-center justify-center h-full'>
                        <h1 className='text-start text-4xl font-bold '>Top Rating Movie</h1>
                        <div className='divider'></div>
                        <button className='hover:text-indigo-500 '><Link to={'/all-movies'}>VIEW ALL</Link> </button>
                    </div>
                </div>

                {
                    rated.slice(0, 4).map((item) => (

                        <div className='md:order-1 cursor-pointer relative mb-16'>
                            <Link to={`/movie-details/${item._id}`}>
                                <img src={item.poster} className='h-full hover:opacity-60' alt="" />
                                <ul className="mt-2 text-sm text-gray-600 flex  gap-2">

                                    <li className="">
                                        {item.year}
                                    </li>
                                    <li className='flex'>{item.genres.map((gen, idx) => <li>{gen}{idx === item.genres.length - 1 ? '' : ','}</li>)}</li>

                                </ul>

                                <h4 className='text-xl'>{item.title}</h4>
                            </Link>
                        </div>

                    ))
                }


            </div>
            <div className='grid  lg:grid-cols-6 md:grid-cols-4  grid-cols-2 gap-3  ' >
                {
                    rated.slice(5, 11).map((item) => (

                        <div className='md:order-1 cursor-pointer relative mb-16'>
                            <Link to={`/movie-details/${item._id}`}>
                                <img src={item.poster} className='h-full hover:opacity-60' alt="" />
                                <ul className="mt-2 text-sm text-gray-600 flex  gap-2">

                                    <li className="">
                                        {item.year}
                                    </li>
                                    <li className='flex'>{item.genres.map((gen, idx) => <li>{gen}{idx === item.genres.length - 1 ? '' : ','}</li>)}</li>

                                </ul>

                                <h4 className='text-xl'>{item.title}</h4>
                            </Link>
                        </div>

                    ))
                }



             

            </div>
        </div>
    );
};

export default NewestMovie;