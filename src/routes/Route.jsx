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
import AllMovies from "../pages/AllMovies";
import DetailsMovie from "../pages/DetailsMovie";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

const Route = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000'),
            },
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
            {
                path: '/all-movies',
                element: <AllMovies></AllMovies>,
                loader: () => fetch('http://localhost:5000/all-movies'),
            },
            {
                path: '/movie-details/:id',
                element: <PrivateRoute>
                    <DetailsMovie></DetailsMovie>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/movie-details/${params.id}`),
            },
            {
                path: '/my-favorite/:email',
                element: <PrivateRoute>
                   <Favorites></Favorites>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/my-favorite/${params.email}`),
            }
        ]
    }
])

export default Route;