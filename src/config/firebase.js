import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAtzCvFNFMNDUBOa-WXsLqyTy304u4mnZQ',
  authDomain: 'cutton-db.firebaseapp.com',
  databaseURL: 'https://cutton-db.firebaseio.com',
  projectId: 'cutton-db',
  storageBucket: 'cutton-db.appspot.com',
  messagingSenderId: '720571592740',
  appId: '1:720571592740:web:a4b9a88f6174021d6728b1',
  measurementId: 'G-6W8SK079W4',
};

export const createUserProfileDocument = async (authUser, additionalData) => {
  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = authUser;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
