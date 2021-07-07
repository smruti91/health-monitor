import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5SgY0UjiwX7a2gLhtOPjkTxnnV7iyTpA",
    authDomain: "health-monitor-89220.firebaseapp.com",
    projectId: "health-monitor-89220",
    storageBucket: "health-monitor-89220.appspot.com",
    messagingSenderId: "861801867800",
    appId: "1:861801867800:web:ab6f97ffa30b722d9db16d",
    measurementId: "G-5ZECMF30ZF"
});

const db = firebaseApp.firestore();
export default db;