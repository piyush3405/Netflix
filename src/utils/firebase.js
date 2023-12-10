// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8MD77e2dv_meG8vpFACsYgN6KR0DqcRU",
  authDomain: "netflix-64ed6.firebaseapp.com",
  projectId: "netflix-64ed6",
  storageBucket: "netflix-64ed6.appspot.com",
  messagingSenderId: "456493544885",
  appId: "1:456493544885:web:3020f25db00822c2e195fc",
  measurementId: "G-Y6P03HW3PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();

