import React from 'react';
import {
  FaHome,
  FaBoxOpen,
  FaShippingFast,
  FaUserCircle,
  FaSignOutAlt,
} from 'react-icons/fa';

import { NavLink, Outlet } from 'react-router';

import Navbarlogo from '../Pages/Shared/Navbarlogo/Navbarlogo';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {

  const { logOut } = useAuth();

  // ACTIVE NAV STYLE
  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 font-medium group
    ${
      isActive
        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-[1.02]'
        : 'text-gray-600 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 hover:translate-x-2'
    }`;

  // LOGOUT
  const handleLogout = () => {

    logOut()
      .then(() => {
        console.log('Logout Successful');
      })
      .catch(error => {
        console.log(error);
      });

  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-[300px] bg-white border-r border-gray-200 shadow-2xl px-6 py-8 hidden md:block">

        {/* LOGO */}
        <div className="mb-14">

          <div className="flex items-center gap-3">

            <Navbarlogo />

          </div>

          <p className="text-gray-400 text-sm mt-3">
            Fast & Secure Parcel Delivery System
          </p>

        </div>

        {/* NAVIGATION */}
        <div className="space-y-3">

          {/* HOME */}
          <NavLink
            to="/"
            className={navItemClass}
          >
            <FaHome className="text-xl group-hover:rotate-6 transition-all duration-300" />

            Home
          </NavLink>


          {/* MY PARCEL */}
          <NavLink
            to="/dashboard/myParcels"
            className={navItemClass}
          >
            <FaBoxOpen className="text-xl group-hover:rotate-6 transition-all duration-300" />

            My Parcels
          </NavLink>


          {/* BOOK PARCEL */}
          <NavLink
            to="/bookParcel"
            className={navItemClass}
          >
            <FaShippingFast className="text-xl group-hover:rotate-6 transition-all duration-300" />

            Send Parcel
          </NavLink>


          {/* PROFILE */}
          <NavLink
            to="/dashboard/profile"
            className={navItemClass}
          >
            <FaUserCircle className="text-xl group-hover:rotate-6 transition-all duration-300" />

            Profile
          </NavLink>

        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-20">


        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">

        {/* MOBILE TOPBAR */}
        <div className="md:hidden mb-6 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between">

          <Navbarlogo />

          <button className="btn btn-sm btn-primary">
            Menu
          </button>

        </div>

        {/* PAGE CONTENT */}
        <div className="bg-white min-h-[calc(100vh-60px)] rounded-3xl shadow-xl p-4 md:p-8">

          <Outlet />

        </div>

      </main>

    </div>

  );
};

export default DashboardLayout;