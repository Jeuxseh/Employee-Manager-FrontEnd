import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD_XG3uDTXXIskiCUSrApo0vR2EMfDeaRM",
  authDomain: "employeemanager-ca333.firebaseapp.com",
  databaseURL: "https://employeemanager-ca333.firebaseio.com",
  storageBucket:  "employeemanager-ca333.appspot.com",
};

firebase.initializeApp(config);


ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));