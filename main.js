/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 03/10/2023 - 13:55:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/10/2023
    * - Author          : ellen
    * - Modification    : 
**/

let message = 'Close your eyes and count the rain drops.'


let calmRain = document.getElementById("calm");
let calmButton = document.getElementById("calmButton");

function playCalmRain() {
    if (calmRain.paused) {
        calmRain.play();
    } else {
        calmRain.pause();
        calmRain.currentTime = 0;
    }
}
calmButton.addEventListener("click", playCalmRain);

let thunderRain = document.getElementById("thunder");
let thunderButton = document.getElementById("thunderButton");

function playThunderRain() {
    if (thunderRain.paused) {
        thunderRain.play();
    } else {
        thunderRain.pause();
        thunderRain.currentTime = 0;
    }
}
thunderButton.addEventListener("click", playThunderRain);


let roofRain = document.getElementById("roof");
let roofButton = document.getElementById("roofButton");

function playRoofRain() {
    if (roofRain.paused) {
        roofRain.play()
    } else {
        roofRain.pause()
        roofRain.currentTime = 0;
    }
}
roofButton.addEventListener("click", playRoofRain);


let rainWindow = document.getElementById("window");
let windowButton = document.getElementById("windowButton");

function playRainWindow() {
    if (rainWindow.paused) {
        rainWindow.play()
    } else {
        rainWindow.pause()
        rainWindow.currentTime = 0;
    }
}
windowButton.addEventListener("click", playRainWindow);

let balconyRain = document.getElementById("balcony");
let balconyButton = document.getElementById("balconyButton");

function playBalconyRain() {
    if (balconyRain.paused) {
        balconyRain.play()
    } else {
        balconyRain.pause()
        balconyRain.currentTime = 0;
    }
}
balconyButton.addEventListener("click", playBalconyRain);

let distantThunder = document.getElementById("distant");
let distantButton = document.getElementById("distantButton");

function playDistantThunder() {
    if (distantThunder.paused) {
        distantThunder.play()
    } else {
        distantThunder.pause()
        distantThunder.currentTime = 0;
    }
}
distantButton.addEventListener("click", playDistantThunder);


let lightWin = document.getElementById("lightwindow");
let lightButton = document.getElementById("lightButton");

function playLightWin() {
    if (lightWin.paused) {
        lightWin.play()
    } else {
        lightWin.pause()
        lightWin.currentTime = 0;
    }
}
lightButton.addEventListener("click", playLightWin);

let metal = document.getElementById("metal");
let metalButton = document.getElementById("metalButton");

function playMetal() {
    if (metal.paused) {
        metal.play()
    } else {
        metal.pause()
        metal.currentTime = 0;
    }
}
metalButton.addEventListener("click", playMetal);

let softThunder = document.getElementById("softthunder");
let softButton = document.getElementById("softButton");

function playSoftThunder() {
    if (softThunder.paused) {
        softThunder.play()
    } else {
        softThunder.pause()
        softThunder.currentTime = 0;
    }
}
softButton.addEventListener("click", playSoftThunder);

let tent = document.getElementById("tent");
let tentButton = document.getElementById("tentButton");

function playTent() {
    if (tent.paused) {
        tent.play()
    } else {
        tent.pause()
        tent.currentTime = 0;
    }
}
tentButton.addEventListener("click", playTent);

let nature = document.getElementById("nature");
let natureButton = document.getElementById("natureButton");

function playNature() {
    if (nature.paused) {
        nature.play()
    } else {
        nature.pause()
        nature.currentTime = 0;
    }
}
natureButton.addEventListener("click", playNature);

let umbrella = document.getElementById("umbrella");
let umbrellaButton = document.getElementById("umbrellaButton");

function playUmbrella() {
    if (umbrella.paused) {
        umbrella.play()
    } else {
        umbrella.pause()
        umbrella.currentTime = 0;
    }
}
umbrellaButton.addEventListener("click", playUmbrella);