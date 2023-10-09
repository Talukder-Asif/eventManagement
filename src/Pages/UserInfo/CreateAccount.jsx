/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
const CreateAccount = () => {
    const {CreateUser}= useContext(AuthContex);

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
        <div className="bg-[#f3f3f3] grid content-center items-center min-h-screen">
      <div className="">
        <div className="card m-auto flex-shrink-0 max-w-md shadow-2xl bg-base-100">
        <h3 className="text-center text-4xl font-semibold text-[#403F3F] my-5">SignUp new account</h3>
          <form onSubmit={HandelSubmit} className="card-body">
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
                <a href="/signin" className="label-text-alt link link-hover">
                  Have a account?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:text-black bg-[#fd614a]">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;