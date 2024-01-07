// src/firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBpJ1kgXrUmjIU82M9dYqggIyXShhG2F8",
  authDomain: "admin-telegram-bot.firebaseapp.com",
  projectId: "admin-telegram-bot",
  storageBucket: "admin-telegram-bot.appspot.com",
  messagingSenderId: "561855479372",
  appId: "1:561855479372:web:9339cf1bb521ff67e37ee9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export default { auth, firebase };
