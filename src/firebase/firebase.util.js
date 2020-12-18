import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyCTTQOA0SqIu4bNAWEk7CGzK-4tWo7OobI",
        authDomain: "crwn-db-3cead.firebaseapp.com",
        projectId: "crwn-db-3cead",
        storageBucket: "crwn-db-3cead.appspot.com",
        messagingSenderId: "556206850150",
        appId: "1:556206850150:web:d985d7c0a95452eedeeda7",
        measurementId: "G-9DZXW0QC6Z" 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle=() => auth.signInWithPopup(provider);

export default firebase;