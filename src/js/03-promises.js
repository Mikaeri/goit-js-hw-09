import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const inputElDelay = document.querySelector('[name="delay"]');
const inputElStep = document.querySelector('[name="step"]');
const inputElAmount = document.querySelector('[name="amount"]');


form.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(event) {
  event.preventDefault();
let delay = Number(inputElDelay.value);
let step = Number(inputElStep.value);
let amount = Number(inputElAmount.value);
let position = 0;

  if (delay === "" || step === "" || amount === "") {
    return Notify.info("Please fill in all the fields!");
  }

  for (let i=1; i<=amount; i+=1){
    position = i;
    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay+=step;
  }
  event.currentTarget.reset();
}




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}