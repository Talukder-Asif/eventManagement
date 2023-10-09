/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContex } from "../Provaider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation();

    if(loading){
        return<div className="h-screen w-screen grid content-center justify-center">
            <span className="loading text-[#fd614a] loading-spinner text-center loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
     
};

export default PrivateRoute;