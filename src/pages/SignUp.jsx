import React, { useContext, useState } from 'react';
import image from '../assets/loginImg.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
const SignUp = () => {
    const { setUser,loading, createUser,updateUserProfile, googleAuth } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const handleUserRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, photUrl, email, password);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (name.length < 5) {
            setError({ name: "Name can't 5 character less." })
            return
        }

        if (!photoUrl) {
            setError({ photo: 'Provide photo-url' })
            return
        }
        if (!email) {
            setError({ email: 'Provide Email Address' })
            return
        }
        if (!passwordRegex.test(password)) {
            setError({ password: "Password must meet one Uppercase, lowercase letter and at least 6 chanacters long." })
            return
        }
       
        

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user)
            updateUserProfile({displayName:name, photoURL: photoUrl})
            .then(() =>{
                toast.success("Successfully register account.")
                if(location?.state.title === 'my-favorite'){
                    console.log("Abdul Haisb");
                    navigate(`/${location.state.title}/${result.user.email}`)
                  }
                  else{
                    navigate(location?.state ? `/${location.state.title}` : '/')}

            })
            .catch((error) =>{
                const err = error.message
                setError({profile: err})
                return
            })
        })
        .catch((error) =>{
            if (error.code === "auth/email-already-in-use") {
                // loading(false)
                setError({user:"This email is already registered. Please log in."});
            }
            else {
            setError({user:error.message})
            }
        })
    }

    const handleGoogleAuth = () =>{
        googleAuth()
        .then(result => {
            setUser(result.user)
             navigate('/')
        })
        .catch(error =>{
            setError({user: error.message})
        })
    }
    return (
        <div>


            <div className="min-w-screen min-h-screen bg-gray-900  ">
                <div className="bg-gray-100 text-gray-500  w-full overflow-hidden" >
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2">
                            <img src={image} alt="" className="w-full h-full object-cover" />
                            
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <div>
                                <form action="" onSubmit={handleUserRegister}>
                                    <div className="flex -mx-3">
                                        <div className="w-full  ">
                                            <label for="" className="text-xs font-semibold px-1">Name</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input type="text" name='name' className="w-full -ml-10 px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter your name" />

                                            </div>
                                        </div>
                                    </div>
                                    {
                                        error && error?.name && <div>
                                            <p className='text-red-500'>{error.name}</p>
                                        </div>
                                    }
                                    <div className="flex -mx-3 mt-3">
                                        <div className="w-full  ">
                                            <label for="" className="text-xs font-semibold px-1">Photo Url</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input type="text" name='photoUrl' className="w-full -ml-10 px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="e.g http://example.png" />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        error && error?.photo && <div>
                                            <p className='text-red-500'>{error.photo}</p>
                                        </div>
                                    }

                                    <div className="flex -mx-3 mt-3">
                                        <div className="w-full  ">
                                            <label for="" className="text-xs font-semibold px-1">Email</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                <input type="email" name='email' className="w-full -ml-10 px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        error && error?.email && <div>
                                            <p className='text-red-500'>{error.email}</p>
                                        </div>
                                    }

                                    <div className="flex -mx-3 mt-3">
                                        <div className="w-full">
                                            <label for="" className="text-xs font-semibold px-1">Password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input type="password" name='password' className="w-full -ml-10 px-2 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" autoComplete="current-password" />
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        error && error?.password && <div>
                                            <p className='text-red-500'>{error.password}</p>
                                        </div>
                                    }

                                    <div className="flex -mx-3 mt-8">
                                        <div className="w-full ">
                                            <button className="block w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>

                                        </div>
                                    </div>
                                        {
                                        error && error?.user && <div>
                                            <p className='text-red-500'>{error.user}</p>
                                        </div>
                                    }
                                        {
                                        error && error?.profile && <div>
                                            <p className='text-red-500'>{error.profile}</p>
                                        </div>
                                    }
                                </form>


                                <div className='divider'></div>
                                <div className='-mx-3'>
                                    <button onClick={handleGoogleAuth}  className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                    <div className="flex items-center justify-center">
                                        <FcGoogle />
                                        <span className="ml-4">
                                            Log in
                                            with
                                            Google</span>
                                    </div>
                                </button>
  
                                </div>
                              

                                <p className="mt-8">Already have an account? <Link to={'/login'} className="text-blue-500 hover:text-blue-700 font-semibold">Sign In</Link></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default SignUp;