import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNVzDM97X9YxpRi1kvlemY2xlgcVQWvfY",
  authDomain: "fb-lite-e5a8c.firebaseapp.com",
  databaseURL: "https://fb-lite-e5a8c.firebaseio.com",
  projectId: "fb-lite-e5a8c",
  storageBucket: "fb-lite-e5a8c.appspot.com",
  messagingSenderId: "686101015762",
  appId: "1:686101015762:web:788a163a281240ec24910b",
  measurementId: "G-Y08HW3BP2G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
