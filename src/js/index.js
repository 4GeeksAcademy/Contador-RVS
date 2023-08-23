//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Contador from "./component/home.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

let sec = 0;
let hour = 0;
let day = 0;
let minutes = 0;
let week = 0;
let month = 0;
let year = 0;

setInterval(() => {

  ReactDOM.render(<Contador segundos={sec} minutos={minutes} horas={hour} dias={day} semanas={week} meses={month} annios={year} />, document.querySelector("#app"));
  sec++;
  if (sec === 60) {
    sec = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hour++;
  }
  if (hour === 24) {
    hour = 0;
    day++;
  }
  if (day === 7) {
    day = 0;
    week++;
  }
  if (week === 4) {
    week = 0;
    month++;
  }
  if (month === 12) {
    month = 0;
    year++;
  }
  
}, 1000);
    
    
//render your react application
