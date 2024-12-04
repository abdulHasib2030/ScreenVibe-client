import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user ){
        return children
    }
    
    return <Navigate state={{id: location.pathname[location.pathname.length-1]}}  to={'/login'}></Navigate>
    
};

export default PrivateRoute;