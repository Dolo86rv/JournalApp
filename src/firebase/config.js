// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
} = getEnvironments();

//console.log(process.env)
//console.log(import.meta.env)
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Dev/Produccion
/*const firebaseConfig = {
    apiKey: "AIzaSyCVvVdjad8d4hRs8SLJz3zguUJ3DAS_LZk",
    authDomain: "react-cursos-dd5c6.firebaseapp.com",
    projectId: "react-cursos-dd5c6",
    storageBucket: "react-cursos-dd5c6.appspot.com",
    messagingSenderId: "1079865208011",
    appId: "1:1079865208011:web:37ba54e7e9c9509d943f4e"
};*/

//Testing
/*const firebaseConfig = {
    apiKey: "AIzaSyBFYg1RWfOjJ7LjJDMHEIkTwvkFeHIbS54",
    authDomain: "testing-react-b583e.firebaseapp.com",
    projectId: "testing-react-b583e",
    storageBucket: "testing-react-b583e.appspot.com",
    messagingSenderId: "159014883014",
    appId: "1:159014883014:web:19d8cc3286b56ef59f91c7"
};*/

const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
};

//console.log(firebaseConfig);

// Initialize Firebase
//const analytics = getAnalytics(app);
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
