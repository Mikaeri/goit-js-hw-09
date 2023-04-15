import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const countBtnStart = document.querySelector('[data-start]');
const datePicker = document.querySelector('#datetime-picker');
const numberOfDays = document.querySelector('[data-days]');
const numberOfHours = document.querySelector('[data-hours]');
const numberOfMinutes = document.querySelector('[data-minutes]');
const numberOfSeconds = document.querySelector('[data-seconds]');

let currentTime = new Date;
let chosenTime = null;
let intervalId = null;
let toSubTime = null;

countBtnStart.addEventListener('click', onStart);
countBtnStart.setAttribute('disabled', '');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {     
      if (selectedDates[0]< currentTime){
        Notify.failure('Please choose a date in the future');
        countBtnStart.setAttribute('disabled', '');
        return;
      }
      chosenTime = selectedDates[0];
      countBtnStart.removeAttribute('disabled');
    },
  };

  function pad(value) {
    return String(value).padStart(2, '0');
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
function onStart(){
  countBtnStart.setAttribute('disabled', '');
  datePicker.setAttribute('disabled', '');
    intervalId = setInterval (()=>{
        currentTime = new Date;
        toSubTime = chosenTime - currentTime;
        if(toSubTime<0){
          clearInterval(intervalId);
          datePicker.removeAttribute('disabled');
          Notify.success('COOL!!!');
          }


        const { days, hours, minutes, seconds } = convertMs(toSubTime);
        numberOfDays.textContent = pad(days);
        numberOfHours.textContent = pad(hours);
        numberOfMinutes.textContent = pad(minutes);
        numberOfSeconds.textContent = pad(seconds);
        

    },1000); 
}

flatpickr(datePicker, options);

