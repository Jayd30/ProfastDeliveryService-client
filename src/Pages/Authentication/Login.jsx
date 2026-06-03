import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router';
import SocialLogin from './socialLogin/SocialLogin';
import Swal from 'sweetalert2';

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { signin, resetPassword } = useAuth();

  const handleEye = () => {
    setShow(!show);
  };

  const onSubmit = (data) => {
    signin(data.email, data.password)
      .then((result) => {

        Swal.fire({
          title: 'Login Successful!',
          text: `Welcome back ${result.user.displayName || ''} to ProFast`,
          icon: 'success',
          confirmButtonText: 'Continue',
        });

        navigate('/');
      })

      .catch((error) => {

        if (error.code === 'auth/invalid-credential') {
          Swal.fire({
            title: 'No User Found',
            text: 'Please Register Your Account First.',
            icon: 'warning',
          });
        } else {
          Swal.fire({
            title: 'Login Failed',
            text: error.message,
            icon: 'error',
          });
        }
      });
  };

  const handleForget = () => {
    const resetEmail = getValues('email');

    if (!resetEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Please enter your email first',
      });
      return;
    }

    resetPassword(resetEmail)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Password reset email sent',
          text: 'Check your inbox',
        });
      })

      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: error.message,
        });
      });
  };

  return (
    <div className="w-full max-w-lg">

      {/* Mobile Hero */}
      <div className="lg:hidden mb-6">

        <div className="bg-[#CAEB66] rounded-2xl p-5">

          <h2 className="text-3xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-black/80">
            Login to track parcels, manage deliveries and
            access your ProFast dashboard.
          </p>

        </div>

      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Login
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Sign in to continue
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* EMAIL */}
        <div>

          <label className="font-medium block mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: true
            })}
            className="w-full h-14 px-4 border rounded-xl bg-gray-50 focus:outline-none focus:border-[#CAEB66]"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              Email is required
            </p>
          )}

        </div>

        {/* PASSWORD */}
        <div>

          <label className="font-medium block mb-2">
            Password
          </label>

          <div className="relative">

            <input
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20
              })}
              className="w-full h-14 px-4 border rounded-xl bg-gray-50 focus:outline-none focus:border-[#CAEB66]"
            />

            <button
              type="button"
              onClick={handleEye}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            >
              {show
                ? <IoEyeOffOutline />
                : <MdOutlineRemoveRedEye />
              }
            </button>

          </div>

          {errors.password?.type === 'required' && (
            <p className="text-red-500 text-sm mt-1">
              Password is required
            </p>
          )}

          {errors.password?.type === 'minLength' && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 6 characters
            </p>
          )}

        </div>

        {/* FORGOT PASSWORD */}
        <div className="flex justify-end">

          <button
            type="button"
            onClick={handleForget}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full h-14 bg-[#CAEB66] text-black font-bold rounded-xl hover:brightness-95 transition"
        >
          Login
        </button>

        {/* REGISTER */}
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <NavLink
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </NavLink>
        </p>

        {/* Divider */}
        <div className="relative my-6">

          

        </div>

        {/* SOCIAL LOGIN */}
        <SocialLogin />

      </form>
    </div>
  );
};

export default Login;