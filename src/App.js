import Search from "./components/search";
import Weather from "./components/weather";
import { weatherUrl } from "./api/api";
import { useState } from "react";
import Forecast from "./components/forecast";

function App() {
  const [currentWeather,setcurrentWeather] = useState(null)
  const [forecast,setforecast] = useState(null)

  const handleOnSearchChange = (searchData)=>{
      const [lat,lon]= searchData.value.split(" ");
      const currentweatherfetch = fetch(`${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      const forecastweatherfetch = fetch(`${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      Promise.all([currentweatherfetch,forecastweatherfetch])
      .then(async (response)=>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setcurrentWeather({city : searchData.label, ...weatherResponse})
        setforecast({city : searchData.label, ...forecastResponse})
      })
      .catch(error=>{console.log(error)})
  }
    return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 min-h-[100vh]">
      <div className="flex flex-col items-center justify-center pt-3">
      <Search onSearchChange={handleOnSearchChange}/>
      <div className="flex flex-col items-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
      {currentWeather&& <Weather data = {currentWeather}/>}  
      {forecast && <Forecast data={forecast}/>}   
      </div> 
      </div>
    </div>
  );
}

export default App;
