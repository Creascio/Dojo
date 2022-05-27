import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { Database, getDatabase } from 'firebase/database';
import { Auth, getAuth } from 'firebase/auth';

export let database: Database | null = null;
export let auth: Auth | null = null;

export default boot(() => {
  const app = initializeApp({
    apiKey: 'AIzaSyAAcgmxnxJt5k0yBGZU6NUoxa4VFdSv4Gw',
    authDomain: 'creascio-3d8bf.firebaseapp.com',
    projectId: 'creascio-3d8bf',
    storageBucket: 'creascio-3d8bf.appspot.com',
    messagingSenderId: '85592478889',
    appId: '1:85592478889:web:75b6ff7ecd6299a80045b8',
    databaseURL:
      'https://creascio-3d8bf-default-rtdb.europe-west1.firebasedatabase.app',
  });

  database = getDatabase(app);
  auth = getAuth(app);
});
