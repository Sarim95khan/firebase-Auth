// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIZxAaQojhBv1LoNBDRF0q942s0XQTFaY',
  authDomain: 'fir-auth01-f7ad4.firebaseapp.com',
  projectId: 'fir-auth01-f7ad4',
  storageBucket: 'fir-auth01-f7ad4.appspot.com',
  messagingSenderId: '658049740862',
  appId: '1:658049740862:web:a5a2a35807c552350ee16f',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
