import React from "react";
import './App.css';

import  Header from './components/header';
import  Slider  from './components/slider';
import Event from './components/event';
import Best from './components/best';
import Post from './components/post';
import Slider2 from './components/slider2';
import New from "./components/new";
import Info from "./components/info";
import Suggest from "./components/suggest";
import Service from "./components/service";
import Last from "./components/last";
import Stationery from "./components/stationery";

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
          <div
              style={{backgroundImage: "url(/stationery/thanks_ban_1911.png)", backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 19px", width: "100%", height: "199px", overflow: "hidden"}}>
              <a href="https://www.barunsoncard.com/product/list_thanks.asp" style={{width: "1100px", margin: "38px auto", display: "block"}}>
                  <img className="lazyload" src="/stationery/thanks_ban_1911.png" width="1097" height="150"/>
              </a>
          </div>

          <New></New>
          <Slider2></Slider2>
          <Info></Info>
          <Suggest></Suggest>
          <Service></Service>
          <div>
              <img src={'/last/MD_16171_20220823160420370.jpg'}/>
              <img src={'/last/MD_16170_20220823160424417.jpg'}/>
          </div>

      </div>
  );
}

export default App;
