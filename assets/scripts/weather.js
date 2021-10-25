const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


function defCity(){
let lang = getLanguage();
if(lang=='en'){
    city.value = 'Minsk';
}else{
    city.value= 'Минск';
}
}





async function getWeather() {
    let lang = getLanguage();
try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=c2dc4259e997002f850ecc1579e37165&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    if(lang=='en'){
    wind.textContent=`Wind speed: ${Math.floor(data.wind.speed)} m/s`
    humidity.textContent=`Humidity: ${Math.floor(data.main.humidity)} %`
    }else{
    wind.textContent=`Скорость ветра: ${Math.floor(data.wind.speed)} м/с`
    humidity.textContent=`Влажность: ${Math.floor(data.main.humidity)} %`
    }
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
checkbox.addEventListener('change',defCity);
checkbox.addEventListener('change',getWeather);
getWeather()

