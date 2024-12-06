import React from 'react';
import { Link } from 'react-router-dom';

const NewestMovie = ({data}) => {
    return (
        <div className='md:container mx-auto w-[90%] mb-10 relative md:-top-24 mt-6 md:mt-0'>
            <div className='grid lg:grid-cols-8 md:grid-cols-4 gap-3'>

                <div className='h-64 gap-4 ml-5 lg:col-span-2'>

                    <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-start text-4xl font-bold '>Funniest Comedy Movies of 2024</h1>
                    <div className='divider'></div>
                    <button className='hover:text-indigo-500'><Link to={'/all-movies'}>VIEW ALL</Link> </button>
                    </div>
                </div>

                {
                    data.slice(0, 14).map((item)=>(
                       
                        <div className=' cursor-pointer '>
                        <Link to={`/movie-details/${item._id}`}>
                            <img src={item.poster} className='h-full hover:opacity-60' alt="" />
                            <ul className="mt-2 text-sm text-gray-600 flex  gap-2">
                    
                      <li className="">
                     {item.year},
                      </li>
                      <li>{item.genre}</li>
                  
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