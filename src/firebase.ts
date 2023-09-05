import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx4YrLqPeMcgTiIYQ-GabCWWrpu-2EojA",
  authDomain: "login-123-a47fa.firebaseapp.com",
  projectId: "login-123-a47fa",
  storageBucket: "login-123-a47fa.appspot.com",
  messagingSenderId: "354568694882",
  appId: "1:354568694882:web:b7b005fc01520e06f8353b",
  measurementId: "G-VEKJZY96P1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
