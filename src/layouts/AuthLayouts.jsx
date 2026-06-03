import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/rest/authImage.png';
import Navbarlogo from '../Pages/Shared/Navbarlogo/Navbarlogo';

const AuthLayouts = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar Logo */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Navbarlogo />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-10">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT SIDE IMAGE */}
          <div className="hidden lg:flex bg-[#CAEB66] items-center justify-center p-10">

            <div className="text-center">

              <img
                src={authImg}
                alt="Authentication"
                className="w-full max-w-md mx-auto"
              />

              <h2 className="text-4xl font-bold mt-8 text-black">
                Welcome to ProFast
              </h2>

              <p className="mt-4 text-lg text-black/80 max-w-md">
                Deliver parcels faster, safer and smarter with
                real-time tracking and secure logistics solutions.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="flex items-center justify-center p-4 sm:p-8 lg:p-12">
            <Outlet />
          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthLayouts;