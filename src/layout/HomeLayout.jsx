import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div >
        {/* <Toaster></Toaster> */}
        {/* <ToastContainer></ToastContainer> */}
        <header className=' font-mono '>
            <nav>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='md:w-11/12 mx-auto font-mono'>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default HomeLayout;