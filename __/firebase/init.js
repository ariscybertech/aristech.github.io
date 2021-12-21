if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyBFBlU6aB0QxbWo9yMpkxo16YFUI50aldE",
  "authDomain": "victor-aremu.firebaseapp.com",
  "databaseURL": "https://victor-aremu.firebaseio.com",
  "messagingSenderId": "825415542794",
  "projectId": "victor-aremu",
  "storageBucket": "victor-aremu.appspot.com"
});