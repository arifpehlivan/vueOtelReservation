import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");





  const firebaseConfig = {
    apiKey: "AIzaSyDpAY26WXNhVUrgtqjtvj5R71qhp3p0Mq4",
    authDomain: "test-93424.firebaseapp.com",
    projectId: "test-93424",
    storageBucket: "test-93424.appspot.com",
    messagingSenderId: "282516302935",
    appId: "1:282516302935:web:9b698e7e6a1f3333fe4712",
    measurementId: "G-FRGXFXNXYP"
  };


 
const app = initializeApp(firebaseConfig);
  
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

  export{
      firebase,
      auth,
      db,
      storage,
      functions
  }