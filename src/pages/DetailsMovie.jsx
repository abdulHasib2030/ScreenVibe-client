import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Swal from 'sweetalert2'

const DetailsMovie = () => {
    const navigate = useNavigate()
    const loadData = useLoaderData()
    const { _id, poster, title, genre, duration, year, rating, summary } = loadData;

    const handleMovieDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movie-delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            }
                        )
                        navigate('/all-movies')
                        }
                    })
            }
        })}

        return (
            <div>
                <div className="">

                    <div className="bg-gradient-to-r to-[#5FE1E7] from-[#D3F46D] text-center space-y-4 p-12 text-black pb-56">
                        <h1 className="text-4xl font-bold">Movie Details</h1>
                        <p className="w-[80%] mx-auto">Discover an immersive platform featuring movie titles, stunning posters,
                            diverse genres, duration, release years, ratings, and detailed summaries. Explore captivating
                            storylines, user reviews, and trailers to find your next favorite film with ease!

                        </p>

                    </div>

                    <div className=" md:flex w-11/12 mx-auto h-full rounded-2xl p-6 bg-[#1D232A] shadow-2xl relative top-[-180px]">
                        <div className="md:w-2/3 ">
                            <img src={poster} className=" rounded-xl" alt="" />
                        </div>

                        <div className="ml-4 space-y-3 mt-3 md:mt-0">
                            <h1 className="text-2xl font-bold">Movie title: <span className='text-xl font-semibold'>{title}</span></h1>
                            <h1 className="text-2xl font-bold">Gengre: <span className='text-xl font-semibold'>{genre}</span></h1>
                            <h1 className="text-2xl font-bold">Movie duration: <span className='text-xl font-semibold'>{duration}</span></h1>
                            <h1 className="text-2xl font-bold">Movie Release Year : <span className='text-xl font-semibold'>{year}</span></h1>
                            <h1 className="text-2xl flex items-center font-bold">Movie rating: <span className='text-xl font-semibold '>
                                <div className='rating-container'>
                                    <Rating initialValue={rating} readonly showTooltip tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}></Rating>
                                </div>
                            </span></h1>
                            <h1 className="text-2xl font-bold">Movie Summary: <span className='text-xl font-semibold'>{summary}</span></h1>
                            <div className='flex gap-3'>
                                <button onClick={() => handleMovieDelete(_id)} className='flex items-center text-2xl bg-gradient-to-r gap-3 to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>Delete Movie <MdDeleteOutline className='text-4xl' /></button>
                                <button className='flex items-center text-2xl bg-gradient-to-r gap-3 to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>Add to Favorite <FaRegHeart className='text-4xl' /></button>

                            </div>



                        </div>

                    </div>

                </div>
            </div>
        );
    };

export default DetailsMovie;