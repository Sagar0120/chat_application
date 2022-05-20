import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdvCQHkYv2HRt0MVzZ0h0dBZH69a9g30U",
  authDomain: "react-chat-app-87a6c.firebaseapp.com",
  databaseURL: "https://react-chat-app-87a6c-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-87a6c",
  storageBucket: "react-chat-app-87a6c.appspot.com",
  messagingSenderId: "414507514140",
  appId: "1:414507514140:web:3e587510d8e403386e22d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
