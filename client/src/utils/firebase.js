import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBVVRTmSEh1HodSuzkWvnB2lLyv9Hvmsn4",
    authDomain: "vehicles-bg.firebaseapp.com",
    projectId: "vehicles-bg",
    storageBucket: "vehicles-bg.appspot.com",
    messagingSenderId: "542975592167",
    appId: "1:542975592167:web:04a4d6f8f06ee0e612c442"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();

