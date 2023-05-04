import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDPrW5R9gNM4FBcTJZRKolH6iZ9P-bDN2M',
  authDomain: 'psm-automate-6133c.firebaseapp.com',
  projectId: 'psm-automate-6133c',
  storageBucket: 'psm-automate-6133c.appspot.com',
  messagingSenderId: '306326679208',
  appId: '1:306326679208:web:e10778e635d9c328c1dc9d'
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

export { auth }
export { db }