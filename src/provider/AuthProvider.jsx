import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    

    const authInfo ={

    }

    return (
        <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    );
};

export default AuthProvider;