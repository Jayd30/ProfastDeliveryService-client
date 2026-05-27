import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../firebase/firebase.init';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import axios from 'axios';
import secureAxios from '../../hooks/secureAxios';

const AuthProvider = ({ children }) => {
const axioSecu=secureAxios()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // SIGN UP
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SIGN IN
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE LOGIN
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ RESET PASSWORD FIXED
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // LOGOUT
  const logOut = () => {
     
    setLoading(true);
    
    return signOut(auth);
   
  };

  // OBSERVER
  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {

      setUser(currentUser);
      setLoading(false);
      if(currentUser?.email){
        const user={
          email:currentUser.email
        }

        axioSecu.post('/jwt',user)
        .then(res=>{
          console.log('token',res.data)
          
        }).catch(error=>console.log(error))
      }
    

    });

    return () => {
      unSubscribe();
    };

  }, []);

  const userInfo = {
    signup,
    signin,
    signinWithGoogle,
    resetPassword,
    logOut,
    user,
    loading
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;