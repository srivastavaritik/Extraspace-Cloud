import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDjmUgN5UlZhrehqoOJ3m-5TeJV80oOmE4",
  authDomain: "auth-dev-265ea.firebaseapp.com",
  projectId: "auth-dev-265ea",
  storageBucket: "auth-dev-265ea.appspot.com",
  messagingSenderId: "22185838490",
  appId: "1:22185838490:web:19b913846a20554f2c9c23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getFirestore();
export const db = {
  formatDoc : doc=> {
    return {id:doc.id, ...doc.data()}
  }
}
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
