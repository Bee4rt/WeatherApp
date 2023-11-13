import React from 'react'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'

function WeatherApp() {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search' />
            <div className='search-icon'>
                <img src={search_icon} alt="search-icon" />
            </div>
        </div>

        <div className='weather-img'>
            <img src={snow_icon} alt="snow_icon" />
        </div>
        <div className="temp">-1°c</div>
        <div className="location">Helsinki</div>
        <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">12%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
        </div>

   

      
    </div>
  )
}

export default WeatherApp
