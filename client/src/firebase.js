// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-1d55b.firebaseapp.com",
  projectId: "real-estate-1d55b",
  storageBucket: "real-estate-1d55b.appspot.com",
  messagingSenderId: "195384223539",
  appId: "1:195384223539:web:3f1f2ad080ce0be3554046"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);