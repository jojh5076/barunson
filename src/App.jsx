import React from "react";
import './App.css';

import  Header from './components/header';
import  Slider  from './components/slider';
import Event from './components/event';
import Best from './components/best';
import Post from './components/post';
import Stationery from "./components/stationery";
import Slider2 from './components/slider2';
import New from "./components/new";
import Info from "./components/info";
import Suggest from "./components/suggest";
import Service from "./components/service";
import Last from "./components/last";


function App() {
  return (
      <div>
          <Header></Header>
          <Slider></Slider>
          <h3 className="blind"></h3>
          <Event></Event>
          <Best></Best>
          <Post></Post>
          <Stationery></Stationery>
      </div>
  );
}

export default App;
