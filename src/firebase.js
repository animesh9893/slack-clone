import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfigData';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
export {auth, provider}

export default db;
