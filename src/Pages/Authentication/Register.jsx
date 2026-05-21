import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';
import SocialLogin from './socialLogin/SocialLogin';
import Swal from 'sweetalert2';


const Register = () => {
const{register,handleSubmit, formState: { errors }}=useForm();
const {signup}=useAuth();

const onSubmit=data=>{
    console.log(data);
 
    signup(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      Swal.fire({
    title: 'Registration Successful!',
    text: 'Welcome to ProFast',
    icon: 'success',
    confirmButtonText: 'Continue',
  });
    }).catch(error=>{
      console.log(error)
    })
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
          <label className="label">Email</label>
          <input type="email"  {...register('email',{
            required:true
          })} className="input" placeholder="Email" />

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
            <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;

