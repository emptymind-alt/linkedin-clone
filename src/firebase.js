// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCSTQZ3pqdNw_1i5JZQwn0QkpueJIQg4VQ",
    authDomain: "linkedin-clone-yt-88cd5.firebaseapp.com",
    projectId: "linkedin-clone-yt-88cd5",
    storageBucket: "linkedin-clone-yt-88cd5.appspot.com",
    messagingSenderId: "330603113996",
    appId: "1:330603113996:web:2051ee72fce3f1a6fb0829",
    measurementId: "G-T6Y7CE9ZSV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  
  export   { db,  auth };
  export default firebase;