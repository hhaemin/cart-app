import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB4j06yS2lrarn6P7o58Z9LAWOwlXQI0pM",
  authDomain: "cart-app-899fc.firebaseapp.com",
  databaseURL:
    "https://cart-app-899fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cart-app-899fc",
  storageBucket: "cart-app-899fc.appspot.com",
  messagingSenderId: "607534428607",
  appId: "1:607534428607:web:4181f4b7b2e1d82f52b10a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const auth = getAuth(app);

export { auth, database };
