import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import Navbarlogo from '../Navbarlogo/Navbarlogo';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const { user, logOut } = useAuth();

  // ACTIVE LINK STYLE
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? 'bg-white/20 text-white shadow-md'
        : 'text-gray-200 hover:bg-white/10 hover:text-white'
    }`;

  // LOGOUT FUNCTION
  const handleLogout = () => {

    logOut()
      .then(() => {

        Swal.fire({
          title: 'Logout Successful',
          text: 'You have logged out successfully',
          icon: 'success',
          confirmButtonColor: '#16a34a',
          confirmButtonText: 'OK',
        });

        setOpen(false);

      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">

      <div className="px-4 md:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <Navbarlogo />
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-3 bg-black/30 backdrop-blur-lg px-4 py-2 rounded-2xl border border-white/20 shadow-md">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/bookParcel" className={navLinkClass}>
              Send A Parcel
            </NavLink>

            <NavLink to="/coverage" className={navLinkClass}>
              Coverage
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {
              user && (
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
              )
            }

          </nav>

          {/* RIGHT SIDE BUTTON */}
          <div className="hidden lg:flex items-center gap-4">

            {
              user ? (

                <button
                  onClick={handleLogout}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>

              ) : (

                <NavLink to="/register">

                  <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-300 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>

                </NavLink>

              )
            }

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white bg-black p-2 rounded-xl border border-gray-700"
          >
            {
              open
                ? <X size={24} />
                : <Menu size={24} />
            }
          </button>

        </div>

        {/* MOBILE MENU */}
        {
          open && (

            <div className="lg:hidden mt-3 mb-4 bg-black/95 backdrop-blur-2xl rounded-3xl border border-gray-700 shadow-2xl p-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">

              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/bookParcel"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Send A Parcel
              </NavLink>

              <NavLink
                to="/coverage"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Coverage
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>

              {
                user && (

                  <NavLink
                    to="/dashboard"
                    className={navLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </NavLink>

                )
              }

              {/* BUTTON TOGGLE */}
              {
                user ? (

                  <button
                    onClick={handleLogout}
                    className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold shadow-lg"
                  >
                    Logout
                  </button>

                ) : (

                  <NavLink to="/register">

                    <button className="mt-2 w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-green-300 to-blue-500 text-white font-semibold shadow-lg">
                      Get Started
                    </button>

                  </NavLink>

                )
              }

            </div>

          )
        }

      </div>

    </header>

  );
};

export default Navbar;