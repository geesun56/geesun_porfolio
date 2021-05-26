import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCfGhjP-0G0sCheqakuAK9aPF87NmARNEA",
    authDomain: "geesun-portfolio-7c275.firebaseapp.com",
    projectId: "geesun-portfolio-7c275",
    storageBucket: "geesun-portfolio-7c275.appspot.com",
    messagingSenderId: "735594152671",
    appId: "1:735594152671:web:673969c2f0895d79831f6a",
    measurementId: "G-MHWJG3FSWM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  export default firebase;