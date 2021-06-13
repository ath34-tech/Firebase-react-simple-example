import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCI8ajnjm54L4bX6NAz4on50kMOzCrG2UU",
    authDomain: "tutorial-1234-ed959.firebaseapp.com",
    projectId: "tutorial-1234-ed959",
    storageBucket: "tutorial-1234-ed959.appspot.com",
    messagingSenderId: "343704361306",
    appId: "1:343704361306:web:d2269668f04315076e7b63",
    measurementId: "G-14NLK8EXBC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;