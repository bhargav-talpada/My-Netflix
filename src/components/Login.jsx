import React from "react";
import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { CHILDREN_IMG_URL, DESKTOP_IMG_URL, DESKTOP_VIDEO_URL, DOWNLOADING_GIF_URL, LOGIN_BG, MOBILE_IMG_URL, STRANGER_THINGS_POSTER_URL, TV_IMG_URL, TV_VIDEO_URL, USER_AVATAR } from "../utils/constants";
import lang from "../utils/languageConstants";
import { FaChevronRight } from "react-icons/fa6";

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
              <img src={TV_IMG_URL} className="h-[430px]" alt="TV img" />
              <div className="absolute w-[416px] mb-[15px] mr-[5px] ">
                <video  src={TV_VIDEO_URL} autoPlay loop />
              </div>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[590px] bg-black flex justify-center items-center">
            <div className="flex flex-col justify-end items-center overflow-hidden">
              <img src={MOBILE_IMG_URL} className="h-[450px]" alt="mobile img" />
              <div className="absolute flex items-center justify-between gap-4 border-2 border-[#686666] rounded-xl w-[320px] h-28 bg-black mb-7 p-3">
                <div className="flex gap-4 items-center">
                  <img src={STRANGER_THINGS_POSTER_URL} className="h-[87px]" alt="Stranger Things" />
                  <div>
                    <h1 className="text-xl text-white font-medium">Stranger Things</h1>
                    <h1 className="text-[#0071eb] text-xl font-normal">Downloading...</h1>
                  </div>
                </div>
                <img className="w-12" src={DOWNLOADING_GIF_URL} alt="downloading gif" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl font-black w-[480px]">Download your shows to watch offline</h1>
              <p className="w-[560px] text-white text-2xl font-normal">Save your favourites easily and always have something to watch.</p>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[590px] bg-black flex justify-center items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl font-black">Watch everywhere</h1>
              <p className="w-[500px] text-white text-2xl font-normal">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
              <img src={DESKTOP_IMG_URL} className="h-[430px]" alt="Desktop img" />
              <div className="absolute w-[350px] mb-36 ">
                <video src={DESKTOP_VIDEO_URL} autoPlay loop />
              </div>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[590px] bg-black flex justify-center items-center">
            <div className="flex flex-col justify-end items-center overflow-hidden">
              <img src={CHILDREN_IMG_URL} className="h-[450px]" alt="cjildren img" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-5xl font-black w-[480px]">Create profiles for kids</h1>
              <p className="w-[530px] text-white text-2xl font-normal">Send children on adventures with their favourite characters in a space made just for them—free with your membership. </p>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
          <div className=" w-screen h-[1000px] bg-black flex flex-col justify-center items-center gap-7">
            <h1 className="text-white text-5xl font-black ">Frequently Asked Questions</h1>
            <div className="flex flex-col w-screen justify-center items-center gap-3">
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">What is Netflix?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">How much does Netflix cost?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">Where can I watch?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">How do I cancel?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">What can I watch on Netflix?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
              <div className="w-9/12 h-24 bg-[#232323] p-5 flex justify-between items-center cursor-pointer">
                  <h1 className="text-[28px] text-white">Is Netflix good for kids?</h1>
                  <button className="text-7xl text-white">+</button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 mt-5">
              <p className="text-white text-xl">Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
              <div className="flex justify-center items-center gap-2">
                <input type="text" placeholder="Email or Mobile Number" className="py-3 px-5 w-96 placeholder:text-white rounded-md bg-slate-800 text-xl" />
                <button className="flex items-center justify-center text-2xl text-white bg-red-600 p-2 w-52 rounded-md">Get Started <FaChevronRight />   </button>
              </div>
            </div>
          </div>
          <hr className="border-[#232323] border-4" />
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