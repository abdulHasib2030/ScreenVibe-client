import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import AddMovie from "../pages/AddMovie";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LoginRedirect from "../components/LogRedirect";
import PrivateRoute from "./PrivateRoute";
  
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
                element: <PrivateRoute>
                    <AddMovie></AddMovie>
                </PrivateRoute>,
            },
            {
                path: '/login',
                element: <LoginRedirect>
                    <SignIn></SignIn>
                </LoginRedirect>
            },
            {
                path: '/register',
                element: <LoginRedirect>
                    <SignUp></SignUp>
                </LoginRedirect>
            },
        ]
    }
])

export default Route;