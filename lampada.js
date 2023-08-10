let turnOnOff = document.querySelector('#turnOnOff');
let lamp = document.querySelector('#lamp');

function isLampBroken(){
    return lamp.src.indexOf('luzQuebrada') > -1
}

function LampOn(){
    if( !isLampBroken()){
        lamp.src = "img/luzAcesa.jpg"
    }
}
function LampOff(){
    if( !isLampBroken()){
        lamp.src = "img/luzApagada.jpg"
    }
    
}
function lampBroken(){
    lamp.src = "img/luzQuebrada.jpg"
}

function lampOnOff(){
    if(turnOnOff.textContent == "Ligar"){
        LampOn();
        turnOnOff.textContent = "Desligar";
    } else{
        LampOff();
        turnOnOff.textContent = "Ligar";
    }
 }


turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('click', lampBroken )

