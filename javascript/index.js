/* Declare variables for booking links and booking outputs */
const bookingFamilyLink = document.querySelector('.booking-family-link');
const bookingSocialLink = document.querySelector('.booking-social-link');
const bookingSpecialLink = document.querySelector('.booking-special-link');
const bookingImage = document.getElementById('booking-image');
const bookingHeader = document.getElementById('booking-header');
const bookingDescription = document.getElementById('booking-description-text');

/* Event listeners for the family link  */
bookingFamilyLink.addEventListener('click', displayFamily);
bookingFamilyLink.addEventListener('click', displayFamilyLink);


/* Event listeners for the social link  */
bookingSocialLink.addEventListener('click', displaySocial);
bookingSocialLink.addEventListener('click', displaySocialLink);

/* Event listeners for the special link  */
bookingSpecialLink.addEventListener('click', displaySpecial);
bookingSpecialLink.addEventListener('click', displaySpecialLink);


/* Add active class (dark link color) to family link and remove active class from the rest */
function displayFamilyLink(e){
  bookingFamilyLink.classList.add('booking-active-link');
  bookingSocialLink.classList.remove('booking-active-link');
  bookingSpecialLink.classList.remove('booking-active-link');
  e.preventDefault();
}


/* Add active class (dark link color) to social link and remove active class from the rest */
function displaySocialLink(e){
  bookingSocialLink.classList.add('booking-active-link');
  bookingSpecialLink.classList.remove('booking-active-link');
  bookingFamilyLink.classList.remove('booking-active-link');
  e.preventDefault();
}


/* Add active class (dark link color) to social link and remove active class from the rest */
function displaySpecialLink(e){
  bookingSpecialLink.classList.add('booking-active-link');
  bookingSocialLink.classList.remove('booking-active-link');
  bookingFamilyLink.classList.remove('booking-active-link');
  
  e.preventDefault();
}

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





