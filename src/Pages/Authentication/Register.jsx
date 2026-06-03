import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router';
import SocialLogin from './socialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const [photoURL, setPhotoURL] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    if (!image) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('image', image);

      const imgUploadURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

      const res = await axios.post(imgUploadURL, formData);

      setPhotoURL(res.data.data.url);

      Swal.fire({
        icon: 'success',
        title: 'Image Uploaded'
      });

    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {

      const result = await signup(
        data.email,
        data.password
      );

      await updateProfile(result.user, {
        displayName: data.name,
        photoURL
      });

      const userInfo = {
        name: data.name,
        number: data.number,
        email: data.email,
        photoURL
      };

      await axios.post(
        'http://localhost:3000/users',
        userInfo
      );

      Swal.fire({
        title: 'Registration Successful!',
        text: `Welcome ${data.name} to ProFast`,
        icon: 'success'
      });

      navigate('/login');

    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message
      });

    }
  };

  return (
    <div className="w-full max-w-lg">

      {/* Mobile Hero */}
      <div className="lg:hidden mb-6">

        <div className="bg-[#CAEB66] rounded-2xl p-5">

          <h2 className="text-3xl font-bold">
            Join ProFast 🚚
          </h2>

          <p className="mt-2 text-black/80">
            Fast delivery, secure tracking and
            real-time parcel management.
          </p>

        </div>

      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Create Account
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Register your account to continue
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Name */}
        <div>

          <label className="font-medium block mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            {...register('name', {
              required: true
            })}
            className="w-full h-14 px-4 border rounded-xl bg-gray-50 focus:outline-none focus:border-[#CAEB66]"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              Name is required
            </p>
          )}

        </div>

        {/* Photo */}
        <div>

          <label className="font-medium block mb-2">
            Profile Photo
          </label>

          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full"
          />

          {uploading && (
            <p className="text-blue-500 text-sm mt-2">
              Uploading image...
            </p>
          )}

        </div>

        {/* Mobile */}
        <div>

          <label className="font-medium block mb-2">
            Mobile Number
          </label>

          <input
            type="text"
            maxLength={10}
            placeholder="Enter mobile number"
            {...register('number', {
              required: true
            })}
            className="w-full h-14 px-4 border rounded-xl bg-gray-50 focus:outline-none focus:border-[#CAEB66]"
          />

          {errors.number && (
            <p className="text-red-500 text-sm mt-1">
              Mobile number is required
            </p>
          )}

        </div>

        {/* Email */}
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

        {/* Password */}
        <div>

          <label className="font-medium block mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/
            })}
            className="w-full h-14 px-4 border rounded-xl bg-gray-50 focus:outline-none focus:border-[#CAEB66]"
          />

          {errors.password?.type === 'required' && (
            <p className="text-red-500 text-sm mt-1">
              Password is required
            </p>
          )}

          {errors.password?.type === 'pattern' && (
            <p className="text-red-500 text-sm mt-1">
              Must contain uppercase, lowercase,
              number and special character
            </p>
          )}

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-14 bg-[#CAEB66] text-black font-bold rounded-xl hover:brightness-95 transition"
        >
          Create Account
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <NavLink
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>

        <div className="relative my-6">
        

          
        </div>

        <SocialLogin />

      </form>

    </div>
  );
};

export default Register;