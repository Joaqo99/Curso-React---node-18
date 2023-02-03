// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxZBukcvMoXCYg41nphuFgwkVWMIVpmI",
  authDomain: "proj-journal.firebaseapp.com",
  projectId: "proj-journal",
  storageBucket: "proj-journal.appspot.com",
  messagingSenderId: "811838640404",
  appId: "1:811838640404:web:e3907a777424383f04b201",
  measurementId: "G-TLH7C35F60"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore( FirebaseApp )