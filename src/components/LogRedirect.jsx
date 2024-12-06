import React, {useContext} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const LoginRedirect = ({ children}) => {
  const {user} = useContext(AuthContext)
  const location = useLocation()
  console.log(location.pathname)
  if (user) {
    return <Navigate to={location?.state ? `/${location.state.id}` : '/'} />;
  }

  return children;
};

export default LoginRedirect;