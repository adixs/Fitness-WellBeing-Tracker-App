import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCc8fB4xMj48tMpXgOFKoL5lyZwpgGbn4E",
  authDomain: "fitness-app-586a8.firebaseapp.com",
  projectId: "fitness-app-586a8",
  storageBucket: "fitness-app-586a8.appspot.com", 
  messagingSenderId: "744288140992",
  appId: "1:744288140992:web:d9694e4fb893af50e3b725",
  measurementId: "G-6XXFF5FJEG",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app); 
