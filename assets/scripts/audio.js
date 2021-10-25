import playList from './playList.js';
const playListContainer = document.querySelector('.play-list')
const playBtn = document.querySelector('.play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
const audio = document.querySelector('audio');
const progress = document.querySelector('#progress-bar');
const volumeBar = document.querySelector('#volume-bar');
const muteButton = document.querySelector(".unmute");
const songName = document.querySelector('.song-name');


let playNum = 0;
let isPlay = false;
let currentVolume = 0.75;
let isMute = false;
volumeBar.max = 1;
volumeBar.min = 0;
volumeBar.value = currentVolume;

for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const container = document.createElement('div');
    container.classList.add('play-item-container');
    playListContainer.append(container);
    button.classList.add('play-item-button','player-icon');
    button.setAttribute('id',i);
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    li.setAttribute('id',i);
    container.append(li);
    container.append(button);
}
const playItem = document.querySelectorAll('.play-item');
const itemButtons = document.querySelectorAll('.play-item-button');

function toggleBtn() {
playBtn.classList.toggle('pause');
}


function playAudio(){
if(!isPlay){
    isPlay = true;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    playItem.forEach(elem=>{
        elem.classList.remove('item-active');
    })
    itemButtons.forEach(elem=>{
        elem.classList.remove('pause');
    })
    itemButtons[playNum].classList.add('pause');
    playItem[playNum].classList.add('item-active');
    songName.textContent = playList[playNum].title;
}else{
    isPlay = false;
    itemButtons.forEach(elem=>{
        elem.classList.remove('pause');
    })
    audio.pause();
}
}

function playNext(){
isPlay = false;
if(playNum<playList.length-1){
    playNum++
}else{
    playNum = 0
}
playBtn.classList.add('pause');
playAudio()
}

function playPrev(){
isPlay = false;
if(playNum<=0){
    playNum=playList.length-1;
}else{
    playNum--
}
playBtn.classList.add('pause');
playAudio()
}




// Advanced audio player

// PROGRESS-BAR
function updateProgressBar(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
    document.querySelector('.current-time').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.duration-time').innerHTML === "NaN:NaN") {
        document.querySelector('.duration-time').innerHTML = "0:00";
    } else {
        document.querySelector('.duration-time').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
}

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(updateProgressBar, 500);

function changeProgressBar() {
    audio.currentTime = progress.value;
};

//VOLUME-BAR


function updateVolumeBar(){
audio.volume = volumeBar.value;
}

function muteVolume(){
    if(!isMute){
        isMute = true;
        audio.volume = 0;
        volumeBar.value = 0;
        muteButton.classList.add('mute')
    }else{
        isMute = false;
        audio.volume = 0.75;
        volumeBar.value =.75;
        muteButton.classList.remove('mute');
    }
}

//play from list
 

function playFromList(event){
let a = event.target;
if(a.tagName == 'LI' || a.tagName == 'BUTTON'){
    playNum = a.id;
    if(!a.classList.contains('pause')){
        isPlay = true;
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playItem.forEach(elem=>{
            elem.classList.remove('item-active');
        })
        itemButtons.forEach(elem=>{
            elem.classList.remove('pause');
        })
        itemButtons[playNum].classList.add('pause');
        playItem[playNum].classList.add('item-active');
        playBtn.classList.add('pause');
        songName.textContent = playList[playNum].title;
    }else{
        isPlay = false;
        itemButtons.forEach(elem=>{
            elem.classList.remove('pause');
        })
        playBtn.classList.remove('pause');
        audio.pause();
    }
}
}

playBtn.addEventListener('click',playAudio);
playBtn.addEventListener('click', toggleBtn);
nextBtn.addEventListener('click',playNext);
prevBtn.addEventListener('click',playPrev);
audio.addEventListener('ended',playNext)
progress.addEventListener('change',changeProgressBar);
volumeBar.addEventListener('change',updateVolumeBar);
muteButton.addEventListener('click',muteVolume);
playListContainer.addEventListener('click',(event)=>{
playFromList(event)
})