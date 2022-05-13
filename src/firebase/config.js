import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWOZz9q7X5GI31Wam-RbhTSyamuZZA4eg",
  authDomain: "fir-ceaad.firebaseapp.com",
  projectId: "fir-ceaad",
  storageBucket: "fir-ceaad.appspot.com",
  messagingSenderId: "482402906916",
  appId: "1:482402906916:web:8d3da622281cb3a03139b1",
  measurementId: "G-F4NMC25TTN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
