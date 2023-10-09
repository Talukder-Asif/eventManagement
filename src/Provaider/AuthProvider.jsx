/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {

    // SetUser Details
    const [user, setUser] = useState(null);
    useEffect(() =>{
        onAuthStateChanged(auth, (User) => {
            if (User) {
                setUser(User);              
            }
          })
    },[])

    console.log(user)

    // Creating a new user with email and password
    const CreateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // LogOut
    const LogOut = () => {
        return signOut(auth)
    }
    // Login with Google
    const Googleprovider = new GoogleAuthProvider();
    const GoogleLogin =()=>{
        return signInWithPopup(auth, Googleprovider)
    }



    // Authingcation Array
    const Authinfo = {
        CreateUser,
        user,
        LogOut,
        Login,
        GoogleLogin
    }
    return (
        <AuthContex.Provider value={Authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;