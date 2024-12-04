import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';

export const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (userData) =>{
        return updateProfile(auth.currentUser, userData)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
          }
    },[])

    const logOutUser = () =>{
        setLoading(false)
        toast.success("Successfully logout")
       return signOut(auth)
    }

    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () =>{
        return signInWithPopup(auth, provider)
    }

    const authInfo ={
        createUser,
        user, 
        setUser, 
        updateUserProfile,
        googleAuth,
        logOutUser,
        userLogin,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;