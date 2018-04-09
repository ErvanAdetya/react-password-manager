import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA5urXUacUMgV9-nn0qUseZ0lUWcqaXiTs",
  authDomain: "password-manager-6a830.firebaseapp.com",
  databaseURL: "https://password-manager-6a830.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database;

export default database;