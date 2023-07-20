
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07f3d7570amsh6d98daeaf8563dap112bc4jsncdf22cd6e681',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(Response => Response.json())
		.then(Response => {
			console.log(Response)

			cloud_pct.innerHTML = Response.cloud_pct
			cloud_pct3.innerHTML = Response.cloud_pct
			temp.innerHTML = Response.temp
			temp2.innerHTML = Response.temp
			temp3.innerHTML = Response.temp
			feels_like.innerHTML = Response.feels_like
			feels_like3.innerHTML = Response.feels_like
			humidity.innerHTML = Response.humidity
			humidity2.innerHTML = Response.humidity
			humidity3.innerHTML = Response.humidity
			min_temp.innerHTML = Response.min_temp
			min_temp3.innerHTML = Response.min_temp
			max_temp.innerHTML = Response.max_temp
			max_temp3.innerHTML = Response.max_temp
			wind_speed.innerHTML = Response.wind_speed
			wind_speed2.innerHTML = Response.wind_speed
			wind_speed3.innerHTML = Response.wind_speed
			sunrise.innerHTML = Response.sunrise
			sunrise3.innerHTML = Response.sunrise
			sunset.innerHTML = Response.sunset
			sunset3.innerHTML = Response.sunset
			cloud_pct4.innerHTML = Response.cloud_pct
			temp4.innerHTML = Response.temp
			feels_like4.innerHTML = Response.feels_like
			humidity4.innerHTML = Response.humidity
			min_temp4.innerHTML = Response.min_temp
			max_temp4.innerHTML = Response.max_temp
			wind_speed4.innerHTML = Response.wind_speed
			sunrise4.innerHTML = Response.sunrise
			sunset4.innerHTML = Response.sunset
			

		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")
