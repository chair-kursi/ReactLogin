import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA7NRP6FhGTbr1ZGXsD160EtptKxeZAJVE",
    authDomain: "login-fa8c3.firebaseapp.com",
    projectId: "login-fa8c3",
    storageBucket: "login-fa8c3.appspot.com",
    messagingSenderId: "168582670477",
    appId: "1:168582670477:web:b0d2dcaa99b1a858e35ac4"
  }
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;