// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH5oD3iip2IBECp7j6VPiI6d24ooGMwTY",
  authDomain: "kitaab-mernebook.firebaseapp.com",
  projectId: "kitaab-mernebook",
  storageBucket: "kitaab-mernebook.appspot.com",
  messagingSenderId: "1096578871178",
  appId: "1:1096578871178:web:e05a6db5767a7fcefbe273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
