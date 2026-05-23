import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home/Home';
import RootLayout from '../layouts/RootLayout';
import AboutUs from '../Pages/Shared/AboutUs/AboutUs';
import AuthLayouts from '../layouts/AuthLayouts';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import Coverage from '../Pages/Coverage/Coverage';
import PrivateRoutes from '../Routes/PrivateRoutes';
import Bookparcel from '../Pages/BookParcel/Bookparcel';
import DashBoardLayouts from '../layouts/DashBoardLayouts';
import MyParcel from '../Pages/DashBoard/Myparcel/MyParcel';
import Profile from '../Pages/DashBoard/Profile';
import ContactUs from '../Pages/Shared/ContactUs/Contactus';
import Services from '../Pages/Shared/Service/Service';
import Service from '../Pages/Shared/Service/Service';
import Yourresponse from '../Pages/Yourresponse/Yourresponse';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/about',
            Component:AboutUs
        },
        {
path:'/contact',
Component:ContactUs
        },
        {
            path:'coverage',
            Component:Coverage
        },
        {
path:'/services',
Component:Service
        },
        {
            path:'bookParcel',
            element:<PrivateRoutes><Bookparcel></Bookparcel></PrivateRoutes>
        }

    ]
  },
  {
    path:'/',
    Component:AuthLayouts,
    children:[
        {
            path:'login',
            Component:Login
        },
        {
            path:'register',
            Component:Register
        }
    ]
  },
  {
    path:'/dashboard',
  element:<PrivateRoutes><DashBoardLayouts></DashBoardLayouts></PrivateRoutes>,
    children:[
        {
path:'myParcels',
Component:MyParcel
        },
        {
            path:'profile',
            Component:Profile
        },
        {
path:'yourresponse',
Component:Yourresponse
  }
        
    ]
  },

  

]);