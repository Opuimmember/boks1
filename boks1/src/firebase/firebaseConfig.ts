// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDGG8E-pSbLZRvylclYnAaFvsjG0lSZ0V4',
  authDomain: 'boks-f570c.firebaseapp.com',
  projectId: 'boks-f570c',
  storageBucket: 'boks-f570c.appspot.com',
  messagingSenderId: '312967969049',
  appId: '1:312967969049:web:f167399ce064c54c2cad88',
  measurementId: 'G-6PSQ2KNV61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
