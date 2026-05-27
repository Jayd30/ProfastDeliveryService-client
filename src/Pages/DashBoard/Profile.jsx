import React, { useEffect, useState } from 'react';

import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Profile = () => {

  const { user } = useAuth();
  const [dbUser, setDbUser] = useState({});
  useEffect(()=>{

  if(user?.email){

    axios.get(
      `http://localhost:3000/users/${user.email}`
    )
    .then(res=>{
      setDbUser(res.data)
    })

  }

},[user])

  return (

    <div className="max-w-4xl mx-auto">

      {/* HEADING */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold text-[#b8da54] mb-3">
          My Profile
        </h1>

        <p className="text-black  font-bold">
          Manage your personal information and account details.
        </p>

      </div>


      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* TOP BANNER */}
        <div className="h-40  bg-[#CAEB66] hover:bg-[#b8da54] relative">

          {/* PROFILE IMAGE */}
          <div className="absolute -bottom-16 left-10">

            {
              user?.photoURL ? (

                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl"
                />

              ) : (

                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-white">

                  <FaUserCircle className="text-7xl text-gray-400" />

                </div>

              )
            }

          </div>

        </div>


        {/* USER DETAILS */}
        <div className="pt-24 pb-10 px-10">

          {/* NAME */}
          <h2 className="text-3xl font-bold text-gray-800">

            {
              user?.displayName || 'No Name Available'
            }

          </h2>

          <p className="text-gray-400 mt-2">
            Parcel Delivery Customer
          </p>


          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            {/* EMAIL */}
            <div className= " bg-gray-50 hover:bg-indigo-50 transition-all duration-300 rounded-2xl p-6 border border-gray-100 hover:shadow-lg">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">

                  <FaEnvelope className="text-2xl text-[#b8da54]" />

                </div>

                <div>

                  <h3 className="text-gray-500 text-sm">
                    Email Address
                  </h3>

                  <p className="font-semibold text-gray-800 break-all">
                    {user?.email}
                  </p>

                </div>

              </div>

            </div>


            {/* MOBILE */}
            <div className="bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-2xl p-6 border border-gray-100 hover:shadow-lg">

              <div className="flex items-center gap-4  rounded-2xl">

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                  <FaPhoneAlt className="text-2xl text-[#b8da54]" />

                </div>

                <div >

                  <h3 className="text-gray-500  text-sm">
                    Mobile Number
                  </h3>

                  <p className="font-semibold text-gray-800">
                    {
                     dbUser?.number || 'Not Added Yet'
                    }
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* EDIT BUTTON */}
          <div className="mt-10">

            {/* <button className="btn btn-primary rounded-2xl px-8 hover:scale-105 transition-all duration-300">

              Edit Profile

            </button> */}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;