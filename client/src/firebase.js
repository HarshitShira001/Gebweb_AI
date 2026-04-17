// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-website-builder-5bc6a.firebaseapp.com",
  projectId: "ai-website-builder-5bc6a",
  storageBucket: "ai-website-builder-5bc6a.firebasestorage.app",
  messagingSenderId: "164209997975",
  appId: "1:164209997975:web:2188711287a4bfa82451d2",
  measurementId: "G-89X5FESB3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}