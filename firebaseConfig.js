// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore'; // If using Firestore
import 'firebase/auth';      // If using Firebase Authentication

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9bNc_TrHcC6o_6BgTEoGd8tKtmTpWczo",
  authDomain: "messageapp-1aec9.firebaseapp.com",
  projectId: "messageapp-1aec9",
  storageBucket: "messageapp-1aec9.appspot.com",
  messagingSenderId: "1029770258138",
  appId: "1:1029770258138:web:c1d274d765a79206c4a7e3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;