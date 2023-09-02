import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';





const firebaseConfig = { 
    apiKey: "AIzaSyB_QxFydA-qMtHOTMMCCoUEmS0U8G9HlM8",
    authDomain: "disney-plus-8f144.firebaseapp.com",
    projectId: "disney-plus-8f144",
    storageBucket: "disney-plus-8f144.appspot.com",
    messagingSenderId: "214890634804",
    appId: "1:214890634804:web:d7cb8240b430c8c13cb461",
    measurementId: "G-PJLT00T22X"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;