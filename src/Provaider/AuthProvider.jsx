/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {
    const [loading, setloading] = useState(true)
    

    // Creating a new user with email and password
    const CreateUser = (email, password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password
    const Login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // LogOut
    const LogOut = () => {
        setloading(true)
        return signOut(auth)
    }
    // Login with Google
    const Googleprovider = new GoogleAuthProvider();
    const GoogleLogin =()=>{
        setloading(true)
        return signInWithPopup(auth, Googleprovider)
    }
    // User Update
    const updateUser = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        })
      }
    // SetUser Details
    const [user, setUser] = useState(null);
    useEffect(() =>{
        onAuthStateChanged(auth, (User) => {
            setloading(false)
            if (User) {
                setUser(User);              
            }
          })
    },[])


    // Authingcation Array
    const Authinfo = {
        CreateUser,
        user,
        LogOut,
        Login,
        GoogleLogin,
        updateUser,
        loading
    }
    return (
        <AuthContex.Provider value={Authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;