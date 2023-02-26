// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvf-Rwyr8DhNpzhU0dXaWIVB7N-aFSMa8',
  authDomain: 'crwn-clothing-db-5bb72.firebaseapp.com',
  projectId: 'crwn-clothing-db-5bb72',
  storageBucket: 'crwn-clothing-db-5bb72.appspot.com',
  messagingSenderId: '673416136163',
  appId: '1:673416136163:web:8fbcbc802fe453ee814cd6',
};

// Initialize Firebase
/*const firebaseApp = */ initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done adding collection and documents to firebase ...');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  console.log('categoriesMap', categoriesMap);
  return categoriesMap;
  // const CATEGORIES_KEYS = ['jackets', 'mens', 'sneakers', 'womens', 'hats'];
  // const catMap = Object.keys(categoriesMap)
  //   .filter((key) => CATEGORIES_KEYS.includes(key))
  //   .reduce((obj, key) => {
  //     obj[key] = categoriesMap[key];
  //     return obj;
  //   }, {});
  // console.log('catMap', catMap);

  // const CATEGORIES_KEYS = ['jackets', 'mens', 'sneakers', 'womens', 'hats'];
  // const categoriesMap = Object.keys(querySnapshot.docs)
  //   .filter((key) => CATEGORIES_KEYS.includes(key))
  //   .reduce((acc, docSnapshot) => {
  //     const { title, items } = docSnapshot.data();
  //     acc[title.toLowerCase()] = items;
  //     return acc;
  //   }, {});
  // console.log('categoriesMap', categoriesMap);
  // console.log(querySnapshot.dpcs);
  // return catMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthhUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
