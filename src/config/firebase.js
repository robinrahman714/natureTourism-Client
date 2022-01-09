import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBgfpuqVF0BDAnTBHLaYIfo38qkxjQuIjE",
    authDomain: "react-firebase-authentic-f5f99.firebaseapp.com",
    projectId: "react-firebase-authentic-f5f99",
    storageBucket: "react-firebase-authentic-f5f99.appspot.com",
    messagingSenderId: "223807530162",
    appId: "1:223807530162:web:94601fd38e63de247095ab"
  };
// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;