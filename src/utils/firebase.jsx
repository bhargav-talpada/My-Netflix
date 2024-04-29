// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWURdGHW2aBsyHY_qlSS5WATbYVZCSesg",
  authDomain: "netflixgpt-65324.firebaseapp.com",
  projectId: "netflixgpt-65324",
  storageBucket: "netflixgpt-65324.appspot.com",
  messagingSenderId: "722294160528",
  appId: "1:722294160528:web:e94c881831b2588a3dac15",
  measurementId: "G-6YB23TW703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();