const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');




async function getWeather() {
try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=c2dc4259e997002f850ecc1579e37165&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    wind.textContent=`Wind speed: ${Math.floor(data.wind.speed)} m/s`
    humidity.textContent=`Humidity: ${Math.floor(data.main.humidity)} %`
    weatherDescription.textContent = data.weather[0].description;
}
catch(eror){
    alert('Wrong city-name');
    city.value = 'Wrong city-name';
    temperature.textContent ='';
    wind.textContent='';
    humidity.textContent='';
    weatherDescription.textContent ='';
}
}

function setLocalStorage(){
    localStorage.setItem('city', city.value)
}
window.addEventListener('beforeunload',setLocalStorage);

function getLocalStorage(){
    if(localStorage.getItem('city')){
    city.value = localStorage.getItem('city');
}
    if(city.value==='Wrong city-name'){
    city.value ='Minsk'
}   
}
window.addEventListener('load',getLocalStorage);
city.addEventListener('change',getWeather);
getWeather()

