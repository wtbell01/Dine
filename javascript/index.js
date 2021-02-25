/* Declare variables for booking links and booking outputs */
const bookingFamilyLink = document.getElementById('booking-family-link');
const bookingSocialLink = document.getElementById('booking-social-link');
const bookingSpecialLink = document.getElementById('booking-special-link');
const bookingImage = document.getElementById('booking-image');
const bookingHeader = document.getElementById('booking-header');
const bookingDescription = document.getElementById('booking-description-text');

/* Event listener for the family link that outputs family info when function is ran  */
document.querySelector('.booking-family-link').addEventListener('click', displayFamily);

/* Event listener for the social link that outputs social info when function is ran */
document.querySelector('.booking-social-link').addEventListener('click', displaySocial);

/* Event listener for the special link that outputs special info when function is ran */
document.querySelector('.booking-special-link').addEventListener('click', displaySpecial);




/* Function that retrievs the social json file and loops through the object and displays it to the booking output */
function displayFamily(e){
  // Fetch the file where the info is located
  fetch('json/family.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      headerOutput = section.header;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    bookingImage.src = imageOutput;
    bookingHeader.textContent = headerOutput;
    bookingDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}



/* Function that retrievs the social json file and loops through the object and displays values to the booking output */
function displaySocial(e){
  // Fetch the file where the info is located
  fetch('json/social.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      headerOutput = section.header;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    bookingImage.src = imageOutput;
    bookingHeader.textContent = headerOutput;
    bookingDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}



/* Function that retrievs the special json file and loops through the object and displays it to the booking output */
function displaySpecial(e){
  // Fetch the file where the info is located
  fetch('json/special.json')
  .then(function(res){
    // then return the file
    return res.json();
  }).then(function(data){
    // loop through each array of the object and assign each value to the variable
    data.forEach(function(section){
      imageOutput = section.image; 
      headerOutput = section.header;
      descriptionOutput = section.description;    
    })
    // Assign the variables to the elements in the html to display the values retrieved
    bookingImage.src = imageOutput;
    bookingHeader.textContent = headerOutput;
    bookingDescription.textContent = descriptionOutput;
  })
  e.preventDefault();
}





