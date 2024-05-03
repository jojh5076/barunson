import './App.css';
import  Header from './components/header';
import  Slider  from './components/slider';
import Event from './components/event';
import React from "react";

function App() {
  return (
      <div>
          <Header></Header>
          <Slider></Slider>
          <h3 className="blind"></h3>
          <Event></Event>
      </div>
  );
}

export default App;
