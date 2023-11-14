// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX_re6jwwWEKiISCI6Oq3odt51yQzPaIw",
  authDomain: "controldegastos-bc8c7.firebaseapp.com",
  projectId: "controldegastos-bc8c7",
  storageBucket: "controldegastos-bc8c7.appspot.com",
  messagingSenderId: "526444168458",
  appId: "1:526444168458:web:92dddc528581a3717ee6f3",
  measurementId: "G-131FZTGBX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);