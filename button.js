document.addEventListener('DOMContentLoaded', function() {
    // Initialize the counter to keep track of button presses
    let buttonPressCount = 0;

    // Get references to the button and the delay message container
    const debutButton = document.getElementById('debutButton');
    const delayMessage = document.getElementById('delayMessage');

    // Check if the elements exist
    if (debutButton && delayMessage) {
        console.log('Button and delay message are loaded correctly.');
        
        // Add an event listener to the button
        debutButton.addEventListener('click', function() {
            // Increment the button press count
            buttonPressCount++;

            // Calculate the delay (15 days per button press)
            const delayDays = buttonPressCount * 15;

            // Create the formatted message
            const formattedMessage = `
                <span>DEBUT STREAM DELAYED FOR:</span><br>
                <span style="font-size: ${5 * 24}px; font-weight: bold;">${delayDays}<br></span> <span>DAYS</span>
            `;

            // Display the delay message on the right side of the page
            delayMessage.innerHTML = formattedMessage;
        });
    } else {
        console.error('Button or delay message element not found!');
    }
});
