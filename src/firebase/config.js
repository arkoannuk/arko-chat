import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Ag2zttMxt9MKHC8JfO4LOr4M4R1bMPE",
  authDomain: "arko-chat.firebaseapp.com",
  projectId: "arko-chat",
  storageBucket: "arko-chat.appspot.com",
  messagingSenderId: "969358520377",
  appId: "1:969358520377:web:559912ed5545824de09de8"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
