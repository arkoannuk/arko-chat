import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwViJjw3zmPJM2xpBuIPL0JhdZMZK-gfc",
  authDomain: "net-vue-firebase.firebaseapp.com",
  projectId: "net-vue-firebase",
  storageBucket: "net-vue-firebase.appspot.com",
  messagingSenderId: "346863065637",
  appId: "1:346863065637:web:a9ccc3845680cc26c8fdcc"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
