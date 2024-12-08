import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const LoginRedirect = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()


  if (user) {
    if (location?.state?.title === 'my-favorite') {

    return <Navigate to={(`/${location.state.title}/${user.email}`)} />
    }
    else {
    return <Navigate to={(location?.state ? `/${location.state.title}` : '/')}/>

    }
  }

  return children;
};

export default LoginRedirect;