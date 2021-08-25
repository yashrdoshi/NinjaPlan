import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDl_QY1A8-qHKLeutkUa_T0K42DNlEbDj0",
    authDomain: "ninja-plan-fecc0.firebaseapp.com",
    projectId: "ninja-plan-fecc0",
    storageBucket: "ninja-plan-fecc0.appspot.com",
    messagingSenderId: "338780357570",
    appId: "1:338780357570:web:ec8562d84cd8bb12254c5b",
    measurementId: "G-8JQKEBQCV5"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase