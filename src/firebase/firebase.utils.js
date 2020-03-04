import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB79dZV321ZqE4A6OdEvqOtROhJ_IzEj0E",
    authDomain: "topstocks-8782c.firebaseapp.com",
    databaseURL: "https://topstocks-8782c.firebaseio.com",
    projectId: "topstocks-8782c",
    storageBucket: "topstocks-8782c.appspot.com",
    messagingSenderId: "839850355466",
    appId: "1:839850355466:web:4bf8b4550b7d60061328f3",
    measurementId: "G-DQKEV8GVMW"
  };

  export const createUserProfileDocument = async (userAuth, additional) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additional
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }

  export const convertSnapshotToMap = (snapshot) => {
    const transformedSnap = snapshot.docs.map(doc => {
      return {
        ...doc.data()
      }
    })
    return transformedSnap;
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject)
    });
  }

  export const getCompanyBySymbol = async (symbol) => {
    const companyRef = firestore.doc(`signals/${symbol}`);
    const snapshot = await companyRef.get();
    if (!snapshot.exists) {
      throw new Error('Company not found');
    }
    return snapshot.data();
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;
