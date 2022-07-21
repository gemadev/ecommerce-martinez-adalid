import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFReBnjKnkw75oWHJAYMmiNa5ZL7gSWow",
  authDomain: "ametienda.firebaseapp.com",
  projectId: "ametienda",
  storageBucket: "ametienda.appspot.com",
  messagingSenderId: "622858069495",
  appId: "1:622858069495:web:022f82239ec8d3a2bcbaf2",
  measurementId: "G-C8LVXM7WHQ"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);