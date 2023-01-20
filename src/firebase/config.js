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
    apiKey: "AIzaSyB7_5IaCFDHq2nZTrZ_wxPhoD82YiJRmXk",
    authDomain: "react-cursos-5a559.firebaseapp.com",
    projectId: "react-cursos-5a559",
    storageBucket: "react-cursos-5a559.appspot.com",
    messagingSenderId: "641654777032",
    appId: "1:641654777032:web:937ac41697140a7d97f1fd",
    measurementId: "G-DQ2PBT37E9"
};

// Initialize Firebase
//const analytics = getAnalytics(app);
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp)
export const FirebaseDB = getFirestore(Firebaseapp)