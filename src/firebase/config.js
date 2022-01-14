import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA2UasiDQKu9Ixb4DaWnlqKoM3dKZ6jGY",
  authDomain: "live-chat-ba02e.firebaseapp.com",
  databaseURL: "https://live-chat-ba02e.firebaseio.com",
  projectId: "live-chat-ba02e",
  storageBucket: "live-chat-ba02e.appspot.com",
  messagingSenderId: "1080584725373",
  appId: "1:1080584725373:web:9916fe71285b5e766a6214",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
