import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Importing authentication
import { getFirestore } from 'firebase/firestore'; // Importing Firestore

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8fB4xMj48tMpXgOFKoL5lyZwpgGbn4E",
  authDomain: "fitness-app-586a8.firebaseapp.com",
  projectId: "fitness-app-586a8",
  storageBucket: "fitness-app-586a8.appspot.com", // ✅ corrected `.app` to `.appspot.com`
  messagingSenderId: "744288140992",
  appId: "1:744288140992:web:d9694e4fb893af50e3b725",
  measurementId: "G-6XXFF5FJEG",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firebase Services
export const auth = getAuth(app); // Authentication
export const googleProvider = new GoogleAuthProvider(); // Google Auth Provider (if you plan to use Google login)
export const db = getFirestore(app); // Firestore
