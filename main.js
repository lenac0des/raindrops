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