/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {Login, GoogleLogin}= useContext(AuthContex);
// Handalling login with email and password
  const HandelSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value

    // New way to get form data
    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password= from.get('password');
    Login(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }


  // Handalling user with gmail
  const GoogleBtn =() =>{
    GoogleLogin()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
  }
  return (
    <div className="bg-[#f3f3f3] grid content-center items-center min-h-screen">
      <div className="">
        <div className="card m-auto flex-shrink-0 max-w-md shadow-2xl bg-base-100">
        <h3 className="text-center text-4xl font-semibold text-[#403F3F] my-5">Login your account</h3>
          <form onSubmit={HandelSubmit} className="card-body pb-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <a href="/signup" className="label-text-alt link link-hover">
                  Create a account?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:text-black bg-[#fd614a]">Login</button>
            </div>
          </form>
              <button onClick={GoogleBtn} className="underline mb-4">Join Us with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
