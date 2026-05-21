import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();

const signup=(email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)

}
const signin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}

    const signinWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
        

    }


const logOut=()=>{
    setLoading(true)
  return  signOut(auth)

}




useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser),
        setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
},[])

const userInfo={
signup,
signin,
logOut,
signinWithGoogle,
user,
loading
}

    return (
        <div>
           <AuthContext value={userInfo}>
            {children}
           </AuthContext>
        </div>
    );
};

export default AuthProvider;