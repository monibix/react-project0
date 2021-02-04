import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const array = ["Home", "Services", "About", "Contact"]
const footer = ["Gmail", "Linkedin", "Github"]
let bodyDescription = "This is my first simple React App project with a few components, sections and styling. Contains just a header, a body and the footer. Links are not active yet."



ReactDOM.render(
  <React.StrictMode>
    <App title="First React App" clave={array} footer={footer} bodyDescr={bodyDescription}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
