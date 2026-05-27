import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaSearch,
  FaUserShield,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const SearchUsers = () => {

  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

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
      setCurrentPage(1); // RESET PAGE ON SEARCH

      setLoading(false);

    } catch (error) {

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

      if (res.data.modifiedCount > 0) {

        Swal.fire({
          icon: "success",
          title: "User is now Admin",
          timer: 1500,
          showConfirmButton: false,
        });

        const updated = users.map(u =>
          u._id === id ? { ...u, role: "admin" } : u
        );

        setUsers(updated);
      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Failed to Make Admin",
      });

    }
  };

  // =========================
  // REMOVE ADMIN
  // =========================
  const removeAdmin = async (id) => {

    try {

      const res = await axios.patch(
        `http://localhost:3000/users/remove-admin/${id}`,
        {
          requesterEmail: user.email
        }
      );

      if (res.data.modifiedCount > 0) {

        Swal.fire({
          icon: "success",
          title: "Admin Removed",
        });

        const updated = users.map(u =>
          u._id === id ? { ...u, role: "user" } : u
        );

        setUsers(updated);
      }

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Failed to remove admin",
      });

    }
  };

  // =========================
  // PAGINATION LOGIC
  // =========================
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (

    <div className=" bg-[#F5F7FA] p-4 md:p-">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-4xl font-black text-[#1B1F3B]">
          Search Users
        </h1>

        <p className="text-gray-500 mt-2">
          Search users and manage admin access.
        </p>

      </div>

      {/* SEARCH BOX */}
      <div className="bg-white rounded-3xl shadow-xl p-6">

        <div className="flex gap-4">

          <div className="flex-1 relative">

            <FaEnvelope className="absolute left-5 top-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search user..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-14 py-4 border rounded-2xl"
            />

          </div>

          <button
            onClick={handleSearch}
            className="bg-[#CAEB66] px-6 py-4 rounded-2xl font-bold"
          >
            <FaSearch /> Search
          </button>

        </div>

      </div>

      {/* LOADING */}
      {loading && (
        <div className="mt-10 text-center">
          Loading...
        </div>
      )}

      {/* USERS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {currentUsers.length > 0 ? currentUsers.map((u) => (

          <div key={u._id} className="bg-white p-6 rounded-2xl shadow">

            <h2 className="font-bold">{u.email}</h2>

            <p className={u.role === "admin" ? "text-green-600" : "text-gray-500"}>
              {u.role || "user"}
            </p>

            {/* MAKE ADMIN */}
            {u.role !== "admin" && (
              <button
                onClick={() => handleMakeAdmin(u._id)}
                className="bg-green-400 px-4 py-2 mt-4 rounded"
              >
                <FaUserShield /> Make Admin
              </button>
            )}

            {/* REMOVE ADMIN */}
            {u.role === "admin" && (
              <button
                onClick={() => removeAdmin(u._id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
              >
                Remove Admin
              </button>
            )}

          </div>

        )) : (
          !loading && (
            <p className="text-center mt-10 text-gray-500 col-span-full">
              No Users Found
            </p>
          )
        )}

      </div>

      {/* PAGINATION */}
      {users.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-10">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="font-bold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 bg-[#CAEB66] rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
};

export default SearchUsers;