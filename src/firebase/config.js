import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Poprawione getFireStore na getFirestore
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBFRl3cCm1vnAielxXfU3ZX_1IgHV-0ay8",
  authDomain: "first-eccomerce.firebaseapp.com",
  projectId: "first-eccomerce",
  storageBucket: "first-eccomerce.appspot.com",
  messagingSenderId: "25843316895",
  appId: "1:25843316895:web:a1e732562dc1ee02858aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Poprawione getFireStore na getFirestore
export const storage = getStorage(app);

export default app;
