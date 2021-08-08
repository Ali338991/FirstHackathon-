
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wrLabf5RJoQhE7q0YbMJ6k7iVvpUnko",
  authDomain: "aftc-noman.firebaseapp.com",
  projectId: "aftc-noman",
  storageBucket: "aftc-noman.appspot.com",
  messagingSenderId: "963234121333",
  appId: "1:963234121333:web:df9370881f09e13acb1a3c",
  measurementId: "G-S51BWZH327"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();
  export const storage = firebase.storage();


//   export const storage = firebase.storage();
  export const auth = firebase.auth();
  firebase.analytics();
  export default firebase;