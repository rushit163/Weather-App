import React from 'react'
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
        {data.list.splice(0, 7).map((item,idx)=>(
        <div className="flex justify-between items-center" key={idx }>
        <span className="font-semibold text-lg w-1/4">{forecastDays[idx]}</span>
        <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold"> Humidity:</span>
            <p className="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                {item.main.humidity}
            </p>
        </div>
        <img className="h-8 w-8 fill-current w-1/4" src={`icons/${item.weather[0].icon}.png`} height="24" viewBox="0 0 24 24" width="24" alt='weatherIcon'/>
        <span className="font-semibold text-lg w-1/4 text-right">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
        </span>
    </div>
    
))}
	</div>
  )
}

export default Forecast
