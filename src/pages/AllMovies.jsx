import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const AllMovies = () => {
    const loadData = useLoaderData()
    console.log(loadData);

    return (
        <div className='my-20'>
            <div className=' md:container mx-auto w-[90%]'>
                <h1 className='text-4xl font-bold'>All Movies</h1>
                <div className='divider'></div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 items-center'>
                {
                    loadData.map(item =>   
                    <div className="card card-compact text-black   bg-gradient-to-r  to-[#5FE1E7] from-[#D3F46D] rounded-none  ">
                        <figure>
                            <img className='h-78 w-full mx-auto hover:opacity-70 transition-opacity'
                                src={item.poster}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{item.title}</h2>
                            <div className='grid grid-cols-2   '>
                            <p> <span className='text-lg font-semibold text-black'>Genre:</span> {item.genre}</p>
                            <p> <span className='text-lg font-semibold text-black'> Duration:</span> {item.duration} minutes</p>
                            <p> <span className='text-lg font-semibold text-black'> Release Year:</span> {item.year}</p>
                            <div className='rating-container'>
        
                            <Rating  initialValue={item.rating} 
                             readonly 
                            ></Rating>

                            </div>
                            </div>
                            <Link to={`/movie-details/${item._id}`} className="block px-4 py-3 mb-3 text-xl  text-center text-white font-semibold   btn">See Detail</Link>

                            
                            
                        </div>
                    </div>)
                }
            
              

                </div>
            </div>
        </div>
    );
};

export default AllMovies;