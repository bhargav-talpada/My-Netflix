import React from "react";
import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message =  checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(!isSignInForm){
      // SignUp Login
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            setErrorMessage(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        }
      );
    }else{
      // SignIn Login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        }
      );
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="Netflix BG" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-3/12 h-[500px] mt-36 mx-auto text-white bg-black bg-opacity-80 right-0 rounded-lg left-0 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl py-4 mr-auto">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="px-3 py-2 m-2 w-full bg-gray-600 " required />}
        <input type="text" ref={email} placeholder="Email" className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <input type="password" ref={password} placeholder="Password" className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button className="p-3 my-6 bg-red-600 rounded-lg w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-4 mr-auto text-lg text-gray-400" >{isSignInForm ? "New to Netflix?" : "Already Registred?"} <span onClick={toggleSignUpForm} className="text-white cursor-pointer hover:underline font-bold">{isSignInForm ? "Sign Up Now." : "Sign In Now."}</span></p>
      </form>
    </div>
  )
}

export default Login;