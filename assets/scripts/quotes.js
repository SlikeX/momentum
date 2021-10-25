const quotesSpot = document.querySelector('.quote');
const authorsSpot = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

function getRandomNum(min = 0,max = 59){
    return Math.floor(Math.random()*(max - min +1) + min)
}

async function getQuotes(){
    let num = getRandomNum();
    let lang = getLanguage();
    if(lang == 'en'){
    let quotes = 'assets/quotes/data_en.json';const res = await fetch(quotes);
    const data = await res.json();
    quotesSpot.textContent = data[num].text;
    authorsSpot.textContent = data[num].author;
    }else{
    let quotes = 'assets/quotes/data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quotesSpot.textContent = data[num].text;
    authorsSpot.textContent = data[num].author;
    }
}

changeQuote.addEventListener('click',getQuotes);
checkbox.addEventListener('click',getQuotes);
getQuotes();