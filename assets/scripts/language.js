const checkbox = document.querySelector('.language-switcher');

function getLanguage(){
    let lang = 'ru';
    if(checkbox.checked){
        lang = 'en'
    }
    return lang
}

checkbox.addEventListener('change',getLanguage);
