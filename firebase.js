// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4F0d8bp8leuGhZ-Fj9x7FOrd1A2T5lEs",
  authDomain: "chhantu-1ebba.firebaseapp.com",
  projectId: "chhantu-1ebba",
  storageBucket: "chhantu-1ebba.appspot.com",
  messagingSenderId: "300265366776",
  appId: "1:300265366776:web:92c9068768f62633d0470d",
  measurementId: "G-L80GGV7NGV",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };