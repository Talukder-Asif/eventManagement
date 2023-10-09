import { useContext } from "react";
import { AuthContex } from "../Provaider/AuthProvider";
import Login from "../Pages/UserInfo/Login";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContex)
    if(user){
        return {children}
    }
    return <Login></Login>
     
};

export default PrivateRoute;