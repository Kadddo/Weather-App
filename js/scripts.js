const refs = {
   inputWeather: document.querySelector(".input-location"),
   btnSearch: document.querySelector(".search-btn"),  
   body: document.querySelector("body"),
   tempMain: document.querySelector('.temp-info'),
   cityText: document.querySelector('.city-info'),
   typeWeather: document.querySelector('.type-weather'),
   maxTemp: document.querySelector('.max-temp'),
   humadityText: document.querySelector('.humadity-text'),
   cloudyText: document.querySelector('.cloudy-text'),
   windText: document.querySelector('.wind-text'),
   weatherIcon: document.querySelector('.weather-icon'),
   mainInfo: document.querySelector('.main-info'),
}
console.log(refs.body);
refs.btnSearch.addEventListener('click', () => {
    const location = refs.inputWeather.value;
    console.log(location);
    fetch(`http://api.weatherstack.com/current?access_key=c17247bb0cec3cd6c40a1334acc604c5&query=${location}`).then(response=>response.json()).then(weatherShow => {
        refs.tempMain.textContent = `${weatherShow.current.temperature}°`; 
        refs.cityText.textContent = `${weatherShow.location.name}`;
        refs.typeWeather.textContent = `${weatherShow.current.weather_descriptions[0]}`;
        refs.maxTemp.textContent = `${weatherShow.current.temperature}°`;
        refs.humadityText.textContent = `${weatherShow.current.humidity}%`;
        refs.cloudyText.textContent = `${weatherShow.current.cloudcover}%`;
        refs.windText.textContent = `${weatherShow.current.wind_speed}km/h`;
        refs.weatherIcon.src = weatherShow.current.weather_icons[0];
        console.log(weatherShow);
        
        refs.mainInfo.classList.add('active');
    }).catch()
})

