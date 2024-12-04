import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import AddMovie from "../pages/AddMovie";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
  
const Route = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <HomeLayout></HomeLayout>,
        children:[
            // {
            //     path: '/',

            // },
            {
                path: '/add-movie',
                element: <AddMovie></AddMovie>,
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default Route;