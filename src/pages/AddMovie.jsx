import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

// import ReactStars from "react-rating-stars-component";
import { Rating } from 'react-simple-star-rating'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const AddMovie = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [selectedYear, setSelectedYear] = useState(null);
    const [rating, setRating] = useState(0);
    const [error, setError] = useState({})
    const [genres, setGenres] = useState([]);

    // Handle changes in the multiple select element
    const handleGenreChange = (e) => {
        const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
        setGenres(selectedValues);
    };

    const validateUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };
    const handleMovieAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const poster = (form.poster.value);
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const summary = form.summary.value;

        if (!validateUrl(poster)) {
            return setError({ poster: "Provide a valid url link." })
        }
        if (!title || title.length < 2) {
            return setError({ title: "The title must be at least 2 characters long." })
        }
        if(!genre){
            return setError({genre:"You must select a genre to proceed." })
        }
        if (!duration || duration < 60) {
            return setError({ duration: "Duration must be greater than 60 minutes" })
        }
        if (!selectedYear) {
            return setError({ year: "The Release Year field cannot be empty. Please select a valid year." })
        }
        if (!rating) {
            return setError({ rating: "You must choose a rating to proceed." })
        }
        if (!summary || summary.length < 10) {
            return setError({ summary: "The summary field requires a non-empty value with at least 10 characters to proceed." })
        }
        
        else {
            setError({ poster: null })
        }
        const year = selectedYear.getFullYear()
      
        const email = user.email
        const newMovie = { poster, title, genres, duration, year, rating, summary, email }

        fetch('http://localhost:5000/add-movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.acknowledged && data.insertedId) {
                    toast.success("Succssfully Added Movie")
                    navigate('/all-movies')
                }
            })

    }
 

    return (
        <div className='my-32'>
             <Helmet>
        <title>Add Movie</title>
      </Helmet>

            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Movie </h1>
                <form method='post' onSubmit={handleMovieAdd}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" >Movie Poster Url</label>
                            <input id="poster-url" name='poster' type="text" placeholder='e.g https://example.jpg' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            {
                                error && error?.poster && <p className='text-red-400'>
                                    {error.poster}
                                </p>
                            }
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Movie Title</label>
                            <input id="movie-title" type="text" name='title' placeholder='Enter movie title' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            {
                                error && error?.title && <p className='text-red-400'>
                                    {error.title}
                                </p>
                            }
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Choose Genres</label>
                            <select
                                name="genre" 
                                onChange={(e) => setGenres([...genres, e.target.value])}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            >
 
                                <option value="">Select a genre</option>
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
                            {
                                error && error?.genre && <p className='text-red-400'>
                                    {error.genre}
                                </p>
                            }
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Selected Genres</label>
                            <input
                                type="text"
                                value={genres} 
                                disabled
                                className="input block w-full py-2 px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Duration(must be greater than 60 minutes)</label>

                            <input id="duration" type="number" name="duration" min="60" placeholder="Enter duration (e.g 120)" className="block w-full py-2 px-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            {
                                error && error?.duration && <p className='text-red-400'>
                                    {error.duration}
                                </p>
                            }
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Release Year</label> <br />
                            <div className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <DatePicker className='text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                                    selected={selectedYear}
                                    onChange={(date) => setSelectedYear(date)}
                                    showYearPicker
                                    dateFormat="yyyy"
                                    placeholderText="Select a year"
                                    name='dateData'
                                />

                            </div>
                            {
                                error && error?.year && <p className='text-red-400'>
                                    {error.year}
                                </p>
                            }
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200" > Give Your Rating</label>
                            <div className="rating-container">
                                <Rating onClick={(rate) => setRating(rate)}
                                    ratingValue={rating}
                                    showTooltip
                                    tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                                ></Rating>

                            </div>
                            {
                                error && error?.rating && <p className='text-red-400'>
                                    {error.rating}
                                </p>
                            }
                        </div>



                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Add Summary</label>
                            <textarea name='summary' id="textarea" type="textarea" rows={'6'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                            {
                                error && error?.summary && <p className='text-red-400'>
                                    {error.summary}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="flex justify-start mt-6">
                        <button className="px-8 py-2 leading-5 text-black font-bold text-xl transition-colors duration-200 transform bg-gradient-to-r  from-gray-600 to-gray-400 hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Add Movie</button>
                    </div>
                </form>
            </section>
        </div >
    );
};

export default AddMovie;