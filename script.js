/*// Select elements (same for both pages)
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no'); // Assuming "No" button exists on both pages
const apologyMessage = document.querySelector('.apology-message'); // Replace with your message element selector

// Additional element for no.html (optional)
const backButton = document.getElementById('back'); // If using a back button in no.html

// Define an array of apology messages
const apologyMessages = [
  "Okay, I understand. ",
  "Is there anything I can do to make it up to you?",
  "Fine, but I'm giving you puppy dog eyes! "
];

// Counter variable to track clicks
let forgiveCount = 0;

// Function to randomly position the "No" button
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Event listeners for button clicks
yesButton.addEventListener('click', () => {
  // Handle "Yes" click (you can link to another page or display a success message here)
});

noButton.addEventListener('click', () => {
  // Check if this click originated from the main page's "No" button
  if (noButton === document.getElementById('no')) { // Assuming unique ID for "No" button on main page
    forgiveCount++;
    if (forgiveCount === apologyMessages.length) {
      // Handle situation after all "No" messages are displayed (e.g., disable button, display final message)
      noButton.style.display = 'none'; // Hide the button after all messages (on main page)
    } else {
      apologyMessage.textContent = apologyMessages[forgiveCount - 1];  // Update message based on forgiveCount
      // Optionally, replace the GIF/video with a different one for each "No" click (code not included here)
      moveRandomEl(noButton); // Move the "No" button on click (main page)
    }
  }
});

// **Optional:** Back button functionality for no.html
if (backButton) {
  backButton.addEventListener('click', () => {
    let clickCount = 0; // Local click count for no.html (assuming separate tracking)
    clickCount++;
    if (clickCount <= 5) {
      const newMessage = `But what if I ${clickCount === 5 ? 'buy you ice cream?' : 'try harder?'}`;
      apologyMessage.textContent = newMessage;
      moveRandomEl(noButton); // Move the "No" button on back button click (no.html)
    } else {
      apologyMessage.textContent = "Fine, but I'm giving you the silent treatment!";
      backButton.style.display = 'none'; // Hide button after 5 clicks
    }
  });
}*/
function moveRandomEl(elm) 
{
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) 
{
  moveRandomEl(e.target);
});

