import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIS8t4823BcDdB-ycYwHc99wm3yKh-oQg",
    authDomain: "slack-clone-43316.firebaseapp.com",
    projectId: "slack-clone-43316",
    storageBucket: "slack-clone-43316.appspot.com",
    messagingSenderId: "898560867419",
    appId: "1:898560867419:web:e4aa46c0a5f957970c937e",
    measurementId: "G-S6WM1Z4BHQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

export default db;