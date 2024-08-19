var h1 = document.querySelector('h1'); // Select the h1 element
var greeting = h1.innerText; // Get the current greeting text

var time = new Date().getHours(); // Get the current hour

// Determine the appropriate greeting
if (time >= 0 && time < 12) {
    greeting = "Good Morning";
} else if (time >= 12 && time < 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

h1.innerText = greeting + ", Hiranmaay!"; // Update the h1 element with the new greeting


