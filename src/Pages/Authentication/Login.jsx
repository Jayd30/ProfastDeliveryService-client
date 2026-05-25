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

  // TOGGLE PASSWORD
  const handleEye = () => {
    setShow(!show);
  };

  // =========================
  // LOGIN FUNCTION
  // =========================
  const onSubmit = data => {

    signin(data.email, data.password)

      .then(result => {

        console.log(result.user);

        Swal.fire({
          title: 'Login Successful!',
         text: `Welcome back ${result.user.displayName} to ProFast`,
          icon: 'success',
          confirmButtonText: 'Continue',
        });

        navigate('/');

      })

      .catch(error => {

        console.log(error);
        if(error.code ==='auth/invalid-credential'){
          Swal.fire({
                    title: 'No User Found',
                    text: 'Please Register your Account First.',
                    icon: 'warning',
                    confirmButtonColor: '#d33'
                  });
        }

        

      });

  };

  // =========================
  // FORGOT PASSWORD FUNCTION
  // =========================
  const handleForget = () => {

    // ✅ CHANGED
    const resetEmail = getValues('email');

    // ✅ CHANGED
    if (!resetEmail) {

      Swal.fire({
        icon: 'warning',
        title: 'Please enter your email first'
      });

      return;
    }

    // ✅ CHANGED
    resetPassword(resetEmail)

      .then(() => {

        Swal.fire({
          icon: 'success',
          title: 'Password reset email sent',
          text: 'Check your email inbox'
        });

      })

      .catch(error => {

        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: error.message
        });

      });

  };

  return (

    <div className="hero bg-base-200 min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">

          <div className="card-body">

            <h1 className="text-4xl font-bold text-center mb-4">
              Login Now!
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>

              <fieldset className="fieldset">

                {/* EMAIL */}
                <label className="label">
                  Email
                </label>

                <input
                  type="email"
                  {...register('email', {
                    required: true
                  })}
                  className="input input-bordered w-full"
                  placeholder="Email"
                />

                {
                  errors.email?.type === 'required' &&
                  <p className='text-red-700 text-sm'>
                    Email is required.
                  </p>
                }

                {/* PASSWORD */}
                <label className="label mt-2">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={show ? 'text' : 'password'}
                    className="input input-bordered w-full"
                    placeholder="Password"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      maxLength: 10
                    })}
                  />

                  {/* EYE ICON */}
                  <button
                    type="button"
                    onClick={handleEye}
                    className="absolute right-4 top-3 text-xl text-gray-500"
                  >

                    {
                      show
                        ? <IoEyeOffOutline />
                        : <MdOutlineRemoveRedEye />
                    }

                  </button>

                </div>

                {
                  errors.password?.type === 'required' &&
                  <p className='text-red-700 text-sm'>
                    Password is required.
                  </p>
                }

                {
                  errors.password?.type === 'minLength' &&
                  <p className='text-red-700 text-sm'>
                    Password must be 6 characters.
                  </p>
                }

                {
                  errors.password?.type === 'maxLength' &&
                  <p className='text-red-700 text-sm'>
                    Password must be 6-10 characters.
                  </p>
                }

                {/* ✅ CHANGED */}
                <div className="mt-2">

                  <button
                    type="button"
                    onClick={handleForget}
                    className="link link-hover text-blue-500"
                  >
                    Forgot password?
                  </button>

                </div>

                {/* LOGIN BUTTON */}
                <button className="btn btn-neutral mt-4">
                  Login
                </button>

              </fieldset>

            </form>

            <p className="text-center mt-3">

              Don’t Have An Account?

              <NavLink to={'/register'}>

                <span className='text-green-500 font-bold hover:underline ml-1'>
                  Register
                </span>

              </NavLink>

            </p>

            <SocialLogin />

          </div>

        </div>

      </div>

    </div>

  );
};

export default Login;