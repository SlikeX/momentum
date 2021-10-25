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
    const date = new Date;
    const options = {weekday:'long', month: 'long', day: 'numeric'}
    const currentDate = date.toLocaleDateString('en-En',options);
    dateSpot.textContent = currentDate;
}

showTime();
