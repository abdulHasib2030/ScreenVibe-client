import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const DetailsMovie = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const loadData = useLoaderData()
    const { _id, poster, title, genres, duration, year, rating, summary, email } = loadData;


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

                        if (data.result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Movie has been deleted.",
                                icon: "success"
                            }
                            )
                            navigate('/all-movies')
                        }
                    })
            }
        })
    }

    const handleAddFavorite = (id) => {
        const data = { id: _id, poster: poster, title: title, genres: genres, duration: duration, year: year, rating: rating, summary: summary, email: user.email }

        fetch(`http://localhost:5000/favorite/${id}/${user.email}`)
            .then(res => res.json())
            .then(temp => {
                if (temp?.id && user.email) {
                    return toast.error("Already added this movie favorite")
                }
                else {
                    fetch(`http://localhost:5000/favorite`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Successfully added favorite list.")
                            }
                        })
                        .catch(err => {

                        })
                }
            })


    }


    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="">

                <div className="bg-gray-700 text-center space-y-4 p-12 text-white pb-56">
                    <h1 className="text-2xl font-bold">Movie Details</h1>
                    <p className="w-[80%] mx-auto">Discover an immersive platform featuring movie titles, stunning posters,
                        diverse genres, duration, release years, ratings, and detailed summaries. Explore captivating
                        storylines, user reviews, and trailers to find your next favorite film with ease!

                    </p>

                </div>


                <div className="  w-11/12 mx-auto h-full rounded-xl p-6 bg-[#1D232A] shadow-xl relative top-[-180px]">
                    <div className='lg:flex items-center '>


                        <div className="lg:w-1/2 lg:h-full ">
                            <img src={poster} className=" rounded-xl" alt="" />
                        </div>

                        <div className="ml-4 space-y-6 mt-3 md:mt-0 lg:w-1/2">
                            <h1 className="text-xl font-bold text-white">Movie title: <span className='text-lg text-gray-400'>{title}</span></h1>
                            <h1 className=' flex items-center gap-2 text-xl  font-bold text-white'>Genre: <span className='text-lg  text-gray-400 flex flex-wrap'> {genres.map((gen, idx) => <li className='list-none'>{gen}{idx === genres.length - 1 ? '' : ','}</li>)}</span></h1>

                            <h1 className="text-xl font-bold text-white">Movie duration: <span className='text-lg text-gray-400'>{duration} minutes</span></h1>
                            <h1 className="text-xl font-bold text-white">Movie Release Year : <span className='text-lg text-gray-400'>{year}</span></h1>
                            <h1 className="text-xl flex items-center font-bold text-white">Movie rating: <span className='text-lg text-gray-400 '>
                                <div className='rating-container'>
                                    <Rating initialValue={rating} readonly showTooltip tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']} size={20}></Rating>
                                </div>
                            </span></h1>
                            <div className='flex gap-3 flex-wrap'>
                                <button onClick={() => handleMovieDelete(_id)} className='flex items-center text-xl bg-gradient-to-r gap-3 to-gray-400 from-gray-600  text-white px-6 py-2 hover:rounded-xl hover:transform hover:duration-200'>Delete Movie <MdDeleteOutline className='text-2xl' /></button>
                                <button onClick={() => handleAddFavorite(_id)} className='flex items-center text-xl bg-gradient-to-r gap-3 to-gray-400 from-gray-600  text-white px-6 py-2 hover:rounded-xl hover:transform hover:duration-200'>Add to Favorite <FaRegHeart className='text-2xl' /></button>
                                <Link to={`/movie/update/${_id}`}>
                                    <button className='flex items-center text-xl bg-gradient-to-r gap-3 to-gray-400 from-gray-600  text-white px-6 py-2 hover:rounded-xl hover:transform hover:duration-200'>Update Movie <MdEdit className='text-2xl' /></button>
                                </Link>

                            </div>



                        </div>
                    </div>
                    <h1 className="text-xl mt-4 font-bold text-white">Movie Summary: <span className='text-lg text-gray-400'>{summary}</span></h1>
                </div>

                <div className='divider relative top-[-120px] '> <Link to={'/all-movies'}><span className='bg-gradient-to-r text-xl font-bold to-gray-400 from-gray-600  text-white px-6 py-2 hover:rounded-xl hover:transform hover:duration-200'>See all movies</span></Link> </div>

            </div>
        </div>
    );
};

export default DetailsMovie;