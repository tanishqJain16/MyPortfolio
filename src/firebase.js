import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPbpywCdfaGJgaCGhNbG_7dfov8Q6UWXw",
  authDomain: "myportfolio-939ee.firebaseapp.com",
  projectId: "myportfolio-939ee",
  storageBucket: "myportfolio-939ee.appspot.com",
  messagingSenderId: "734654745249",
  appId: "1:734654745249:web:493ffcea4cb40556babee0",
  measurementId: "G-QX09E4BS37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };