import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "edux-f81ce.firebaseapp.com",
  projectId: "edux-f81ce",
  storageBucket: "edux-f81ce.firebasestorage.app",
  messagingSenderId: "214046911411",
  appId: "1:214046911411:web:863c813242fff6971b39c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
