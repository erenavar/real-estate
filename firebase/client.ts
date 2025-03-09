// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIkXe2QIyUmgp6HX1D_ZA1Z8TB9Q_Xk2o",
    authDomain: "real-estate-d0fcd.firebaseapp.com",
    projectId: "real-estate-d0fcd",
    storageBucket: "real-estate-d0fcd.firebasestorage.app",
    messagingSenderId: "782449733736",
    appId: "1:782449733736:web:d5bbbc372e4d69be140bdd"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;


if (!currentApps.length) {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

} else {
    const app = currentApps[0]
    const auth = getAuth(app)
}

export { auth }