import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/2.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { IoIosLogIn, IoMdLogOut } from "react-icons/io";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navData = {
        home: true,
        allMovie: false,
        addMovie: false,
        favMovie: false,
        contact: false,
    }

    const [navActive, setNavActive] = useState([true, false, false, false, false, false])
    const navigate = useNavigate()
    const handleShowResponsiveNavbar = () => {
        const menu = document.getElementById('navbar-menu');
        menu.classList.remove('hidden')
    }
    const handleCloseResponsiveNavbar = () => {
        const menu = document.getElementById('navbar-menu');

        menu.classList.add('hidden')
    }

    const handleUserLogout = () => {
        logOutUser()
        navigate('/')
    }

    // Nav item color active 
    const bgColorActive = (item) => {
        if (item == 'home') {
            const temp = [true, false, false, false, false, false]
            setNavActive(temp)
        }
        else if (item == 'all') {
            const temp = [false, true, false, false, false, false]
            setNavActive(temp)
        }
        else if (item == 'add') {
            const temp = [false, false, true, false,false, false]
            setNavActive(temp)
        }
        else if (item == 'fav') {
            const temp = [false, false, false, true, false ,false]
            setNavActive(temp)
        }
        else if (item == 'about') {
            const temp = [false, false, false, false, true, false]
            setNavActive(temp)
        }
        else if (item == 'contact') {
            const temp = [false, false, false, false, false, true]
            setNavActive(temp)
        }
    }

    return (
        <div className='mt-[95px] '>
            <div className='  bg-[#1D232A]  fixed top-0 left-0 right-0 z-50   '>
                <nav className="container mx-auto flex justify-between items-center  py-4 ">
                    <Link to={'/'} className="text-3xl font-bold leading-none" href="#">
                        <img src={logo} alt="" className='w-40' />

                    </Link>
                    <div className="lg:hidden flex gap-3">
                       
                        <button onClick={handleShowResponsiveNavbar} id='navbar-burger' className=" flex items-center text-indigo-500 p-3">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                        <li><Link to={'/'} onClick={() => bgColorActive('home')} className={`text-sm ${navActive[0] ? 'text-blue-600' : ''}  hover:text-gray-500`} href="#">Home</Link></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><Link to={'/all-movies'} onClick={() => bgColorActive("all")} className={`text-sm ${navActive[1] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">All Movies</Link></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        {
                            user && <>
                        <li><Link to={'/add-movie'} state={{ title: `add-movie` }} onClick={() => bgColorActive("add")} className={`text-sm ${navActive[2] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">Add Movie</Link></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><Link to={`/my-favorite/${user?.email}`} state={{ title: `my-favorite` }} onClick={() => bgColorActive("fav")} className={`text-sm ${navActive[3] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">My Favorites</Link></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li></>
                        }
                        <li><Link to={`about-us`}  onClick={() => bgColorActive("about")} className={`text-sm ${navActive[3] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">About us</Link></li>
                        <li className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </li>
                        <li><Link to={'/contact'} onClick={() => bgColorActive("contact")} className={` ${navActive[4] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">Contact</Link></li>
                    </ul>

                    {
                        user ?
                            <div className='  hidden lg:inline-block '>
                                <div className=" flex gap-7">

                                    <div>

                                        <div className="avatar relative group">
                                            <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
                                                <img src={user?.photoURL} alt="not found user profile" />
                                            </div>

                                            <div className="absolute  text-white text-sm  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {user?.displayName}
                                            </div>

                                        </div>
                                    </div>
                                    <button onClick={handleUserLogout} className="hidden lg:inline-block hover:text-[#e05356] lg:ml-auto lg:mr-3 py-2 \  font-bold   transition duration-200  ">
                                      <span className='flex items-center gap-2'> <IoMdLogOut/>  Logout</span>
                                    </button>
                                </div>
                            </div>
                            : <div className='hidden lg:inline-block  ' >
                                <div className='flex items-center gap-4'>



                                    <div className='flex items-center'>
                                        <Link to={'/login'} className="hover:text-[#e05356] lg:ml-auto lg:mr-3 py-2 px-6   font-bold   transition duration-200 flex items-center gap-2" href="#"> <IoIosLogIn /> Login </Link>
                                        <Link to={'/register'} className="hover:text-[#e05356] py-2 px-6 flex items-center gap-2  font-bold   transition duration-200" href="#"><svg class="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                                        </svg>Register</Link>

                                    </div>
                                </div>
                            </div>}
                </nav>
            </div>
            <div id='navbar-menu' className=" relative z-50 hidden">
                <div id='navbar-backdrop' onClick={handleCloseResponsiveNavbar} className="  fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#1D232A] border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link to={'/'} className="mr-auto text-3xl font-bold leading-none" href="#">
                            <img src={logo} alt="" className='w-44' />

                        </Link>
                        <button onClick={handleCloseResponsiveNavbar} id='navbar-close' className="">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul >
                            <li className="mb-1">
                                <Link to={'/'} onClick={() => bgColorActive("home")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/all-movies'} onClick={() => bgColorActive("all")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">All Movies</Link>
                            </li>
                            {
                            user && <>
                            <li className="mb-1">
                                <Link state={{ title: `add-movie` }} to={'add-movie'} onClick={() => bgColorActive("add")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Add Movie</Link>
                            </li>
                            <li className="mb-1">
                                <Link state={{ title: `my-favorite` }} to={`/my-favorite/${user?.email}`} onClick={() => bgColorActive("fav")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >My Favorites</Link>
                            </li>
                            </>}
                            <li className="mb-1">
                                <Link to={'/about-us'} onClick={() => bgColorActive("about")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About us</Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/contact'} onClick={() => bgColorActive("contact")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        {
                            user ?
                                <div className='flex justify-between'>
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL} />


                                        </div>
                                        <div className="username absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                                            <p className="text-white">{user?.displayName}</p>
                                        </div>

                                    </div>
                                    <button onClick={handleUserLogout} className="block mb-2 hover:text-[#e05356] lg:ml-auto lg:mr-3 py-2   font-bold   transition duration-200  ">
                                    <span className='flex items-center gap-2'> <IoMdLogOut/>  Logout</span>
                                    </button>
                                   
                                </div> :
                                <div className='flex items-center'>
                                <Link to={'/login'} className="hover:text-[#e05356] lg:ml-auto lg:mr-3 py-2 px-6   font-bold   transition duration-200 flex items-center gap-2" href="#"> <IoIosLogIn /> Login </Link>
                                <Link to={'/register'} className="hover:text-[#e05356] py-2 px-6 flex items-center gap-2  font-bold   transition duration-200" href="#"><svg class="fill-current h-5 w-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                                </svg>Register</Link>

                            </div>
                        }

                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;