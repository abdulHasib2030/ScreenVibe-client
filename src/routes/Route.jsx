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
import Contact from "../pages/Contact";
import UpdateMovie from "../pages/UpdateMovie";

const loader1 = async () => {
    const response = await fetch("http://localhost:5000/all-movies");
    return response.json();
};

const loader2 = async () => {
    const response = await fetch('http://localhost:5000');
    console.log(response);
    return response.json();
};

const combinedLoader = async () => {
    const [data1, data2] = await Promise.all([loader1(), loader2()]);
    return { data1, data2 };
};

const Route = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: combinedLoader,
            },
            {
                path: '/add-movie',
                element: <PrivateRoute>
                    <AddMovie></AddMovie>
                </PrivateRoute>,
            },
            {
                path: '/login',
                element: <SignIn></SignIn>,
                // <LoginRedirect>
                // {/* </LoginRedirect> */}
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
                loader: ({ params }) => fetch(`http://localhost:5000/my-favorite/${params.email}`),
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/movie/update/:id',
                element: <PrivateRoute>
                    <UpdateMovie></UpdateMovie>
                </PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/movie-details/${params.id}`),

            }
        ]
    }
])

export default Route;