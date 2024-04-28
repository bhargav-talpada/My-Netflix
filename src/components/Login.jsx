import { useState } from "react";
import Header from "./Header";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
        <Header />
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg" alt="Netflix BG" />
        </div>
        <form className="absolute p-12 w-3/12 h-[450px] mt-36 mx-auto text-white bg-black bg-opacity-80 right-0 rounded-lg left-0 flex flex-col justify-center items-center ">
          <h1 className="font-bold text-3xl py-4 mr-auto">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="px-3 py-2 m-2 w-full bg-gray-600 " />}
          <input type="text" placeholder="Email" className="px-3 py-2 m-2 w-full bg-gray-600 " />
          <input type="password" placeholder="Password" className="px-3 py-2 m-2 w-full bg-gray-600 " />
          <button className="p-3 my-6 bg-red-600 rounded-lg w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="p-4 mr-auto text-lg text-gray-400" >{isSignInForm ? "New to Netflix?" : "Already Registred?"} <span onClick={toggleSignUpForm} className="text-white cursor-pointer hover:underline font-bold">{isSignInForm ? "Sign Up Now." : "Sign In Now."}</span></p>
        </form>
    </div>
  )
}

export default Login;