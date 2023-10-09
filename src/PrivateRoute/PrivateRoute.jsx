import { useContext } from "react";
import { AuthContex } from "../Provaider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContex)
    if(user){
        return children
    }
    return <Navigate to="/signin"></Navigate>
     
};

export default PrivateRoute;