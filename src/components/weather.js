import React from 'react'

const Weather = ({data}) => {
  return (
	<div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
		<div className="flex justify-between">
			<div className="flex flex-col">
				<span className="text-6xl font-bold">{data.main.temp}</span>
				<span className="font-semibold mt-1 text-gray-500">{data.city}</span>
                <span className="font-semibold mt-1 text-gray-500">{data.weather[0].description}</span>
			</div>
			<img className="h-24 w-24 fill-current text-yellow-400" src={`icons/${data.weather[0].icon}.png`} 
            height="24" viewBox="0 0 24 24" width="24" alt='weather Image'/>
		</div>
     
		<div className="lg:flex md:flex justify-between mt-12">
			<div className="flex lg:flex-col md:flex-col justify-between items-center">
				<span className="font-semibold text-lg">Fells Like</span>
				<span className="font-semibold mt-1 text-sm">{data.main.feels_like}</span>
	
			</div>
			<div className="flex lg:flex-col md:flex-col justify-between items-center">
				<span className="font-semibold text-lg">Wind</span>
				<span className="font-semibold mt-1 text-sm">{data.wind.speed}</span>
	
			</div>
			<div className="flex lg:flex-col md:flex-col justify-between items-center">
				<span className="font-semibold text-lg">Humidity</span>
				<span className="font-semibold mt-1 text-sm">{data.main.humidity}</span>
	
			</div>
			<div className="flex lg:flex-col md:flex-col justify-between items-center">
				<span className="font-semibold text-lg">Pressure</span>
				<span className="font-semibold mt-1 text-sm">{data.main.pressure}</span>
	
			</div>
		</div>
	</div>
  )
}

export default Weather
