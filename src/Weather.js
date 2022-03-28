import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather () {
   
const [weatherData, setWeatherData] = useState({ ready:false });


function handleResponse (response) {
    console.log(response.data)
    setWeatherData({
        ready: true,
        temperature:response.data.main.temp,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        city: response.data.name,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",
        weatherCondition: response.data.weather[0].description,
        date:"friday 22:02"

    });
    
    }
    
if (weatherData.ready) {
    return (
    <div className="Weather">
      <form className="weatherSearch" mt-3>
      <div className="row">
          <div className="col-9">
            <input type="search" 
            placeholder="Enter a city name" 
            className="cityName" 
            autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" 
            value="Search" 
            className="btn btn-primary w-100"/>
          </div>
      </div>
      </form>
      <h1>{weatherData.city}</h1>
      <div>
      <img src={weatherData.iconUrl} className="Cloud" />
      <h2 className="mainDegree">{Math.round(weatherData.temperature)}</h2><span className="unit">°C</span>
      </div> 
         <div className="row">
              <div className="col-6">
                  <ul>
                      
                      <li>{weatherData.weatherCondition}</li>
                      <li>{weatherData.date}</li>
                  </ul>
              </div>
              <div className="col-6">
                  <ul>
                    
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {weatherData.wind}km/h</li>
                  </ul>  
              </div>
          </div>
      </div>
  );
}else{
    
           const apiKey="f3c571bd6250dd248124676218b0d8bd";
     const city="Tabriz"
           let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
        return "loading..."
}

   
}
