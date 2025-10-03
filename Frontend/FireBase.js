// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foodora-food-delivery.firebaseapp.com",
  projectId: "foodora-food-delivery",
  storageBucket: "foodora-food-delivery.firebasestorage.app",
  messagingSenderId: "170924139865",
  appId: "1:170924139865:web:06f69ba16be5d448cc1848",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
