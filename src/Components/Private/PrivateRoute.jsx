import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import {  useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname)

    if(!loading){
        return children;
    }
    else{
        <progress className="progress w-56"></progress> 
    }
       
};

   


export default PrivateRoute;