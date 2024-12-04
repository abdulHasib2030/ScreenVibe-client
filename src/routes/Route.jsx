import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import AddMovie from "../pages/AddMovie";
  
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
            }
        ]
    }
])

export default Route;