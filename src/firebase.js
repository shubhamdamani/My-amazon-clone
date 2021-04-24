import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGMvikPxSDcNTTTQithPosCC5zI1Tiusc",
    authDomain: "clone-3a5d6.firebaseapp.com",
    projectId: "clone-3a5d6",
    storageBucket: "clone-3a5d6.appspot.com",
    messagingSenderId: "272392694801",
    appId: "1:272392694801:web:7ff7c1c0f3fcb741fa95b0",
    measurementId: "G-D0TVBKYES4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };