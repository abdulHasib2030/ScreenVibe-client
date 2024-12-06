import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.state);
    if(loading){
        return <Loading></Loading>
    }
    if(user ){
        return children
    }
    
    return <Navigate state={location.state}   to={'/login'}></Navigate>
    
};

export default PrivateRoute;