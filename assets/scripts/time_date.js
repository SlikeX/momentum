const timeSpot = document.querySelector('.time');
const dateSpot = document.querySelector('.date');

function showTime(){
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    timeSpot.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);;
}

function showDate(){
    let lang = getLanguage()
    const date = new Date;
    const options = {weekday:'long', month: 'long', day: 'numeric'};
    if(lang=='en'){
        dateSpot.textContent = date.toLocaleDateString('en-En',options);
    }
    else{
        dateSpot.textContent = date.toLocaleDateString('ru-Ru',options);
    }
}

showTime();
