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
    <div className="flex flex-col overflow-x-hidden">
        <Header />
        <div className="">
          <img src={LOGIN_BG} className="h-screen md:h-full bg-cover w-screen" alt="Netflix BG" />
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[590px] bg-black flex justify-center items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl font-black">Enjoy on your TV</h1>
              <p className="w-[550px] text-white text-2xl font-normal">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="h-[430px]" alt="TV img" />
              <div className="absolute w-[416px] mb-[15px] mr-[5px] ">
                <video className="inline-block" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay loop />
              </div>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[590px] bg-black flex justify-center items-center">
            <div className="flex flex-col justify-end items-center overflow-hidden">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="h-[450px]" alt="mobile img" />
              <div className="absolute flex items-center justify-between gap-4 border-2 border-[#686666] rounded-xl w-[320px] h-28 bg-black mb-7 p-3">
                <div className="flex gap-4 items-center">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className="h-[87px]" alt="Stranger Things" />
                  <div>
                    <h1 className="text-xl text-white font-medium">Stranger Things</h1>
                    <h1 className="text-[#0071eb] text-xl font-normal">Downloading...</h1>
                  </div>
                </div>
                <img className="w-12" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="downloading gif" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl font-black w-[480px]">Download your shows to watch offline</h1>
              <p className="w-[560px] text-white text-2xl font-normal">Save your favourites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
        <hr className="border-[#232323] border-4" />
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