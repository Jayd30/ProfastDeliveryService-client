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
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setDbUser(data));
    }
  }, [user]);

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-4 px-5 py-3 rounded-2xl font-medium transition-all duration-300 group
    ${
      isActive
        ? 'bg-[#CAEB66] text-[#1B1F3B] shadow-lg'
        : 'text-gray-600 hover:bg-[#CAEB66]/20 hover:text-[#1B1F3B] hover:translate-x-2'
    }`;

  const handleLogout = () => {
    logOut()
      .then(() => console.log('Logout Successful'))
      .catch(error => console.log(error));
  };

  const navLinks = (
    <div className="space-y-3">
      <NavLink to="/" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaHome /> Back To Home
      </NavLink>

      <NavLink to="/dashboard/myParcels" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaBoxOpen /> My Parcels
      </NavLink>

      <NavLink to="/bookParcel" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaShippingFast /> Send Parcel
      </NavLink>

      <NavLink to="/dashboard/profile" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaUserCircle /> Profile
      </NavLink>

      <NavLink to="/dashboard/trackparcel" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaMapMarkedAlt /> Track Parcel
      </NavLink>

      <NavLink to="/dashboard/yourresponse" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaCommentDots /> My Response
      </NavLink>

      <NavLink to="/dashboard/ridersapplication" className={navItemClass} onClick={() => setOpenSidebar(false)}>
        <FaClipboardCheck /> Rider Application Status
      </NavLink>

      {dbUser?.role === "admin" && (
        <NavLink to="/dashboard/makeadmin" className={navItemClass} onClick={() => setOpenSidebar(false)}>
          <FaClipboardCheck /> Admin Desk
        </NavLink>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#F5F7FA] overflow-hidden">

      {/* OVERLAY */}
      <div
        onClick={() => setOpenSidebar(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 md:hidden
        ${openSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-[290px]
        bg-white border-r border-gray-200 shadow-2xl
        px-6 py-6
        transition-all duration-500 overflow-hidden
        ${openSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="flex flex-col h-full">

          {/* MOBILE CLOSE */}
          <div className="flex justify-end md:hidden mb-4">
            <button
              onClick={() => setOpenSidebar(false)}
              className="bg-[#CAEB66] p-2 rounded-xl text-[#1B1F3B]"
            >
              <FaTimes />
            </button>
          </div>

          {/* LOGO + USER */}
          <div className="mb-6">
            <div className="bg-[#F8FAF2] rounded-2xl p-4 shadow-sm border border-[#CAEB66]/20">
              <Navbarlogo />
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Fast & Secure Parcel Delivery System
            </p>

            <div className="mt-5 bg-[#CAEB66]/10 border border-[#CAEB66]/50 rounded-2xl p-4">
              <p className="text-black-700  font-bold text-sm">Welcome</p>
              <h2 className="font-bold text-[#CAEB66] text-lg mt-1">
                {user?.displayName}
              </h2>
            </div>
          </div>

          {/* SCROLLABLE NAV */}
          <div className="flex-1 overflow-y-auto pr-2">
            {navLinks}
          </div>

          {/* LOGOUT FIXED */}
          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="w-full bg-[#CAEB66] hover:bg-[#b8da54]
              text-[#1B1F3B] font-semibold
              py-3 rounded-2xl 
              flex items-center justify-center gap-3
              shadow-lg hover:shadow-xl transition-all"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>

        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-x-hidden">

        {/* MOBILE TOPBAR */}
        <div className="md:hidden sticky top-0 z-30 bg-white shadow-md px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setOpenSidebar(true)}
            className="bg-[#CAEB66] text-[#1B1F3B] p-3 rounded-xl"
          >
            <FaBars />
          </button>

          <Navbarlogo />
        </div>

        {/* CONTENT */}
        <div className="p-4 md:p-8">
          <div className="bg-white min-h-[calc(100vh-40px)] rounded-[30px] shadow-lg border p-4 md:p-8">
            <Outlet />
          </div>
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;