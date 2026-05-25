

const inputBox = document.querySelector(".input-box input");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");
const temp = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const humidityPercentage = document.querySelector(".humidity-percentage");
const windSpeed = document.querySelector(".wind-speed");
const apiToken = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const apiKey = "260522bb85ee2a6ea6e5cf60bb091b1b";

async function weatherApp(city){
    let response = await fetch(`${apiToken}${city}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    let weather = data.weather[0].main;
    if(weather === "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if(weather === "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if(weather === "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if(weather === "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if(weather === "Snow"){
        weatherImg.src = "images/snow.png";
    }
    else if(weather === "Mist"){
        weatherImg.src = "images/mist.png";
    }
    temp.innerHTML = `${data.main.temp}°C`;
    cityName.innerHTML = data.name;
    humidityPercentage.innerHTML = `${data.main.humidity}%<br>Humidity`;
    windSpeed.innerHTML = `${data.wind.speed}km/h<br>wind speed`;
    saveData(data);
    console.log(localStorage.getItem("data"))
}
function saveData(weatherData){
    localStorage.setItem("data", JSON.stringify(weatherData));
}
function showData(){
    let fetchData = localStorage.getItem("data");
    if(fetchData){
    let parsedData = JSON.parse(fetchData);
    let weather = parsedData.weather[0].main;
    if(weather === "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if(weather === "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if(weather === "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if(weather === "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if(weather === "Snow"){
        weatherImg.src = "images/snow.png";
    }
    else if(weather === "Mist"){
        weatherImg.src = "images/mist.png";
    }
        temp.innerHTML = `${parsedData.main.temp}°C`;
        cityName.innerHTML = parsedData.name;
        humidityPercentage.innerHTML = `${parsedData.main.humidity}%<br>humidity`;
        windSpeed.innerHTML = `${parsedData.wind.speed}km/h<br>wind speed`;
        }
}
showData();
searchBtn.addEventListener("click", ()=>{
    weatherApp(inputBox.value);
    inputBox.value = "";

})