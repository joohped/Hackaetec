import { initializeApp } from '@firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9EjYnAlrCUf9-pV4E9j_CV6oLz_XkL5I",
  authDomain: "hackaetec.firebaseapp.com",
  projectId: "hackaetec",
  storageBucket: "hackaetec.appspot.com",
  messagingSenderId: "193670195959",
  appId: "1:193670195959:web:3d82de6c80a85b5fcc81f2",
  measurementId: "G-8PPNTEZ1G0"
};


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { app, auth, db };
