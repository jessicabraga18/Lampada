let turnOnOff = document.querySelector('#turnOnOff');
let lamp = document.querySelector('#lamp');


function LampOn(){
    lamp.src = "img/luzAcesa.jpg"
    turnOnOff.textContent = "Desligar"
}
function LampOff(){
    lamp.src = "img/luzApagada.jpg"
    turnOnOff.textContent = "Ligar"

}
turnOnOff.addEventListener('click',LampOff)
turnOnOff.addEventListener('dblclick', LampOn)
