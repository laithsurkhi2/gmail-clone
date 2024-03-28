import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBj6M7D2dRJn0CuaaRbpW4J4_InP8UXKzg",
    authDomain: "email-clone-5bc0f.firebaseapp.com",
    projectId: "email-clone-5bc0f",
    storageBucket: "email-clone-5bc0f.appspot.com",
    messagingSenderId: "612010221951",
    appId: "1:612010221951:web:8f5332d42afe24437afa4a",
    measurementId: "G-H34HDK871K"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export{db, auth, provider};