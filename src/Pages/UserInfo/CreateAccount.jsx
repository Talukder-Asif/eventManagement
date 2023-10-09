/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const CreateAccount = () => {
    const {CreateUser,updateUser, GoogleLogin}= useContext(AuthContex);

    // Handalling user with gmail
  const GoogleBtn =() =>{
    GoogleLogin()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      toast("Successfully Signup")
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
  }

  const [error, seterror] = useState(null)
  const HandelSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value

    // New way to get form data
    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password= from.get('password');
    const image= from.get('photo');
    const name= from.get('name');
    seterror(null)
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
      seterror(null)
      return seterror("Password must be at least 6 characters long.") ;
    }
  
    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return seterror("Password must contain at least one capital letter.");
    }
  
    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return seterror("Password must contain at least one special character.");
    }

    return CreateUser(email, password)
    .then((userCredential) => {
      if(name || image){
        updateUser(name, image)
      .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        console.error(error)
      })
      }
      toast('Register Done');
    })
    .catch((errorr) => {
      toast(errorr.message)
    })
  }
  console.log(error);
    return (
        <div className="my-10">
        <div className="card m-auto flex-shrink-0 max-w-md shadow-2xl bg-base-100">
          <h3 className="text-center text-4xl font-semibold text-[#403F3F] my-5">
            Register your account
          </h3>
          <form onSubmit={HandelSubmit} className="card-body pb-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered"
              />
            </div>
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
              {
                error? <p className="text-red-600 py-2">{error}</p>:""
              }
              <label className="label">
                <a href="#" onClick={()=>toast("Under Development")} className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <a href="/signin" className="label-text-alt link link-hover">
                  Have a account?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#ff792f] bg-[#fd614a]">
                Register
              </button>
            </div>
          </form>
          <button onClick={GoogleBtn} className="underline mb-4">Join Us with Google</button>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
          <ToastContainer />
      </div>
  );
};

export default CreateAccount;