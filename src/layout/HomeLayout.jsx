import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../pages/Loading';
import Banner from '../components/Banner';

const HomeLayout = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div >
        {/* <Toaster></Toaster> */}
        {/* <ToastContainer></ToastContainer> */}
        <header className=' font-mono '>
        <Toaster />
            <nav>
                <Navbar></Navbar>
            </nav>
        
        </header>
        <main className=' font-mono'>
       
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default HomeLayout;