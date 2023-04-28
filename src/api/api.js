export const geoUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const geoOptions = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY2,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const weatherUrl = 'https://api.openweathermap.org/data/2.5';