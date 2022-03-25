import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather () {
const [ temperature, setTemoerature] = useState(null);

function handleResponse (response) {
console.log(response.data)
}

   const apiKey="f3c571bd6250dd248124676218b0d8bd";
   let city="London"
   let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse)



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
        <h1>Tabriz</h1>
        <div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" className="cloud" />
        <h2 className="mainDegree">7</h2><span className="unit">°C</span>
        </div> 
           <div className="row">
                <div className="col-6">
                    <ul>
                        
                        <li>Broken cloudes</li>
                        <li>Friday 18:57</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                      
                        <li>Humidity: 15%</li>
                        <li>Wind: 4km/h</li>
                    </ul>  
                </div>
            </div>
        </div>
    )
}
