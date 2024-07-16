const apiKey = "648f7cc99d627a761ddf27cfe17e12ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".main-bar").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    document.querySelector(".main-bar").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

