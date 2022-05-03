import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from 'communication/firebaseConfig';

export const firebase = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(firebase);

export const firebaseAuth = getAuth(firebase);
