import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCdWo7AEQaT7tS_9s0w0Ve5AGSF4T9j4E",
    authDomain: "crown-db-a36f1.firebaseapp.com",
    databaseURL: "https://crown-db-a36f1.firebaseio.com",
    projectId: "crown-db-a36f1",
    storageBucket: "crown-db-a36f1.appspot.com",
    messagingSenderId: "990287399387",
    appId: "1:990287399387:web:27a1923417af88d471bffe",
    measurementId: "G-FWBDQKLQ5Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
