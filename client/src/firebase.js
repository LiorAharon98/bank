// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx-CtB37iF4R5Ol55sf_ggL1tUnt9OFfg",
  authDomain: "bank-263e0.firebaseapp.com",
  projectId: "bank-263e0",
  storageBucket: "bank-263e0.appspot.com",
  messagingSenderId: "186759194963",
  appId: "1:186759194963:web:9910a39b034e83e13dd9a6",
  measurementId: "G-XYGY0JH6T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
