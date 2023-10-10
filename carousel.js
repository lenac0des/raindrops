/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 08/10/2023 - 19:48:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/10/2023
    * - Author          : ellen
    * - Modification    : 
**/
// Carousel 

 const carousel = [...document.querySelectorAll('.carousel img')];

//  this will track the images
 let carouselImageIndex = 0;

 const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');
    if(carouselImageIndex >= carousel.length -1){
    } else{
        carouselImageIndex++;
    }
    carousel[carouselImageIndex].classList.toggle('active');
 }

 setInterval(() => {
    changeCarousel();
 }, 3000);


//  Nav

// Toggling the music player

const musicPlayerSection = document.querySelector('.music-player-section');

let clickCount = 1;

musicPlayerSection.addEventListener('click', () => {
    if(clickCount >= 2){
        musicPlayerSection.classList.add('active');
        clickCount =1;
        return;
    }
    clickCount++;
    setTimeout(() =>{
        clickCount =1;
    }, 250);
})


// Back button music player

const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

backToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
})


// accessing the playlist

const playlistSection = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player-section .nav-btn');

navBtn.addEventListener('click', () => {
    playlistSection.classList.add('active');
})


// back from playlist to music player


const backToMusicPlayer = document.querySelector('.playlist .back-btn');
 
backToMusicPlayer.addEventListener('click', () => {
    playlistSection.classList.remove('active');
})


// Music functions
let currentMusic = 0;

const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');

const soundName = document.querySelector('.current-sound-name');

const artistName = document.querySelector('.artist-name');

const coverImage = document.querySelector('.cover');

const currentMusicTime = document.querySelector('.current-time');

const musicDuration = document.querySelector('.duration');


// selecting the controls


const forwardBtn = document.querySelector('i.fa-forward');
const backwardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const VolumeSlider = document.querySelector('.volume-slider');



// playBtn function

playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})



// pauseBtn function

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})


//  functions for setting up the sounds

const setSounds = (i) => {
    seekBar.value = 0;
    let sound = rainSounds[i];
    currentMusic = i;

    music.src = sound.path;

    soundName.innerHTML = sound.name;
    artistName.innerHTML = sound.title;
    coverImage.src = sound.cover;


    // setting the seekBar max val
    setTimeout (() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);

    currentMusicTime.innerHTML = '00 : 00';
}

setSounds(0);


//  format duration 00 : 00 

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}

// seekbar events

setInterval(() => {
    seekBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
}, 500)

// adding input event on the seek bar

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

// foward button

forwardBtn.addEventListener('click', () =>{
    if(currentMusic >= rainSounds.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setSounds(currentMusic);
    playBtn.click();
})


//  backwards button

backwardBtn.addEventListener('click', () =>{
    if(currentMusic <= 0){
        currentMusic = rainSounds.length - 1;
    } else{
        currentMusic--;
    }
    setSounds(currentMusic);
    playBtn.click();
})
