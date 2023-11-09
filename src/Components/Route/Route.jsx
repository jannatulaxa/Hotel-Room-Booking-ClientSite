import React from 'react';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Page/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Page/Login';
import Register from '../Page/Register';
import ErrorPage from '../Page/ErrorPage';
import BookingsRoom from '../Bookings/BookingsRoom';
import DetailsPage from '../Page/Details/DetailsPage';
import AddBooking from '../AddBooking/AddBooking';
import PrivateRoute from '../Private/PrivateRoute';
import Gallary from '../Gallary/Gallary';
import ContactUs from '../Contact/ContactUs';
import Update from '../Update/Update';
import Rating from '../Page/Rating/Rating';


    const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayOut></MainLayOut>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
             path:'/',
             element:<Home></Home>
            },
            {
             path:'/login',
             element:<Login></Login>
            },
            {
             path:'/register',
             element:<Register></Register>
            },
            {
              path:'/room',
              element:<BookingsRoom></BookingsRoom>,
              // loader:()=>fetch("http://localhost:5001/Bookings")
            },
            {
              path:'/gallery',
              element:<Gallary></Gallary>
            },
            {
              path:'/contact',
              element:<ContactUs></ContactUs>
            },
            {
              path:'/rating/:id',
              element:<PrivateRoute><Rating></Rating></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5001/Bookings/${params.id}`)
            },
            {
              path:'/update/:id',
              element:<PrivateRoute><Update></Update></PrivateRoute>,
               loader:({params})=>fetch(`http://localhost:5001/books/${params.id}`) 
            },
            {
              path:'/details/:id',
              element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5001/Bookings/${params.id}`)
            },
            {
              path:'/bookings',
              element:<PrivateRoute><AddBooking></AddBooking></PrivateRoute>,
              // loader:()=>fetch('http://localhost:5001/books')
              
            },
          ]
        },
      ]);
   


export default router;