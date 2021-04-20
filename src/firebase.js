import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfigData';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

export default db;