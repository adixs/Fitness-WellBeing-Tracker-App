// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional





export const authantication = getAuth(app);
export const GoogleAuthProvide = new GoogleAuthProvider();
export const db = getFirestore(app); 
const firebaseConfig = {
  apiKey: "AIzaSyCc8fB4xMj48tMpXgOFKoL5lyZwpgGbn4E",
  authDomain: "fitness-app-586a8.firebaseapp.com",
  projectId: "fitness-app-586a8",
  storageBucket: "fitness-app-586a8.firebasestorage.app",
  messagingSenderId: "744288140992",
  appId: "1:744288140992:web:d9694e4fb893af50e3b725",
  measurementId: "G-6XXFF5FJEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBikUioQQWqMepO5T-N4voQTQoImWQUv1s",
//   authDomain: "login-base-ab247.firebaseapp.com",
//   projectId: "login-base-ab247",
//   storageBucket: "login-base-ab247.firebasestorage.app",
//   messagingSenderId: "757575272827",
//   appId: "1:757575272827:web:ea01e36786baa90be955de",
//   measurementId: "G-J80C1F85R0"
// };


// const app = initializeApp(firebaseConfig);

// export const authantication = getAuth(app);
// export const GoogleAuthProvide = new GoogleAuthProvider();
// export const db = getFirestore(app); 