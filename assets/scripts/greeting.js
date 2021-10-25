const greetingSpot = document.querySelector('.greeting');
const name = document.querySelector('.name');
const greetingWordsEn = ['night','morning', 'afternoon', 'evening'];
const greetingWordsRu = ['Спокойно ночи','Доброе утр', 'Добрый день', 'Добрый вечер'];


function getHours(){
    const date = new Date;
    const hours = date.getHours();
    return hours
}

function getTimeOfDay(){
    let lang = getLanguage();
    let result = Math.floor(getHours() / 6);
    if(lang=='en'){
        return greetingWordsEn[result]
    }
    else{
        return greetingWordsRu[result]
    }
}

function showGreeting(){
    let lang = getLanguage();
    const timeOfDay = getTimeOfDay();
    if(lang =='en'){
    greetingSpot.textContent = `Good ${timeOfDay}`
    }else{
    greetingSpot.textContent =timeOfDay;
    }
}

function setLocalStorage(){
    localStorage.setItem('name', name.value)
}
window.addEventListener('beforeunload',setLocalStorage);

function getLocalStorage(){
    if(localStorage.getItem('name')){
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load',getLocalStorage);
