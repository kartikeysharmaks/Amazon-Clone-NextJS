// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwLUOy9Nc7oIxE3W4ya7Y7v0mD370Y9ZM",
  authDomain: "clonenextjs.firebaseapp.com",
  projectId: "clonenextjs",
  storageBucket: "clonenextjs.appspot.com",
  messagingSenderId: "896410141549",
  appId: "1:896410141549:web:d5448cfeb65883e2699064",
  measurementId: "G-Q2N94G02W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);