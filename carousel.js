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