import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/2.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navData = {
        home: true,
        allMovie: false,
        addMovie: false,
        favMovie: false,
        contact: false,
    }

    const [navActive, setNavActive] = useState([true, false, false, false, false])
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
            const temp = [true, false, false, false, false]
            setNavActive(temp)
        }
        else if (item == 'all') {
            const temp = [false, true, false, false, false]
            setNavActive(temp)
        }
        else if (item == 'add') {
            const temp = [false, false, true, false, false]
            setNavActive(temp)
        }
        else if (item == 'fav') {
            const temp = [false, false, false, true, false]
            setNavActive(temp)
        }
        else if (item == 'contact') {
            const temp = [false, false, false, false, true]
            setNavActive(temp)
        }
    }
    console.log(navActive[0]);
    return (
        <div className='shadow-lg'>
            <nav className="relative   flex justify-between items-center w-11/12 mx-auto py-4 ">
                <Link to={'/'} className="text-3xl font-bold leading-none" href="#">
                    <img src={logo} alt="" className='w-40' />

                </Link>
                <div className="lg:hidden flex gap-3">
                    <label className="swap swap-rotate ">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="light" />

                        {/* sun icon */}
                        <svg
                            className="swap-off  h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    <button onClick={handleShowResponsiveNavbar} id='navbar-burger' className=" flex items-center text-indigo-500 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
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
                    </li>
                    <li><Link to={'/contact'} onClick={() => bgColorActive("contact")} className={` ${navActive[4] ? 'text-blue-600' : ''} hover:text-gray-500 font-bold`} href="#">Contact</Link></li>
                </ul>

                {
                    user ?
                        <div className='  hidden lg:inline-block '>
                            <div className=" flex gap-5">
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="light" />

                                    {/* sun icon */}
                                    <svg
                                        className="swap-off h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}
                                    <svg
                                        className="swap-on h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                                <div>

                                    <div className="avatar relative group">
                                        <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL} alt="not found user profile" />
                                        </div>
                                     
                                        <div className="absolute  w-24 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {user?.displayName}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleUserLogout} className="hidden lg:inline-block py-2 px-6 bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black font-bold  transition duration-200">
                                    Logout
                                </button>
                            </div>
                        </div>
                        : <div className='hidden lg:inline-block  ' >
                            <div className='flex items-center gap-4'>
                                <label className="swap swap-rotate ">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="light" />

                                    {/* sun icon */}
                                    <svg
                                        className="swap-off  h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}
                                    <svg
                                        className="swap-on h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>


                                <div>
                                    <Link to={'/login'} className=" lg:ml-auto lg:mr-3 py-2 px-6  hover:bg-[#5FE1E7] bg-gradient-to-r to-[#5FE1E7] from-[#D3F46D] text-black font-bold   transition duration-200" href="#">Login </Link>
                                    <Link to={'/register'} className=" py-2 px-6 bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black font-bold   transition duration-200" href="#">Register</Link>

                                </div>
                            </div>
                        </div>}
            </nav>
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
                            <li className="mb-1">
                                <Link state={{ title: `add-movie` }} to={'add-movie'} onClick={() => bgColorActive("add")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Add Movie</Link>
                            </li>
                            <li className="mb-1">
                                <Link state={{ title: `my-favorite` }} to={`/my-favorite/${user?.email}`} onClick={() => bgColorActive("fav")} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >My Favorites</Link>
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
                                    <button onClick={handleUserLogout} className="block mb-2 leading-loose ext-center px-6  font-bold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black ">
                                        Logout
                                    </button>
                                </div> :
                                <div className="pt-6">
                                    <Link to={'/login'} className="block px-4 py-3 mb-3 leading-loose text-center text-black font-semibold  bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D]" href="#">Login</Link>
                                    <Link to={'/register'} className="block px-4 py-3 mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D]" href="#">Register</Link>
                                </div>
                        }

                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;