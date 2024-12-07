import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const DetailsMovie = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const loadData = useLoaderData()
    const { _id, poster, title, genre, duration, year, rating, summary, email } = loadData;
    console.log();

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
        const data = { id: _id, poster: poster, title: title, genre: genre, duration: duration, year: year, rating: rating, summary: summary, email: user.email }

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
                           if(data.acknowledged){
                            toast.success("Successfully added favorite list.")
                           }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })


    }

    const handleUpdate = (id) =>{

    }
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


                <div className="  w-11/12 mx-auto h-full rounded-2xl p-6 bg-[#1D232A] shadow-2xl relative top-[-180px]">
                    <div className='lg:flex items-center '>


                        <div className="lg:w-1/2 lg:h-full ">
                            <img src={poster} className=" rounded-xl" alt="" />
                        </div>

                        <div className="ml-4 space-y-6 mt-3 md:mt-0 lg:w-1/2">
                            <h1 className="text-2xl font-bold text-white">Movie title: <span className='text-xl text-gray-400'>{title}</span></h1>
                            <h1 className="text-2xl font-bold text-white">Gengre: <span className='text-xl text-gray-400'>{genre}</span></h1>
                            <h1 className="text-2xl font-bold text-white">Movie duration: <span className='text-xl text-gray-400'>{duration}</span></h1>
                            <h1 className="text-2xl font-bold text-white">Movie Release Year : <span className='text-xl text-gray-400'>{year}</span></h1>
                            <h1 className="text-2xl flex items-center font-bold text-white">Movie rating: <span className='text-xl text-gray-400 '>
                                <div className='rating-container'>
                                    <Rating initialValue={rating} readonly showTooltip tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}></Rating>
                                </div>
                            </span></h1>
                            <div className='flex gap-3 flex-wrap'>
                                <button onClick={() => handleMovieDelete(_id)} className='flex items-center text-2xl bg-gradient-to-r gap-3 to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>Delete Movie <MdDeleteOutline className='text-4xl' /></button>
                                <button onClick={() => handleAddFavorite(_id)} className='flex items-center text-2xl bg-gradient-to-r gap-3 to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>Add to Favorite <FaRegHeart className='text-4xl' /></button>
                             <Link to={`/movie/update/${_id}`}>
                             <button   className='flex items-center text-2xl bg-gradient-to-r gap-3 to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>Update Movie <MdEdit className='text-4xl' /></button>
                             </Link>   

                            </div>



                        </div>
                    </div>
                    <h1 className="text-2xl mt-4 font-bold text-white">Movie Summary: <span className='text-lg text-gray-400'>{summary}</span></h1>
                </div>

                <div className='divider relative top-[-120px] '> <Link to={'/all-movies'}><span className='bg-gradient-to-r text-xl font-bold to-[#5FE1E7] from-[#D3F46D] text-black px-6 py-2 hover:rounded-2xl hover:transform hover:duration-200'>See all movies</span></Link> </div>

            </div>
        </div>
    );
};

export default DetailsMovie;