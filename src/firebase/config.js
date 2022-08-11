import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';





const firebaseConfig = {
  apiKey: "AIzaSyBFReBnjKnkw75oWHJAYMmiNa5ZL7gSWow",
  authDomain: "ametienda.firebaseapp.com",
  projectId: "ametienda",
  storageBucket: "ametienda.appspot.com",
  messagingSenderId: "622858069495",
  appId: "1:622858069495:web:022f82239ec8d3a2bcbaf2",
  measurementId: "G-C8LVXM7WHQ"
};


export const firebaseApp = initializeApp(firebaseConfig); // initialize app
export const db = getFirestore(); // this gets the firestore database

//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//
export const registerUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

//### LOGIN USER WITH FIREBASE ###//
export const loginUser = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

