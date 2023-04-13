import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('form input');
const textAreaEl = document.querySelector('form textarea');
let formData = {};
const LOCAL_STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
  event.preventDefault();

  if (inputEl.value === '' || textAreaEl.value === '') {
    return alert('Fields must be filled in');
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}

function onFormInput(event) {
  const formValue = event.target.value;
  const formKey = event.target.name;

  formData[formKey] = formValue;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (savedForm) {
    inputEl.value = savedForm.email || '';
    formData.email = savedForm.email || '';
    textAreaEl.value = savedForm.message || '';
    formData.message = savedForm.message || '';
  }
}
