import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA0gNDtWAifPietMTmQuwsElUIX_sbfOQc",
    authDomain: "fir-pj-b5962.firebaseapp.com",
    projectId: "fir-pj-b5962",
    storageBucket: "fir-pj-b5962.appspot.com",
    messagingSenderId: "17089154469",
    appId: "1:17089154469:web:a5adc9ea32130b5798ac4c",
    measurementId: "G-TH56GRLYPM"
  });
}

export default firebase;