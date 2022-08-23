

let message = 'Close your eyes and count the rain drops.'


let calmRain = document.getElementById('audioCalm')

let thunderRain = document.getElementById('audioThunder')

let pitTer = document.getElementById('audioPit')

let patTer = document.getElementById('audioPat')
// document.getElementById('calm').onclick = calmRain
// document.getElementById('thunder').onclick = thunderRain
// document.getElementById('pit').onclick = pitTer
// document.getElementById('pat').onclick = patTer


// function calmRain() {
//     document.querySelector('audio').ul.li = 'calm'
//     document.querySelector('audio').style.display.toggle('hidden')
//     document.querySelector('#choice').innerText = message

// }

// function play() {
//     let audio = document.getElementById('audioCalm')
//     audio.play()
//     document.querySelector('#choice').innerText = message
// }

function currentSound(){
    if(currentSound === 'audioCalm'){
    calmRain.play();
    }else if(currentSound != 'audioCalm'){
        calmRain.pause();
    }else if(currentSound === 'audioThunder'){
        thunderRain.play();
    }else if(currentSound != 'audioThunder'){
        thunderRain.pause();
    }else if(currentSound === 'audioPit'){
        pitTer.play()
    }else if(currentSound != 'audioPit'){
        pitTer.pause();
    }else if(currentSound === 'audioPat'){
        patTer.play();
    }else{
        patTer.pause();
    }
    
}
