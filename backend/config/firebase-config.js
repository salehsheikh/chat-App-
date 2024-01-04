// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCwfNCYGGoiL4OprT7eJbCczdik0r_0Kp4",
//   authDomain: "chat-app-66e52.firebaseapp.com",
//   projectId: "chat-app-66e52",
//   storageBucket: "chat-app-66e52.appspot.com",
//   messagingSenderId: "353876585967",
//   appId: "1:353876585967:web:302f759a9683b3e7931a1a",
//   measurementId: "G-XZRM9D97M9"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;