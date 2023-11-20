import React from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import rain_icon from "../Assets/rain.png";
import drizzle_icon from "../Assets/drizzle.png";
import cloud_icon from "../Assets/cloud.png";
import humidity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search"></input>
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temo">24C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
