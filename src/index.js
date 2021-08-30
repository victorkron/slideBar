import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let myDiv = document.querySelector('div[data-id=id]');

let buttons = Array.from(document.getElementsByTagName('button'));
let colorButton = buttons[0];
let colorBgButton = buttons[1];

let inputs = Array.from(document.getElementsByTagName('input'));

let inputRed = inputs[0];
let inputGreen = inputs[1];
let inputBlue = inputs[2];

function funBgColor(ev) {
  ev.preventDefault();
  myDiv.style.backgroundColor = `#${Math.round(255*inputRed.value/100).toString(16).length == 2 ?  Math.round(255*inputRed.value/100).toString(16) : '0' + Math.round(255*inputRed.value/100).toString(16)}${Math.round(255*inputGreen.value/100).toString(16).length == 2 ?  Math.round(255*inputGreen.value/100).toString(16) : '0' + Math.round(255*inputGreen.value/100).toString(16)}${Math.round(255*inputBlue.value/100).toString(16).length == 2 ?  Math.round(255*inputBlue.value/100).toString(16) : '0' + Math.round(255*inputBlue.value/100).toString(16)}`;
}

function funColor(ev) {
  ev.preventDefault();
  myDiv.style.color = `#${Math.round(255*inputRed.value/100).toString(16).length == 2 ?  Math.round(255*inputRed.value/100).toString(16) : '0' + Math.round(255*inputRed.value/100).toString(16)}${Math.round(255*inputGreen.value/100).toString(16).length == 2 ?  Math.round(255*inputGreen.value/100).toString(16) : '0' + Math.round(255*inputGreen.value/100).toString(16)}${Math.round(255*inputBlue.value/100).toString(16).length == 2 ?  Math.round(255*inputBlue.value/100).toString(16) : '0' + Math.round(255*inputBlue.value/100).toString(16)}`;
}

inputRed.addEventListener('change', funBgColor);
inputGreen.addEventListener('change', funBgColor);
inputBlue.addEventListener('change', funBgColor);


colorButton.addEventListener('click', (ev) => {
  ev.preventDefault();

  inputRed.removeEventListener('change', funBgColor);
  inputGreen.removeEventListener('change', funBgColor);
  inputBlue.removeEventListener('change', funBgColor);

  inputRed.addEventListener('change', funColor);
  inputGreen.addEventListener('change', funColor);
  inputBlue.addEventListener('change', funColor);
});

colorBgButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  inputRed.addEventListener('change', funBgColor);
  inputGreen.addEventListener('change', funBgColor);
  inputBlue.addEventListener('change', funBgColor);

  inputRed.removeEventListener('change', funColor);
  inputGreen.removeEventListener('change', funColor);
  inputBlue.removeEventListener('change', funColor);
});
