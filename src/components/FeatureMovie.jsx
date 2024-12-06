import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const FeatureMovie = ({data}) => {
    return (
        <div className='relative md:-top-24 mt-6 md:mt-0'>
            <h1 className='text-center text-5xl  font-bold font bottom-0  '>Features Movie
            <div className='divider  md:container mx-auto'></div>

            </h1>

            <div className=' md:container mx-auto w-[90%]'>
               
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 items-center'>
                {
                    data.map(item =>   
                    <div className="card card-compact text-black   bg-gradient-to-r  to-[#5FE1E7] from-[#D3F46D] rounded-none  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 ">
                        <figure>
                            <img className='h-96 w-full mx-auto hover:opacity-70 transition-opacity'
                                src={item.poster}
                                alt="Shoes" />
                        </figure>
                        <div className=" px-2 py-2 pb-0 ">
                            <h2 className="card-title text-2xl">{item.title}</h2>
                            <div className='grid grid-cols-2   '>
                            <p> <span className=' font-semibold text-black'>Genre:</span> {item.genre}</p>
                            <p> <span className=' font-semibold text-black'> Duration:</span> {item.duration} minutes</p>
                            <p> <span className=' font-semibold text-black'> Release Year:</span> {item.year}</p>
                            </div>
                            <div className='rating-container'> <span className=' font-semibold text-black'> Rating:</span> 
        
                            <Rating size={30} initialValue={item.rating} tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                             readonly  showTooltip
                            ></Rating>

                            </div>
                            <Link to={`/movie-details/${item._id}`} className="block px-4 py-1 my-3   text-center text-white font-semibold  bg-[#333333]  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 ">See Detail</Link>

                            
                            
                        </div>
                    </div>)
                }
            
              

                </div>

               <div className='my-11  '>
                <div class="divider "> <Link to={'/all-movies'}>
                
                <button  className='border-2 cursor-pointer hover:opacity-70  hover:transform hover:duration-300 text-black    bg-gray-200 px-6 py-2 text-xl   '>All Movies</button>
                </Link>
                </div>
               </div>
            </div>
        </div>
    );
};

export default FeatureMovie;