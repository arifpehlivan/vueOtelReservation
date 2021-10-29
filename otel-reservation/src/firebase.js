import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
  
//   const firebaseConfig = {
//     apiKey: "AIzaSyDpAY26WXNhVUrgtqjtvj5R71qhp3p0Mq4",
//     authDomain: "test-93424.firebaseapp.com",
//     projectId: "test-93424",
//     storageBucket: "test-93424.appspot.com",
//     messagingSenderId: "282516302935",
//     appId: "1:282516302935:web:9b698e7e6a1f3333fe4712",
//     measurementId: "G-FRGXFXNXYP"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpAY26WXNhVUrgtqjtvj5R71qhp3p0Mq4",
  authDomain: "test-93424.firebaseapp.com",
  projectId: "test-93424",
  storageBucket: "test-93424.appspot.com",
  messagingSenderId: "282516302935",
  appId: "1:282516302935:web:9b698e7e6a1f3333fe4712",
  measurementId: "G-FRGXFXNXYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



  const auth = firebase.auth()
  const db = firebase.firestore
  const storage = firebase.storage()
  const functions = firebase.functions()

  export{
      firebase,
      auth,
      db,
      storage,
      functions
  }