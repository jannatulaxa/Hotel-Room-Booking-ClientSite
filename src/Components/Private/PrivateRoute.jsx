import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname)

    if(!loading){
        return children;
    }
    else{
        <progress className="progress w-56"></progress> 
    }
    
    return <Navigate state={location.pathname}  to='/login'></Navigate>
       
};

   


export default PrivateRoute;