document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('distanceRange');
    const valueDisplay = document.getElementById('rangeValue');
    const output = document.getElementById('carbonOutput');

    if (range && valueDisplay && output) {
        range.addEventListener('input', () => {
            const km = parseInt(range.value);
            const estimate = (km * 0.21).toFixed(1); // average car emissions
            valueDisplay.textContent = km;
            output.textContent = `~${estimate} kg CO₂`;
        });
    }
    const pledgeBtn = document.getElementById('pledgeBtn');
    const messageBox = document.getElementById('fake-message');

    if (pledgeBtn && messageBox) {
        pledgeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            messageBox.textContent = "Sorry! We've got nowhere to send this to — but we had to make a climate link somehow...";
            messageBox.style.display = 'block';
        });
    }
});

