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
const peopleInput = document.getElementById('people-input');

/* Variables for error message outputs */
const nameError = document.getElementById('error-message-name');
const emailError = document.getElementById('error-message-email');
const dateError = document.getElementById('error-message-date');
const timeError = document.getElementById('error-message-time');
const peopleError = document.getElementById('error-message-people');



/* Regular expressions to test against specific form inputs */
 const nameRegEx = /^[a-zA-Z]{1,50}$/;
 const dayMonthRegEx = /^[0-9]{1,2}$/;
 const yearRegEx = /^[0-9]{4}$/;
 const hourRegEx = /^[0-9]{1,2}$/;
 const minutesRegEx = /^[0-9]{2}$/;
 const peopleRegEx = /^[0-9]{1,2}$/;
 const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 


/* Event listener on form button to validate input (validateFields function) */
document.getElementById('form-button').addEventListener('click', validateFields);




/* Validate fields function that checks field values on button click*/
function validateFields(e) {
  // If name is empty or doesn't match expression, show error
  if(nameInput.value == "" || !nameInput.value.match(nameRegEx)){
    nameError.textContent ="Invalid -needs 10 letters";
  } else if(nameInput.value.match(nameRegEx)){
    nameError.textContent ="";
  }

  // If email is empty or doesn't match expression, show error
  if(emailInput.value == "" || !emailInput.value.match(emailRegEx)){
    emailError.textContent ="Invalid Email";
  } else if(emailInput.value.match(emailRegEx)){
    emailError.textContent ="";
  }

  // If day, month, or year are empty, or don't match expression, show error
  if(dayInput.value == "" || !dayInput.value.match(dayMonthRegEx) || 
  monthInput.value == "" || !monthInput.value.match(dayMonthRegEx)||
  yearInput.value == "" || !yearInput.value.match(yearRegEx)){
    dateError.textContent = "Invalid Field";
  }else if(dayInput.value.match(dayMonthRegEx) && monthInput.value.match(dayMonthRegEx) && yearInput.value.match(yearRegEx)){
    dateError.textContent = "";
  }

  // If hour or minutes are empty, or don't match expression, show error
  if(hourInput.value == "" || !hourInput.value.match(hourRegEx) || 
  minuteInput.value == "" || !minuteInput.value.match(minutesRegEx)){
    timeError.textContent = "Invalid Field";
  }else if(minuteInput.value.match(minutesRegEx) && hourInput.value.match(hourRegEx)){
    timeError.textContent = "";
  }

  // If people input is empty or doesn't match expression, show error
  if(peopleInput.value == "" || !peopleInput.value.match(peopleRegEx)){
    peopleError.textContent = "Invalid Field";
  }else if(peopleInput.value.match(peopleRegEx)){
    peopleError.textContent = "";
  }

  e.preventDefault();
}








