import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaBoxOpen,
  FaShippingFast,
  FaUserCircle,
  FaSignOutAlt,
  FaMapMarkedAlt,
  FaCommentDots,
  FaClipboardCheck,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import { NavLink, Outlet } from 'react-router';

import Navbarlogo from '../Pages/Shared/Navbarlogo/Navbarlogo';
import useAuth from '../hooks/useAuth';


const DashboardLayout = () => {

  const { logOut, user } = useAuth();
  const [dbUser, setDbUser] = useState(null);

useEffect(() => {

  if (user?.email) {

    fetch(`http://localhost:3000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setDbUser(data));

  }

}, [user]);

  const [openSidebar, setOpenSidebar] = useState(false);

  // ACTIVE NAV STYLE
  const navItemClass = ({ isActive }) =>
    `flex items-center gap-4 px-5 py-3 rounded-2xl font-medium transition-all duration-300 group
    ${
      isActive
        ? 'bg-[#CAEB66] text-[#1B1F3B] shadow-lg'
        : 'text-gray-600 hover:bg-[#CAEB66]/20 hover:text-[#1B1F3B] hover:translate-x-2'
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

  // NAVIGATION LINKS
  const navLinks = (
    <div className="space-y-3">

      {/* HOME */}
      <NavLink
        to="/"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaHome className="text-lg group-hover:scale-110 transition-all duration-300" />
        Home
      </NavLink>

      {/* MY PARCELS */}
      <NavLink
        to="/dashboard/myParcels"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaBoxOpen className="text-lg group-hover:scale-110 transition-all duration-300" />
        My Parcels
      </NavLink>

      {/* SEND PARCEL */}
      <NavLink
        to="/bookParcel"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaShippingFast className="text-lg group-hover:scale-110 transition-all duration-300" />
        Send Parcel
      </NavLink>

      {/* PROFILE */}
      <NavLink
        to="/dashboard/profile"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaUserCircle className="text-lg group-hover:scale-110 transition-all duration-300" />
        Profile
      </NavLink>

      {/* TRACK PARCEL */}
      <NavLink
        to="/dashboard/trackparcel"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaMapMarkedAlt className="text-lg group-hover:scale-110 transition-all duration-300" />
        Track Parcel
      </NavLink>

      {/* MY RESPONSE */}
      <NavLink
        to="/dashboard/yourresponse"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaCommentDots className="text-lg group-hover:scale-110 transition-all duration-300" />
        My Response
      </NavLink>

      {/* RIDER APPLICATION STATUS */}
      <NavLink
        to="/dashboard/ridersapplication"
        className={navItemClass}
        onClick={() => setOpenSidebar(false)}
      >
        <FaClipboardCheck className="text-lg group-hover:scale-110 transition-all duration-300" />
        Rider Application Status
      </NavLink>
      {/* make admin */}
        {dbUser?.role === "admin" && (
  <NavLink
    to="/dashboard/makeadmin"
    className={navItemClass}
    onClick={() => setOpenSidebar(false)}
  >
    <FaClipboardCheck className="text-lg group-hover:scale-110 transition-all duration-300" />
    Admin Desk
  </NavLink>
)}
    </div>
  );

  return (

    <div className="flex min-h-screen bg-[#F5F7FA] overflow-hidden">

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 md:hidden
        ${
          openSidebar
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-[290px]
        bg-white border-r border-gray-200 shadow-2xl
        px-6 py-6
        transition-all duration-500
        ${
          openSidebar
            ? 'translate-x-0'
            : '-translate-x-full md:translate-x-0'
        }`}
      >

        <div className="flex flex-col h-full justify-between">

          {/* TOP SECTION */}
          <div>

            {/* MOBILE CLOSE BUTTON */}
            <div className="flex justify-end md:hidden mb-4">

              <button
                onClick={() => setOpenSidebar(false)}
                className="bg-[#CAEB66] p-2 rounded-xl text-[#1B1F3B]"
              >
                <FaTimes />
              </button>

            </div>

            {/* LOGO */}
            <div className="mb-10">

              <div className="bg-[#F8FAF2] rounded-2xl p-4 shadow-sm border border-[#CAEB66]/20">

                <Navbarlogo />

              </div>

              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Fast & Secure Parcel Delivery System
              </p>

              {/* USER CARD */}
              <div className="mt-5 bg-[#CAEB66]/10 border border-[#CAEB66]/20 rounded-2xl p-4">

                <p className="text-gray-700 text-sm">
                  Hey 👋
                </p>

                <h2 className="font-bold text-[#1B1F3B] text-lg mt-1 break-words">
                  {user?.displayName}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Welcome to your dashboard
                </p>

              </div>

            </div>

            {/* NAVIGATION */}
            {navLinks}

          </div>

          {/* LOGOUT BUTTON */}
          <div className="pt-8">

            {/* <button
              onClick={handleLogout}
              className="w-full bg-[#CAEB66] hover:bg-[#b8da54]
              text-[#1B1F3B] font-semibold
              py-3 rounded-2xl 
              flex items-center justify-center gap-3
              shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-[1.02]"
            >
              <FaSignOutAlt className="text-lg" />
              Logout
            </button> */}

          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-x-hidden">

        {/* MOBILE TOPBAR */}
        <div className="md:hidden sticky top-0 z-30 bg-white shadow-md px-4 py-4 flex items-center justify-between">

          <button
            onClick={() => setOpenSidebar(true)}
            className="bg-[#CAEB66] hover:bg-[#b8da54]
            text-[#1B1F3B]
            p-3 rounded-xl
            transition-all duration-300"
          >
            <FaBars />
          </button>

          <Navbarlogo />

        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 md:p-8">

          <div
            className="bg-white
            min-h-[calc(100vh-40px)]
            rounded-[30px]
            shadow-lg
            border border-gray-100
            p-4 md:p-8
            transition-all duration-300"
          >

            <Outlet />

          </div>

        </div>

      </main>

    </div>

  );
};

export default DashboardLayout;