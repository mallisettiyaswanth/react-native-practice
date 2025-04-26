// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH84ujaqDMhnJDZE7DMeOyaD8rRrFl2es",
  authDomain: "ai-diet-p.firebaseapp.com",
  projectId: "ai-diet-p",
  storageBucket: "ai-diet-p.firebasestorage.app",
  messagingSenderId: "594668364091",
  appId: "1:594668364091:web:80e3eb61d94b9613ed571e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export { authentication };
