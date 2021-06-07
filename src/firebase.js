import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD2tBAJ5X4VeFiS3b5CM7rQN4zQtLp0vs",
    authDomain: "facebook-clone-c413e.firebaseapp.com",
    projectId: "facebook-clone-c413e",
    storageBucket: "facebook-clone-c413e.appspot.com",
    messagingSenderId: "228867304083",
    appId: "1:228867304083:web:719d8f76052b8a76f4fb66",
    measurementId: "G-0SRS03Z2LK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;