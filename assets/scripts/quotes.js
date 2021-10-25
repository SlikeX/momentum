const quotesSpot = document.querySelector('.quote');
const authorsSpot = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

function getRandomNum(min = 0,max = 59){
    return Math.floor(Math.random()*(max - min +1) + min)
}

async function getQuotes(){
    let num = getRandomNum();
    const qutes = 'assets/quotes/data_en.json';
    const res = await fetch(qutes);
    const data = await res.json();
    quotesSpot.textContent = data[num].text;
    authorsSpot.textContent = data[num].author;
}

changeQuote.addEventListener('click',getQuotes);
getQuotes();