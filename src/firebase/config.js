// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVvVdjad8d4hRs8SLJz3zguUJ3DAS_LZk",
    authDomain: "react-cursos-dd5c6.firebaseapp.com",
    projectId: "react-cursos-dd5c6",
    storageBucket: "react-cursos-dd5c6.appspot.com",
    messagingSenderId: "1079865208011",
    appId: "1:1079865208011:web:37ba54e7e9c9509d943f4e"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)