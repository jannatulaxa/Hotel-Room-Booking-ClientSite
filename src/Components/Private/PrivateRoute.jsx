import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom/dist/umd/react-router-dom.development";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
