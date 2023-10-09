/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContex } from "../Provaider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)

    if(loading){
        return<div className="h-screen ">
            <span className="loading text-[#fd614a] loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate to="/signin"></Navigate>
     
};

export default PrivateRoute;