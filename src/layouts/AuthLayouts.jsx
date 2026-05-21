import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/rest/authImage.png'
import Navbarlogo from '../Pages/Shared/Navbarlogo/Navbarlogo';
const AuthLayouts = () => {
    return (
        <div className="p-12 bg-base-200 ">
            <Navbarlogo></Navbarlogo>
  <div className="hero-content flex-col lg:flex-row-reverse ">
   <div className='flex-1'>
     <img
      src={authImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
   </div>
    <div  className='flex-1'>
      <Outlet></Outlet>
    </div>
  </div>
</div>
    );
};

export default AuthLayouts;