/* Declare variables for the form and inputs */
const form = document.getElementById('reservation-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const monthInput = document.getElementById('month-input');
const dayInput = document.getElementById('day-input');
const yearInput = document.getElementById('year-input');
const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');
const amPmInput = document.getElementById('am-pm-input');
const personInput = document.getElementById('person-input');

/* Variables for error message inputs */
const nameError = document.getElementById('error-message-name');
const emailError = document.getElementById('error-message-email');
const dateError = document.getElementById('error-message-date');
const timeError = document.getElementById('error-message-time');
const peopleError = document.getElementById('error-message-people');

/* Add event listener on form button to check input */
document.getElementById('form-button').addEventListener('click', checkInput);

/* Check input fields and display error message if a field is missing */
function checkInput(e){
  if(nameInput.value == ""){
    nameError.textContent = "This field is required";
  }else if(emailInput.value == ""){
    emailError.textContent = "This field is required";
  }else if(monthInput.value == "" || dayInput.value == "" || yearInput.value == ""){
    dateError.textContent = "This field is incomplete";
  }else if(hourInput.value == "" || minuteInput.value == "" || amPmInput.value == ""){
    timeError.textContent = "This field is incomplete";
  }else if(personInput.value == ""){
    personError.textContent = "This field is required";
  }
  
  e.preventDefault();
}

