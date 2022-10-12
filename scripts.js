let allKeys = document.querySelectorAll(".keys");
let capsKey = document.querySelector('.caps');
let spaceKey = document.querySelector('.space');
let tabKey = document.querySelector('.tab');
let leftCtrlKey = document.querySelector('.Lctrl');
let rightCtrlKey = document.querySelector('.Rctrl');
let winKey = document.querySelector('.win');
let upKey = document.querySelector('.up');
let leftKey = document.querySelector('.left');
let rightKey = document.querySelector('.right');
var info = document.querySelector('.tinfo');
var ShiftKey = document.querySelector(".shift");
let KeyboardBaseColor = document.getElementById('keyboardBaseColor');
let KeyBoardBase = document.querySelector('.KeyboardBase');
let KeyCapsColor = document.getElementById('keyCapsColor');
let BackLightingColor = document.getElementById('BacklightingColor');

allKeys.forEach((key,idx) => {
    key.innerHTML = key.attributes.Keydata.value;
});

KeyboardBaseColor.addEventListener("input",changeKeyboardBaseColor);
KeyCapsColor.addEventListener("input",changeKeyCapsColor);
BackLightingColor.addEventListener("input",changeBacklighting);

function changeKeyboardBaseColor(){
    KeyBoardBase.style.backgroundColor = KeyboardBaseColor.value;
}

function changeKeyCapsColor(){
    for(let i=0; i<allKeys.length;++i)
    {
        allKeys[i].style.backgroundColor = KeyCapsColor.value;
        allKeys[i].style.borderColor = KeyCapsColor.value;
    }
}

function changeBacklighting(){
    for(let i=0; i<allKeys.length;++i)
    {
        allKeys[i].style.color = BackLightingColor.value;
        allKeys[i].style.boxShadow = ` ${BackLightingColor.value}` ;
    }
}



var ShiftOn = 0;
const ShiftToggle = () => {
    if(ShiftOn == 0){
        allKeys.forEach((key,idx) => {
            key.innerHTML = key.attributes.ShiftKeydata.value;
        });
        ShiftOn = 1;
    }else
    {
        allKeys.forEach((key,idx) => {            
            key.innerHTML = key.attributes.Keydata.value;
        });
        ShiftOn =0;
    }
}

var CapsOn = 0;
const CapsToggle =() => {
    if(CapsOn == 0){
        allKeys.forEach((key,idx) => {
            if(key.classList.contains('special')){
                key.innerHTML = key.attributes.Keydata.value;
            }else{
                key.innerHTML = key.attributes.ShiftKeydata.value;
            }
        });
        CapsOn = 1;
    }else
    {
        allKeys.forEach((key,idx) => {
            key.innerHTML = key.attributes.Keydata.value;
        });
        CapsOn=0;
    }
}


for(let i=0; i<allKeys.length;i++)
{
    allKeys[i].addEventListener('click', function(e){
        
        if(allKeys[i].getAttribute('Keydata') == "Shift"){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            ShiftKey.classList.toggle('active');
            ShiftToggle();
        
        }else if(allKeys[i].getAttribute('Keydata') == "Caps")
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            capsKey.classList.toggle('acive');
            CapsToggle();
        
        }else if(allKeys[i].getAttribute('Keydata') == "Tab"){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            info.value = info.value + '\t';

        }else if(allKeys[i].getAttribute('Keydata') == "backspace"){
            var KeySound = new Audio('keysound.mp3');       
            KeySound.play();
            info.value = info.value.substring(0, info.value.length - 1);

        }else if(allKeys[i].getAttribute('Keydata') == "Enter"){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            info.value = info.value + "\n";

        }else if(allKeys[i].getAttribute('Keydata') == "space"){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            info.value = info.value + " ";

        }else{
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            info.value = info.value + allKeys[i].innerText
        }
    });
}

window.addEventListener('keydown', function(e){
    for(let i=0; i<allKeys.length; ++i)
    {   
        if(e.key.toLowerCase() == allKeys[i].getAttribute('Keydata').toLowerCase()){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            allKeys[i].classList.add('active');
        }
        if(e.code.toLowerCase() == 'capslock'){
            var KeySound = new Audio('keysound.mp3'); 
            capsKey.classList.toggle('active');
            CapsToggle();
            KeySound.play();
        }
        if(e.code.toLowerCase() == 'shiftleft' || e.code.toLowerCase() == 'shiftright'){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            ShiftKey.classList.toggle('active');
            ShiftToggle();
        }
        if(e.code.toLowerCase() == 'controlleft')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            leftCtrlKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'controlright')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            rightCtrlKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'arrowup')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            upKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'arrowright')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            rightKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'arrowleft')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            leftKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'metaleft')
        {
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            winKey.classList.add('active');
        }
        if(e.code.toLowerCase() == 'space'){
            var KeySound = new Audio('keysound.mp3');
            KeySound.play();
            spaceKey.classList.add('active');
        }
    }
});

window.addEventListener('keyup', function(e){
    for(let i=0; i<allKeys.length; ++i)
    {   
        if(e.key.toLowerCase() == allKeys[i].getAttribute('Keydata').toLowerCase()){
            allKeys[i].classList.remove('active');
        }
        if(e.code.toLowerCase() == 'controlleft')
        {
            leftCtrlKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'controlright')
        {
            rightCtrlKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'arrowup')
        {
            upKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'arrowright')
        {
            rightKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'arrowleft')
        {
            leftKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'metaleft'){
           winKey.classList.remove('active');
        }
        if(e.code.toLowerCase() == 'space'){
            spaceKey.classList.remove('active');
        }
    }
});




