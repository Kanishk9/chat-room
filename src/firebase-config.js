// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu7b03iSgOdO8ESGQpj82_aPA_e6DxJP0",
  authDomain: "chat-room-3300f.firebaseapp.com",
  projectId: "chat-room-3300f",
  storageBucket: "chat-room-3300f.appspot.com",
  messagingSenderId: "101256864529",
  appId: "1:101256864529:web:b7ce83b1b17576acde22b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);