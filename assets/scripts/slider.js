const body = document.querySelector('body');
const nextSlide = document.querySelector('.slide-next');
const prevSlide = document.querySelector('.slide-prev');
let timeOfDay = getTimeOfDay();
let bgNum = getRandomNum();

function getRandomNum(min = 1,max = 20){
let result = Math.floor(Math.random()*(max - min +1) + min).toString();
if(result < 10){
    result = result.padStart(2,0)
}
return result
}


function setBg(){
const img = new Image();
img.src = `https://raw.githubusercontent.com/SlikeX/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
img.onload =()=>{
    body.style.backgroundImage = `url(${img.src})`
}

}
setBg();

function getSlideNext(){
let num = +bgNum;
if(num >= 20){
bgNum = '01'
}
else{
num++;
bgNum = num.toString();
bgNum = bgNum.padStart(2,0);
}
setBg();
}

function getSlidePrev(){
let num = +bgNum;
if(num <= 1){
bgNum = '20'
}
else{
num--;
bgNum = num.toString();
bgNum = bgNum.padStart(2,0);
}
setBg();
}

nextSlide.addEventListener('click',getSlideNext);
prevSlide.addEventListener('click',getSlidePrev);