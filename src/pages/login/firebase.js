import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyAxbDDwO7at2QTfyj_AmjIMDr  SZllTStuk',
  authDomain: 'auth-495fc.firebaseapp.com',
  databaseURL: 'https://auth-495fc-default-rtdb.com.firebaseio.com',
  projectId: 'auth-495fc',
  storageBucket: 'auth-495fc.appspot.com',
  messagingSenderId: '759572427365',
  appId: '1:759572427365:android:aad2656f7d92621cc44c8c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
