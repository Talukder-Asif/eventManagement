/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const CreateAccount = () => {
    const {CreateUser, GoogleLogin}= useContext(AuthContex);

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

  const HandelSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value
    // const password = e.target.password.value

    // New way to get form data
    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password= from.get('password');
    CreateUser(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // ..
    })
  }
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
              <label className="cursor-pointer my-3 flex gap-5">
                <input type="checkbox" name="checkbox" className="checkbox" />
                <span className="label-text">Accept Term & Conditions</span>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <a href="/login" className="label-text-alt link link-hover">
                  Have a account?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn text-white hover:text-black bg-[#fd614a]">
                Register
              </button>
            </div>
          </form>
          <button onClick={GoogleBtn} className="underline mb-4">Join Us with Google</button>
        </div>
      </div>
  );
};

export default CreateAccount;