import { useState } from "react";
import axios from "axios";

function App() {
  const [city,setcity]=useState("")
  const [weather,setweather]=useState("")
  const [temparature,setemp]=useState("")
  const [desc,setdesc]=useState("")



  function handleCity(e)
  {
    setcity(e.target.value)
  }

  function getWeather()
  {
    var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94babda0b771d3820403fb8ba558f7c4`)
    weatherData.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      setemp(success.data.main.temp)
    })
  }
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-1">Weather App</h1>
        <h2 className="text-1xl font-medium text-center text-gray-800 mb-4">I can give you a weather report about your city :)</h2>

        {/* Input for entering city */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            onChange={handleCity}
          />
        </div>

        {/* Button to get weather */}
        <div className="text-center mb-6">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none" onClick={getWeather}>
            Get Weather
          </button>
        </div>

        {/* Display static fields for Weather information */}
          <p className="text-lg font-semibold text-gray-800 mb-1">
            <strong>Weather:</strong> {weather} {/* Static placeholder text */}
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-1">
            <strong>Temperature:</strong> {temparature}{/* Static placeholder text */}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            <strong>Description:</strong> {desc} {/* Static placeholder text */}
          </p>
        </div>
      </div>
  );
}



    


export default App;

