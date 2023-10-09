import { NavLink } from "react-router-dom";
import "./Nav.css"
import { useContext } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";

const NavBar = () => {
  // Importing user details
  const {user,LogOut}= useContext(AuthContex)
  // Handalling Logout
  const HandelLogOut = () => {
    LogOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  }
  const manuItem = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#fd614a]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fd614a] text-white text-lg font-semibold rounded-xl w-52 "
          >
            {manuItem}
          </ul>
        </div>
        <img className="w-36" src="/src/assets/logo.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal font-semibold text-white text-lg">{manuItem}</ul>
      </div>
      <div className="navbar-end">



      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/src/assets/user.png" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          user? (<div>
            <li><a onClick={HandelLogOut} href="/signin">LogOut</a></li>
            <p>{user.email}</p>
            </div>
          ):
          <div>
          <li><a href="/signin">Login</a></li>
          <li><a href="/signup">SignUp</a></li>
          </div>
        
        }
      </ul>
    </div>



      </div>
    </div>
  );
};

export default NavBar;
