import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaSearch,
  FaUserShield,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const SearchUsers = () => {

  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // SEARCH USERS
  // =========================
  const handleSearch = async () => {

    if (!email) {

      return Swal.fire({
        icon: "warning",
        title: "Please Enter Email",
      });

    }

    try {

      setLoading(true);

      const res = await axios.get(
        `http://localhost:3000/users/search?email=${email}`
      );

      setUsers(res.data);

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  // =========================
  // MAKE ADMIN
  // =========================
  const handleMakeAdmin = async (id) => {

    try {

      const res = await axios.patch(
        `http://localhost:3000/users/admin/${id}`
      );

      console.log(res.data);

      if (res.data.modifiedCount > 0) {

        Swal.fire({
          icon: "success",
          title: "User is now Admin",
          timer: 1500,
          showConfirmButton: false,
        });

        // UPDATE UI
        const updatedUsers = users.map(user =>
          user._id === id
            ? { ...user, role: "admin" }
            : user
        );

        setUsers(updatedUsers);

      }

    }

    catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Failed to Make Admin",
      });

    }

  };

  return (

    <div className="min-h-screen bg-[#F5F7FA] p-4 md:p-8">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl md:text-5xl font-black text-[#1B1F3B]">
          Search Users
        </h1>

        <p className="text-gray-500 mt-2">
          Search users by email and manage admin access.
        </p>

      </div>

      {/* SEARCH BOX */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">

        <div className="flex flex-col md:flex-row gap-4">

          {/* INPUT */}
          <div className="flex-1 relative">

            <FaEnvelope className="absolute left-5 top-5 text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search user by email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-14 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#CAEB66]"
            />

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSearch}
            className="bg-[#CAEB66] hover:bg-[#b8da54]
            text-[#1B1F3B]
            font-bold
            px-8 py-4
            rounded-2xl
            flex items-center justify-center gap-3
            transition-all duration-300
            shadow-lg hover:shadow-xl"
          >

            <FaSearch />

            Search

          </button>

        </div>

      </div>

      {/* LOADING */}
      {
        loading &&
        <div className="flex justify-center mt-10">

          <span className="loading loading-spinner loading-lg text-[#CAEB66]"></span>

        </div>
      }

      {/* USERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {
          users.length > 0
            ? users.map(user => (

              <div
                key={user._id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                {/* TOP */}
                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-[#CAEB66]/20 flex items-center justify-center">

                    <FaUser className="text-2xl text-[#1B1F3B]" />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-[#1B1F3B] break-all">
                      {user.email}
                    </h2>

                    <p
                      className={`font-semibold mt-1 capitalize
                      ${
                        user.role === 'admin'
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {user.role || 'user'}
                    </p>

                  </div>

                </div>

                {/* BUTTON */}
                <div className="mt-6">

                  {
                    user.role === 'admin'
                      ? (
                        <button
                          disabled
                          className="w-full bg-green-100 text-green-700 py-3 rounded-2xl font-bold cursor-not-allowed"
                        >
                          Already Admin
                        </button>
                      )
                      : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="w-full bg-[#CAEB66] hover:bg-[#b8da54]
                          text-[#1B1F3B]
                          font-bold
                          py-3
                          rounded-2xl
                          flex items-center justify-center gap-3
                          transition-all duration-300
                          shadow-md hover:shadow-xl"
                        >

                          <FaUserShield />

                          Make Admin

                        </button>
                      )
                  }

                </div>

              </div>

            ))

            : !loading && (

              <div className="col-span-full bg-white rounded-3xl shadow-lg p-10 text-center">

                <h2 className="text-2xl font-bold text-gray-500">
                  No Users Found
                </h2>

                <p className="text-gray-400 mt-2">
                  Search users by their email address.
                </p>

              </div>

            )
        }

      </div>

    </div>

  );
};

export default SearchUsers;