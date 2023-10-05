import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtAw0mlXv4JCWI-rAoeX8NnkDxCigGXPk",
  authDomain: "database-952af.firebaseapp.com",
  databaseURL: "https://database-952af-default-rtdb.firebaseio.com",
  projectId: "database-952af",
  storageBucket: "database-952af.appspot.com",
  messagingSenderId: "732490020359",
  appId: "1:732490020359:web:f65c10b937a98149331ca2",
  measurementId: "G-L34HCNKJXX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
