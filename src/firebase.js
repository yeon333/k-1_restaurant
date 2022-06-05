// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSYMdJuOqqHuhimg7DbNvaN-QHG4LE4Eo",
  authDomain: "k-1-chelin.firebaseapp.com",
  projectId: "k-1-chelin",
  storageBucket: "k-1-chelin.appspot.com",
  messagingSenderId: "17085784346",
  appId: "1:17085784346:web:67dea299b39c4ff9e98ca3",
  measurementId: "G-7YD7RJK0Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth();
export const dbService = getFirestore();