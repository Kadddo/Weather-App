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
    fetch(`http://api.weatherstack.com/current?access_key=c17247bb0cec3cd6c40a1334acc604c5&query=${location}`).then(response=>response.json()).then(weatherShow => {
        weatherChange(weatherShow);
        weatherCheckBg(weatherShow);
        
    }).catch();
})

function weatherChange (weatherShow) {
        const {tempMain,cityText,typeWeather,maxTemp,humadityText,cloudyText,windText} = refs;
        tempMain.textContent = `${weatherShow.current.temperature}°`; 
        cityText.textContent = `${weatherShow.location.name}`;
        typeWeather.textContent = `${weatherShow.current.weather_descriptions[0]}`;
        maxTemp.textContent = `${weatherShow.current.temperature}°`;
        humadityText.textContent = `${weatherShow.current.humidity}%`;
        cloudyText.textContent = `${weatherShow.current.cloudcover}%`;
        windText.textContent = `${weatherShow.current.wind_speed}km/h`;
        //refs.weatherIcon.src = weatherShow.current.weather_icons[0];
        console.log(weatherShow);
        
        refs.mainInfo.classList.add('active');
}

function weatherCheckBg (param) {
    const {weatherIcon,body} = refs;
    switch(param.current.weather_descriptions[0]) {
        case "Heavy rain":
        case "Heavy rain at times": {
            weatherIcon.src = "./images/storm-icon.png";
            body.style.backgroundImage = 'url("/images/weather-bg/bg-storm.jpg")';
            break;
        }
        case "Sunny":
        case "Clear": {
            weatherIcon.src = "./images/sunny-icon.png";
            body.style.backgroundImage = 'url("./images/weather-bg/sunny-bg.jpg")';
            break;
        }
        case 'Partly Cloudy':
        case "Cloudy":
        case "Overcast": {
            weatherIcon.src = "./images/Cloudy.svg";
            body.style.backgroundImage = 'url("./images/weather-bg/bg-cloud.jpg")';
            break;
        }
        case "Patchy rain nearby":
        case 'Light Rain, Rain':
        case "Patchy light rain":
        case "Light rain":
        case "Moderate rain at times":
        case "Moderate rain":
        case "Light rain,rain": {
            weatherIcon.src = "./images/Cloudy.svg";
            body.style.backgroundImage = 'url("./images/weather-bg/bg-rain.jpg")';
            break;
        }
    }
}