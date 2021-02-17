import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Header from "./components/Header";
import Banner from "./components/Banner";
import PlayerInfo from "./components/PlayerInfo";
import RoomList from "./components/RoomList";
import AboutUs from "./components/AboutUs";
import TestData from "./components/TestData";
fetch("https://gorgeous-dull-copper.glitch.me/dreams").then(res => res.json()).then((result)=>{
    console.log(result);

})

;
ReactDOM.render(
  <React.StrictMode>
      <div className="container">
          <Header />
          <Banner />
          <PlayerInfo />
          <RoomList />
          <AboutUs />
          <TestData />
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

