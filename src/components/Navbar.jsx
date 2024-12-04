import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/2.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user , logOutUser} = useContext(AuthContext)
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


    return (
        <div className='shadow-lg'>
            <nav className="relative   flex justify-between items-center w-11/12 mx-auto py-4 ">
                <Link to={'/'} className="text-3xl font-bold leading-none" href="#">
                    <img src={logo} alt="" className='w-40' />

                </Link>
                <div className="lg:hidden">
                    <button onClick={handleShowResponsiveNavbar} id='navbar-burger' className=" flex items-center text-white p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><Link to={'/'} className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</Link></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><Link to={'/all-movies'} className="text-sm text-blue-600 font-bold" href="#">All Movies</Link></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><Link to={'/add-movie'} className="text-sm text-gray-400 hover:text-gray-500" href="#">Add Movie</Link></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">My Favorites</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
                </ul>
                {
                    user ?
                        <div className='  hidden lg:inline-block '>
                            <div className="avatar flex gap-5">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            <button onClick={handleUserLogout} className="hidden lg:inline-block py-2 px-6 bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black font-bold  transition duration-200">
                                Logout
                            </button>
                            </div>
                        </div>
                        : <div className='hidden lg:inline-block' >

                            <Link to={'/login'} className=" lg:ml-auto lg:mr-3 py-2 px-6  hover:bg-[#5FE1E7] bg-gradient-to-r to-[#5FE1E7] from-[#D3F46D] text-black font-bold   transition duration-200" href="#">Sign In</Link>
                            <Link to={'/register'} className=" py-2 px-6 bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black font-bold   transition duration-200" href="#">Sign up</Link>
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
                        <ul>
                            <li className="mb-1">
                                <Link to={'/'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/all-movies'}  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">All Movies</Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'add-movie'} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Add Movie</Link>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">My Favorites</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
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
                                    </div>
                                    <button onClick={handleUserLogout} className="block mb-2 leading-loose ext-center px-6  font-bold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D] text-black ">
                                        Logout
                                    </button>
                                </div> :
                                <div className="pt-6">
                                    <Link to={'/login'} className="block px-4 py-3 mb-3 leading-loose text-center text-black font-semibold  bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D]" href="#">Sign in</Link>
                                    <Link to={'/register'} className="block px-4 py-3 mb-2 leading-loose  text-center text-black font-semibold bg-gradient-to-r  from-[#5FE1E7] to-[#D3F46D]" href="#">Sign Up</Link>
                                </div>
                        }

                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Navbar;