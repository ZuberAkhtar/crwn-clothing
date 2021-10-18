import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBejAPAaHKuR4DyI0INmseNpN_nDPjeXWU",
    authDomain: "crwn-db-95c42.firebaseapp.com",
    databaseURL: "https://crwn-db-95c42.firebaseio.com",
    projectId: "crwn-db-95c42",
    storageBucket: "crwn-db-95c42.appspot.com",
    messagingSenderId: "316865082640",
    appId: "1:316865082640:web:337a2b558aa50d66482195",
    measurementId: "G-1RXWGNFTEY"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
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
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;