// ==UserScript==
// @name         Age Converter
// @description  Converts age in days to years, months, and days format with enhanced styling on Torn.com.
// @version      2.0
// @namespace    https://github.com/skillerious
// @license      MIT
// @match        https://www.torn.com/*
// @grant        none
// ==/UserScript==

// JavaScript to dynamically add CSS to the document
const style = document.createElement('style');
style.textContent = `
  .cont.bottom-round.cont-gray {
      min-height: 420px; /* Further increase height to accommodate more content */
      padding-bottom: 20px; /* Add more padding at the bottom */
  }
  .cool-converted-age {
      font-size: 11px; /* Set the font size */
      color: #0092CD; /* Blue color */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adds a shadow effect */
      text-align: center;
      margin-top: 10px;
      font-family: 'Arial', sans-serif'; /* Use a modern font */
      letter-spacing: 1px; /* Space out the letters a bit */
  }
`;
document.head.appendChild(style);

// Function to convert age in days to years, months, and days
function convertAge(ageInDays) {
    if (isNaN(ageInDays)) {
        console.error('Invalid age received:', ageInDays);
        return 'Error in age conversion';
    }
    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = ageInDays % 30;
    return `${years} Years, ${months} Months, ${days} Days`;
}

// Function to display the converted age
function displayConvertedAge(ageText) {
    const ageConverted = document.createElement('div');
    ageConverted.className = 'cool-converted-age'; // Apply the new CSS class for cool styling
    ageConverted.textContent = ageText;

    const ageContainer = document.querySelector('.box-info.age');
    if (ageContainer) {
        const existingConvertedAge = ageContainer.querySelector('.cool-converted-age');
        if (existingConvertedAge) {
            existingConvertedAge.remove(); // Remove any previously added element to avoid duplicates
        }
        ageContainer.appendChild(ageConverted);
        console.log('Age converted element added to the container'); // Confirm the addition
    } else {
        console.error('Age container not found'); // Log error if container is not found
    }
}

// Function to fetch and display age using Torn API
function fetchAndDisplayAge(apiKey) {
    // Try using the profile selection to get the age field
    const apiUrl = `https://api.torn.com/user/?selections=profile&key=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Full API Response:', data); // Log the full API response for debugging

            // Check if the 'age' field exists in the response
            if (data.age && typeof data.age === 'number') {
                const ageInDays = data.age;
                console.log('Age in Days from API:', ageInDays);
                const convertedAge = convertAge(ageInDays);
                displayConvertedAge(convertedAge);
            } else {
                console.error('Invalid age data received from the API:', data.age);
                displayConvertedAge('Error: Invalid age data.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data from Torn API. Check your API key.');
        });
}

// Function to prompt the user for the API key only if not already stored
function getAPIKey() {
    let apiKey = localStorage.getItem('tornApiKey');
    if (!apiKey) {
        apiKey = prompt('Please enter your Torn Public API key:');
        if (apiKey) {
            localStorage.setItem('tornApiKey', apiKey); // Store the API key in localStorage for future use
        }
    }
    return apiKey;
}

// Start the script once the page is loaded
window.addEventListener('load', function () {
    const apiKey = getAPIKey();
    if (apiKey) {
        fetchAndDisplayAge(apiKey);
    } else {
        alert('No API key provided. The age conversion feature cannot function without it.');
    }
});
