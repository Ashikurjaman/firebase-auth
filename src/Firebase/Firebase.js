// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3uIA6xEL1nyS9wXFQ0Z2l-ZSllmV-VAw",
  authDomain: "email-password-auth-11850.firebaseapp.com",
  projectId: "email-password-auth-11850",
  storageBucket: "email-password-auth-11850.appspot.com",
  messagingSenderId: "551456925492",
  appId: "1:551456925492:web:44850e1836ac19c6caa761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
