import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDjidKo5X9cLV2RJgKyxs1b37rI8o26cuw",
  authDomain: "leilao-manha.firebaseapp.com",
  projectId: "leilao-manha",
  storageBucket: "leilao-manha.appspot.com",
  messagingSenderId: "121697448688",
  appId: "1:121697448688:web:3dd213303648c521e9c835"  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);