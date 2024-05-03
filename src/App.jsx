import React from "react";
import './App.css';

import  Header from './components/header';
import  Slider  from './components/slider';
import Event from './components/event';
import Best from './components/best';


function App() {
  return (
      <div>
          <Header></Header>
          <Slider></Slider>
          <h3 className="blind"></h3>
          <Event></Event>
          <Best></Best>
      </div>
  );
}

export default App;
