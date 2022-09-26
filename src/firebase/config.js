// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuWY0dVxYw8rubYpJoOFZP0N2yUW9jj_k",
  authDomain: "sing-38b76.firebaseapp.com",
  projectId: "sing-38b76",
  storageBucket: "sing-38b76.appspot.com",
  messagingSenderId: "34368054888",
  appId: "1:34368054888:web:3f69bdaa087bf962b37ddd"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);