import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import ReactStars from "react-rating-stars-component";
import { Rating } from 'react-simple-star-rating'


const AddMovie = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [rating, setRating] = useState(0);

   

    return (
        <div>

            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Movie </h1>
                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" >Movie Poster Url</label>
                            <input id="poster-url" name='poster' type="text" placeholder='e.g https://example.jpg' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" >Movie Title</label>
                            <input id="movie-title" type="text" placeholder='Enter movie title' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Choose a Genre</label>
                            <select name='genre' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
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
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" >Duration(must be greater than 60 minutes)</label>

                            <input id="duration" type="number" name="duration" min="60" placeholder="Enter duration (e.g 120)" required className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Release Year</label> <br />
                            <div className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                            <DatePicker  className='text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                                selected={selectedYear}
                                onChange={(date) => setSelectedYear(date)}
                                showYearPicker
                                dateFormat="yyyy"
                                placeholderText="Select a year"

                                required />

                            </div>
                        </div>


                        <div>
                            <label className="text-white dark:text-gray-200" > Give Your Rating</label>
                            <div className="rating-container">
                                <Rating
                                    showTooltip
                                    tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                                ></Rating>

                            </div>
                        </div>



                        <div className='md:col-span-2'>
                            <label className="text-white dark:text-gray-200" for="passwordConfirmation">Add Summary</label>
                            <textarea id="textarea" type="textarea" rows={'6'} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>

                    </div>

                    <div className="flex justify-start mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>

            {/* <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section> */}
        </div >
    );
};

export default AddMovie;