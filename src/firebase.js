// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQmZgLN0jSmIR-x7yJRodCgNaJQ9Dceo",
  authDomain: "yapper-69a9c.firebaseapp.com",
  projectId: "yapper-69a9c",
  storageBucket: "yapper-69a9c.appspot.com",
  messagingSenderId: "784732595510",
  appId: "1:784732595510:web:97299d37d41e6a78ec7f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app)