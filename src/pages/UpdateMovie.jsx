import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import { Helmet } from 'react-helmet-async';
const UpdateMovie = () => {
    const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const loadData = useLoaderData()
  const {_id, poster, title, genres, duration, year, summary} = loadData
  const [tempgenre, setTempGenres] = useState(genres)
  const [selectedYear, setSelectedYear] = useState(year ? new Date(year, 0) : '');
 
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
if(!selectedYear){
    setSelectedYear(year)
}
if (rating === 0){
  setRating(loadData.rating)
}

  const onSubmit = (data) => {
    if (!validateUrl(data.poster)) {
      return setError("poster", {
        type: "manual",
        message: "Provide a valid URL link.",
      });
    }
 
    if (!rating){
        return setError("rating", {
            type: "manual",
            message: "You must choose a rating to proceed.",
          });
    }
    const editData = ({poster: data.poster, 
        title:data.title, genres: tempgenre, duration:data.duration,
        year: !selectedYear ? year :selectedYear.getFullYear() , 
        rating: rating, 
        summary:data.summary})
      
       
  
    fetch(`https://screen-vibe-rho.vercel.app/movie/update/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(editData)
    })
     .then(res => res.json())
     .then(data => {
   
        toast.success("Successfully Updated")
        navigate(`/movie-details/${_id}`)
     })

  };



const handleRemoveGenre = (gen) =>{
  const flter = tempgenre.filter(g => g !== gen)

  setTempGenres(flter)
}

  return (
    <div>
       <Helmet>
        <title>Update Movie {title}</title>
      </Helmet>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update Movie</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Poster */}
            <div>
              <label className="text-white dark:text-gray-200">Movie Poster URL</label>
              <input
                {...register("poster", { required: "Poster URL is required" })}
                type="text"
                defaultValue={poster}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.poster && <p className="text-red-400">{errors.poster.message}</p>}
            </div>

            {/* Title */}
            <div>
              <label className="text-white dark:text-gray-200">Movie Title</label>
              <input
                {...register("title", {
                  required: "Title is required",
                  
                  minLength: { value: 2, message: "Title must be at least 2 characters" },
                })}
                type="text"
                placeholder="Enter movie title"
                defaultValue={title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.title && <p className="text-red-400">{errors.title.message}</p>}
            </div>

            {/* Genre */}
            <div>
              <label className="text-white dark:text-gray-200">Choose a Genre</label>
              <select
               onChange={(e)=> !tempgenre.includes(e.target.value) && setTempGenres([...tempgenre, e.target.value])}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="">Select a Genre</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Science Fiction</option>
                <option value="romance">Romance</option>
                <option value="thriller">Thriller</option>
                <option value="mystery">Mystery</option>
                <option value="documentary">Documentary</option>
                <option value="musical">Musical</option>
                <option value="biography">Biography</option>
                <option value="sports">Sports</option>
              </select>
              {/* {errors.genre && <p className="text-red-400">{errors.genre.message}</p>} */}
            </div>
            {/* selected Genre */}
            <div>
              <label className="text-white dark:text-gray-200">Selected Genres</label>
              <div className='flex flex-wrap gap-3 list-none '>
                {
                  tempgenre.map(gen => <li>{gen} <span onClick={()=>handleRemoveGenre(gen)}  className='cursor-pointer text-red-500'>x</span></li>)
                }
              </div>
              {errors.genre && <p className="text-red-400">{errors.genre.message}</p>}
            </div>

            {/* Duration */}
            <div>
              <label className="text-white dark:text-gray-200">Duration (minutes)</label>
              <input
                {...register("duration", {
                  required: "Duration is required",
                  validate: (value) =>
                    value >= 60 || "Duration must be greater than 60 minutes",
                })}
                type="number"
                placeholder="Enter duration (e.g. 120)"
                defaultValue={duration}
                className="block w-full py-2 px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.duration && <p className="text-red-400">{errors.duration.message}</p>}
            </div>

            {/* Release Year */}
            <div>
              <label className="text-white dark:text-gray-200">Release Year</label>
              <div className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <DatePicker
                  className="text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  // selected={selectedYear}
                  onChange={(date) => setSelectedYear(date)}
                  showYearPicker
                  dateFormat="yyyy"
                  placeholderText="Select a year"
                  selected={selectedYear}
                 
                  
                />
              </div>
              {errors.year && <p className="text-red-400">{errors.year.message}</p>}
            </div>

            {/* Rating */}
            <div>
              <label className="text-white dark:text-gray-200">Give Your Rating</label>
              <div className="rating-container">
                <Rating 
                  onClick={(rate) => setRating(rate)}
                  ratingValue={rating}
                  initialValue={loadData.rating}
                  showTooltip
                  tooltipArray={["Terrible", "Bad", "Average", "Great", "Perfect"]}
                />
              </div>
              {errors.rating && <p className="text-red-400">{errors.rating.message}</p>}
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <label className="text-white dark:text-gray-200">Add Summary</label>
              <textarea
                {...register("summary", {
                  required: "Summary is required",
                  minLength: {
                    value: 10,
                    message: "Summary must be at least 10 characters",
                  },
                })}
                rows="6" defaultValue={summary}
                placeholder="Write a short summary about the movie..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.summary && <p className="text-red-400">{errors.summary.message}</p>}
            </div>
          </div>

          <div className="flex justify-start mt-6">
            <button className="px-8 py-2 leading-5 text-black font-bold text-xl transition-colors duration-200 transform bg-gradient-to-r from-[#5FE1E7] to-[#D3F46D] hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Update Movie
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateMovie;