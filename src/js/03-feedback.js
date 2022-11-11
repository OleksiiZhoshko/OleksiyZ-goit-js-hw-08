const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';
formEl.addEventListener('input', throttle(onFeedbackCatcher, 500));
formEl.addEventListener('submit', onSubmit);

const userData = {};

updateUserData();

function onFeedbackCatcher() {
  userData.email = formEl.elements.email.value;
  userData.message = formEl.elements.message.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(userData));
}



function onSubmit(evt) {
  evt.preventDefault();
  if (formEl.elements.email.value && formEl.elements.message.value) {
    console.log(userData);

    evt.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_KEY);
  }
}

function updateUserData() {
  if (localStorage.getItem(FEEDBACK_KEY)) {
    const userData = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '');
    formEl.elements.email.value = userData.email;
    formEl.elements.message.value = userData.message;
  }
}


// Переробляю знову на зідзвоні так як рішення №1 я підглядав.  
// import throttle from "lodash.throttle";

// const feadbeackformEl = document.querySelector('.feedback-form');
// const inputValues = {};
// const FEEDVALUES_KEY = 'feedback-form-state';

// if(localStorage.getItem(FEEDVALUES_KEY)) {
//     try {
//         const parsedValues = JSON.parse(localStorage.getItem(FEEDVALUES_KEY));

//         feadbeackformEl.elements.email.value = parsedValues.email;
//         feadbeackformEl.elements.message.value = parsedValues.message;
//     } catch (error) {
//         console.log(error.name);
//         console.log(error.message);
// }
// }

// function onInputHendler(evt) {
//     if (evt.target.nodeName === 'INPUT') {
//         inputValues.email = evt.target.value;
//     } else if (evt.target.nodeName === 'TEXTAREA') {
//         inputValues.message = evt.target.value;
//     }
//     localStorage.setItem(FEEDVALUES_KEY, JSON.stringify(inputValues));
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     localStorage.removeItem(FEEDVALUES_KEY);
//     feadbeackformEl.reset();
//     console.log(inputValues);
// }

// feadbeackformEl.addEventListener('input', throttle(onInputHendler, 500));
// feadbeackformEl.addEventListener('submit', onFormSubmit);
