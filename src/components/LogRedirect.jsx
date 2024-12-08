import React, {useContext} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const LoginRedirect = ({ children}) => {
  const {user} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  if (user) {
    if(location?.state?.title === 'my-favorite'){
         
   return   navigate(`/${location.state.title}/${result.user.email}`)
    }
    else{
   return   navigate(location?.state ? `/${location.state.title}` : '/')

    }
  }

  return children;
};

export default LoginRedirect;