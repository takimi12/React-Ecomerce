import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDk2iXSZ2gh1iI7vp2iPN9AscVRrw97GJs",
  authDomain: "martfcury.firebaseapp.com",
  projectId: "martfcury",
  storageBucket: "martfcury.appspot.com",
  messagingSenderId: "1005615937262",
  appId: "1:1005615937262:web:61475c8a96f5e92d0825ff"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;