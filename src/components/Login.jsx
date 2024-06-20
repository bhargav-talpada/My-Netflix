import React from "react";
import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";
import lang from "../utils/languageConstants";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const langKey = useSelector(store => store.config.lang);

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
        <img src={LOGIN_BG} className="h-screen md:h-full bg-cover w-screen" alt="Netflix BG" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 sm:w-1/2 md:w-3/12 h-[500px] mt-36 mx-auto text-white bg-black bg-opacity-80 right-0 rounded-lg left-0 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-3xl py-4 mr-auto">{ isSignInForm ? <>{lang[langKey].signIn}</> : <>{lang[langKey].signUp}</> }</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder={lang[langKey].fnmPlaceholder} className="px-3 py-2 m-2 w-full bg-gray-600 " required />}
        <input type="text" ref={email} placeholder={lang[langKey].emailPlaceholder} className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <input type="password" ref={password} placeholder={lang[langKey].passwordPlaceholder} className="px-3 py-2 my-3 w-full bg-gray-600 " required />
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button className="p-3 my-6 bg-red-600 rounded-lg w-full" onClick={handleButtonClick}>{isSignInForm ? <>{lang[langKey].signIn}</> : <>{lang[langKey].signUp}</> }</button>
        <p className="p-4 mr-auto text-lg text-gray-400" >{isSignInForm ? <>{lang[langKey].newToNetflix}</> : <>{lang[langKey].alreadyRegister}</> } <span onClick={toggleSignUpForm} className="text-white cursor-pointer hover:underline font-bold"> { isSignInForm ? <>{lang[langKey].signUpNow}</> : <>{lang[langKey].signInNow}</> }</span></p>
      </form>
    </div>
  )
}

export default Login;