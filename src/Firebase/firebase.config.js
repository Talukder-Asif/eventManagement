// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCe4OHIvKYy9ZlT0WtAObyC3nGKkGKbf4",
  authDomain: "familyevent-e81a2.firebaseapp.com",
  projectId: "familyevent-e81a2",
  storageBucket: "familyevent-e81a2.appspot.com",
  messagingSenderId: "518499467156",
  appId: "1:518499467156:web:3a840aec1f0f8e466ad981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);