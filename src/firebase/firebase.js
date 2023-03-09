import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrUQpPmWbpXxdQ4Bc0FIvsOAHjL7y-iso",
  authDomain: "filmreviews-f0dad.firebaseapp.com",
  projectId: "filmreviews-f0dad",
  storageBucket: "filmreviews-f0dad.appspot.com",
  messagingSenderId: "336873170410",
  appId: "1:336873170410:web:3a7d8f4b810fd995847e93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db, "movies")
export const reviewsRef = collection(db, "reviews")

export default app;