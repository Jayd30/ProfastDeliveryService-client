import React from 'react';
import logo from '../../../assets/rest/logo.png'
import { NavLink } from 'react-router';
const Navbarlogo = () => {
    return (
        <NavLink to='/'>
        <div className=' flex items-end font-bold'>
            <img  className='mb-2' src={logo} alt="" />
            <p className='text-3xl'>ProFast</p>
        </div>
        </NavLink>
    );
};

export default Navbarlogo;