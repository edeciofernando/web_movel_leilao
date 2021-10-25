import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDQldG35MaoNtPMPXFS7CqOemLEH1EjGA0",
  authDomain: "leilao-obras-noite.firebaseapp.com",
  projectId: "leilao-obras-noite",
  storageBucket: "leilao-obras-noite.appspot.com",
  messagingSenderId: "972992146091",
  appId: "1:972992146091:web:85851308c7ca821da8a5ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);