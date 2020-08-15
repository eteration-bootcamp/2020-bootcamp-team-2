import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyALZIEALLh2Wnw2Nzgp73Z9GvsR9iepiwc",
    authDomain: "trawell-5c0ef.firebaseapp.com",
    databaseURL: "https://trawell-5c0ef.firebaseio.com",
    projectId: "trawell-5c0ef",
    storageBucket: "trawell-5c0ef.appspot.com",
    messagingSenderId: "735800513548",
    appId: "1:735800513548:web:181015c8ff73f2a2bd8a29",
    measurementId: "G-KSN0ZQZ7WL"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;