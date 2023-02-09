// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy24PZME9omJRnRsHGwFutheFCLF1ddXw",
  authDomain: "expense-tacker-6d9d8.firebaseapp.com",
  projectId: "expense-tacker-6d9d8",
  storageBucket: "expense-tacker-6d9d8.appspot.com",
  messagingSenderId: "142606416689",
  appId: "1:142606416689:web:b57b6e71d770c2fffd8e10",
  measurementId: "G-Y1DPT9DVBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;