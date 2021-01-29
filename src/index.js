import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import Componentdautien from "./componentdautien";
import Header from "./components/Header";
import Banner from "./components/Banner";
import PlayerInfo from "./components/PlayerInfo";
import RoomList from "./components/RoomList";
import AboutUs from "./components/AboutUs";

ReactDOM.render(
  <React.StrictMode>
      <div className="container">
          <Header />
          <Banner />
          <PlayerInfo />
          <RoomList />
          <AboutUs />
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);

