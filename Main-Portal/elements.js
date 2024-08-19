const initialValue = 10000;

// Function to handle price editing
function priceEditor(event) {
    const h5Element = event.target; // Get the specific h5 element that triggered the blur

    // Ensure the h5 element is a valid one with contenteditable
    if (h5Element.tagName === 'H5' && h5Element.hasAttribute('contenteditable')) {
        let value = h5Element.textContent.slice(1); // Remove the '$'
        let numericValue = parseFloat(value); // Convert to a number
        let bar = (numericValue / initialValue) * 100; // Calculate percentage
        if(bar>100)
        {
            bar=100 ;
        }

        // Find the closest .layered div containing the h5 element
        let layeredDiv = h5Element.closest('.layered');

        if (layeredDiv) {
            // Find all buttons within this .layered div
            let buttons = layeredDiv.querySelectorAll('button');

            if (buttons.length > 1) {
                let secondButton = buttons[1]; // Access the second button
                secondButton.style.width = `${bar}%`; // Set width of the second button
            } else {
                console.log('Second button not found');
            }
        } else {
            console.error('No .layered div found for the h5 element');
        }
    }
}

// Function to handle keypress events
function handleKeypress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of the Enter key (like form submission)
        event.target.blur(); // Trigger blur event
    }
}

// Attach blur event listener to all contenteditable h5 elements
document.querySelectorAll('h5[contenteditable="true"]').forEach(h5 => {
    h5.addEventListener('blur', priceEditor);
    h5.addEventListener('keydown', handleKeypress); // Attach keydown event listener
});
