export function preventLogoSelectionAndDragging() {
    const logoContainer = document.getElementById('logo-container');
    const logo = document.getElementById('logo');

    logoContainer.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });

    logo.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });

    logo.addEventListener('dragstart', function(event) {
        event.preventDefault();
    });

    logo.setAttribute('draggable', false);
}

