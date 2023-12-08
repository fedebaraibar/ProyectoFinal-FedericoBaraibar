
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB9uNB1cFmrtlfON4U7eIh2vRkK1pU72cg",
  authDomain: "technohouse-18737.firebaseapp.com",
  projectId: "technohouse-18737",
  storageBucket: "technohouse-18737.appspot.com",
  messagingSenderId: "344910451887",
  appId: "1:344910451887:web:6c9298721aee992f6cf05a"
};



export const app = initializeApp(firebaseConfig);
export const initializeFirebase = () => app
export const db = getFirestore(app);
