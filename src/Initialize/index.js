import React, { useState } from 'react';
import SearchWeatherBar from '../components/SearchWeatherBar';
import DisplayWeather from '../components/DisplayWeather';
import { getWeatherByZipCode } from '../api/data/weatherData';

function Initialize() {
  const [weather, setWeather] = useState({});

  const getWeatherByZip = () => {
    getWeatherByZipCode().then((obj) => {
      setWeather({
        cityName: obj.name,
        temp: obj.main.temp,
        description: obj.weather[0].description,
      });

      console.warn(obj);
    });
  };

  return (
    <div>
      <SearchWeatherBar />
      <DisplayWeather />
      <h1>{weather.cityName}</h1>
      <h2>{weather.temp}</h2>
      <h3>{weather.description}</h3>
      <button onClick={getWeatherByZip} type="button">
        Test
      </button>
    </div>
  );
}

export default Initialize;
