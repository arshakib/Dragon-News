// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARbB53rp7BJqF2kMD58gW62PfV2W0NrWc",
  authDomain: "st-project-react.firebaseapp.com",
  projectId: "st-project-react",
  storageBucket: "st-project-react.firebasestorage.app",
  messagingSenderId: "552023667608",
  appId: "1:552023667608:web:13d6f0aec20042662271ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
