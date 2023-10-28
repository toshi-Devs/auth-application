import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbLY_hhLADn4f1AR6V5t-3KQISABKvjTQ",
    authDomain: "auth-app-9b18a.firebaseapp.com",
    projectId: "auth-app-9b18a",
    storageBucket: "auth-app-9b18a.appspot.com",
    messagingSenderId: "218907155878",
    appId: "1:218907155878:web:863219428f62711efbc367",
    measurementId: "G-5YEWB9ZW9K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };