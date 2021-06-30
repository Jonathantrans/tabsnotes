import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDBKKDOECs3raNSNrMCs0Mf27zlJlHAwNM",
    authDomain: "tabs-notes.firebaseapp.com",
    databaseURL: "https://tabs-notes-default-rtdb.firebaseio.com",
    projectId: "tabs-notes",
    storageBucket: "tabs-notes.appspot.com",
    messagingSenderId: "119560021500",
    appId: "1:119560021500:web:ebf6ae43c886b609f5be79",
    measurementId: "G-HKRSJR3N0Y"
})

export { firebaseConfig as firebase };
