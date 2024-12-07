import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2'

const Favorites = () => {
    const loadData = useLoaderData()
    const navigate = useNavigate()
    const handleDeleteFavorite = (id) =>{
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
                fetch(`http://localhost:5000/favorite-delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Favorite movie has been deleted.",
                                icon: "success"
                            }
                            )
                            navigate('/all-movies')
                        }
                    })
            }
        })
    }
    return (
        <div className='my-20'>
            <div className=' md:container mx-auto w-[90%]'>
                <h1 className='text-4xl font-bold'>Favorites Movies</h1>
                <div className='divider'></div>
                {
                    loadData.length > 0 ?
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 items-center'>
                    {loadData.map(item =>   
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
                            <Link to={`/movie-details/${item.id}`} className="block px-4 py-1 my-3   text-center text-white font-semibold  bg-[#333333]  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 ">See Detail</Link>
                            <button onClick={()=>handleDeleteFavorite(item._id)}  className="block px-4 py-1 my-3   text-center text-white font-semibold  bg-red-500  hover:opacity-70 hover:rounded-2xl hover:transform hover:duration-200 flex gap-3">Delete Favorite <MdDeleteOutline className='text-2xl' /></button>

                            
                            
                        </div>
                    </div>)}
                        </div>
                    :
                    <div>
                        <h1 className='text-center  text-4xl'>No Movies Found in Your Favorites List.</h1>
                    </div>
                }
            
              

            </div>
        </div>
    );
};

export default Favorites;