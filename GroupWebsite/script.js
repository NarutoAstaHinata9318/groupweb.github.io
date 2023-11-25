document.addEventListener('DOMContentLoaded', function () {
    const profileContainers = document.querySelectorAll('.carille, .rjay, .josh, .lhey, .gyd');

    profileContainers.forEach(container => {
        container.addEventListener('click', function (event) {
            // Create and show the butterfly popup
            const butterflyPopup = document.createElement('div');
            butterflyPopup.classList.add('butterfly-popup');
            butterflyPopup.innerHTML = '<img src="https://media.tenor.com/XxTjC4qBdJAAAAAi/borboletas-butterflies.gif" alt="butterfly">';
            document.body.appendChild(butterflyPopup);

            // Set the position of the butterfly popup based on the click event
            const rect = container.getBoundingClientRect();
            butterflyPopup.style.top = `${rect.top}px`;
            butterflyPopup.style.left = `${rect.left}px`;

            // Remove the butterfly popup after a short delay (adjust as needed)
            setTimeout(() => {
                butterflyPopup.remove();
            }, 2000); // 2000 milliseconds (2 seconds)
        });
    });
});
