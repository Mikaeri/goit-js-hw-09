const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const docBody = document.querySelector("body")
let isClicked = false
let intervalId = null;

startBtn.addEventListener('click', () => {
if(!isClicked){
    intervalId = setInterval (() =>{
        docBody.style.backgroundColor = getRandomHexColor();
        }, 1000);
    isClicked = true;
}});

stopBtn.addEventListener('click', () =>{
    clearInterval(intervalId);
    isClicked = false;
    docBody.style.backgroundColor = `#fafafa`;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }