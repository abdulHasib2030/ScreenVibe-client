import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='my-32 text-white'>
            <Helmet>
                <title>ScreenVibe | About us</title>
            </Helmet>
            <div className=' md:container mx-auto w-[90%]'>
                <h1 className='text-4xl font-bold'>About This Websites</h1>
                <div className='divider'></div>
                <div className='space-y-2 text-justify'>
                    <h1 className='text-2xl font-bold'>ScreenVibe - Ultimate Movie Portal</h1>
                    <h3 className='text-xl font-bold'>purpose</h3>
                    <p>The Movie Portal is a user-centric platform designed to streamline the experience of exploring, managing, and personalizing movie collections. With a sleek and dynamic user interface, the portal ensures ease of navigation and engagement for both casual users and movie enthusiasts. Core functionalities include adding, updating, and deleting movies, viewing detailed information, and managing personal favorites. Authentication features allow users to securely personalize their experience, while seamless transitions and robust backend functionality enhance usability.</p>
                    <h3 className='text-xl font-bold'>Features in ScreenVibe</h3>
                    <h3 className='text-xl font-bold'>1. Add Movies: <span className='font-normal text-lg'>Authenticated Users can effortlessly add new movies to this platform by providing essential details like poster, title, genre, duration, release date, rating and summary. The form is validate, intuitive, ensuring minimal effort while maintaining data accuracy.</span> </h3>
                    <h3 className='text-xl font-bold'>2. Movie Details Page: <span className='font-normal text-lg'>Each movie has a dedicated details page, offering an in-depth view of its information, such as movie poster, title, genre, duration, release date, rating and summary. This page is dynamically populated for an engaging user experience. Only authenticated user view this page.</span> </h3>
                    <h3 className='text-xl font-bold'>3. Update Movies: <span className='font-normal text-lg'>Only authenticated user access this page. Authorized users can update movie information seamlessly. This feature ensures that the movie database remains accurate and up-to-date, enhancing the reliability of the platform.ir adventures effectively.</span> </h3>
                    <h3 className='text-xl font-bold'>4. Manage Favorite Movies: <span className='font-normal text-lg'>Authenticated users can add movies to their personalized favorites list. The list is easily accessible, providing a customized experience to suit user preferences.</span> </h3>
                    <h3 className='text-xl font-bold'>5. Delete Movies and Favorites: <span className='font-normal text-lg'>Users can delete movies they no longer wish to keep, ensuring flexibility and control. Favorite movies can also be removed with ease, allowing users to curate their list according to changing tastes.</span> </h3>
                    <h3 className='text-xl font-bold'>6. View All Movies: <span className='font-normal text-lg'>This feature provides users with a complete list of all available movies in the database.</span> </h3>
                    <h3 className='text-xl font-bold'>7. Search by Title: <span className='font-normal text-lg'>The search functionality enables users to find specific movies effortlessly by entering a title or keywords into the search bar. The system dynamically filters the results, displaying only the relevant movies that match the search query. This feature saves time and enhances the user experience, making it easy to locate desired content in a large movie collection.</span> </h3>

                </div>
            </div>
        </div>
    );
};

export default About;