import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'





  var firebaseConfig = {
    apiKey: "AIzaSyB-LaSD2lH6lkGrF9HX2JrYwEl4fu-bS54",
    authDomain: "mohsiitech.firebaseapp.com",
    projectId: "mohsiitech",
    storageBucket: "mohsiitech.appspot.com",
    messagingSenderId: "347456984153",
    appId: "1:347456984153:web:3fd36def54306b897fcd48",
    measurementId: "G-SVRVLCYXSY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase