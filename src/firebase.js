import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhZ9lLtyu216iWU3Z7e2jTUUAQUrNDghI",
    authDomain: "fb-mern-66f77.firebaseapp.com",
    projectId: "fb-mern-66f77",
    storageBucket: "fb-mern-66f77.appspot.com",
    messagingSenderId: "1028916469657",
    appId: "1:1028916469657:web:16c8857e5fd859e1673d08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db