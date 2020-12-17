import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Firstpage';
import reportWebVitals from './reportWebVitals';
import Firstpage from './Firstpage';


ReactDOM.render(
  <React.StrictMode>
    <Firstpage />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
