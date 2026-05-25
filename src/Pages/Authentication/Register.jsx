import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink, useNavigate } from 'react-router';
import SocialLogin from './socialLogin/SocialLogin';
import Swal from 'sweetalert2';

import { updateProfile } from 'firebase/auth';
import axios from 'axios';
import { number } from 'motion';
const Register = () => {
const{register,handleSubmit, formState: { errors }}=useForm();
const {signup}=useAuth();
const navigate=useNavigate();
const [photoURL, setPhotoURL] = useState('');

const handleImageUpload=async(e)=>{
const image =e.target.files[0];
console.log(image)
const formData=new FormData();
formData.append('image', image);
const imgUploadURL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
const res=await axios.post(imgUploadURL,formData)
setPhotoURL(res.data.data.url);
}
const onSubmit=data=>{
    console.log(data,);
 
   signup(data.email, data.password)

  .then(async (result) => {

    await updateProfile(result.user, {
      displayName: data.name,
        photoURL: photoURL
      
    });
    const UserInfo={
      number:data.number,
      email: data.email

    }
     axios.post('http://localhost:3000/users',UserInfo)
    .then(res=>{
      console.log('number in the server',res)
    })

    Swal.fire({
      title: 'Registration Successful!',
      text: `Welcome ${data.name} to ProFast!!`,
      icon: 'success',
      confirmButtonText: 'Continue',
    });

    navigate('/login');

  })

  .catch(error => {

    console.log(error);

  });
 
}
    return (
        
     <div className=" bg-base-200 ml-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text"  {...register('name',{
            required:true 
          })} className="input" placeholder="Write Your  Full Name" />
          {
            errors.name?.type ==='required'&&<p className='text-red-600'>Name is required</p>
          }
                  {/* image */}
          <label className="label">Pic</label>
          <input type="file" onChange={handleImageUpload}   className="input" placeholder="Write Your  Full Name" />
          {
            errors.name?.type ==='required'&&<p className='text-red-600'>Name is required</p>
          }


          <label className="label">Mobile Number</label>
          
          <input maxLength={10} type="text"  {...register('number',{
            required:true, maxLength:10
          })} className="input" placeholder="Write Your 10 Digit Mobile Number" />
          {
            errors.number?.type ==='required'&&<p className='text-red-600'>Number is required</p>
          }



           <label className="label">Email</label>
          <input  type="email"  {...register('email',{
            required:true
          })} className="input" placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-600'>Email is required</p>
          }

          <label className="label">Password</label>
          <input type="password" {...register('password',{
            required:true, minLength:8, maxLength:10,pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          })} className="input" placeholder="Password" />
{
    errors.password?.type ==='required'&&<p>Password is required</p>
}
{
    errors.password?.type ==='pattern'&&<p className='text-red-700'>Password must be one upper and onw smaller one numeric & one special,  </p>
}
{
    errors.password?.type==='maxLength'&& <p className='text-red-700'>Password must be 6-10 charecters.</p>
  }
       
          <button className="btn btn-primary mt-4">Register</button>
        </fieldset>
        <p>Already Have an Account? <NavLink to={'/login'} ><span className='text-green-500 font-bold hover:underline'>Login</span></NavLink></p>
            </form>
            {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;

