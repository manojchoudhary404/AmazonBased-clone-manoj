import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLNndDHI1LUBmyKkjUe0aJgDAYDUiFLIg",
  authDomain: "react--clone-6389b.firebaseapp.com",
  projectId: "react--clone-6389b",
  storageBucket: "react--clone-6389b.appspot.com",
  messagingSenderId: "388492809420",
  appId: "1:388492809420:web:3004055aba9942059dde69",
  measurementId: "G-09N6Q3XS7M"
};
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);


