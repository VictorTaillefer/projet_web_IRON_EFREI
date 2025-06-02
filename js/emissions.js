// Wait for the entire DOM to be loaded before executing any logic
document.addEventListener('DOMContentLoaded', () => {

    // Grab DOM elements related to the range slider and carbon output
    const range = document.getElementById('distanceRange');
    const valueDisplay = document.getElementById('rangeValue');
    const output = document.getElementById('carbonOutput');

    // Grab elements for the pledge button interaction
    const pledgeBtn = document.getElementById('pledgeBtn');
    const messageBox = document.getElementById('fake-message');

    // Function to calculate and display carbon estimate based on distance
    function updateCarbonEstimate(km) {
        const estimate = (km * 0.21).toFixed(1); // average car emissions = 0.21 kg/km
        valueDisplay.textContent = km;           // show selected distance (km)
        output.textContent = `~${estimate} kg CO₂`; // update result display
    }

    // If slider and outputs exist, bind the input event
    if (range && valueDisplay && output) {
        // Initialize with current range value on page load
        updateCarbonEstimate(parseInt(range.value));

        // Update estimate every time the slider value changes
        range.addEventListener('input', () => {
            updateCarbonEstimate(parseInt(range.value));
        });
    }

    // Handle pledge button click with a fun fake message
    if (pledgeBtn && messageBox) {
        pledgeBtn.addEventListener('click', (e) => {
            e.preventDefault(); // prevent form submission (if inside a form)
            messageBox.style.display = 'block'; // reveal message box
            messageBox.textContent =
                "Sorry! We've got nowhere to send this to — but we had to make a climate link somehow...";
        });
    }
});
