import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const AllMovies = () => {
    const { result } = useLoaderData()
    const [search, setSearch] = useState("")
    const [data, setData] = useState(result)


    useEffect(() => {
        fetch(`https://screen-vibe-rho.vercel.app/all-movies?searchParams=${search}`)
            .then((res) => res.json())
            .then((searchData) => {
                setData(searchData.result);
            })

    }, [search]);

    return (
        <div className='my-20'>
            <Helmet>
                <title>All Movies</title>
            </Helmet>
            <div className=' md:container mx-auto w-[90%]'>
                <h1 className='text-4xl font-bold'>All Movies</h1>

                <label className="input input-bordered flex mt-4 p-2 items-center gap-2">
                    Search by title
                    <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className="grow" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className='divider'></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center'>
                    {
                        data.length > 0 ?
                            data.map(item =>
                                <div key={item._id} className="card card-compact text-black   bg-gradient-to-r  to-[#5FE1E7] from-[#D3F46D] rounded-none  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 ">
                                    <figure>
                                        <img className='h-96 w-full mx-auto hover:opacity-70 transition-opacity'
                                            src={item.poster}
                                            alt="Shoes" />
                                    </figure>
                                    <div className=" px-2 py-2 pb-0 ">
                                        <h2 className="card-title text-2xl">{item.title}</h2>
                                        <div className='   '>
                                            <p className='flex flex-wrap gap-1'> <span className=' font-semibold text-black'>Genre:</span> {item.genres.map((gen, idx) => <li className='list-none'>{gen}{idx === item.genres.length - 1 ? '' : ','}</li>)}</p>
                                            <p> <span className=' font-semibold text-black'> Duration:</span> {item.duration} minutes</p>
                                            <p> <span className=' font-semibold text-black'> Release Year:</span> {item.year}</p>
                                        </div>
                                        <div className='rating-container'> <span className=' font-semibold text-black'> Rating:</span>

                                            <Rating size={20} initialValue={item.rating} tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                                                readonly showTooltip
                                            ></Rating>

                                        </div>
                                        <Link state={{ title: `movie-details/${item._id}` }} to={`/movie-details/${item._id}`} className="block px-4 py-1 my-3   text-center text-white font-semibold  bg-[#333333]  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 ">See Detail</Link>



                                    </div>
                                </div>)
                            :
                            <div><h1>No data found.</h1></div>

                    }



                </div>
            </div>
        </div>
    );
};

export default AllMovies;